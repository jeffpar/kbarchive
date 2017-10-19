---
layout: page
title: "Q105542: Mac Srv: Users Missing After Upgrading to System 7"
permalink: /kb/105/Q105542/
---

## Q105542: Mac Srv: Users Missing After Upgrading to System 7

	Article: Q105542
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 3.0 and 3.1 of the Microsoft Mail for AppleTalk Networks server starts;
	however, it only contains one account: Network Manager. Also, the server name
	displays the server serial number rather than any previously assigned friendly
	name.
	
	CAUSE
	=====
	
	During an upgrade of the Macintosh Operating System from System 6 to System 7,
	the installation script does not move the Microsoft Mail Data file.
	
	With System 6, both the Microsoft Mail Server and the Microsoft Mail Data files
	must be stored in the System Folder. With System 7 and later, a new subfolder
	named Extensions stores all extension classified files. Because the Microsoft
	Mail Server file is classified as an extension, the upgrade procedure correctly
	moves the Microsoft Mail Server file to the Extensions Folder. The Microsoft
	Mail Data file, however, is NOT classified as an extension. It is simply a file
	that retains data for the Microsoft Mail System. The System installer regards
	this as an unknown file type; therefore, the installer does not move the
	Microsoft Mail Data file to the Extensions Folder.
	
	When the Macintosh is restarted, the Microsoft Mail Server file does not find the
	Microsoft Mail Data file. Because one is not available, a new one is created.
	The new Microsoft Mail Data file will contain a single user, Network Manager,
	and it will display the serial number in the Chooser.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following steps:
	
	1. Move the Microsoft Mail Data file stored in the Extensions folder to another
	  folder. This file is usually fairly small (about 600K).
	
	2. Move the original Microsoft Mail Data file from the root level of the System
	  Folder into the Extensions Folder.
	
	3. Restart the Macintosh and verify the server name is correct and the user
	  accounts are present. When you are satisfied that the mail system has been
	  restored to its original state, delete the first (smaller) Microsoft Mail
	  Data file (the one you moved out of the Extensions folder).
	
	Additional query words: 3.00 3.10 corrupt error boot lost users
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
