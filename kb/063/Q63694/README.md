---
layout: page
title: "Q63694: Moving Windows 3.0 to Another Location"
permalink: /kb/063/Q63694/
---

## Q63694: Moving Windows 3.0 to Another Location

{% raw %}

	Article: Q63694
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may install Microsoft Windows version 3.0, then later want to copy or move
	it to a new location (on another directory, drive, or system). Although this is
	not a problem with Windows versions 2.x, such an action causes difficulties with
	Windows version 3.0. We recommend making a complete new installation if it is
	necessary to change the Windows 3.0 location.
	
	If you must move the existing installation, you must make the following
	modifications:
	
	1. Modify any entries in your .INI files that contain absolute paths (such as
	  PROGMAN.INI and any others such as the [HPPCL,LPT2] section of the WIN.INI).
	
	2. Your PIF files may contain the absolute paths to various applications that
	  might differ on another system. These must be either recreated by Setup or
	  modified by hand with the PIF Editor.
	
	3. Your Program Manager group (GRP) files contain absolute paths, both to the
	  Windows accessories and to any other applications detected by the Setup
	  program. The standard groups normally created by Setup must be modified by
	  hand with an ASCII text editor, such as Notepad. Setup can be used to help
	  re-create the Windows Applications and Non-Windows Applications groups.
	
	4. If you have changed machine types, you should run the character mode Setup on
	  the target system before starting Windows and adjust any settings as
	  necessary.
	
	MORE INFORMATION
	================
	
	If you move your Windows installation from one machine to another by copying the
	files with the MS-DOS program XCOPY.EXE or third-party programs such as Laplink
	Release III or Brooklyn Bridge, then the following error messages will appear if
	the SYSTEM subdirectory located in the WINDOWS directory is not copied at the
	same time:
	+--------------------------------------------------------------------------------------------------------------------------------+
	| Command | Message                                                                                                              | 
	+--------------------------------------------------------------------------------------------------------------------------------+
	| win     | Cannot find KERNEL.EXE needed to run in real mode; check to ensure the path is correct or reinstall Windows.         | 
	+--------------------------------------------------------------------------------------------------------------------------------+
	| win /s  | Cannot find DOSX.EXE needed to run in standard mode; check to ensure the path is correct or reinstall Windows.       | 
	+--------------------------------------------------------------------------------------------------------------------------------+
	| win /3  | Cannot find WIN386.EXE needed to run in 386 enhanced mode; check to ensure the path is correct or reinstall Windows. | 
	+--------------------------------------------------------------------------------------------------------------------------------+
	The SYSTEM directory could be copied over to the new machine, but this is an
	improper installation and may not run correctly.
	
	The only correct way to install Windows 3.0 on a computer is to run the SETUP.EXE
	Setup program.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
