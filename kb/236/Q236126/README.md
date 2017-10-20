---
layout: page
title: "Q236126: HOWTO: Passing Single Quotes in String to SQL Server w/ SQL PT"
permalink: /kb/236/Q236126/
---

## Q236126: HOWTO: Passing Single Quotes in String to SQL Server w/ SQL PT

{% raw %}

	Article: Q236126
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbMDAC250 kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to pass a single quote in a string to a SQL Server
	table using SQL passthrough with a DSNless ODBC connection.
	
	MORE INFORMATION
	================
	
	The following example assumes that the Pubs database exists in a SQL Server
	datasource called SQLSERVER. The example creates a DSNless ODBC connection
	(TESTCONNECTION) to the SQL Server datasource, creates a table named
	SINGLEQUOTE, and inserts the string text into the table with the single quote
	imbedded in the string.
	
	  *!* Start of the program
	  SET SAFETY OFF
	  CLEAR
	  CLOSE DATA ALL
	  CREATE DATABASE test
	
	  *!* DSNless Connection to a SQL Server database
	  *!* In the following statement "DBMSSONCN" is the TCP/IP library name
	  CREATE CONNECTION testconnection CONNSTRING ;
	      "driver={sql server};server=SQLSERVER;uid=sa;pwd=;
	       database=pubs;network=dbmssocn"
	  xDSNLess = SQLCONNECT("testconnection")
	
	  IF xDSNLess > 0
	      *!*	*CHAR(39) is a single quote or apostrophe in SQL Server
	      SQLEXEC(xDSNLess, "DROP TABLE singlequote")
	      SQLEXEC(xDSNLess, "CREATE TABLE singlequote (singlequote char(30))")
	      SQLEXEC(xDSNLess, "INSERT INTO singlequote ;
	         VALUES ('single'+char(39)+'quotes '+char(39)+'in the '+;
	         char(39)+ 'string')")
	      SQLEXEC(xDSNLess, "SELECT * from singlequote")
	      SQLEXEC(xDSNLess, "DROP TABLE singlequote")
	      BROWSE NOWAIT
	  ENDIF
	
	  SQLDISCONNECT(xDSNLess)
	  SET SAFETY ON
	  *!* End of the program
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
