---
layout: page
title: "Q196924: XADM: Error Message: Extension SMTP Could Not Be Loaded"
permalink: /kb/196/Q196924/
---

## Q196924: XADM: Error Message: Extension SMTP Could Not Be Loaded

	Article: Q196924
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 24-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open the properties of the Internet Mail Service, the following
	error message may be displayed:
	
	  Extension SMTP Could Not Be Loaded.
	
	CAUSE
	=====
	
	The Imcadmin.dll file is causing a version conflict. To correct the problem, you
	need to find the build number of the file (file properties, or the Filever
	utility), and use that number to make a raw mode entry change.
	
	WORKAROUND
	==========
	
	Perform the following steps at the computer that is running the Exchange Server
	Administrator program to find the build number of the file:
	
	1. Map a drive to the Exchsrvr folder of the computer on which the Internet Mail
	  Service is installed.
	
	2. In Windows NT Explorer, locate the Imcadmin.dll file in the following folder:
	
	  Exchsrvr\Addins\Smtp\I386
	
	3. Click the Imcadmin.dll file, and on the File menu, click Properties.
	
	4. Click the Version tab, and write down the file version that is displayed
	  here.
	
	Perform the following steps at the computer that is running the Exchange Server
	Administrator program to use the version number to make a raw mode entry
	change:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator in raw mode by typing the following
	  at a command prompt:
	
	  c:\exchsrvr\bin\admin.exe /r
	
	2. In the Exchange Server Administrator program connected to the Internet Mail
	  Service computer, click to expand the Configuration container, and then click
	  Add-ins.
	
	3. In the right pane of the window, click "Extension for Internet Mail Service
	  I386".
	
	4. On the File menu, click Raw Properties.
	
	5. In the Attribute list, click File Version, and then click Editor.
	
	6. Click File Version, and then click OK.
	
	7. Change the build number to the build number that you found in Windows NT
	  Explorer, and then click OK.
	
	8. In the window "Extension for Internet Mail Service I386", click Set.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
