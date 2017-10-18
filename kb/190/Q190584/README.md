---
layout: page
title: "Q190584: BUG: Some Properties or Methods Not Displayed in DataReport"
permalink: kb/190/Q190584/
---

## Q190584: BUG: Some Properties or Methods Not Displayed in DataReport

	Article: Q190584
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the DataReport, the following problems may occur:
	
	1. Expected properties or methods are not displayed in the completion list for a
	  variable of type DataReport.
	
	2. Run-time error 438 (Object doesn't support this property or method) occurs
	  when accessing a method or property of a DataReport object.
	
	RESOLUTION
	==========
	
	Either refer directly to the Data Report or use variables of type Object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Example 1
	---------
	
	1. Create a new Standard EXE project.Form1 is created by default.
	
	2. From the Project menu, select Add Data Report.
	
	3. In the Project window, right-click on Form1, and select View Code.
	
	4. Type (don't paste) the following into the Form1 code window:
	
	        Sub Example1()
	          Dim dr As DataReport
	          Set dr = DataReport1
	          dr.
	
	5. When the dot is typed in the last line at step 4, Visual Basic will display a
	  list of DataReport properties and methods. Note that items such as the Show()
	  and Hide() methods are not listed.
	
	  NOTE: To ensure that IntelliSense is active, make sure that the Auto List
	  Members option is checked in Tools.Options.Editor. This property is set by
	  default.
	
	Workaround 1
	------------
	
	Use this workaround if you need only reference a specific Data Report.
	
	Change the line:
	
	     Dim dr As DataReport
	
	to:
	
	     Dim dr As DataReport1
	
	Workaround 2
	------------
	
	Use this workaround if you can reference any of several DataReport objects.
	
	Change the line:
	
	     Dim dr As DataReport
	
	to:
	
	     Dim dr As Object
	
	NOTE: This will cause no list of properties and methods to be displayed when
	typing the line: dr.
	
	Refer to the Visual Basic online Help for a list or DataReport properties and
	methods.
	
	Example 2
	---------
	
	1. Follow steps 1-3 from Example 1.
	
	2. Paste the following code into the Form1 code window:
	
	        Sub Example2(dr As DataReport)
	          Dim o As Object
	          Set o = dr
	          o.Show
	        End Sub
	
	        Private Sub Form_Load()
	          Example2 DataReport1
	        End Sub
	
	3. Select Start from the Run menu. Run-time error 438 will occur when executing
	  the line o.Show in the sub procedure Example2().
	
	Workaround 1
	------------
	
	Use this workaround if you know which DataReport object will be passed to the
	procedure Example2().
	
	Replace the procedure Example2() with:
	
	     Sub Example2(dr As DataReport1)
	       dr.Show
	     End Sub
	
	Workaround 2
	------------
	
	Use this workaround if one of several possible DataReport objects will be passed
	to the procedure Example2().
	
	Replace the procedure Example2() with"
	
	     Sub Example2(dr As Object)
	       dr.Show
	     End Sub
	
	Additional query words: kbDSupport kbDesigner kbReportWriter kbVBp600bug kbdse kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
