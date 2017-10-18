---
layout: page
title: "Q234070: PRB: Error  Using Remote View of SQL 7.0 Tables w/Unicode Tables"
permalink: kb/234/Q234070/
---

## Q234070: PRB: Error  Using Remote View of SQL 7.0 Tables w/Unicode Tables

	Article: Q234070
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDatabase kbODBC kbSQLServ kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbS
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use a remote view of SQL Server 7.0 tables that contains
	Unicode fields (NCHAR, NVARCHAR, and NTEXT) defined with a length greater than
	254 characters, the following error message appears:
	
	  DataType Property for Field 'Field_Name' is Invalid
	
	RESOLUTION
	==========
	
	There are two workarounds for this issue.
	
	- Use the DBSETPROP() function to set the DataType property to a valid value.
	  The following code illustrates:
	
	  =DBSETPROP('MyView.UniCodeField','Field','DataType','C(254)')
	
	NOTE: Attempting to set the DataType Property to "M" results in the following
	error message when attempting to use the remote view:
	
	  Type conversion required by the DataType property for field "name" is invalid
	
	- Explicitly cast the Unicode fields, defined with a length greater than 254
	  characters, when creating the remote view:
	
	  CREATE SQL VIEW view2 REMOTE CONNECTION uniconn ;
	     AS SELECT cast(nchar_fld AS TEXT) AS nchar_fld, ;
	     unitest.char_fld, cast(nvarchar_fld AS TEXT) AS nvarchar_fld, ;
	     unitest.varchar_fld, cast(ntext_fld AS TEXT) AS ntext_fld, ;
	     unitest.text_fld ;
	     FROM dbo.unitest unitest
	
	MORE INFORMATION
	================
	
	Microsoft SQL Server 7.0 introduces three new Unicode datatypes, which cannot be
	sent to clients using DB-Library (such as ISQL) or ODBC Drivers prior to version
	3.70. The new data types are:
	
	- NCHAR Fixed-length Unicode character data of n characters. N must be a value
	  from 1 through 4,000. Storage size is two times n bytes. The SQL-92 synonyms
	  for nchar are national char and national character. Maps to a character
	  field. With the 3.70.0623 ODBC driver set to the default compatibility mode,
	  these fields will display with an additional binary character.
	
	- NVARCHAR Variable-length Unicode character data of n characters. N must be a
	  value from 1 through 4,000. Storage size, in bytes, is two times the number
	  of characters entered. The data entered can be 0 characters in length. The
	  SQL-92 synonyms for nvarchar are national char varying and national character
	  varying. Maps to a character field.
	
	- NTEXT Variable-length Unicode data with a maximum length of 230 - 1
	  (1,073,741,823) characters. Storage size, in bytes, is two times the number
	  of characters entered. The SQL-92 synonym for ntext is national text. Maps to
	  a character field with a length of 255.
	
	Visual FoxPro remote views map these Unicode fields to character datatypes. When
	the Unicode field is defined with a length of 255 or more characters, the field
	in the remote view is mapped to a datatype of C(255). Attempts to use remote
	views that access UNICODE fields defined with a length of 255 or more characters
	results in a message that the DataType property for the field is invalid.
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: Please replace My_SQL_70_Server with the name of your SQL 7.0 Server in the
	connection strings of the code example.
	
	1. Create a program file named "UNICODE.PRG" using the following code snippet:
	
	  *!* Set up Error Handler
	  ON ERROR DO TRAPERR WITH MESSAGE()
	  *!* Create a connection to SQL Server
	  gnconnhandle=SQLSTRINGCONN("DRIVER={SQL Server};SERVER=My_SQL_70_Server;" + ;
	     "DATABASE=PUBS;UID=sa;PWD=")
	  IF gnconnhandle>0
	  *!* Create a SQL Server table with Unicode Fields
	     SQLCommand="CREATE TABLE UNITEST (nchar_fld nchar(255), " + ;
	        "char_fld char(255),  nvarchar_fld nvarchar(255), " + ;
	        "varchar_fld varchar(255), ntext_fld ntext, text_fld text)"
	     =sqlexec(gnconnhandle,SQLCommand)
	     =sqldisconn(gnconnhandle)
	  ENDIF
	  *!* Create a FoxPro Database Container
	  CREATE DATABASE unitesta
	  *!* Create a connection to SQL Server
	  CREATE CONNECTION uniconn CONNSTRING "DRIVER={SQL Server};SERVER=My_SQL_70_Server;" + ;
	     "DATABASE=PUBS;UID=sa;PWD="
	  *!* Create a remote view using the SQL Server Table created above
	  CREATE SQL VIEW view1 REMOTE CONNECTION uniconn ;
	     AS SELECT * FROM dbo.unitest unitest
	
	  *!* Create a remote view using the SQL Server Table created above.
	  *!* Explicit cast the datatype for Unicode fields in the remote view definition.
	  CREATE SQL VIEW view2 REMOTE CONNECTION uniconn ;
	     AS SELECT cast(nchar_fld AS TEXT) AS nchar_fld, ;
	     unitest.char_fld, cast(nvarchar_fld AS TEXT) AS nvarchar_fld, ;
	     unitest.varchar_fld, cast(ntext_fld AS TEXT) AS ntext_fld, ;
	     unitest.text_fld ;
	     FROM dbo.unitest unitest
	
	  *!* Display information about the datatype properties of the fields in views
	  =DATATYPE('View1')
	  =DATATYPE('View2')
	
	  *!* Attempt to USE View1
	  *!* This results in the error message "DataType Property for field 'NChar_fld' is invalid"
	  USE view1
	
	  *!* Attempt to USE View2
	  *!* No Error occurs
	  USE view2
	  browse timeout(2)
	
	  *!* Set the DataType Property for the Unicode Fields, used in View1, to valid settings.
	  =DBSETPROP('view1.nchar_fld','field','datatype','c(254)')
	  =DBSETPROP('view1.nvarchar_fld','field','datatype','c(254)')
	  =DBSETPROP('view1.ntext_fld','field','datatype','c(254)')
	
	  =DATATYPE('View1')
	
	  *!* Attempt to USE View1
	  *!* No Error occurs
	  USE view1
	  browse timeout(2)
	
	  USE
	
	  *!* Set the DataType Property for the Unicode Text Field, used in View1, to M.
	  =DBSETPROP('view1.ntext_fld','field','datatype','M')
	
	  *!* Attempt to USE View1
	  *!* This results in the error message
	  *!* "Type conversion required by the DataType Property for field 'Ntext_fld' is invalid"
	  USE view1
	  CLOSE ALL
	  ON ERROR
	  RETURN
	
	  PROCEDURE DATATYPE
	  PARAMETER viewname
	  MSGSTRING="NCHAR    " + CHR(9) + CHR(9) + DBGETPROP(viewname + '.nchar_fld','field','datatype') + CHR(13) + ;
	     "CHAR     " + CHR(9) + CHR(9) + DBGETPROP(viewname + '.char_fld','field','datatype') + CHR(13) + ;
	     "NVARCHAR " + CHR(9) + DBGETPROP(viewname + '.nvarchar_fld','field','datatype') + CHR(13) + ;
	     "VARCHAR  " + CHR(9) + DBGETPROP(viewname + '.varchar_fld','field','datatype') + CHR(13) + ;
	     "NTEXT    " + CHR(9) + CHR(9) + DBGETPROP(viewname + '.ntext_fld','field','datatype') + CHR(13) + ;
	     "TEXT     " + CHR(9) + CHR(9) +  DBGETPROP(viewname + '.text_fld','field','datatype')
	  =MESSAGEBOX(MSGSTRING,64,'DataType Properties of '+ALLTRIM(viewname))
	  RETURN
	
	  PROCEDURE TRAPERR
	  PARAMETER errormsg
	  =MESSAGEBOX(errormsg,16,'Unicode Demonstration Error')
	  RETURN
	
	2. From the Command window, type:
	
	  DO UNICODE
	
	3. Note the output that displays on screen.
	
	4. Note that attempting to USE View1 initially fails, but is successful after
	  the DataType properties for the Unicode fields have been changed to valid
	  settings.
	
	5. Note that the attempt to USE View2 succeeds.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDatabase kbODBC kbSQLServ kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbSQLServ700 kbGrpDSFox kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
