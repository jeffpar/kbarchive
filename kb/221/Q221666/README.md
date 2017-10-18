---
layout: page
title: "Q221666: FIX: SQL Upsizing Wizard Save Generated SQL Bloats Script.fpt"
permalink: kb/221/Q221666/
---

## Q221666: FIX: SQL Upsizing Wizard Save Generated SQL Bloats Script.fpt

	Article: Q221666
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You use the Visual FoxPro SQL Server Upsizing Wizard to upsize a database to SQL
	Server. You select the Save Generated SQL option in step 7 of the wizard. When
	the generated SQL code is saved to the Script.dbf file, the memo file Script.fpt
	will grow to a very large size. This may be on the order of hundreds of
	megabytes. Issuing a PACK MEMO on Script.dbf will cause the size of the memo
	file to be reduced by a factor of about 1000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make a new directory and set it as the default directory within Visual
	  FoxPro. You will need 200+ MB free on this drive.
	
	2. Run the following code from a program (.PRG) file. It creates a DBC with 200
	  10-field tables, with relations between each table and the next and indexes
	  on all the fields:
	
	  SET SAFETY OFF
	  SET TALK OFF
	  CLEAR
	  CLOSE DATA ALL
	  CREATE DATABASE testdb
	  FOR lni = 1 TO 200
	     CREATE TABLE ('thisisthetabname'+ALLTR(STR(lni))) ;
	        (('FieldName1') C(10) NOT NULL PRIMARY KEY, ;
	        ('FieldName2') C(10) NOT NULL, ;
	        ('FieldName3') C(10) NOT NULL, ;
	        ('FieldName4') C(10) NOT NULL, ;
	        ('FieldName5') C(10) NOT NULL, ;
	        ('FieldName6') C(10) NOT NULL, ;
	        ('FieldName7') C(10) NOT NULL, ;
	        ('FieldName8') C(10) NOT NULL, ;
	        ('FieldName9') C(10) NOT NULL, ;
	        ('FieldName10') C(10) NOT NULL)
	     IF lni > 1
	        ALTER TABLE ('thisisthetabname'+ALLTR(STR(lni-1))) ;
	           ADD FOREIGN KEY TAG ('FieldName1') REFERENCES ;
	           ('thisisthetabname'+ALLTR(STR(lni))) TAG ('FieldName1')
	     ENDIF
	     FOR lnj = 2 TO 10
	        lcExpr = 'FieldName'+ALLTR(STR(lnj))
	        INDEX ON &lcExpr TAG ('fldname'+ALLTR(STR(lnj)))
	     ENDFOR
	  ENDFOR
	
	3. Run the SQL Server Upsizing Wizard.
	
	4. Select the DBC you created above in Upsizing Wizard step 1, and then click
	  Next.
	
	5. In step 2, select an ODBC datasource to a SQL Server you can upsize to. Log
	  on and then click Next.
	
	6. In step 3, select all of the tables, and then click Finish.
	
	7. In step 9, click the Save Generated SQL option, then click Finish again.
	
	8. After Upsizing Wizard has completed, execute the following commands from the
	  Command window:
	
	  DIR upsize\script.fpt
	  USE upsize\script EXCLUSIVE
	  PACK MEMO
	  DIR upsize\script.fpt
	
	RESULTS: Before the PACK MEMO command, the DIR command will return 206,797,184
	bytes as the size of the Script.fpt file.
	
	After the PACK MEMO command, the DIR command will return 201,472 bytes as the
	size of the Script.fpt file.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
