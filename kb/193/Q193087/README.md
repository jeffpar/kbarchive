---
layout: page
title: "Q193087: BUG: Cannot Run a Compiled ActiveX DLL From IE"
permalink: kb/193/Q193087/
---

## Q193087: BUG: Cannot Run a Compiled ActiveX DLL From IE

	Article: Q193087
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,5.5,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAddIn kbIE400bug kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbie550b
	Last Modified: 20-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Internet Explorer (Programming) versions 4.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Explorer (IE) fails to load an ActiveX DLL that is compiled in
	Microsoft Visual Basic 5.0 or 6.0.
	
	CAUSE
	=====
	
	The Class_Initialize event is not fired correctly.
	
	RESOLUTION
	==========
	
	In Visual Basic 6.0, run the DLL project in the Visual Basic IDE (Integrated
	Development Environment) before loading it in IE to correct this problem.
	
	There is no resolution for a Visual Basic 5.0 project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Add a new form (Form1) to the project.
	
	3. Paste the following code into Class1:
	
	        Option Explicit
	
	        Private myform As Form1
	
	        Private Sub Class_Initialize()
	           Set myform = New Form1
	           myform.Visible = True
	        End Sub
	
	        Private Sub Class_Terminate()
	           Set myform = Nothing
	        End Sub
	
	4. Save the project.
	
	5. Compile the project by selecting Make Project1.dll from the File menu.
	
	6. Select Add-In Manager under Add-Ins and check Visual Basic 6.0 Package and
	  Deployment Wizard (PDW) to load it.
	
	7. Start the PDW by selecting it from the Add-Ins menu.
	
	8. Select Package. In the Package Type screen, select Internet Package and click
	  Next. Follow the PDW to completion. The PDW will create a HTM file for your
	  project in your desired Package directory.
	
	9. Press the F5 key to run the project in the IDE. Select "Wait for component to
	  be created" and click OK.
	
	10. Launch Internet Explorer and browse to the HTM file created in step 8. The
	  form shows up correctly.
	
	11. Close IE and stop the Visual Basic project from running in the IDE.
	
	12. Reopen IE and browse to the HTM file again. The page loads without error,
	  but the form is not created.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAddIn kbIE400bug kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbie550bug 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKIE400 kbSDKIE550 kbIE550Search
	Version           : WINDOWS:4.0,5.0,5.5,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
