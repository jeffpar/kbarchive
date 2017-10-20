---
layout: page
title: "Q129838: BUG: GPF in Excel After Using Excel Spreadsheet in OLE Control"
permalink: /kb/129/Q129838/
---

## Q129838: BUG: GPF in Excel After Using Excel Spreadsheet in OLE Control

{% raw %}

	Article: Q129838
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
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
	
	A General Protection Fault (GPF) occurs at different addresses in segment 0014
	in EXCEL.EXE when the Visual Basic environment is closed after manipulating an
	OLE client control that contains an embedded Microsoft Excel spreadsheet.
	
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
	
	2. Add an OLE client control to the form.
	
	3. When the Insert Object dialog appears, select Create from File. Then specify
	  any valid .XLS file, and click OK.
	
	4. Using the mouse, right-click the control, select Open. When Microsoft Excel
	  opens, choose Exit from the File menul.
	
	5. Using the mouse, right-click the control, select Edit. Press the ESC key to
	  deactivate the OLE client control.
	
	6. Using the mouse, right-click the control, select Open.
	
	7. In Visual Basic, choose Exit from the File menu.
	
	At this point, a GP fault occurs in EXCEL.EXE at different offset addresses in
	segment 0014.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbExcel500 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
