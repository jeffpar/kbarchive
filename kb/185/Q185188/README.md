---
layout: page
title: "Q185188: PRB: Cannot Use Visual FoxPro Table in Word 97 Mail Merge"
permalink: /kb/185/Q185188/
---

## Q185188: PRB: Cannot Use Visual FoxPro Table in Word 97 Mail Merge

	Article: Q185188
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0b,5.0,5.0a,6.0,97
	Operating System(s): 
	Keyword(s): kbODBC kbvfp300 kbvfp500 kbvfp600 kbWord97 kbMDAC250
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Word 97 for Windows 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge in Microsoft Word 97 for Windows using a Visual
	FoxPro table contained in a database container, the following error message
	appears:
	
	  Word was unable to open the data source.
	
	CAUSE
	=====
	
	Word is unable to open Visual FoxPro for Windows tables contained in a database
	container.
	
	RESOLUTION
	==========
	
	Use one of the following three to perform a mail merge in Microsoft Word 97 for
	Windows using a Visual FoxPro table contained in a database container.
	
	Method 1: Copy Native Visual FoxPro Table to a 2.x Format
	---------------------------------------------------------
	
	1. In Visual FoxPro for Windows, open the table.
	
	2. Issue the following command in the Command Window or program:
	
	  COPY TO <newtablename> TYPE FOX2X
	
	Method 2: Use MSQuery from Word
	-------------------------------
	
	1. When using the Mail Merge Helper in Word, click MS Query in the Open Data
	  Source dialog box.
	
	2. When MSQuery opens, select the Visual FoxPro ODBC dataset from the list in
	  the Choose Data Source dialog box.
	
	3. Select the table, create the query, and then return to Word.
	
	Method 3: Remove Table from Database Container
	----------------------------------------------
	
	1. If the table is part of the database container DBC, open the DBC.
	
	2. Locate the table to be used in the merge, right-click the table and click
	  Delete.
	
	3. A dialog box appears and prompts you to either remove the table from the DBC
	  or delete the table from the disk. Click Remove to free the table from the
	  DBC.
	
	You can also issue the FREE TABLE command in the Command window. For example,
	open the DBC and free the table as follows:
	
	  MODIFY DATABASE testdata
	  FREE TABLE mymergetable
	  CLOSE DATABASES ALL
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Word 97 for Windows can to open FoxPro 2.x tables with the ISAM driver for use
	in mail merges if the driver has been installed. The steps below assume that the
	ISAM driver has been installed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Word 97, go to the Tools menu and click Mail Merge. The Mail Merge Helper
	  appears.
	
	2. In Section 1 - Main document, click Create. Click Form Letters, and click
	  Active Window in the message box.
	
	3. In section 2 - Data source, click Get Data and click Open Data Source.
	
	4. In the Open Data Source window, change the Files of type to Microsoft FoxPro
	  Files (*.dbf).
	
	5. Locate a Visual FoxPro for Windows 3.0b or 5.0x table, and click Open.
	
	6. In the Confirm Data Source dialog box, click FoxPro Files through ODBC
	  (*.dbf) and click OK.
	
	  NOTE: If MS FoxPro Files (*.dbf) is not available, you must install the data
	  access (ODBC) utilities using the Office 97 Setup program.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q180120 WD97: Word Setup Does Not Install ODBC Drivers
	
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Robert Dean Christopher, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbvfp300 kbvfp500 kbvfp600 kbWord97 kbMDAC250 
	Technology        : kbWordSearch kbVFPsearch kbAudDeveloper kbWord97 kbWord97Search kbZNotKeyword2 kbMDACSearch kbMDAC250 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0b,5.0,5.0a,6.0,97
	Issue type        : kbprb
	
	=============================================================================
	
