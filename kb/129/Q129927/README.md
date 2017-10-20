---
layout: page
title: "Q129927: HOWTO: Determine If a Table or Query Exists"
permalink: /kb/129/Q129927/
---

## Q129927: HOWTO: Determine If a Table or Query Exists

{% raw %}

	Article: Q129927
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows, by example, how to determine if a given table or query
	exists in a database opened by Visual Basic.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a module (Module1) to your Project.
	
	3. If using VB 5.0, establish a reference to Microsoft DAO 3.x Object Library
	  using the References command from the Project menu.
	
	4. Add the following line to the General Declarations section of Module1:
	
	        Public Const NameNotInCollection = 3265
	
	5. Add the following code to the General Declarations section of Form1:
	
	        Dim DB As Database
	
	        Private Function ExistsTableQuery(TName As String) As Boolean
	           Dim Test As String
	           On Error Resume Next
	
	           ' See if the name is in the Tables collection:
	           Test = db.TableDefs(TName).Name
	           If Err <> NameNotInCollection Then
	              ExistsTableQuery = True
	              ' Reset the error variable:
	              Err = 0
	              ' See if the name is in the Queries collection:
	              Test = db.QueryDefs(TName$).Name
	              If Err <> NameNotInCollection Then
	                 ExistsTableQuery = True
	              End If
	           End If
	        End Function
	
	6. Add the following code to the Form1_Load procedure:
	
	        Private Sub Form_Load ()
	        Set DB = DBEngine.Workspaces(0).Opendatabase("Biblio.mdb")
	        Debug.Print "BadTable " ;IIF (ExistsTableQuery("BadTableName"), _
	           "does", "doesn't"); " exist."
	        Debug.Print "Authors " ;IIF (ExistsTableQuery("Authors"), _
	           "does", "doesn't"); " exist."
	        End Sub
	
	7. Start the program by choosing Start from the Run menu or by pressing the F5
	  key. The Immediate window correctly prints:
	
	        BadTable doesn't exist.
	        Authors does exist.
	
	Additional query words: kbHowTo kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
