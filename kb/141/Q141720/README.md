---
layout: page
title: "Q141720: Information Regarding Anti-Virus Scanners for Windows 95"
permalink: /kb/141/Q141720/
---

## Q141720: Information Regarding Anti-Virus Scanners for Windows 95

	Article: Q141720
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of information from Microsoft about anti- virus
	scanners in Windows 95.
	
	MORE INFORMATION
	================
	
	Information Regarding Anti-Virus Scanners for Windows 95
	--------------------------------------------------------
	
	Recently there has been some information in the press and on the Internet about
	the Windows 95 versions of some anti-virus scanners not detecting certain types
	of files. This is not a problem with Windows 95 itself; rather, certain
	anti-virus products may be incorrectly using the Win32 API (application
	programming interface) to open and read files. A detailed technical explanation
	of the issue is included below.
	
	Microsoft is working closely with anti-virus vendors to help them resolve this
	issue, and, to the best of our knowledge, no customers have been affected by
	this issue. McAfee Associates is planning to release an updated version of their
	anti-virus scanner that addresses this issue shortly. This page will be updated
	as other anti-virus vendors update their anti-virus scanner applications.
	
	Background
	----------
	
	The issue specifically relates to the way that the anti-virus scanners are
	attempting to open filenames that contain special "OEM" characters on the US
	code page (e.g., ASCII character 229). Code pages are internal tables that the
	operating system uses to relate the keys on the keyboard to the characters
	displayed on the screen. Different code pages provide support for the character
	sets and keyboard layouts used in different countries. In order to open a
	filename that contains these OEM characters, an application must use a specific
	Win32 API call so that the default character set includes these OEM characters.
	
	Anti-virus scanners detect infected files by first scanning the disk to obtain a
	list of file names, and then analyzing (by opening and reading) the files found.
	If the anti-virus scanner application does not use the 'SetFileApisToOem' Win32
	API call before trying to analyze files, it may be unable to open file names
	with these OEM characters. Using the above Win32 API call will allow the scanner
	to successfully open and analyze all file names.
	
	Additional query words: virus checker
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
