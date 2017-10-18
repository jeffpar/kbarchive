---
layout: page
title: "Q150432: How an MFC Application Can Use the Visual FoxPro ODBC Driver"
permalink: kb/150/Q150432/
---

## Q150432: How an MFC Application Can Use the Visual FoxPro ODBC Driver

	Article: Q150432
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes can be used to create a application that allows
	access to data using ODBC drivers. The MFC AppWizard can create a basic
	framework that can be used to gain access to data with the Visual FoxPro ODBC
	driver.
	
	This article gives the basic instructions for creating a simple MFC application
	by using the MFC AppWizard. For more specifics on MFC or the MFC Appwizard,
	refer to the Microsoft Visual C++ manuals and online books that are included
	with MFC 4.0. This example was created using Visual C++ 4.0.
	
	MORE INFORMATION
	================
	
	Use the MFC AppWizard to create a basic framework:
	
	1. Create a data source for Tastrade.dbc (in the Visual FoxPro
	  Samples\Mainsamp\Data directory) and call it tastrade. Then open the customer
	  database in Visual FoxPro, and modify the structure to allow NULL in all the
	  fields. The MFC classes do not seem to distinguish between NULL and a blank
	  value. When the Next button is clicked, the MFC class libraries send an
	  update back to the table. If the field is blank, then a NULL is sent instead
	  of spaces. When a NULL value is sent instead of spaces, an error occurs
	  because the field does not allow NULLs.
	
	2. Start Microsoft Developer Studio.
	
	3. Select New from the File menu. Then select Project Work Space, and click the
	  OK button. For the Project Type, select MFC AppWizard (exe). For the name,
	  type test. Also, you may want to change the directory in which you save the
	  project by clicking the Browse button and selecting a directory. Click the
	  Create button.
	
	4. In MFC AppWizard Step 1, select the Single document option, and then select
	  English [United States] (APPWZENU.DLL). Click the Next button.
	
	5. In MFC AppWizard Step 2, select the "Database view without file support"
	  option. Click the Data Source button. Select the ODBC option, and then select
	  tastrade (the name of the ODBC data source created in Step 1). Select the
	  Snapshot option for the Recordset type, and click OK. Select the customer
	  table, and click OK. Click the Next button.
	
	6. In MFC AppWizard Step 3, select the None option for the OLE compound document
	  support. Click the Next button.
	
	7. In MFC AppWizard Step 4, clear the "Printing and print preview" check box.
	  The Docking toolbar, Initial status bar, and 3D controls should be checked.
	  Click the Next button.
	
	8. In MFC AppWizard Step 5, for generate source file comments, select the "Yes,
	  please" option and the "As a shared DLL" option for the the MFC library to
	  use. Click the Next button.
	
	9. In MFC AppWizard Step 6, Click the Finish button. Click the OK button.
	
	In Steps 10-13, use the ClassWizard to bind the variables to text boxes on the
	form that is displayed.
	
	10. Select the ResourceView tab. In the Outline, expand the Dialog and
	  double-click IDD_TEST_FORM.
	
	11. Click the Edit Box control, and draw an edit box on the form. From the View
	  menu, choose ClassWizard. Click the Member Variables tab. Make sure the
	  IDC_EDIT1 is the highlighted control, and click the Add Variable button. In
	  the Member variable name list, select an m_company_name and leave Category
	  as Value and Variable type as Cstring. Click the OK button.
	
	12. From the Build menu, choose Build test.exe.
	
	13. From the Build menu, choose Execute test.exe
	
	REFERENCES
	==========
	
	Inside Visual C++, Chapter 28
	Inside ODBC, Chapter 8
	
	Additional query words: 1.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
