---
layout: page
title: "Q191787: BUG: Selecting RecordSource for Data Control Causes VB to Hang"
permalink: /kb/191/Q191787/
---

## Q191787: BUG: Selecting RecordSource for Data Control Causes VB to Hang

{% raw %}

	Article: Q191787
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to access an Excel spreadsheet by using the Data Control and Excel ODBC
	Driver causes Visual Basic to hang.
	
	RESOLUTION
	==========
	
	Using the Excel ISAM driver with the Data Control works correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a DSN that points to an Excel spreadsheet using the Microsoft Excel
	  ODBC driver. Name the DSN MyExcel.
	
	2. Create a Standard EXE Project in Visual Basic. Form1 is created by default.
	
	3. Place a Data Control on Form1.
	
	4. For the Data Control's Connect Property, enter the following:
	
	  ODBC;DSN=MyExcel
	
	5. Scroll down to the RecordSource property of the Data Control.
	
	6. Drop down the ComboBox for this property. Note that Visual Basic hangs.
	
	Additional query words: kbDAO350bug kbExcel kbVBp500bug kbJET kbIISAM kbODBC kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
