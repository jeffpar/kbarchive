---
layout: page
title: "Q158197: SAMPLE: ODBCBIND.EXE RDO: Bind Parameters to Stored Procedures"
permalink: /kb/158/Q158197/
---

## Q158197: SAMPLE: ODBCBIND.EXE RDO: Bind Parameters to Stored Procedures

{% raw %}

	Article: Q158197
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbODBC kbRDO kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the ODBC API to bind input, output, and return
	values to parameters of stored procedures. This is a workaround using the
	rdoPreparedStatement object to accomplish this behavior.
	
	RDO has problems binding parameters to an rdoPreparedStatement if your ODBC
	driver does not correctly support the SQLDescribeParam and SQLProcedureColumns
	functions. RDO depends on information returned from these functions to determine
	the type, direction, and size of each parameter in a stored procedure. If any of
	this information is missing or invalid, RDO fails with one of the following
	error messages:
	
	  Invalid parameter value
	
	  or
	
	  Illegal syntax or access violation
	
	RDO generates the error the first time you access the rdoParameters collection
	(check the Count property or try to get an item from it), because RDO calls
	SQLDescribeParam or SQLProcedureColumns and attempts to build the parameters
	collection at that time.
	
	NOTE: RDO uses SQLProcedureColumns if the SQL uses the ODBC {Call} syntax and
	SQLDescribeParam for all others, such as the proprietary Execute for SQL
	Server.
	
	One way to avoid this problem is to pass the input parameters to your stored
	procedure "in-line," without using an rdoPreparedStatement. The following line
	of code demonstrates this:
	
	  Set rs = cn.OpenResultset("{call GetNames ('Jones')}")
	
	NOTE: Oracle 7.2 cannot return a result set from a stored procedure.
	
	In the case of this sample, a stored procedure named GetNames received one input
	parameter with the value of "Jones," and should return a result set with each
	row from the table that contained that value in a certain column. This works
	fine for a stored procedure that only accepts input parameters, but it is not
	useful for a stored procedure that returns output parameters or return values.
	
	To work around this problem, a class module has been developed that uses the ODBC
	API to call your parameterized stored procedure without the use of
	SQLDescribeParam or SQLProcedureColumns. This class module does not have the
	ability to return a result set from the stored procedure, but you can set
	multiple input, output, and return values. This sample, Odbcbind.exe, is
	available for download as a class module that you can include in your
	application or compile into an OLE DLL.
	
	MORE INFORMATION
	================
	
	NOTE: Odbcbind.exe requires the installation of Visual Basic 4.0, 5.0, or 6.0
	Enterprise Editions on Windows 2000, Windows NT or Windows.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Odbcbind.exe
	  (http://download.microsoft.com/download/vb60ent/Sample19/1/W9XNT4/EN-US/Odbcbind.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	REFERENCES
	==========
	
	Open Database Connectivity (ODBC) SDK, version 2.10, "Programmer's Reference,"
	on the Microsoft Developer Network (MSDN) CD-ROM.
	
	"Hitchhiker's Guide to Visual Basic and SQL Server," William R. Vaughn, Microsoft
	Press, April 1996, ISBN: 1-55615-906-4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbODBC kbRDO kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
