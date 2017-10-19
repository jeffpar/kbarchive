---
layout: page
title: "Q89721: Setup Rebuilds Default Group &amp; Program Information Files"
permalink: /kb/089/Q89721/
---

## Q89721: Setup Rebuilds Default Group &amp; Program Information Files

	Article: Q89721
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When performing an upgrade installation of Windows 3.1, Setup rebuilds the Main,
	Accessories, and Games program groups with defaults. In addition, PIF files for
	MS-DOS-based applications that are found when you run Express Setup or Custom
	Setup, and then select Setup Applications, are overwritten with defaults.
	
	NOTE: The Startup group will not be modified.
	
	MORE INFORMATION
	================
	
	The Main, Games, and Accessories groups are returned to their default
	configuration when you upgrade to Windows 3.1. If you have customized these
	groups by deleting icons from them, those icons will be restored during setup.
	If you have added additional icons to the groups, these icons will not be
	deleted. Additional groups that you or other applications have set up will not
	be affected.
	
	In addition, any program information files (PIFs) that you created should be
	backed up to ensure that they are not overwritten by a default PIF for the
	application.
	
	WORKAROUND
	==========
	
	Back up all the .GRP and PIF files before upgrading. These files are set up by
	default in the WINDOWS directory. After the upgrade is complete, restore them to
	the WINDOWS directory.
	
	If you are upgrading to Windows for Workgroups and want to preserve these default
	groups, be aware that the above workaround removes the following icons from
	their respective groups:
	
	- Main Group
	
	  Clipbook Viewer
	  Mail
	  Schedule+
	
	- Accessories Group
	
	  Chat
	  WinMeter
	  NetWatcher
	
	- Games Group
	
	  Hearts
	
	Additional query words: 3.10 3.11 Peer
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
