---
layout: page
title: "Q89379: APPEND.EXE Causes Problems in All Versions of Windows"
permalink: /kb/089/Q89379/
---

## Q89379: APPEND.EXE Causes Problems in All Versions of Windows

{% raw %}

	Article: Q89379
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS APPEND.EXE (or APPEND.COM) should not be used with Windows or Windows for
	Workgroups. It prevents Windows and Windows-based applications from creating
	valid well-formed-path (WFP) names for the files they are using. (A
	well-formed-path name is the complete name of a file, including the drive letter
	and full path specification, starting from the root directory.)
	
	This article discusses the following:
	
	- Windows Setup hangs
	
	- Windows Program Manager and MS-DOS Prompt
	
	- Windows File Manager
	
	- Windows applications cannot be found
	
	MORE INFORMATION
	================
	
	Windows Setup Hangs
	-------------------
	
	If APPEND.EXE is loading when running Windows' Setup, then the installation of
	Windows may be corrupted. You may also receive error messages such as:
	
	  Error 6
	
	  -or-
	
	  Cannot find file: WIN.SRC
	
	Windows Program Manager and MS-DOS Prompt
	-----------------------------------------
	
	You may see the error message "Cannot start application" when you attempt to run
	the MS-DOS icon in Windows 3.0 or the MS-DOS Prompt in Windows 3.1 if APPEND.EXE
	is loaded in the AUTOEXEC.BAT file as:
	
	  APPEND C:\DOS
	
	Windows File Manager
	--------------------
	
	If you are using Windows 3.0 or 3.1 File Manager, while APPEND.EXE is loaded, and
	you attempt to format a system disk, you may receive the error message:
	
	  Bad Or Missing Command Interpreter
	
	There will also be problems when attempting to read floppy disks. An example
	would be attempting to read drive A, but receiving a directory of drive C.
	
	Windows Applications Cannot be Found
	------------------------------------
	
	APPEND.EXE confuses Windows and may prevent Windows from finding applications.
	When this occurs, the following error message will be displayed:
	
	  
	
	                   Change Disk
	  Cannot find "AppName.EXE", Please insert in drive A:
	                     < OK >
	
	Additional query words: 3.00 3.00a 3.10 3.11 excel.exe winword.exe err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
