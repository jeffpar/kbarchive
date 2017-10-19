---
layout: page
title: "Q224989: FIX:&quot;Not Enough Memory&quot; Error with SQLCOLUMNS() and SQL Server"
permalink: /kb/224/Q224989/
---

## Q224989: FIX:&quot;Not Enough Memory&quot; Error with SQLCOLUMNS() and SQL Server

	Article: Q224989
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQL kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbSQLPro
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, using the SQLColumns() function against a SQL Server table causes
	the following error:
	
	  There is not enough memory to complete this operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	In the code below, the cconstring holds the following values for each
	parameter:
	
	Driver=SQL Server
	Server=Your SQL Server name
	UID=Your user ID
	PWD=Your password (can be blank for no password)
	APP=Microsoft(r) Visual FoxPro(r)
	WSID=Workstation ID
	DATABASE=The database name on SQL Server.
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: You might need to alter the syntax of the cconstring variable to obtain a
	valid connection to SQL Server.
	
	1. Create a program that contains the following code and save it:
	
	  CLOSE DATA ALL
	  cconstring = "DRIVER=SQL Server;SERVER=SPHINXSQL;UID=sa;PWD=;APP=Microsoft(r) Visual FoxPro(r);WSID=WS2;DATABASE=pubs"
	  PUBLIC hand
	  SET SAFETY OFF
	  DELETE FILE testdb.DBC
	  DELETE FILE testdb.dc?
	  CREATE DATA testdb
	  CREATE CONNECTION testconn CONNSTRING (cconstring)
	
	  hand=SQLCONNECT("testconn")
	
	  ?hand
	  ?SQLColumns(hand,"Publishers","FoxPro","curFields") < 0
	  *?SQLColumns(hand,"Publishers","FoxPro","curFields")
	  ?sqldisconnect(hand)
	
	2. Run the program.
	
	After the program runs, you get the error:
	
	  There is not enough memory to complete this operation.
	
	Note that the error does not occur every time you use the SQLColumns() function.
	In the example, if you change this line of code:
	
	  ?SQLColumns(hand,"Publishers","FoxPro","curFields") < 0
	
	to this line:
	
	  ?SQLColumns(hand,"Publishers","FoxPro","curFields")
	
	the code runs without error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQL kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
