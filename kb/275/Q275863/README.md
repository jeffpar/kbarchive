---
layout: page
title: "Q275863: PRB: View Designer Sets Decimal Places to 3 for Double Data Type"
permalink: kb/275/Q275863/
---

## Q275863: PRB: View Designer Sets Decimal Places to 3 for Double Data Type

	Article: Q275863
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDesigner kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create or edit a view using the View Designer, the number of decimal
	places for data types mapped as Double data type is set to 3 under the Fields
	Data Mapping property.
	
	RESOLUTION
	==========
	
	Use the DBSETPROP() function to set the number of decimal places for the field:
	
	  DBSETPROP('MYVIEW.MYFIELD','FIELD','DATATYPE','B(5)')
	
	
	MORE INFORMATION
	================
	
	This is a display anomaly in the View Designer. Views that map fields to a
	Double data type will be displayed as defined.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Vfpview.prg and paste the following code:
	
	  IF !FILE("FLOTDEMO.DBC")
	     CREATE DATABASE FLOTDEMO
	     CREATE TABLE FLOATER (ident i PRIMARY KEY NOT NULL, dblfld b(5) NOT NULL)
	     CREATE SQL VIEW FLOTVIEW AS SELECT * FROM FLOATER
	  ELSE
	     OPEN DATA FLOTDEMO
	  ENDIF
	  *!* Explicitly set the number of decimal places to 5.
	  =DBSETPROP('FLOTVIEW.DBLFLD','FIELD','DATATYPE','B(5)')
	  MODI VIEW FLOTVIEW
	
	2. Save and then run Vfpview.prg.
	
	3. When the View Designer appears, click the Properties button.
	
	4. In the View Field Properties dialog box, select floater.dblfld.
	
	5. Note the decimal value displayed under Data Mapping.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDesigner kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
