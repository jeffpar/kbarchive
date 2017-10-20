---
layout: page
title: "Q118323: WFWG Err Msg: WINFILE Caused a GP Fault at 0009:028A..."
permalink: /kb/118/Q118323/
---

## Q118323: WFWG Err Msg: WINFILE Caused a GP Fault at 0009:028A...

{% raw %}

	Article: Q118323
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you format a floppy disk in File Manager, you receive the following error
	message:
	
	  WINFILE caused a General Protection fault in module WINFILE at 0009:028A
	
	NOTE: This error message may occur immediately if the Quick Format option is
	chosen.
	
	CAUSE
	=====
	
	This general protection (GP) fault is caused by SYMEVNT.386, a device added to
	the [386Enh] section of the SYSTEM.INI file by Norton Utilities version 8.0:
	
	     device=symevnt.386   ;Added By NU8
	
	RESOLUTION
	==========
	
	Symantec has confirmed this to be a problem in SYMEVNT.386. To correct this
	problem, download file NU8DRV.EXE from the Symantec bulletin board service
	(BBS).
	
	Before you obtain the NU8DRV.EXE file, you can work around this problem by
	opening the SYSTEM.INI file a text editor (such as Windows Notepad) and adding a
	semicolon preceding the device=symevnt.386 line to disable it:
	
	       ;device=symevnt.386   ;Added By NU8
	
	Then restart Windows to make this change take effect.
	
	NOTE: Disabling the above line is a temporary fix only, and it may cause problems
	with using Norton Utilities.
	
	MORE INFORMATION
	================
	
	For more information, contact Symantec Technical Support by phone or through the
	Symantec forum on CompuServe (GO SYMANTEC).
	
	
	Additional query words: err msg 3rdparty remark out control panel winfile.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
