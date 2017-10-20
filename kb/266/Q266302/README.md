---
layout: page
title: "Q266302: PRB: ADOX Error -2147217859 When You Append a Table to a Catalog"
permalink: /kb/266/Q266302/
---

## Q266302: PRB: ADOX Error -2147217859 When You Append a Table to a Catalog

{% raw %}

	Article: Q266302
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbJET kbMDAC kbGrpDSVBDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ADOX to append a new table to an ADOX catalog, you may receive the
	following error message:
	
	  Runtime error: '-2147217859 (80040e3d)':
	  Type is invalid.
	
	CAUSE
	=====
	
	This problem occurs because providers can accept only recognized data types for
	the columns in the table. Each provider is different and specific to the
	database format in which it is stored.
	
	RESOLUTION
	==========
	
	To resolve this problem, use a data type that the provider supports. The
	following list includes the data types that each provider supports:
	
	+----------------------------------------------------------------------------+
	| Constant          | Value | Jet 3.51 | Jet 4.0          | SQL 7.0          | 
	+----------------------------------------------------------------------------+
	| adBinary          | 128   | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adBoolean         | 11    | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adChar            | 129   | Yes      | No               | Yes              | 
	+----------------------------------------------------------------------------+
	| adCurrency        | 6     | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adDate            | 7     | Yes      | Yes              | No               | 
	+----------------------------------------------------------------------------+
	| adDouble          | 5     | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adGUID            | 72    | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adInteger         | 3     | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adLongVarBinary   | 205   | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adLongVarChar     | 201   | Yes      | No               | Yes              | 
	+----------------------------------------------------------------------------+
	| adLongVarWChar    | 203   | No       | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adNumeric         | 131   | No       | Yes (with info)* | Yes (with info)* | 
	+----------------------------------------------------------------------------+
	| adSingle          | 4     | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adSmallInt        | 2     | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adUnsignedTinyInt | 17    | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adVarBinary       | 204   | Yes      | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adVarChar         | 200   | Yes      | No               | Yes              | 
	+----------------------------------------------------------------------------+
	| adVarWChar        | 202   | No       | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adWChar           | 130   | No       | Yes              | Yes              | 
	+----------------------------------------------------------------------------+
	| adDBTimeStamp     | 135   | No       | No               | Yes              | 
	+----------------------------------------------------------------------------+
	
	* When you use the adNumeric data type with Microsoft Jet 4.0 and Microsoft SQL
	Server 7.0, you must set precision.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. From the Project menu, click References, and then click "Microsoft ADO Ext.
	  2.1 for DDL and Security".
	
	3. Place a CommandButton control (Command1) onto Form1.
	
	4. Paste the following code onto the Declarations section of Form1:
	
	  Private Sub Command1_Click()
	
	     Set cat = New ADOX.Catalog
	     Set tbl = New ADOX.Table
	     cat.ActiveConnection = _
	        "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\Nwind.mdb;"
	     tbl.Name = "TestTable"
	     tbl.Columns.Append "ValidColumn", adInteger
	     tbl.Columns.Append "InvalidColumn", adDBTimeStamp
	     cat.Tables.Append tbl
	  End Sub
	
	5. Modify the "cat.ActiveConnection" property so that it points to a valid
	  Microsoft Access database file.
	
	6. Run the project, and press Command1. You receive the above-mentioned error
	  because the Jet provider does not support the adDBTimeStamp data type.
	
	REFERENCES
	==========
	
	For more information and code samples about the supported data types for the Jet
	provider, see the following MSDN white paper:
	
	  "Migrating from DAO to ADO: Defining and Retrieving a Database's Schema"
	  http://msdn.microsoft.com/library/techart/daotoadoupdate.htm
	
	For more information about the supported data types for the SQL Server OLE DB
	Provider, see the following Microsoft Web site:
	
	  "Mapping Data Types"
	  http://msdn.microsoft.com/library/psdk/sql/adoprg02_294j.htm
	
	Additional query words: binary blob datatype -2147217859 (80040e3d)
	
	======================================================================
	Keywords          : kbJET kbMDAC kbGrpDSVBDB kbGrpDSMDAC kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
