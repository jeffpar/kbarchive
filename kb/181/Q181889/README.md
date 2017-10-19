---
layout: page
title: "Q181889: BUG: VB Hangs While Automating Excel Using OLE Control"
permalink: /kb/181/Q181889/
---

## Q181889: BUG: VB Hangs While Automating Excel Using OLE Control

	Article: Q181889
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSO kbOffice2000 kbExcel97 kbexcel2000
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Office XP Developer 
	- Microsoft Office 2000 Developer 
	- Microsoft Excel 2002 
	- Microsoft Excel 2000 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your application hangs while automating Microsoft Excel 97 or later via the OLE
	control.
	
	CAUSE
	=====
	
	This problem occurs while automating an Excel object that is using in-place
	activation in an OLE control. The problem does not occur with all methods or
	properties. This problem has been reported with the following method/properties
	in the Microsoft Excel object library:
	
	PrintOut
	Delete
	Dialog.Show
	
	
	RESOLUTION
	==========
	
	A workaround is to not activate the object while running the automation code.
	However, if you need to activate the object, do so in a separate window instead
	of using in-place activation. For example, this line activates the object in a
	separate window:
	
	  OLE1.DoVerb vbOLEOpen
	
	Another workaround is to deactivate the object before calling the automation code
	that causes Visual Basic to hang. For example, the PrintOut and Delete methods
	cause this problem to occur. Before using these methods, you can deactivate the
	object prior to calling the method, then optionally reactivate the object after
	calling the method. See the MORE INFORMATION section later in this article for
	an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click References, and then select the Microsoft Excel
	  8.0 object library. For Excel 2000, select the version 9.0 object library.
	
	3. Place an OLE control on Form1 and create a new Microsoft Excel worksheet. The
	  OLE control properties should be:
	
	  +--------------------------+
	  | Property | Value         | 
	  +--------------------------+
	  | Name     | OLE1          | 
	  +--------------------------+
	  | Class    | Excel.Sheet.8 | 
	  +--------------------------+
	
	4. Place a CommandButton on Form1.
	
	5. Copy the following code to the Code Window of Form1:
	
	        Private Sub Command1_Click()
	           Dim xlBook As Excel.Workbook
	           Set xlBook = OLE1.object
	           OLE1.DoVerb vbOLEShow 'or OLE1.DoVerb vbOLEUIActivate
	           xlBook.Worksheets("Sheet1").Range("A1").Value = "Hello"
	           xlBook.Worksheets("Sheet1").PrintOut
	           Set xlBook = Nothing
	        End Sub
	
	6. On the Run menu, click Start, or press the F5 key to start the program.
	
	7. Click the CommandButton. Visual Basic hangs after it encounters the PrintOut
	  method. The object will be correctly printed, but Visual Basic stops
	  responding. You must select End Task in the task list (by pressing the
	  CTRL+ALT+DEL keys) to end the Visual Basic project and Excel. Repeat until
	  both Excel and the Visual Basic project are removed from the task list.
	
	8. Repeat the steps again with the code modified as follows:
	
	        Private Sub Command1_Click()
	           Dim xlBook As Excel.Workbook
	           Set xlBook = OLE1.object
	           OLE1.DoVerb vbOLEShow 'or OLE1.DoVerb vbOLEUIActivate
	           xlBook.Worksheets("Sheet1").Range("A1").Value = "Hello"
	           Command1.SetFocus 'causes deactivation of object
	           xlBook.Worksheets("Sheet1").PrintOut
	           OLE1.DoVerb vbOLEShow 'optional: reactivates object
	           Set xlBook = Nothing
	        End Sub
	
	The problem is avoided by deactivating the object before calling the PrintOut
	method. Setting focus to any control on the form will deactivate the OLE control
	object.
	
	Additional query words: locks freezes crashes
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSO kbOffice2000 kbExcel97 kbexcel2000 
	Technology        : kbVBSearch kbOfficeSearch kbExcelSearch kbAudDeveloper kbZNotKeyword6 kbExcel2002 kbExcel2000 kbZNotKeyword2 kbOffice2000Search kbVB500Search kbOffice2000 kbOfficeXP kbVB500 kbExcel2000Search kbExcel97Search kbExcel2002Search kbOfficeXPSearch kbZNotKeyword3 kbOfficeXPDevSearch kbOffice2000DevSearch
	Version           : :2000,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
