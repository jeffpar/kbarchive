---
layout: page
title: "Q106233: Standard Mode Video Grabber May be Deleted from WFWG 3.11"
permalink: kb/106/Q106233/
---

## Q106233: Standard Mode Video Grabber May be Deleted from WFWG 3.11

	Article: Q106233
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	Microsoft Windows for Workgroups version 3.11 does not support
	standard mode. However, the standard mode video grabber files from
	previous versions of Microsoft Windows or Windows for Workgroups may
	remain on the computer after version 3.11 is installed, as these files
	are not updated or deleted by Windows for Workgroups Setup.
	
	To increase available disk space, you can delete the standard mode
	grabber files from your hard disk. Standard mode grabber files
	typically have an extension of .GR2 or .2GR and are located in the
	Windows SYSTEM subdirectory.
	
	NOTE: The active enhanced mode video grabber file is identified in the
	"386Grabber=" line of the SYSTEM.INI file [Boot] section. This file
	must remain in the Windows SYSTEM subdirectory for Windows or Windows
	for Workgroups to function properly.
	
	Additional query words: 286Grabber 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
