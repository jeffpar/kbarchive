---
layout: page
title: "Q315656: FIX: USE Table CONNSTRING Ignores NODATA and ALIAS Clauses"
permalink: kb/315/Q315656/
---

## Q315656: FIX: USE Table CONNSTRING Ignores NODATA and ALIAS Clauses

	Article: Q315656
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The USE <table name> CONNSTRING command ignores the NODATA clause and
	returns records. Also, CONNSTRING ignores the ALIAS keyword.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code in a program (.prg) file and then run the program. Make
	sure that you change the user ID and password to allow the program to access
	your SQL Server server.
	
	  CREATE DATABASE Test
	
	  lcConnString = "driver=SQL Server;database=Northwind;server=localhost;uid=sa;pwd="
	
	  CREATE CONNECTION Testconn CONNSTRING "&lcConnString."
	
	  CREATE SQL VIEW Test REMOTE CONNECTION Testconn AS SELECT * FROM dbo.Categories 
	
	  USE Test NODATA ALIAS withoutConnString
	  ?RECCOUNT(),"Records returned for use viewname-NODATA"  
	  ** Note no records returned.
	  BROWSE 
	
	  USE Test NODATA CONNSTRING "&lcConnString." ALIAS withConnString
	  BROWSE 
	  ?RECCOUNT(),"Records returned for use viewname-NODATA with CONNSTRING"
	  ** Note eight records returned. 
	  CLOSE DATABASE ALL
	
	The first Browse window, which displays the view that the program accesses with
	the "USE Test NODATA" syntax, returns no records. This is the correct behavior.
	
	The second Browse window, which displays the view that the program accesses with
	the CONNSTRING clause, returns eight records and does not have the specified
	alias.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbDatabase kbvfp KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
