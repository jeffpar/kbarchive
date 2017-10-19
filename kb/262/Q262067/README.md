---
layout: page
title: "Q262067: BUG: RStoCursor in Vfpcom.dll Fails with Certain Data Types"
permalink: /kb/262/Q262067/
---

## Q262067: BUG: RStoCursor in Vfpcom.dll Fails with Certain Data Types

	Article: Q262067
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbDatabase kbOOP kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDS
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual FoxPro developers often make use of the VFPCOM Utility, which
	is available for download from the Microsoft Visual FoxPro Web site. Among other
	things, this sample allows users to convert an ADO recordset into a FoxPro
	cursor through its RSToCursor() method.
	
	When you attempt to create a cursor from an ADO recordset by using the
	RSToCursor() method, the numeric, float, and Double data types are not converted
	properly. This behavior results in a -10 return code from the object, and the
	FoxPro cursor is not created.
	
	Additional information on the Vfpcom sample and its error codes may be found in
	the "References" section later in this article.
	
	RESOLUTION
	==========
	
	There is a Microsoft Visual FoxPro RS2DBF function inside of the program named
	RS2DBF.PRG that converts an ADO recordset to a Visual FoxPro cursor and retains
	numeric, float, and Double data types.
	
	More information and a download point can be found at this Microsoft Web site:
	
	  RS2DBF.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. If you have not done so already, download and unzip the VFPCOM Utility from
	  the Microsoft Visual FoxPro samples Web site.
	
	2. Follow the instructions in the "Installation and Setup" section of the
	  Vfpcom.htm file that accompanies the sample.
	
	3. Copy the following code to a new program, and then run it to demonstrate the
	  problem. Note that there is a return value from the Vfpcom.dll of -10
	  ("Failed to create Fox cursor"). This occurs when the utility tries to
	  convert an ADO Recordset with one float, numeric or double field, into a Fox
	  cursor.
	
	  ******************************* START CODE *******************************
	  CLEA
	  LOCAL loVFPCOM, loRS, lnError
	
	  loVFPCOM = CREATEOBJECT("vfpcom.comutil")
	  IF VARTYPE(loVFPCOM) # 'O' OR ISNULL(loVFPCOM)
	  	MESSAGEBOX("Problem creating VFPCOM Object. Exiting")
	  	RETURN .F.
	  ENDIF
	
	  *~ Let's try with a cursor with one, NUMERIC field
	  MAKE_CURSOR('NUMERIC')
	  ? "*** NUMERIC FIELD TEST ***"
	  loRS = CREATEOBJECT("adodb.recordset")
	  lnError = loVFPCOM.CURSORTORS(loRS)
	  ? "CursorToRs Err Code for table with 1 NUMERIC field... ", TRANSFORM(lnError)
	  lnError = loVFPCOM.RSTOCURSOR(loRS, "test")
	  ? "RStoCURSOR Err Code for table with 1 NUMERIC field... ",  TRANSFORM(lnError)
	  ?
	  loRS = NULL
	  RELEASE loRS
	  *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	  *~ Let's try with a cursor with one, FLOAT field
	  MAKE_CURSOR('FLOAT')
	  ? "*** FLOAT FIELD TEST ***"
	  loRS = CREATEOBJECT("adodb.recordset")
	  lnError = loVFPCOM.CURSORTORS(loRS)
	  ? "CursorToRs Err Code for table with 1 FLOAT field... ", TRANSFORM(lnError)
	  lnError = loVFPCOM.RSTOCURSOR(loRS, "test")
	  ? "RStoCURSOR Err Code for table with 1 FLOAT field... ",  TRANSFORM(lnError)
	  ?
	  loRS = NULL
	  RELEASE loRS
	  *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	  *~ Let's try with a cursor with one, DOUBLE field
	  MAKE_CURSOR('DOUBLE')
	  ? "*** DOUBLE FIELD TEST ***"
	  loRS = CREATEOBJECT("adodb.recordset")
	  lnError = loVFPCOM.CURSORTORS(loRS)
	  ? "CursorToRs Err Code for table with 1 DOUBLE field... ", TRANSFORM(lnError)
	  lnError = loVFPCOM.RSTOCURSOR(loRS, "test")
	  ? "RStoCURSOR Err Code for table with 1 DOUBLE field... ", TRANSFORM(lnError)
	  ?
	  loRS = NULL
	  RELEASE loRS
	  *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	  *~ Clean-up
	  loRS = NULL
	  loVFPCOM = NULL
	  RELEASE loRS, loVFPCOM
	
	  *~~~~~~~ PROCEDURES ~~~~~~~~~~~~~
	
	  PROCEDURE MAKE_CURSOR(lcFldType)
	  	DO CASE
	  		CASE lcFldType = 'NUMERIC'
	  			CREATE CURSOR test(n_num N(5))
	
	  		CASE lcFldType = 'FLOAT'
	  			CREATE CURSOR test(floatfld F(10))
	
	  		CASE lcFldType = 'DOUBLE'
	  			CREATE CURSOR test(dobfld B(2))
	  	ENDCASE
	
	  	LOCAL i
	  	FOR i = 1 TO 10
	  		INSERT INTO test VALUES(i)
	  	NEXT i
	  ******************************* END CODE *******************************
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q235985 INFO: Error Codes for VFPCOM Utility
	
	  Q192692 Rs2dbf.exe Converting ADO 2.x Recordset to VFP Cursor
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words: Vfpcom
	
	======================================================================
	Keywords          : kbCOMt kbDatabase kbOOP kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
