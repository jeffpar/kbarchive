---
layout: page
title: "Q274996: Cannot Delete Exchsrvr Folder w. a &quot;SHARING VIOLATION&quot; Err Msg"
permalink: /kb/274/Q274996/
---

## Q274996: Cannot Delete Exchsrvr Folder w. a &quot;SHARING VIOLATION&quot; Err Msg

	Article: Q274996
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 25-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to delete the Exchsrvr folder, you may be unable to do so, and
	you may receive a "SHARING VIOLATION" error message.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Click Start, point to Settings, and then click Control Panel. Double-click
	  Services.
	
	2. Stop and disable the Internet Information Services (IIS) service.
	
	3. Stop and disable the Content Index service.
	
	After you perform these steps, you can delete the Webdata folder and the Exchsrvr
	folder.
	
	MORE INFORMATION
	================
	
	After you use the Exchange Server CD-ROM to remove the Exchange Server services,
	and after you remove all of the registry keys that are associated with Exchange
	Server in accordance with the following Microsoft Knowledge Base article
	
	  Q259158 XADM: How to Manually Remove Exchange Server 5.5 Completely
	
	if you attempt to delete the Exchsrvr folder, you cannot delete the folder and
	you receive the following error message:
	
	  SHARING VIOLATION
	
	No new event ID messages are logged in the System event log or Application event
	log. You can delete all of the subfolders in the Exchsrvr folder except the
	Webdata folder. If you attempt to delete the Webdata folder, you receive a
	"SHARING VIOLATION" error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
