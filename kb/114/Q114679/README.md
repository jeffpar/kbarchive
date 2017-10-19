---
layout: page
title: "Q114679: ADT2: Three Methods to Test Visual Basic Compatibility Layer"
permalink: /kb/114/Q114679/
---

## Q114679: ADT2: Three Methods to Test Visual Basic Compatibility Layer

	Article: Q114679
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	Once you have installed the Visual Basic Compatibility Layer (VBCL), there are
	several test methods you can use in Visual Basic version 3.0 to verify that it
	is working correctly:
	
	- The Data Manager window. (This is the simplest method.)
	
	- The Data Access control.
	
	- The Visual Data (VisData) sample application (Visual Basic Professional
	  Edition only).
	
	MORE INFORMATION
	================
	
	Using The Data Manager Window
	-----------------------------
	
	To use the Data Manager window, follow these steps:
	
	1. Start Visual Basic and choose Data Manager from the Window menu.
	
	2. From the File menu, choose Open Database, and then choose Microsoft Access.
	
	3. Select the sample database NWIND.MDB, and then choose OK.
	
	If the VBCL is installed correctly, you will see a list of all the tables in
	NWIND.MDB. If the VBCL is not installed, or if it is not installed correctly,
	you will receive the error message
	
	  Incompatible database version.
	
	Using the Data Access Control
	-----------------------------
	
	To use the Data Access control, follow these steps:
	
	1. Start Visual Basic and add a data access control and a text box control to a
	  new form.
	
	2. Set the following properties for the data access control:
	
	     DatabaseName: C:\ACCESS\SAMPAPPS\NWIND.MDB
	     RecordSource: Employees
	
	3. Set the following properties for the text box control:
	
	     DataSource: Data1
	     DataField: Last Name
	
	4. From the Run menu, choose Start.
	
	If the VBCL is installed correctly, you will see the name "Davolio" in the text
	box. Also, you will be able to step back and forth through the names using the
	arrows on either side of the data access control.
	
	If the VBCL is not installed, or if it is not installed correctly, you will
	receive the error message "Incompatible database version."
	
	Using the Visual Data (VisData) Sample Application
	--------------------------------------------------
	
	To use the Visual Data (VisData) sample application, follow these steps:
	
	1. Start Visual Basic and open the VISDATA.MAK file in the SAMPLES\VISDATA
	  subdirectory.
	
	2. From the Run menu, choose Start.
	
	3. From the File menu, choose Open Database, and then choose Microsoft Access.
	
	4. Select NWIND.MDB.
	
	If the VBCL is installed correctly, you will see a list of tables and queries
	from the NWIND database. Otherwise, you will receive the error message:
	
	  Incompatible database version Number: 3041
	
	To test the VBCL further, enter the following statement in the SQL window:
	
	  "SELECT * FROM Employees" (without the quotation marks)
	
	If the VBCL is installed correctly, you will see a window titled "Dynaset:
	Employees" with the first employee's data showing.
	
	Additional query words: attaching testing
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
