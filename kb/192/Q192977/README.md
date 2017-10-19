---
layout: page
title: "Q192977: FIX: Table Allows Modification Although DBC is Opened NOUPDATE"
permalink: /kb/192/Q192977/
---

## Q192977: FIX: Table Allows Modification Although DBC is Opened NOUPDATE

	Article: Q192977
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open a database in Visual FoxPro with the NOUPDATE option of the OPEN
	DATABASE command, and then you modify the structure of a table contained in that
	database, you can save changes to the table structure. This can cause the
	database to become invalid.
	
	RESOLUTION
	==========
	
	In the versions of Visual FoxPro previous to 6.0, do not modify a table
	structure if the OPEN DATABASE command uses the NOUPDATE argument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	        CLEAR
	        CLOSE DATABASE ALL
	        SET SAFETY OFF
	        CREATE DATABASE 'TESTDB.DBC'
	        CREATE TABLE 'TESTTAB.DBF' NAME 'TESTTAB' (CFIELD C(3) NOT NULL)
	        CLOSE DATABASE ALL
	        OPEN DATABASE testdb NOUPDATE
	        USE testtab EXCLUSIVE
	        MODIFY STRUCTURE
	        VALIDATE DATABASE
	
	2. When the Table Designer displays, create an index on the Cfield field and
	  then click the OK button.
	
	3. Click Yes in the confirmation dialog to make the changes permanent.
	
	4. Click OK in the "Cannot update cursor" error dialog box.
	
	NOTE: The VALIDATE DATABASE command yields an error that the newly created index
	is missing from the database container.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600fix KbDBFDBC kbDatabase kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
