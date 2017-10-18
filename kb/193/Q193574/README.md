---
layout: page
title: "Q193574: FIX: DBGETPROP() of Offline Property May Incorrectly Return .T."
permalink: kb/193/Q193574/
---

## Q193574: FIX: DBGETPROP() of Offline Property May Incorrectly Return .T.

	Article: Q193574
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempt to take a view offline with the CREATEOFFLINE() function using a
	tablename specified in the CREATEOFFLINE() cPath parameter that already exists
	and select No in the dialog box that prompts you to overwrite the existing file.
	The CREATEOFFLINE() returns .F. as expected, and the view is not taken offline.
	When you use DBGETPROP() to check the view's Offline property, the return value
	is .T., incorrectly indicating the view is offline.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        * Make sure you run this from a directory that contains no Testtab1
	        * table or Testdb database files that you wish to preserve because
	        * they will be overwritten.
	
	        LOCAL lcTempFile
	        SET SAFETY OFF
	        CLEAR
	        CLOSE DATABASE ALL
	
	        * Make a Database.
	        CREATE DATABASE testdb
	
	        * Add a table.
	        CREATE TABLE testtab1 (F1 C(10) NOT NULL ;
	           PRIMARY KEY, ;
	           F2 C(10) NOT NULL)
	
	        * Get the temp directory and concatenate the file name.
	        lcTempFile = GETENV('temp')+'\xxx.dbf'
	        SET RESOURCE OFF
	        COPY FILE (SYS(2005)) TO (lcTempFile)
	        SET RESOURCE ON
	
	        * Create view.
	        CREATE VIEW lvTestview AS SELECT * FROM testtab1
	        SET SAFETY ON
	
	        * Attempt to take view offline, but select No in the dialog box.
	        * This returns .F. as expected.
	        ?"CreateOffline returns ", CREATEOFFLINE('lvTestview', lcTempFile)
	
	        * Check to see if view is offline. DBGETPROP returns .T., but should
	        * return .F.
	        ?"DBGetprop 'Offline' returns ", DBGETPROP('lvTestview', 'View', ;
	         'Offline')
	
	        * Clean up temp file.
	        DELETE FILE (lcTempFile)
	        CLOSE DATABASE ALL
	
	2. Select No when prompted to overwrite the existing file.
	
	CREATEOFFLINE() returns .F. as expected. DBGETPROP('xxx', 'View', 'Offline')
	returns .T., indicating that the view is offline, when really it is not offline.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbVFp600fix kbDatabase kbvfp500 kbvfp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
