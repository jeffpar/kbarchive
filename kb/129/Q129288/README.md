---
layout: page
title: "Q129288: PRB: VB 4.0 EXEs Are Different When Compared Byte-by-Byte"
permalink: kb/129/Q129288/
---

## Q129288: PRB: VB 4.0 EXEs Are Different When Compared Byte-by-Byte

	Article: Q129288
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When making two executables in a row from the same project no matter how small,
	the .EXE files will come out with a difference in bytes when using the FC (File
	Compare) utility. No two executable files created from the same Visual Basic
	source code are identical. While the file sizes may be the same between two .EXE
	files, a byte-by-byte comparision reveals that the actual .EXE files are
	different.
	
	CAUSE
	=====
	
	Many internal identifiers and GUIDs that may be used in the application are
	reassigned on every compile. A few of these are written out into the .EXE file
	in internal tables. Also, the Win32 file format has an entry in it for the time
	stamp of the executable. This will be set to a different value each time you
	make a new .EXE file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Choose Make EXE File from the File menu, and specify P1.EXE as the name of
	  the .EXE file.
	
	3. Choose Make EXE File from the File menu again, and specify P2.EXE as the name
	  of the .EXE file this time.
	
	4. Open an MS-DOS Command box, and change directories to the one that contains
	  both P1.EXE and P2.EXE.
	
	5. Type the following command at the MS-DOS prompt:
	
	  FC P1.EXE P2.EXE
	
	The file compare utility will report differences on a byte-by-byte level.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
