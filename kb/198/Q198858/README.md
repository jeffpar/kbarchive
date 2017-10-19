---
layout: page
title: "Q198858: BUG: Cannot Do Inserts to Oracle Tables With Mixed Case Column N"
permalink: /kb/198/Q198858/
---

## Q198858: BUG: Cannot Do Inserts to Oracle Tables With Mixed Case Column N

	Article: Q198858
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbOracle kbRDO kbRDO200bug kbVBp500bug kbVBp600bug kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When trying to do an insert to an Oracle table, you receive the following error
	message:
	
	  Invalid Column Name
	
	CAUSE
	=====
	
	The SourceColumn Property of rdoColumns is bringing back the incorrect column
	name. It does not place the quotes around the column name as specified in the
	statement:
	
	  cn.Execute "CREATE TABLE mixed(""Col1"" varchar(20))"
	
	This statement specifies quotes around Col1. In Oracle, this creates a column
	name "Col1."
	
	RESOLUTION
	==========
	
	Before trying the Insert, change the SourceColumn property to add the quotes
	around the column name. For example:
	
	  rs.rdoColumns(0).SourceColumn = """Col1"""
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic.
	
	2. Create a Standard Exe Project.
	
	3. Create a reference to Microsoft Remote Data Objects 2.0.
	
	4. Place a CommandButton on the Form.
	
	5. In the Command Button's click event, place the following code:
	
	          Dim cn As New rdoConnection
	          Dim rs As rdoResultset
	          Dim q As rdoQuery
	          Dim strConnect As String
	
	              strConnect = "dsn=orac;UID=pss;PWD=pss"
	              cn.Connect = strConnect
	              cn.CursorDriver = rdUseClientBatch
	              cn.EstablishConnection
	              'uncomment below line after mixed table created
	              ' cn.Execute "DROP TABLE mixed"
	              cn.Execute "CREATE TABLE mixed(""Col1"" varchar(20))"
	              Set q = cn.CreateQuery("bob", "SELECT * FROM mixed")
	              Set rs = q.OpenResultset(rdOpenKeyset, rdConcurLock)
	              'rs.rdoColumns(0).SourceColumn = """Col1"""
	              rs.AddNew
	              rs(0) = "alfka"
	              rs.Update
	              rs.BatchUpdate
	              rs.Requery
	              Debug.Print rs(0).Value
	
	6. Run the Project, Click the Command1 Button.
	
	  Result: You will receive the "Invalid Column name" error.
	
	  If you uncomment the SourceColumn line, the code will work.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOracle kbRDO kbRDO200bug kbVBp500bug kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
