---
layout: page
title: "Q134394: FIX: Unhandled Exception Win32S Error on Visual FoxPro Startup"
permalink: /kb/134/Q134394/
---

## Q134394: FIX: Unhandled Exception Win32S Error on Visual FoxPro Startup

	Article: Q134394
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbenv kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On startup, Visual FoxPro returns the following error message and crashes:
	
	  Win32s Error. VFP.EXE Unhandled Exception Detected. (Code: 0xC0000005
	  w32scomb.dll:10660) Application Will Be Terminated.
	
	CAUSE
	=====
	
	The ANSICP setting in the WIN32S.INI file is not a supported code page.
	
	WORKAROUND
	==========
	
	Change the ANSICP in the WIN32S.INI file to a supported code page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The following are valid code pages for Visual FoxPro version 3.0:
	
	Code page   identifier   Platform
	-------------------------------------------------
	437         x01          U.S. MS-DOS
	620  (1)    x69          Mazovia (Polish) MS-DOS
	737  (1)    x6A          Greek MS-DOS (437G)
	850         x02          International MS-DOS
	852         x64          Eastern European MS-DOS
	861         x67          Icelandic MS-DOS
	865         x66          Nordic MS-DOS
	866         x65          Russian MS-DOS
	895   (1)   x68          Kamenicky (Czech) MS-DOS
	857         x6B          Turkish MS-DOS
	1250        xC8          Eastern European Windows
	1251        xC9          Russian Windows
	1252        x03          Windows ANSI
	1253        xCB          Greek Windows
	1254        xCA          Turkish Windows
	10000       x04          Standard Macintosh
	10006       x98          Greek Macintosh
	10007 (1)   x96          Russian Macintosh
	10029       x97          Macintosh EE
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Edit the WIN32S.INI file, changing the AnsiCP setting to an invalid code
	  page. For example, change the line:
	
	        AnsiCP=1252
	
	  to this line:
	
	        AnsiCP=544
	
	2. Save the file
	
	3. Quit and restart Windows version 3.11.
	
	4. Start Visual FoxPro.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
