---
layout: page
title: "Q224697: WD97: Word Mail Merge Starts Second Instance of Access"
permalink: kb/224/Q224697/
---

## Q224697: WD97: Word Mail Merge Starts Second Instance of Access

	Article: Q224697
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word8 word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge from Microsoft Word and use a Microsoft Access
	database, multiple instances of Access may be started. When you close Word, some
	instances of Microsoft Access do not close.
	
	CAUSE
	=====
	
	This behavior occurs when the following conditions are true:
	
	- You use Dynamic Data Exchange (DDE) to connect to your database.
	
	  -and-
	
	- The Application Title of your Access database has been changed so that it
	  does not start with Microsoft Access.
	
	By default, when you use DDE to connect to your Access database, Word checks to
	see whether Microsoft Access is running. If Access is found, DDE then checks to
	see whether the database file is open. To do this, DDE checks for an open window
	(it checks the Application Title of the open window) that contains the string
	beginning with "Microsoft Access." If Word does not find a match for both of
	these criteria, it starts a new instance of the database program and then opens
	your database file.
	
	RESOLUTION
	==========
	
	To resolve this problem when you use Dynamic Data Exchange to connect to your
	Microsoft Access database file, upgrade to Microsoft Word 2000.
	
	WORKAROUND
	==========
	
	To prevent multiple instances of Microsoft Access being started when connecting
	to your database file, use one of the following methods:
	
	Method 1: Use ODBC
	------------------
	
	Connect to your Access database using Open Database Connectivity (ODBC). To do
	this, follow these steps:
	
	1. Create the mail merge main document. To do this, follow these steps:
	
	  a. On the Tools Menu, click Mail Merge.
	
	  b. Click Create. Click to select the type of mail merge main document you
	     want to create.
	
	  c. Click either Active Window or New Main Document.
	
	2. In the Mail Merge Helper, click Get Data and then click Open Data Source.
	
	3. In the Open Data Source dialog box, click the Select Method check box. Select
	  the *.mdb file you want to use, and click Open.
	
	4. In the Confirm Data Source dialog box, click "MS Access Database via ODBC
	  (*.mdb)" and click OK.
	
	5. In the Select Table dialog box, select the table you want to use and click
	  OK.
	
	Method 2: Delete Your Database Application Title
	------------------------------------------------
	
	If you modified the Application Title in your Access database, use the following
	steps to remove the Application Title:
	
	1. In Microsoft Access, open your database file.
	
	2. On the Tools menu, click Startup.
	
	3. In the Startup dialog box, delete the contents of the Application Title box
	  and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta word8 word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
