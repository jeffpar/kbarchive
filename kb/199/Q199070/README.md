---
layout: page
title: "Q199070: DOC: RDO UpdateCriteria Documentation Incorrect"
permalink: /kb/199/Q199070/
---

## Q199070: DOC: RDO UpdateCriteria Documentation Incorrect

{% raw %}

	Article: Q199070
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbDatabase kbRDO kbVBp kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic documentation on the RDO UpdateCriteria property is incorrect.
	There are two specific problems with the documentation:
	
	- The UpdateCriteria Property documentation incorrectly states that the default
	  is rdCriteriaKey (0). The default is really rdCriteriaUpdCols (2).
	
	  -and-
	
	- The rdCriteriaAllCols constant and the rdCriteriaUpdCols constant
	  'rdoResultset type' sections are reversed. The documentation for
	  rdCriteriaAllCols should read as follows:
	
	  "Uses the key column(s) and all the columns in the where clause".
	
	  The rsCriteriaUpdCols description should read as follows:
	
	  "Uses the key column(s) and all updated columns in the where clause."
	
	MORE INFORMATION
	================
	
	The code below demonstrates the usage of the UpdateCriteria property and also
	shows the query that is sent to the database, depending on which constant is
	used. This sample code assumes that you are using a SQL Server database with the
	pubs database.
	
	1. Start a new Visual Basic Standard EXE project and add a a reference to the
	  Microsoft Remote Data Objects Library.
	
	2. Add a command button to the default form.
	
	3. Add the following code to the form.
	
	  NOTE: You need to modify the connection string to point to your database.
	
	     Private Sub Command1_Click()
	
	      Const szConnect = "DSN=yourDSN;uid=sa;pwd="
	      On Error GoTo errhandler
	      Dim cn As rdoConnection
	      Dim rs As rdoResultset
	      Dim SQL As String
	
	      Set cn = New rdoConnection
	      With cn
	          .CursorDriver = rdUseClientBatch
	          .Connect = szConnect
	          .EstablishConnection rdDriverNoPrompt, False
	      End With
	
	      SQL = "SELECT * FROM Authors"
	      Set rs = cn.OpenResultset(SQL, rdOpenKeyset, rdConcurBatch, 0)
	      Debug.Print "Update Criteria (Default): " & rs.UpdateCriteria
	
	      With rs
	
	          rs.MoveFirst
	          rs.UpdateCriteria = rdCriteriaKey       '0
	          rs.Edit
	          rs(1).Value = "Mike1"
	          rs.BatchUpdate
	          Debug.Print "BatchUpdate w/Criteria: " & rs.UpdateCriteria
	          'SQL TRACE: UPDATE Authors SET au_lname='Mike1' WHERE
	          'au_id='172-32-1176'
	
	          rs.MoveFirst
	          rs.UpdateCriteria = rdCriteriaAllCols   '1
	          rs.Edit
	          rs(1).Value = "Mike2"
	          rs.BatchUpdate
	          Debug.Print "BatchUpdate w/Criteria: " & rs.UpdateCriteria
	          'SQL TRACE: UPDATE Authors SET au_lname='Mike2' WHERE
	          'au_id='172-32-1176' AND au_lname='Mike1' AND au_fname='John' AND
	          'phone='408 496-7223' AND address='10932 Bigge Rd.' AND city='Menlo
	          'Park' AND state='CA' AND zip='94025' AND contract=1
	
	          rs.MoveFirst
	          rs.UpdateCriteria = rdCriteriaUpdCols   '2
	          rs.Edit
	          rs(1).Value = "Mike3"
	          rs.BatchUpdate
	          Debug.Print "BatchUpdate w/Criteria: " & rs.UpdateCriteria
	          'SQL TRACE: UPDATE Authors SET au_lname='Mike3' WHERE
	          'au_id='172-32-1176' AND au_lname='Mike2'
	
	      End With
	
	      Exit Sub
	
	     errhandler:
	      Debug.Print "--ERRORS OCCURRED--"
	      Debug.Print "Err.Number: " & Err.Number & "   "
	      Debug.Print "Err.Description: " & Err.Description & "   "
	
	     End Sub
	
	4. Run the code then click the command button.
	
	You may want to run the SQL Trace utility while running this code so that you can
	see the queries that are actually being issued against the database when the
	BatchUpdate method is executed. Samples of these SQL Trace results have been
	included in the preceding code for demonstration.
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Mike
	Ruthruff, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbDatabase kbRDO kbVBp kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
