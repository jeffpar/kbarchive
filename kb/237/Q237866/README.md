---
layout: page
title: "Q237866: XADM: Event ID 5004 Generating Offline Address Book"
permalink: kb/237/Q237866/
---

## Q237866: XADM: Event ID 5004 Generating Offline Address Book

	Article: Q237866
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to generate an offline Address Book (OAB), the following error
	message may be displayed:
	
	  An error occurred while generating the offline Address Book. To view details,
	  see the application event log in the Windows NT Event Viewer on the offline
	  Address Book Server. Microsoft Exchange Administrator ID no. c1031662
	
	In addition, the following event appears in the event log:
	
	  Event ID: 5004
	  Description: Generation of the offline Address Book is complete.
	  Result: An error occurred.
	
	CAUSE
	=====
	
	The default permissions of Full Control for the Everyone group has changed on
	the Winnt folder and all subfolders.
	
	RESOLUTION
	==========
	
	Change the permissions of the Everyone group to Full Control on the Winnt folder
	and all subfolders. Regenerate the offline Address Book.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
