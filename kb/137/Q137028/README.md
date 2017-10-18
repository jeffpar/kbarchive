---
layout: page
title: "Q137028: BUG: Activating and Closing OLE Object Causes GP Fault"
permalink: kb/137/Q137028/
---

## Q137028: BUG: Activating and Closing OLE Object Causes GP Fault

	Article: Q137028
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Excel for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Excel version 5.0 generates a general protection (GP) fault in
	EXCEL.EXE when repeatedly activating and closing a Microsoft Excel object in a
	Visual Basic OLE control during run time. The offset may vary. For example,
	0014:0AF7 and 0014:0B09 were reproduced in testing with the code in this
	article. The GP fault occurs in both 16-bit and 32-bit operating systems and
	applications.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1_Click event procedure:
	
	     Private Sub Form_Click()
	        Ole1.Close
	     End Sub
	
	3. Add an OLE Control to Form1. When the Insert Object dialog box appears,
	  select either a Microsoft Excel 5.0 Worksheet or Microsoft Excel 5.0 Chart.
	
	4. Run the program.
	
	5. To activate the OLE object, press the right mouse button, and click Open. Set
	  the focus back to Form1, and execute the Form_Click event procedure.
	
	6. Repeat Step 5 and the GP fault occurs.
	
	Additional query words: 4.00 GPF vb4win vb4all buglist4.00 excel
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbExcel500 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
