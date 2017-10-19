---
layout: page
title: "Q229779: PRB: Data Environment Stores Paths as Relative Paths"
permalink: /kb/229/Q229779/
---

## Q229779: PRB: Data Environment Stores Paths as Relative Paths

	Article: Q229779
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC k
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you develop a form with one or more tables in the data environment and the
	table in the data environment is on the same drive as the Visual FoxPro form,
	when the form is deployed to computers, the data environment looks on the local
	drive for the table, resulting in the following error:
	
	  Error instantiating cursor object. Could not find (table file name).
	
	CAUSE
	=====
	
	The data environment stores the path to the table as a relative path. For
	example, if a table used in the data environment is located in "F:\MyData" and
	the form is located in "F:\MyData\Forms," Visual FoxPro stores the path as
	"..\MyTable.Dbf" instead of storing the path as "F:\MyData\MyTable.Dbf." When a
	relative path is stored, Visual FoxPro looks for the table on the drive that the
	form is run from.
	
	RESOLUTION
	==========
	
	There are two possible resolutions for this problem.
	
	1. The first is to manually edit the SCX file. To do this, use the following
	  steps:
	
	  a. Use the SCX file as a table, making sure to include the SCX extension. For
	     instance, USE MyForm.Scx.
	
	  b. Browse the SCX file. Double-click on the Class memo field and position the
	     memo field window and the browse window so that both are visible.
	
	  c. Scroll through the records in the browse window until the memo field
	     window displays "cursor" (without the quotation marks).
	
	  d. In the Properties memo field window, edit the CursorSource property so
	     that it has the full path, not a relative path. For instance,
	     "d:\MyDirectory\Data\MyTable.dbf" instead of "..\MyTable.Dbf." The
	     CursorSource property can be entered with or without quotation marks.
	     However, if the path contains spaces, quotation marks are required.
	
	  e. Double-click the Properties memo field in the browse window.
	
	2. A second resolution is to create the form on a different drive than the one
	  on which the tables are stored. Visual FoxPro stores the complete path in the
	  data environment.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following code into the Command window:
	
	  MD C:\DE_TEST
	  CD C:\DE_TEST
	  CREATE TABLE DE_TEST (ID C(10))
	  MD C:\DE_TEST\FORMS
	  CD C:\DE_TEST\FORMS
	  MODIFY FORM DE_TEST
	
	2. When the form opens, right-click on the form and select Data Environment. In
	  the Add Table or View dialog box, click Other. In the Open dialog box, find
	  and double-click the table C:\DE_TEST\DE_TEST.DBF.
	
	3. Save the form and close it.
	
	4. Move the form to a directory on a drive other than C:. For example, move the
	  form to d:\de_test. Run the form by typing the following command in the
	  Command window:
	
	  DO FORM D:\de_test\de_test
	
	Note that the following error message is displayed:
	
	  Error instantiating cursor object. Could not find (table file name).
	
	REFERENCES
	==========
	
	For additional information on the data environment, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q128996 HOWTO: Assign Database Location Generically in Data Env
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
