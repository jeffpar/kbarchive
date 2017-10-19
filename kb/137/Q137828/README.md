---
layout: page
title: "Q137828: Cannot Open Unassociated File with Office 95 Programs"
permalink: /kb/137/Q137828/
---

## Q137828: Cannot Open Unassociated File with Office 95 Programs

	Article: Q137828
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Office for Windows 95, version 7.0 
	- Microsoft Excel for Windows 95, version 7.0 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a file with a long filename (LFN) that has no association
	in an Office 95 program (Word or Microsoft Excel), the program opens but the
	selected document does not open.
	
	For example, if you try to open a file named "Long File Name.<xxx>," you
	receive an error message for each name in the LFN. If you try to open the "Long
	File Name.<xxx>" file, you receive error messages similar to the
	following:
	
	  Cannot find <path>\Long.xls or <path>\Long.doc
	  Cannot find <path>\File.xls or <path>\File.doc
	  Cannot find <path>\Name.xls or <path>\Name.doc
	
	Notes
	-----
	
	- This problem does not apply to PowerPoint 7.0 or WordPad.
	
	- This problem occurs only with files whose filenames contain spaces.
	
	
	CAUSE
	=====
	
	Office 95 Setup does not modify the registry correctly for Word 7.0 and
	Microsoft Excel 7.0. This problem applies to both the integrated Office 95
	versions and the standalone versions of Word 7.0 and Microsoft Excel 7.0.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu, click Options.
	
	3. On the File Types tab, click Microsoft Excel Worksheet in the Registered File
	  Types box, and then click Edit.
	
	4. In the Actions box, click Open, and then click Edit.
	
	5. In the Application Used To Perform Action box, append a space and "%1" (with
	  the quotation marks) to the end of the line. For example, the corrected line
	  might look like:
	
	  C:\MSOffice\Excel\excel.exe "%1"
	
	  NOTE: It is important that there be a space before "%1".
	
	6. Click OK, and then click Close twice.
	
	7. Repeat steps 3-7 for Microsoft Word Documents.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Excel version 7.0 and
	Microsoft Word version 7.0 for Windows 95. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: word95 word7
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWordSearch kbOfficeSearch kbExcelSearch kbWin95search kbWord700Search kbExcel700 kbExcel95Search kbOffice95Search kbOffice95 kbZNotKeyword3 kbWord700 kbWin95
	Version           : 95
	
	=============================================================================
	
