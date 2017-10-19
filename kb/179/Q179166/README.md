---
layout: page
title: "Q179166: PRB: SqlBCPColumnFormat in VBSQL.OCX Fails"
permalink: /kb/179/Q179166/
---

## Q179166: PRB: SqlBCPColumnFormat in VBSQL.OCX Fails

	Article: Q179166
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp400 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the VBSQL function SqlBCPColumnFormat, you may receive various errors
	including:
	
	  "Bad DLL Calling Convention"
	
	CAUSE
	=====
	
	The declaration for calling the SqlBCPColumnFormat function requires an array of
	a structure to obtain the necessary information about the columns to be copied.
	The structure includes a non-numeric variable length member. Visual Basic
	version 4.0 does not provide the capability to pass arrays of structures with
	variable length members to called functions.
	
	RESOLUTION
	==========
	
	Use the related functions SqlBCPColumns and SqlBCPColfmt instead.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Visual Basic Library for SQL Server (VBSQL.OCX) custom control file and
	supporting information documents allow direct use of functions built-in to
	Microsoft SQL Server including bulk copy of information to and from SQL Server
	data sources.
	
	The function SqlBCPColumnFormat is used to identify the columns to be copied in
	the bulk copy process. Detailed column properties such as data types, column
	length, column delimiters, etc. are defined earlier in an array of the
	BCPColData structure. The following is an example function call:
	
	     Result = SqlBCPColumnFormat(<Connection>, <Column Data>, <NumColumns>)
	
	where - <Connection> is the SQL Connection identifier
	       <Column Data> is the definition of the columns being copied.
	             This information is an array of a structure BCPColData
	             as defined in the declaration of the function. This
	             structure has one non-numeric member.
	       <NumColumns> is the number of column in the bulk copy.
	
	Microsoft Visual Basic for Windows version 4.0 does not provide a way to pass an
	array of a structure as required by the second argument <Column Data>.
	
	A workaround is to use the functions SqlBCPColumns and SqlBCPColfmt, which
	provide the same functionality of describing the columns to be copied:
	
	- SqlBCPColumns() identifies the number of columns to be copied.
	
	- SqlBCPColfmt() is used once for each of the columns to be copied, and
	  specifies the detailed column properties such as data type, maximum length,
	  column delimiter, etc.
	
	In the following example, SqlBCPColumns and SqlBCPColfmt are used to identify
	four columns to be copied in a bulk copy process:
	
	      Dim Connexion, Login, Result, RowsCopied As Long
	
	      'Initialize connection to backend
	      Login = SqlLogin()
	      Result = SqlSetLUser(Login, <userid>)
	      Result = SqlSetLPwd(Login, <password>)
	      Result = SqlBCPSetL(Login, True)
	      Connexion = SqlOpen(Login, <Data Source Name>)
	
	      'Setup copy of Authors table in Pubs database
	      '  to a text file c:\bulkcopy.txt
	      Result = SqlBCPInit(Connexion, "pubs..authors", _
	            "c:\bulkcopy.txt", "c:\bcperr1.txt", DBOUT&)
	
	      '4 columns will be copied
	         Result = SqlBCPColumns(Connexion, 9)
	
	      'Format each column, see help topics for details
	         Result = SqlBCPColfmt(Connexion, 1, 0, 0, -1, vbTab, 1, 1)
	         Result = SqlBCPColfmt(Connexion, 2, 0, 0, -1, vbTab, 1, 2)
	         Result = SqlBCPColfmt(Connexion, 3, 0, 0, -1, vbTab, 1, 3)
	         Result = SqlBCPColfmt(Connexion, 4, 0, 0, -1, vbCRLF, 2, 4)
	
	      'Execute the bulk copy
	         Result = SqlBCPExec(Connexion, RowsCopied)
	         MsgBox RowsCopied & " rows were copied"
	
	      'Close connection
	         SqlClose Connexion
	         SqlExit
	
	The Visual Basic Library for SQL Server (VBSQL.OCX) custom control file is
	available from the following sources:
	
	- Microsoft SQL Server Programmer's Toolkit for Visual Basic.
	
	- "Hitchhikers Guide to Visual Basic and SQL Server" as described in the
	  references. The files are included on the accompanying CD-ROM.
	
	- Microsoft Developers Network (MSDN).
	
	More detailed information about these functions, including their usage and
	declaration is provided in the references cited below.
	
	REFERENCES
	==========
	
	Building Client/Server Applications Using Visual Basic, Chapter 8, Pages
	147-148
	
	Hitchhiker's Guide to Visual Basic and SQL Server, 4th Ed., Chapter 32, by
	William Vaughn. ISBN 1-55615-906-4
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
