---
layout: page
title: "Q101137: PC DirSync: Possible Failure of Directory Synchronization"
permalink: kb/101/Q101137/
---

## Q101137: PC DirSync: Possible Failure of Directory Synchronization

	Article: Q101137
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory Synchronization (Dir-Sync) can appear to fail under the conditions
	described below.
	
	Using a modem connection, a hub External with the Dir-Sync server is set to call
	out to the Requestor postoffice's External, which is configured NOT to call the
	hub External. (Calling is often restricted in order to control long-distance
	costs.)
	
	If the T1 time is reached and no mail is queued for the Requestor postoffice from
	the Server postoffice, the Server External does not call the Requestor
	postoffice to retrieve the Dir-Sync mail now waiting to be delivered to the
	Server.
	
	If the T2 time is reached and the hub External has received no mail for the
	Requestor postoffice, then the Dir-Sync process has no updates from the
	Requestor. Mail is not queued for the Requestor until after T2, at which time
	External calls the Requestor, sends the update, and retrieves the pending
	Dir-Sync mail.
	
	This sequence of events is likely to occur because Dir-Sync is normally scheduled
	to run late at night when activity on the postoffice is low and there may be no
	mail queued for the Requestor.
	
	The result is that Requestor updates are 24 hours late and Dir-Sync appears to
	have failed on the Requestor postoffice.
	
	RESOLUTION
	==========
	
	Configure the Requestor External to call the Server External, so that the
	Dir-Sync mail is transmitted before the T2 time occurs.
	
	Additional query words: 3.00 3.20 DirSync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
