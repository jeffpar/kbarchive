---
layout: page
title: "Q43244: Mac Wkst Srv: Auto Login Not Working on Server Macintosh"
permalink: /kb/043/Q43244/
---

## Q43244: Mac Wkst Srv: Auto Login Not Working on Server Macintosh

	Article: Q43244
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail, on the server Macintosh, if the workstation software has been
	renamed so it loads before the "Microsoft Mail Server" server software, the
	automatic sign-in feature will not work.
	
	CAUSE
	=====
	
	To allow automatic sign-in to work, the server software must load before the
	workstation attempts to automatically sign in. The Mail 3.0 and 3.1 workstation
	software is named "MS Mail."
	
	
	On the Macintosh, memory-resident software (such as Microsoft Mail) loads
	alphabetically. If you view the System Folder by name, you can tell if the
	workstation software has been loaded before the server software.
	
	RESOLUTION
	==========
	
	To work around this problem, rename the workstation software so it falls
	alphabetically after the server software, then restart your Macintosh.
	
	MORE INFORMATION
	================
	
	This situation can also arise when you use the Microsoft Mail server as an
	application. Because applications always load after INITs/Extensions, the Mail
	server will never be available for login when the workstation is loading.
	Automatic Login is not possible when you are running the Mail server as an
	application.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
