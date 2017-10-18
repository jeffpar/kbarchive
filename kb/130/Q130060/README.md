---
layout: page
title: "Q130060: Chinese Windows 3.1 DBCS Character Code Conversion Utilities"
permalink: kb/130/Q130060/
---

## Q130060: Chinese Windows 3.1 DBCS Character Code Conversion Utilities

	Article: Q130060
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PRNTSCRN.COM is a terminate-stay-resident (TSR) MS-DOS program used to select
	and copy screen information from an application that is not based on Windows to
	the Windows Clipboard. PRNTSCRN.COM also performs automatic conversion from the
	MS-DOS DBCS code page to the Big-5 code page.
	
	CONVERT.COM is an MS-DOS program that converts a DBCS text file from one DBCS
	code page to another. See the manual of Chinese Windows version 3.1 SDKE for
	information about the functions provided in OEM_BIG5.DLL, a Windows Dynamic Link
	Library (DLL) that contains functions to convert characters, strings, or buffers
	from Big-5 to another DBCS code page, and vice versa.
	
	MORE INFORMATION
	================
	
	The prntscrn utility is contained in a single MS-DOS executable file named
	PRNTSCRN.COM. Note that prntscrn is an MS-DOS program, not a Windows program.
	When first invoked from the MS-DOS command line, prntscrn installs itself as a
	terminate-stay-resident (TSR) program. Subsequent invocation is via either the
	CTRL+SHIFT+INSERT (full-screen) or CTRL+INSERT (selected block) key
	combinations.
	
	Prntscrn copies text from MS-DOS screens to the Windows Clipboard, with two
	important additional features: Automatic conversion from the user's DBCS MS- DOS
	code page to the Windows Big-5 code page.
	
	Prntscrn works only in text mode, English or Chinese. It must be able to
	differentiate graphics mode from Chinese systems' text modes. If invoked when
	the screen is in graphics mode, Prntscrn ignores the invocation keystroke and
	passes it on. Prntscrn works with Windows running in Standard or Enhanced modes.
	It can load either before or after Windows loads.
	
	Additional query words: 3.10 Chinese Windows 3.1 SDK Reference kbinf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
