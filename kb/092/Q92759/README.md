---
layout: page
title: "Q92759: Video Err Msg: Undefined Dynalink"
permalink: /kb/092/Q92759/
---

## Q92759: Video Err Msg: Undefined Dynalink

	Article: Q92759
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to open an AVI file in VidEdit from Microsoft Video for Windows
	1.0, you may receive the following error message:
	
	  Undefined Dynalink
	
	This message occurs when an older copy of a dynamic link library file
	(<filename>.DLL) is accessed in place of the DLL that shipped with
	Microsoft Video for Windows 1.0.
	
	MORE INFORMATION
	================
	
	Some third-party multimedia applications may install all or part of their
	dynamic link library files directly to the Windows Directory. If this occurs,
	Microsoft Video for Windows 1.0 will not properly overwrite/replace these files
	during installation. This may result in Microsoft Video for Windows accessing
	these older DLL's during the operation of the application resulting in the
	"Undefined Dynalink" error. One of the more common files exhibiting this
	characteristic is WINCOM.DLL. To check for duplicate DLL files, run a search of
	the WINDOWS directory and all subdirectories from File Manager. The DLL files
	that ship with Microsoft Video for Windows 1.0 are:
	
	  MCIOLE.DLL
	  DISPDIB.DLL
	  MSVIDEO.DLL
	  MEDIAMAN.DLL
	  WINCOM.DLL
	  WRKBENCH.DLL
	  PCVIDEO.DLL (When installing Video Blaster driver)
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
