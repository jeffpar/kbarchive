---
layout: page
title: "Q198495: XWEB: &quot;Failed To Open This Message&quot; Error After Applying SP1"
permalink: kb/198/Q198495/
---

## Q198495: XWEB: &quot;Failed To Open This Message&quot; Error After Applying SP1

	Article: Q198495
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message in the Microsoft Outlook Web Access
	(OWA) client when you attempt to open a message:
	
	  Failed to open this message.
	  Your message does not exist in this folder. It may have been deleted.
	
	WORKAROUND
	==========
	
	If Microsoft Internet Information Server (IIS) is on a different system than the
	Exchange Server computer, Exchange Server 5.5 Service Pack 1 (SP1) will also
	need to be installed on the IIS server. The OWA component installed on the IIS
	server will then be upgraded to SP1.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5SP1
	Issue type        : kbprb
	
	=============================================================================
	
