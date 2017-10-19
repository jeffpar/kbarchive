---
layout: page
title: "Q177187: BUG: Stored Procedures Cannot Process NULL Parameters from VB"
permalink: /kb/177/Q177187/
---

## Q177187: BUG: Stored Procedures Cannot Process NULL Parameters from VB

	Article: Q177187
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
	
	A SQL stored procedure produces unexpected results if a NULL parameter is passed
	from a Visual Basic application using RDO. This behavior also occurs if the SQL
	stored procedure declares an optional parameter whose default value is NULL and
	no parameters are passed.
	
	RESOLUTION
	==========
	
	The workaround is to modify the SELECT statement in the stored procedure.
	
	If a stored procedure is declared as:
	
	     CREATE PROC Test_SP
	        @Param VARCHAR (20) = NULL
	     AS
	     SELECT * FROM Test_Table WHERE Field = @Param
	     GO
	
	replace it with:
	
	     CREATE PROC Test_SP
	     @Param VARCHAR (20) = NULL
	     AS
	     IF @Param = NULL
	        SELECT * FROM Test_Table WHERE Field = NULL
	     ELSE
	        SELECT * FROM Test_Table WHERE Field = @Param
	     GO
	
	The following can also be used:
	
	     CREATE PROC Test_SP
	     @Param VARCHAR (20) = NULL
	     AS
	     SELECT * FROM Test_Table WHERE (Field = NULL and @Param = NULL) OR
	                                   (Field = @Param)
	     GO
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following SQL script on the SQL Server:
	
	        CREATE PROC Test_SP
	
	              @Param VARCHAR (20) = NULL
	
	           AS
	
	           SELECT * FROM Test_Table WHERE Field2 = @Param
	
	           GO
	
	          CREATE TABLE Test_Table
	           (
	              Field1 INT NULL,
	              Field2 VARCHAR (20) NULL
	           )
	           GO
	
	           INSERT INTO Test_Table (Field1) Values (1)
	           INSERT INTO Test_Table (Field1) Values (2)
	
	2. You should now have a stored procedure called Test_SP and a table called
	  Test_Table that contains the following data:
	
	  Field1      Field2
	  ----------- --------------------
	  1           (null)
	  2           (null)
	
	3. From ISQL or SQL Query Tool, type "Test_SP" and note that two rows are
	  returned.
	
	4. Start Visual Basic, add a CommandButton, and place the following RDO code in
	  the Click event (NOTE: The Microsoft Remote Data Object must be added from
	  Project References menu):
	
	        Dim cn                   As New rdoConnection
	        Dim rs                   As rdoResultset
	        Dim sql                  As String
	
	        cn.CursorDriver = rdUseOdbc
	        cn.Connect = "driver={sql server};" & _
	                     "server=your_server_name;" & _
	                     "uid=sa;pwd=;" & _
	                     "database=pubs;"
	        cn.EstablishConnection rdDriverNoPrompt
	
	        sql = "Test_SP"
	        Set rs = cn.OpenResultset(sql, rdOpenKeyset, rdConcurReadOnly)
	
	        If Not rs.EOF Then rs.MoveLast
	        MsgBox rs.RowCount
	
	        rs.Close
	        cn.Close
	
	        Set rs = Nothing
	        Set cn = Nothing
	
	5. Note that no rows are returned.
	
	Additional query words: sqlserver kbVBp500 kbVBp600 kbdsE kbDSupport kbVBp kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
