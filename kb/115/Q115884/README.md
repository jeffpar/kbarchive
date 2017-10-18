---
layout: page
title: "Q115884: Err Msg in WFWG 3.11 w/LANtastic 5.x: RFC:SFT Not in SFT List"
permalink: kb/115/Q115884/
---

## Q115884: Err Msg in WFWG 3.11 w/LANtastic 5.x: RFC:SFT Not in SFT List

	Article: Q115884
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following message in Windows for Workgroups 3.11 when Artisoft
	LANtastic version 5.x is installed:
	
	  RFC:SFT not in SFT list
	
	This error may result in the entire LANtastic network losing functionality.
	
	CAUSE
	=====
	
	This message is caused by a problem in LANtastic versions 5.x that occurs when
	loading VSHARE.386 in the [386Enh] section of the SYSTEM.INI file.
	
	WORKAROUND
	==========
	
	To work around this problem, remove VSHARE.386 from the SYSTEM.INI file and load
	SHARE.EXE in the AUTOEXEC.BAT as follows:
	
	1. Comment out VSHARE.386 in the [386Enh] section of the SYSTEM.INI file by
	  inserting a semicolon at the beginning of that line. For example:
	
	        ;DEVICE=VSHARE.386)
	
	2. Load SHARE.EXE from the AUTOEXEC.BAT file, which is usually located in the
	  DOS directory. For example:
	
	        C:\DOS\SHARE.EXE /L:500 /F:5100
	
	NOTE: Unloading VSHARE.386 can cause various problems with applications that use
	OLE 2.0 (for example, applications included with Microsoft Office version 4.0).
	
	STATUS
	======
	
	
	Additional query words: 3.11 artisof share vshare 5
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
