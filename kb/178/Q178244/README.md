---
layout: page
title: "Q178244: XADM: Store Stops When POP3 Client Retrieves NDR for UTF-7 Msg"
permalink: /kb/178/Q178244/
---

## Q178244: XADM: Store Stops When POP3 Client Retrieves NDR for UTF-7 Msg

{% raw %}

	Article: Q178244
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Information Store stops responding. The event log shows event ID 3039:
	
	  The error %1 was encountered while trying to communicate with the
	  message store. An attempt to refresh the connection will be made.
	  If not successful, the service will be shut down.
	
	CAUSE
	=====
	
	A user with a POP3 client checked his or her mail and tried to retrieve a stuck
	non-delivery report (NDR) for a UTF-7 message from his or her mailbox.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- In the event log, find the user logged on just before the crash. Log this
	  user account on with a MAPI client and delete or move the NDR from the inbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: hang fail crash
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
