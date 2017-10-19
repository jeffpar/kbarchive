---
layout: page
title: "Q175122: XWEB: Error Msg: Failed to Get Inbox in Outlook Web Access"
permalink: /kb/175/Q175122/
---

## Q175122: XWEB: Error Msg: Failed to Get Inbox in Outlook Web Access

	Article: Q175122
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to Outlook Web Access (OWA), a Failed to Get Inbox error message
	may appear, even though the mailbox information you entered was correct.
	
	CAUSE
	=====
	
	The error may occur if you bypass the authenticated domain logon by pressing the
	Escape key. Additionally, the error may occur if you have logged on to Outlook
	Web Access, logged off, and then logged on as a different user. This is because
	the browser caches the original logon credentials.
	
	WORKAROUND
	==========
	
	Restart the client browser or clear the browser cache.
	
	Additional query words: exfaqclnt
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WinNT:5.5
	Solution Type     : kbpending
	
	=============================================================================
	
