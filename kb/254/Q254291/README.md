---
layout: page
title: "Q254291: XWEB: Exchange Discussion Wizard Runtime Error 800A01A8"
permalink: /kb/254/Q254291/
---

## Q254291: XWEB: Exchange Discussion Wizard Runtime Error 800A01A8

	Article: Q254291
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to open a Microsoft Exchange Server public folder by using a Web
	browser after you download and install the Exchange Discussion Wizard from the
	Web, you may receive the following error message:
	
	  Microsoft VBScript runtime error '800a01a8'
	  Microsoft VBScript runtime error '800a01a8'
	  Object required; 'application (...)'
	  \webname\scripts\folder.inc, line12
	
	RESOLUTION
	==========
	
	To resolve this problem, make the following changes to the Folder.inc file on
	the server running Outlook Web Access (OWA):
	
	1. In Notepad, open the Folder.inc file, located at
	  Inetpub\Wwwroot\Webname\Scripts\Folder.inc, and then comment out line 12 by
	  adding an apostrophe to the beginning of the line.
	
	2. Add the following text to the line that follows line 12:
	
	  Set objRenderApp = Server.CreateObject("AMHTML.Application")
	
	3. Comment out line 80, in which the following text is displayed
	
	  response.write "Adding Patternsbr"
	
	  by adding an apostrophe to the beginning of the line.
	
	MORE INFORMATION
	================
	
	This problem does not occur if you install the Exchange Discussion Wizard from
	the Exchange Server version 5.5 CD-ROM.
	
	For additional information about how to download and install the Exchange
	Discussion Wizard, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q183535 XWEB: Microsoft Exchange Discussion Wizard for FrontPage
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
