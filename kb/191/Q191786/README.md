---
layout: page
title: "Q191786: BUG: VisData Error &quot;Importing/exporting Table Names with Spaces&quot;"
permalink: /kb/191/Q191786/
---

## Q191786: BUG: VisData Error &quot;Importing/exporting Table Names with Spaces&quot;

{% raw %}

	Article: Q191786
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the VISDATA Add-in for Visual Basic to import and export tables from
	one database to another, you receive one of the following error messages:
	
	  Query input must contain at least one table or query.
	  Number: 3067
	
	or:
	
	  Syntax error in FROM clause.
	  Number: 3131
	
	CAUSE
	=====
	
	VISDATA input/output routines do not concatenate [ ] around table names, causing
	the Microsoft Jet database engine to have problems parsing the SQL statement.
	
	RESOLUTION
	==========
	
	If you do not have the source code to VISDATA available, either:
	
	- Rename the tables to eliminate spaces from the name.
	
	-or-
	
	- Use Microsoft Access, other tool, or write a custom program to perform the
	  import/export operation.
	
	-or-
	
	- If you do have the source code to VISDATA, you can make a simple modification
	  to each of the Import and Export routines to solve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The Microsoft Jet database engine uses square brackets [ and ] to delimit table,
	field, and parameter names. In the case of simple names, having no spaces or
	punctuation, you do not have to use these delimiters. The code in VISDATA's
	Import and Export routine was written without the use of these delimiters and
	thus can only accept simple table names.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run VISDATA.EXE from your Visual Basic directory. Alternatively, you can run
	  Visual Basic and choose: Add-Ins | Visual Data Manager.
	
	  NOTE: You do not have to create a project to do this.
	
	2. In VISDATA, select: File | Open Database | Microsoft Access.
	
	3. Locate NWIND.MDB and click Open.
	
	4. Select Import/Export.
	
	5. In the Import/Export dialog, select the Categories table and click the Export
	  Table(s) button.
	
	6. In the Export 'Categories' dialog, choose Access MDB and click OK.
	
	7. Locate BIBLIO.MDB and click Save.
	
	8. In the Export dialog, rename Categories to Cat Backup and click OK.
	
	  You will see the error message displayed. You can see a similar error
	  importing the Title Author table from BIBLIO.MDB into NWIND.MDB. This problem
	  also affects other database types, such as spreadsheets.
	
	Correcting VISDATA
	------------------
	
	For the corrections listed below, make a copy of the line in question and comment
	it out. Modify the uncommented version of the line. This preserves the original
	code.
	
	1. Use Windows' Find File utility to locate VISDATA.VBP.
	
	2. Double-click the filename to launch Visual Basic.
	
	3. Open modVisData (VISDATA.BAS).
	
	4. In Sub Export, change the following line from:
	
	              gdbCurrentDB.Execute "select * into " & sConnect &
	        StripOwner(sNewTblName) & " from " & StripOwner(rsFromTbl)
	
	  to:
	
	              gdbCurrentDB.Execute "select * into " & sConnect & "[" &
	        StripOwner(sNewTblName) & "] from [" & StripOwner(rsFromTbl) & "]"
	
	5. In Sub Import, change the following line from:
	
	              gdbCurrentDB.Execute "select * into " & sNewTblName & " from "
	        & sConnect & sOldTblName
	
	  to:
	
	              gdbCurrentDB.Execute "select * into [" & sNewTblName & "] from
	        " & sConnect & "[" & sOldTblName & "]"
	
	6. Save your changes and use File | Make VISDATA.exe to rebuild the application.
	  Move the file to your Visual Basic home directory and overwrite the old
	  version of the file. You may want to back up or rename the original file
	  first.
	
	For Visual Basic 6.0 and Visual Studio 6.0, VISDATA is located on the MSDN CD-ROM
	and not the Visual Basic CD-ROM.
	
	Additional query words: kbVBp600bug kbVBp500bug kbCodeSamProd kbdse kbVS600 kbDSupport kbVBp kbAddin
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
