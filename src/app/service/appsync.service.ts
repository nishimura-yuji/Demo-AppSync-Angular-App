import { reqUpdate } from './graphql/mutations/updateAppsyncVote';
import { reqQuery } from './graphql/queries/getAppsyncVote';
import { reqSubscription } from './graphql/subscriptions/onUpdateAppsyncVote';
import { Injectable } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppsyncService {
  constructor() {
    Amplify.configure(environment.amplify.AppSync);
  }
  public updateAppsyncVote(): Observable<object> {
    const update = reqUpdate;
    return from(API.graphql(graphqlOperation(update))).pipe(
      map(result => result['data']['updateAppsyncVote']['vote'])
    );
  }

  public getAppsyncVote(): Observable<object> {
    const query = reqQuery;
    return from(API.graphql(graphqlOperation(query))).pipe(
      map(result => result['data']['getAppsyncVote']['vote'])
    );
  }

  public onUpdateAppsyncVote(): any {
    const subscription = reqSubscription;
    return API.graphql(graphqlOperation(subscription));
  }
}
