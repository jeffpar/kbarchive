---
layout: page
title: "Q192778: BUG: Package Call Fails if Parameters Are Not Present"
permalink: /kb/192/Q192778/
---

## Q192778: BUG: Package Call Fails if Parameters Are Not Present

	Article: Q192778
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbMDAC kbODBC kbOracle kbMDAC250
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call an Oracle package.procedure that does not take any parameters the
	Microsoft Oracle ODBC driver returns the following error message:
	
	  SYNTAX ERROR OR ACCESS VIOLATION
	
	
	RESOLUTION
	==========
	
	To workaround this behavior, create a package.procedure that takes a parameter,
	but does nothing with the parameter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In SQL*PLUS run the following Oracle PL/SQL code:
	
	
	  create or replace package pack1 is
	  procedure proc1;
	  end pack1;
	  / 
	
	  create or replace package body pack1 is
	  procedure proc1 is
	  begin
	    insert into department values (50,'RESEARCH', 124);
	  end proc1;
	  end pack1;
	  / 
	
	To reproduce the error use the following Visual Basic code in a push button Click
	event. Make sure that the Visual Basic project has the Microsoft ActiveX Data
	Objects Library selected in the REFERENCES
	
	     Private Sub Command2_Click()
	        Dim cmd As ADODB.Command
	        Dim rst As ADODB.Recordset
	        Dim m_session As ADODB.Connection
	        Set m_session = New ADODB.Connection
	        m_session.CursorLocation = adUseClient
	        ' Replace "***" with your own Oracle DSN
	        m_session.Open "DSN=***", "demo", "demo"
	        Set cmd = New ADODB.Command
	        cmd.ActiveConnection = m_session
	        cmd.CommandText = "pack1.proc1"
	        cmd.CommandType = adCmdStoredProc
	        cmd.Execute
	     End Sub
	
	Additional query words: kbDatabase kbDriver kbODBC kbOracle
	
	======================================================================
	Keywords          : kbMDAC kbODBC kbOracle kbMDAC250 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle25732927
	Version           : :2.5,Build 2.573.2927
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
