---
layout: page
title: "Q115085: Win32s Files that Must Ship with Win32 Applications"
permalink: /kb/115/Q115085/
---

## Q115085: Win32s Files that Must Ship with Win32 Applications

{% raw %}

	Article: Q115085
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbOSWin32s
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chapter 9 of the Visual C++ "Programming Techniques" manual includes information
	on what the setup program for a Win32 application must do when installing on
	Windows Microsoft Visual C++ 32-bit Edition, version 1.0. However, this
	documentation does not cover which Win32s files should be copied and from where
	they should be copied. This additional information is located in the "Win32s
	Programmer's Reference" (WIN32.HLP), which is included with the Win32 SDK.
	
	NOTE: This information is specific to the version of Win32s that is supplied with
	Visual C++ 32-bit Edition and does not apply to Win32s, versions 1.15 or 1.2.
	
	MORE INFORMATION
	================
	
	1. Install the following Win32s files in the <windows>\system directory
	  (where <windows> is the drive and directory that Windows has been
	  installed in, such as c:\windows):
	
	     olecli.dll
	     w32sys.dll
	     win32s.ini*
	     win32s16.dll
	     winmm16.dll
	
	  * The WIN32S.INI file is not shipped as part of Win32s, but should be created
	  during setup as shown below.
	
	2. Install the following Win32s files in the <windows>\system\win32s
	  directory:
	
	     advapi32.dll    mpr.dll         user32.dll
	     comdlg32.dll    netapi32.dll    version.dll
	     crtdll.dll      ntdll.dll       w32s.386
	     c_1252.nls      olecli32.dll    w32skrnl.dll
	     c_437.nls       olesvr32.dll    win32s.exe
	     c_850.nls       sck16thk.dll    winmm.dll
	     gdi32.dll       shell32.dll     winspool.drv
	     kernel32.dll    unicode.nls     wsock32.dll
	     lz32.dll
	
	3. Add a "device=" line to the [386Enh] section as follows:
	
	        [386Enh]
	        device=c:\windows\system\win32s\w32s.386
	
	4. Add "winmm16.dll" to the "device=" line as follows:
	
	        [Boot]
	        device=mmsytem.dll winmm16.dll
	
	5. In the \windows\system directory, create or update a WIN32S.INI file that
	  includes the following information :
	
	        [Win32s]
	        Setup=1
	        Version=1.1.0.0
	        [Nls]
	        AnsiCP=1252
	
	REFERENCES
	==========
	
	For further information on Win32s redistributable files, please refer to the
	License Agreement (included with Visual C++).
	
	Additional query words: kbinf 1.00
	
	======================================================================
	Keywords          : kbOSWin32s 
	Technology        : kbVCsearch kbAudDeveloper kbvc100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
