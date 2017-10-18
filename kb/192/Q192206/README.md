---
layout: page
title: "Q192206: FIX: Built .Exe Does Not Include .Dcx from Included .Dbc"
permalink: kb/192/Q192206/
---

## Q192206: FIX: Built .Exe Does Not Include .Dcx from Included .Dbc

	Article: Q192206
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have created a Visual FoxPro executable from a project, which contains a
	database that is marked as Included in the Project Manager. When the executable
	attempts to open that database, the following error occurs:
	
	  Index does not match table.
	
	CAUSE
	=====
	
	The database's index file is not included in the executable.
	
	RESOLUTION
	==========
	
	Add the database container's corresponding index file (with the filename
	<database file name>.dcx) to your project under Other Files, and mark it
	as Included.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The database container in Visual FoxPro is actually three files. Each will have
	the same filename, but the extensions are different. There is a table file (with
	an extension of .dbc), a memo file (with an extension of .dct), and an index
	(with an extension of .dcx). It is the .dcx file that is not correctly included
	in the executable.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project.
	
	2. Create a new database container called Testdbc and add it to the project.
	
	3. Right-click the database in the Project Manager and select Include from the
	  Context menu.
	
	4. Add a new program called Main to the project, with the following contents:
	
	        CD (SUBSTR(SYS(16), 1, RAT('\',SYS(16),1)-1))
	        OPEN DATABASE testdbc
	
	5. Build the project into an executable (.exe) file.
	
	6. Move the executable created in step 5 to a directory that does not contain
	  the database container created in step 2.
	
	  An error dialog box appears with the following:
	
	  Index does not match table.
	
	  As a workaround, in the preceding steps, add an additional step (3a), between
	  steps 3 and 4 as follows:
	
	     3a. Select the Other tab in the Project Manager dialog box. Highlight
	         the Other Files node in the list, and click the Add button. In
	         the Open dialog box, select the "All files (*.*) from the "Files
	         of type" drop-down list box. Then select the testdbc.dcx file
	         from the file listing, and click the OK button.
	
	This allows the executable to run without error.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: kbProjManager kbVFp500abug kbVFp600fix kbDatabase KbDBFDBC
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
