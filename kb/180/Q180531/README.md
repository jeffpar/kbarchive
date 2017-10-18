---
layout: page
title: "Q180531: Error Message Removing Microsoft Exchange or Proxy Server"
permalink: kb/180/Q180531/
---

## Q180531: Error Message Removing Microsoft Exchange or Proxy Server

	Article: Q180531
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 01-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remove Proxy Server or Microsoft Exchange using the Add/Remove
	Programs tool in Control Panel, you may receive one of the following error
	messages:
	
	   - An error occurred while trying to remove Microsoft Exchange. Uninstallation
	  has been canceled.
	
	- An error occurred while trying to remove Proxy Server. Uninstallation has
	  been canceled.
	
	CAUSE
	=====
	
	This behavior can occur if Small Business Server CD-ROM 1 is not inserted in the
	CD-ROM drive. The Add/Remove Programs tool calls the Setup program on the
	CD-ROM. If the CD-ROM is not inserted, you receive the error message.
	
	RESOLUTION
	==========
	
	Insert Small Business Server CD-ROM 1 and try to remove the program again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in BackOffice Small Business Server
	versions 4.0 and 4.0a.
	
	Additional query words: un-install
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
