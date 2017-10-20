---
layout: page
title: "Q186265: HOWTO: Use the SQL Server DATEPART Function to Get Milliseconds"
permalink: /kb/186/Q186265/
---

## Q186265: HOWTO: Use the SQL Server DATEPART Function to Get Milliseconds

{% raw %}

	Article: Q186265
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1 SP2,2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbADO200 kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbADO210sp2
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.1 SP2, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the SQL Server DATEPART() function to get the milliseconds of a SQL
	Server datetime field returned to a Visual Basic application.
	
	The advantage of using the SQL Server DATEPART() function is that it is simple to
	use and works with all versions of ADO, DAO, and RDO. The disadvantage of using
	the DATEPART() function is that it is specific to SQL Server. However, other
	servers may have comparable functions.
	
	Do not confuse the SQL Server DATEPART() function with the Visual Basic
	DatePart() function, which is used with the Visual Basic Date datatype.
	
	MORE INFORMATION
	================
	
	The SQL Server DATEPART() function returns a portion of a SQL Server datetime
	field.
	
	The syntax of the SQL Server DATEPART() function is:
	
	     DATEPART(portion, datetime)
	
	where datetime is name of a SQL Server datetime field and portion is one of the
	following:
	
	  Ms    for Milliseconds
	  Yy    for Year
	  Qq    for Quarter of the Year
	  Mm    for Month
	  Dy    for the Day of the Year
	  Dd    for Day of the Month
	  Wk    for Week
	  Dw    for the Day of the Week
	  Hh    for Hour
	  Mi    for Minute
	  Ss    for Second
	
	Use the SQL Server DATEPART() function in a Transact-SQL (T-SQL) SELECT
	statement. An example T-SQL statement using DATEPART() follows:
	
	     SELECT Pubdate, DATEPART(Ms, Pubdate) FROM Titles
	
	This would return Pubdate and the millisecond portion of Pubdate.
	
	Sample Code
	-----------
	
	The following example uses the ActiveX Data Objects (ADO) 1.5 library. The same
	T-SQL statement would work with the DAO and RDO libraries also.
	
	1. Create a System Datasource named Pubs. The Datasource should use the SQL
	  Server driver and the Pubs database that is included with SQL Server.
	
	2. Create a new Visual Basic Standard EXE Project. Form1 is created by default.
	
	3. Add a reference to the Microsoft ActiveX Data Objects library.
	
	4. Place a CommandButton on Form1, and copy the following code into the
	  Command1_Click() event procedure:
	
	        Dim rs As New ADODB.Recordset
	        Dim strSql As String
	        Dim strCnn As String
	
	        strCnn = "DSN=Pubs;UID=;PWD=;DATABASE=Pubs"
	        strSql = "SELECT pubdate, datepart(Ms,pubdate) FROM titles"
	
	        rs.Open strSql, strCnn, adOpenKeyset, adLockOptimistic
	        rs.MoveFirst
	
	        Debug.Print "PubDate", "Milliseconds"
	        Do Until rs.EOF
	            Debug.Print rs(0), rs(1)
	            rs.MoveNext
	        Loop
	        rs.Close
	
	  NOTE: You may need to modify the UID and PWD to represent your SQL Server
	  installation ie UID=sa.
	
	5. Run the project.
	
	6. Click Command1 to execute the above code.
	
	7. Choose View, Immediate Window from the Visual Basic Standard Toolbar to see
	  the program's output.
	
	REFERENCES
	==========
	
	For more information on the SQL Server DATEPART() function, look in the SQL
	Server Books Online. Click Transact-SQL Reference, F, Functions, Date Functions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO200 kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbADO210sp2 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :2.1 SP2,2.5,2.6,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
