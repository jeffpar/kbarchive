---
layout: page
title: "Q108824: Programmatically Copying Text to/from Windows Clipboard"
permalink: kb/108/Q108824/
---

## Q108824: Programmatically Copying Text to/from Windows Clipboard

	Article: Q108824
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Windows, the system memory variable _CLIPTEXT provides access to
	the Windows system Clipboard for transferring text data (not graphics).
	
	MORE INFORMATION
	================
	
	In FoxPro for MS-DOS, copying or cutting text places that text in an internal
	clipboard used only by FoxPro for MS-DOS. In Windows-based applications,
	including FoxPro for Windows, copying or cutting an item places that item in the
	Windows Clipboard, which is available to other Windows applications.
	
	To view the contents of the Windows Clipboard, open the Main group in Program
	Manager, and in Windows 3.0 and 3.1, start Clipboard or in Windows for
	Workgroups 3.1 and 3.11, start Clipbook Viewer (which contains Clipboard). Note,
	however, that Clipboard does not need to be running for data to be stored in
	it.
	
	NOTE: You can pass only text data using _CLIPTEXT, although the Windows Clipboard
	can store graphics as well as text.
	
	Example of Copying Text from FoxPro to Notepad
	----------------------------------------------
	
	1. Start FoxPro for Windows.
	
	2. Type the following command in the Command window:
	
	  " _CLIPTEXT = "Text from FoxPro"" (without the quotation marks)
	
	3. Minimize or quit FoxPro.
	
	4. Start the Windows Notepad program (usually found in the Accessories group).
	
	5. From the Edit menu, choose Paste.
	
	Notepad now contains the following line:
	
	  Text from FoxPro
	
	Example of Copying Text From Memo Field to Clipboard
	----------------------------------------------------
	
	  USE <table_name> && Open a database that contains a memo field
	  SCATTER MEMVAR MEMO
	  _CLIPTEXT=m.<memo_field_name> && Copy memo contents to clipboard
	
	Example of Copying Text from Notepad to FoxPro
	----------------------------------------------
	
	1. Start Notepad.
	
	2. Type the following line in Notepad:
	
	  " Text from Notepad" (without the quotation marks)
	
	3. Select the line of text (so that it is highlighted).
	
	4. From the Edit menu, choose Copy.
	
	5. Minimize or quit Notepad.
	
	6. Start FoxPro for Windows.
	
	7. Type the following command in the Command window:
	
	  " ? _CLIPTEXT" (without the quotation marks)
	
	The following is displayed on the FoxPro Desktop:
	
	  Text from Notepad
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxWin FoxWin 2.50 clipbrd.exe akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
