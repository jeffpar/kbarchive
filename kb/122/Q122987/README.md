---
layout: page
title: "Q122987: VSHARE.386 Does Not Work with Novell DOS 6.0 or 7.0"
permalink: kb/122/Q122987/
---

## Q122987: VSHARE.386 Does Not Work with Novell DOS 6.0 or 7.0

	Article: Q122987
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	This article contains information about using Windows and Windows for
	Workgroups with third-party products or configurations that have not been
	tested and are not supported by Microsoft.
	
	SYMPTOMS
	========
	
	When you try to run an application, you receive an error message similar to one
	of the following
	
	- 
	
	  <Product Name> requires VSHARE.386 to be installed.
	
	  -or-
	
	- 
	
	  <Product Name> requires SHARE.EXE in order to run.
	
	  -or-
	
	- 
	
	  You must exit Windows and load SHARE.EXE in order to run <Product Name>
	  where <Product Name> is the application you are running.
	
	CAUSE
	=====
	
	Many Windows-based applications that support OLE 2.0 require file-sharing and
	file-locking capabilities to be enabled. This is accomplished by loading
	VSHARE.386 in the [386Enh] section of the SYSTEM.INI file or by loading
	SHARE.EXE in the AUTOEXEC.BAT file.
	
	If you use Novell DOS, VSHARE.386 does not function properly, and file- sharing
	and file-locking capabilities are not properly enabled.
	
	The following applications are known to encounter such errors when SHARE.EXE or
	VSHARE.386 is not present:
	
	- Microsoft Access version 2.0
	
	- Microsoft Excel for Windows, version 5.0
	
	- Microsoft Project for Windows, version 4.0
	
	- Microsoft Publisher version 2.0
	
	- Microsoft Word for Windows, version 6.0
	
	- Microsoft Works for Windows, version 3.0
	
	RESOLUTION
	==========
	
	There are two possible resolutions to these error messages:
	
	- Install and use a supported version of Microsoft MS-DOS rather than Novell
	  DOS.
	
	  -or-
	
	- Use the DOS level terminate-and-stay-resident (TSR) program SHARE.EXE
	  provided by Novell DOS instead of VSHARE.386. To do this:
	
	  1. Open the SYSTEM.INI file with a text editor, such as Windows Notepad.
	
	  2. Place a semicolon in front of the VSHARE.386 setting in the [386Enh]
	     section as follows:
	
	        [386Enh]
	        ;Device=VSHARE.386
	
	  3. Open the AUTOEXEC.BAT file with the text editor.
	
	  4. Add the line for SHARE.EXE to this file.
	
	     NOTE: For specific instructions about the settings that can be used with
	     SHARE.EXE, consult your Novell DOS manual.
	
	  5. Quit Windows and reboot your computer.
	
	MORE INFORMATION
	================
	
	Microsoft Windows 3.11 and Windows for Workgroups 3.1 and 3.11 ship with
	VSHARE.386. Some applications (such as Microsoft Word 6.0 for Windows) ship and
	install VSHARE.386 on systems not already equipped with it.
	
	VSHARE.386 is a virtual device driver (VxD) and does not use conventional memory.
	Microsoft recommends that you use this VxD rather than SHARE.EXE.
	
	Additional query words: 3rdparty err msg 3.10 3.11 winword
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	
	=============================================================================
	
