---
layout: page
title: "Q240760: Error Message: Web Publishing Wizard Advanced INF Install INF..."
permalink: /kb/240/Q240760/
---

## Q240760: Error Message: Web Publishing Wizard Advanced INF Install INF...

	Article: Q240760
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set root drive mapping and run compatibility scripts for Microsoft
	Office 97 and Microsoft Internet Explorer 4.0 on your Terminal Server-based
	computer, if you upgrade to Microsoft Office 2000 and create new users, you may
	receive the following error message when you log on a user and the user's
	profile is built:
	
	  Personalized Settings
	  Setting up personalized settings for:
	
	  WEB PUBLISHING WIZARD ADVANCED INF INSTALL INF FAILURE. REASON ACCESS IS
	  DENIED.
	
	If you click OK, you can continue but the Web Publishing Wizard is not set up.
	
	CAUSE
	=====
	
	This behavior occurs if the Setup.ini file does not exist. The Internet Explorer
	4.0 compatibility script creates a Setup.ini file in the %SystemRoot% folder
	that holds information related to Internet Explorer 4.0. When you upgrade to
	Office 2000, the Setup.ini file is deleted. The Web Publishing Wizard needs the
	Setup.ini file to write .inf files for proper operation.
	
	RESOLUTION
	==========
	
	To work around this issue, manually create a Setup.ini file:
	
	1. Start Notepad.
	
	2. Create a blank file and name it Setup.ini.
	
	3. Save the file to the %SystemRoot% folder.
	
	Additional query words: tse terminalsrv
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
