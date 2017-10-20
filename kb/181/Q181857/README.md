---
layout: page
title: "Q181857: PRB: RDO Run-time Error '40060': Incorrect Type for Parameter"
permalink: /kb/181/Q181857/
---

## Q181857: PRB: RDO Run-time Error '40060': Incorrect Type for Parameter

{% raw %}

	Article: Q181857
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When assigning the value of a field from one Resultset to another (such as,
	rs2!FieldX = rs1!FieldY), you may get the following error:
	
	  Run-time error '40060'
	  Incorrect type for parameter
	
	CAUSE
	=====
	
	FieldY has a NULL value.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Use the following assignment expression:
	
	        rs2!FieldX = rs1!FieldY.Value
	
	- Assign the value of the field to a Variant variable as an intermediate step:
	
	        MyVariant = rs1!FieldY
	        rs2!FieldX = MyVariant
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use ISQL/W or another tool to create a table using the following SQL
	  statement:
	
	        CREATE TABLE dbo.TestNull (
	          ID int NOT NULL ,
	          F1 varchar (10) NULL ,
	          CONSTRAINT PK_TestAddNew_1__15 PRIMARY KEY  CLUSTERED
	            (
	            ID
	            )
	        )
	
	2. Add a record, leaving F1 with a NULL value. You may do this in ISQL/W or
	  VISDATA in Visual Basic.
	
	3. In Visual Basic 5.0, create a new project.
	
	4. Reference Microsoft Remote Data Objects 2.0.
	
	5. Add a command button (Command1) and the following code:
	
	        Private Sub Command1_Click()
	        Dim cn As rdoConnection, rs1 As rdoResultset, rs2 As rdoResultset
	          rdoEngine.rdoDefaultCursorDriver = rdUseServer
	          Set cn = rdoEngine(0).OpenConnection("", rdDriverNoPrompt, False, _
	            "Driver={SQL Server};Server=moonbase;uid=sa;pwd=;database=pubs")
	          Set rs1 = cn.OpenResultset("SELECT * FROM TestNull", _
	            rdOpenKeyset, rdConcurValues, rdExecDirect)
	          rs1.MoveLast
	          Set rs2 = cn.OpenResultset("SELECT * FROM TestNull", _
	            rdOpenKeyset, rdConcurValues, rdExecDirect)
	          rs2.Edit
	          rs2!F1 = rs1!F1
	          rs2.Update
	          rs1.Close
	          rs2.Close
	          cn.Close
	        End Sub
	
	6. Run the project and click the command button and the error message will
	  appear.
	
	7. Change the line:
	
	        rs2!F1 = rs1!F1
	
	  -to-
	
	         rs2!F1 = rs1!F1.Value
	
	8. Run the project again, and the error will not appear.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp kbWinOS98 kbDSupport kbdse kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
