---
layout: page
title: "Q240227: HOWTO: Capture the Path to the Windows and System Folders"
permalink: /kb/240/Q240227/
---

## Q240227: HOWTO: Capture the Path to the Windows and System Folders

{% raw %}

	Article: Q240227
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 01-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to use the GetWindowsDirectory and
	GetSystemDirectory functions of the WIN32API to capture the paths to the Windows
	and Windows\System directories.
	
	MORE INFORMATION
	================
	
	Within some applications, it may be necessary to programmatically determine the
	path to the WINDOWS and/or WINDOWS\SYSTEM directories. By default, Windows 95
	and Windows 98 are installed to the WINDOWS directory. Similarly, the default
	installation directory for Microsoft Windows NT 4.0 is the WINNT directory.
	While those are default installation paths, users may change the path to which
	the operating system files are copied.
	
	The Visual FoxPro GETENV() function returns the contents of the specified MS-DOS
	environment variable. Using this function, the path to the Windows directory may
	be located by passing the function to the WINDIR environmental variable, which
	Windows sets when it starts. The syntax for returning the path to the Windows
	directory is
	
	  =GETENV('windir')
	
	The following code illustrates how to use the GetWindowsDirectory and
	GetSystemDirectory functions of the WIN32API to return the paths to the Windows
	and System directories.
	
	The GetWindowsDirectory function returns the path of the Windows directory. Under
	Windows 95 and Windows 98, the Windows directory would normally be C:\WINDOWS.
	Using Windows NT 4.0, the Windows directory would usually be C:\WINNT.
	
	The GetSystemDirectory function returns the path of the System directory. With
	Windows 95 and Windows 98, that would normally be C:\WINDOWS\SYSTEM. Under
	Windows NT 4.0, the system files would normally be copied to C:\WINNT\SYSTEM32.
	
	1. Create a program file named GDirs.PRG using the following code:
	
	  #DEFINE MAX_PATH 260
	  *!* Declare the GetWindowsDirectory function from the WIN32API
	  DECLARE INTEGER GetWindowsDirectory IN kernel32.dll ;
	      STRING @WinBuffer, INTEGER WinBuffLen
	  lcWinBuffer = SPACE(MAX_PATH)
	  *!* Get the path to the windows directory
	  =GetWindowsDirectory(@lcWinBuffer, MAX_PATH)
	  *!* Parse the null terminator from the returned string
	  lcWinBuffer = LEFT(lcWinBuffer, AT(CHR(0), lcWinBuffer) - 1)
	
	  *!* Declare the GetSystemDirectory function from the WIN32API
	  DECLARE INTEGER GetSystemDirectory IN kernel32.dll ;
	      STRING @SysBuffer, INTEGER SysBufferLen
	  lcSysBuffer = SPACE(MAX_PATH)
	  *!* Get the path to the system directory
	  =GetSystemDirectory(@lcSysBuffer, MAX_PATH)
	  *!* Parse the null terminator from the returned string
	  lcSysBuffer = LEFT(lcSysBuffer, AT(CHR(0), lcSysBuffer) - 1)
	
	  ? "Windows Directory = " + lcWinBuffer
	  ? "System Directory  = " + lcSysBuffer
	  CLEAR DLLS
	
	2. Run the GDirs.prg file.
	
	3. Note that the path to the Windows and the System directories appear on the
	  screen.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbAPI kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
