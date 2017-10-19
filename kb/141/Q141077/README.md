---
layout: page
title: "Q141077: WD97: &quot;Invalid Page Fault&quot; During Mail Merge"
permalink: /kb/141/Q141077/
---

## Q141077: WD97: &quot;Invalid Page Fault&quot; During Mail Merge

	Article: Q141077
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmergekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a mail merge, you may receive one of the following error
	messages after you click the Create button and select an option, after you click
	Active Window or New Main Document, or after you click the Get Data button:
	
	  This program has performed an illegal operation and will be shut down.
	
	  -or-
	
	(After you click the Details button)
	
	  Winword has caused an invalid page fault in module <unknown> at
	  0000:815xxxxx"
	
	  -or-
	
	  Winword has caused an invalid page fault in module ODBC32.DLL
	
	  -or-
	
	  Invalid Page Fault error in module Winword.exe.
	
	  -or-
	
	  A Fatal Exception error has occurred.
	
	CAUSE
	=====
	
	This problem occurs because the Odbc32.dll file, located in the Windows\System
	folder, has been corrupted.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method described below.
	
	Method 1: Rename the Current Odbc32.dll File and Reinstall Office
	-----------------------------------------------------------------
	
	1. Use Windows Explorer to locate the Odbc32.dll file in the Windows\System
	  folder.
	
	2. Select the Odbc32.dll file. Press F2, and type a new name for the file, such
	  as "Odbc32.old" (without the quotation marks). Click Yes when asked if you
	  want to change the file name's extension.
	
	3. Click the Start button, point to Settings, and then click Control Panel. In
	  Control Panel, double-click Add/Remove Programs.
	
	4. On the Install/Uninstall tab, click Microsoft Office 97. Click the Add/Remove
	  button.
	
	5. Click the Reinstall button.
	
	Method 2: Copy the Odbc32.dll File from the Office Compact Disc
	---------------------------------------------------------------
	
	If you have Microsoft Office on compact disc, copy the Odbc32.dll file from the
	OS\System folder on the compact disc to the Windows\System folder on your local
	hard drive.
	
	Method 3: Rename the Current Odbc32.dll File and Reinstall the ODBC Appnote
	---------------------------------------------------------------------------
	
	ODBC may have been installed to a stand-alone version of Word using the
	Odbc32.dll file that ships with "WX1220: ODBC 32-Bit Drivers Appnote." Rename
	the current Odbc32.dll file and reinstall the Odbc32.dll file from "WX1220: ODBC
	32-Bit Drivers Appnote w/Desktop Drivers Ver. 3.4."
	
	
	MORE INFORMATION
	================
	
	You cannot correct this error by deleting the Office folder and reinstalling
	Office because the problem file is in a different folder. You must rename the
	Odbc32.dll file (located in the Windows\System folder) manually, and then
	reinstall Office to correct this error.
	
	Additional query words: print merge mmh merging access operation active window new document mailmerge mm IPF word7 word95
	
	======================================================================
	Keywords          : word97 kbmerge kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
