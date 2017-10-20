---
layout: page
title: "Q99268: FDirSync: Err Msg: Error &#91;158&#93; Requestor Not Registered"
permalink: /kb/099/Q99268/
---

## Q99268: FDirSync: Err Msg: Error &#91;158&#93; Requestor Not Registered

{% raw %}

	Article: Q99268
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Foreign DirSync, Directory Synchronization with Foreign Mail Systems,
	message comes into the DirSync directory server, these error messages may
	appear:
	
	In DIRSYNC.LOG:
	
	  "3/23/93 11:00:03 | Error [158] Requestor not registered :
	  PCM:"
	
	  -or-
	
	  "3/23/93 11:05:03 | Error [158] Requestor not registered :
	  PCM:NETWORK/POSTOFFICE"
	
	In ADMIN's Mailbox:
	
	  "Requestor not registered :
	  From: NETWORK/POSTOFFICE/USERID"
	
	CAUSE
	=====
	
	If the NETWORK/POSTOFFICE are a foreign DirSync postoffice, one of the following
	may cause the error:
	
	- The NETWORK/POSTOFFICE was not defined on the directory server using
	  ADMIN:CONFIG:DIR-SYNC:SERVER:REQUESTORS:CREATE. Without this, the directory
	  server does not accept requests from a requestor.
	
	- The REQNAME field in the DirSync message has a typo for the
	  NETWORK/POSTOFFICE name or the directory server has a typo defined for the
	  FFAPI gateway postoffice.
	
	- The REQNAME field does not contain a NETWORK/POSTOFFICE. For example:
	
	  REQNAME=PCM:
	
	The Directory Synchronization with Foreign Mail Systems Manual does not clearly
	explain the need for the network and postoffice name for Microsoft Mail Software
	Development Kit (FFAPI)-based gateways. Other gateways require only an entry
	containing one of the predefined types. These types are listed in the "Foreign
	DirSync" manual.
	
	Additional query words: 3.00 Dir-Sync DocErr ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
