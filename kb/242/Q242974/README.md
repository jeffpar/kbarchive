---
layout: page
title: "Q242974: PRB: Unable to Create/Modify REMOTE View with RIGHT JOIN"
permalink: /kb/242/Q242974/
---

## Q242974: PRB: Unable to Create/Modify REMOTE View with RIGHT JOIN

{% raw %}

	Article: Q242974
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbSQL kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbMDAC250 kbCodeSnip
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create or modify a remote view that uses a RIGHT JOIN, the
	RIGHT JOIN clause does not appear in the SQL SELECT syntax.
	
	When you attempt to save the View, an error similar to the following appears:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver] Command contains
	  unrecognized phrase/keyword
	
	RESOLUTION
	==========
	
	Create Views that use a RIGHT JOIN programmatically.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Demo.prg using the following code:
	
	  CREATE DATABASE testa
	  CREATE TABLE tablea (fld1 c(10), fld2 c(10))
	  CREATE TABLE tableb (fld1 c(10), fld3 c(10))
	  CREATE SQL VIEW localsql ;
	     AS SELECT * ;
	     FROM tablea RIGHT JOIN tableb ;
	     ON tablea.fld1 = tableb.fld1
	
	  MODIFY VIEW localsql
	
	  CLOSE ALL
	
	  CREATE DATABASE testb
	  CREATE CONNECTION connect1 CONNSTRING 'DRIVER={Microsoft Visual FoxPro Driver};' + ;
	     'Exclusive=No;SourceType=DBC;SourceDB='+SYS(5)+SYS(2003)+'\TESTA.DBC'
	
	  CREATE SQL VIEW remotesql REMOTE CONNECTION connect1 ;
	     AS SELECT * ;
	     FROM testa!tablea tablea RIGHT JOIN testa!tableb tableb ;
	     ON tablea.fld1 = tableb.fld1
	
	  MODI VIEW remotesql
	
	2. Run the program file.
	
	3. When the View Designer opens the local view, localsql, click the Show SQL
	  button on the View Designer toolbar. Note that the SQL statement is:
	
	      SELECT *;
	       FROM  testa!tablea RIGHT OUTER JOIN testa!tableb ;
	         ON  Tablea.fld1 = Tableb.fld1
	
	4. Close the code and the View Designer-Localsql windows. When the View Designer
	  opens the remote view, remotesql, click the Show SQL button on the View
	  Designer toolbar and note that the SQL statement is:
	
	      SELECT *;
	       FROM  {oj testa!tablea Tablea  testa!tableb Tableb ;
	         ON  Tablea.fld1 = Tableb.fld1 }
	
	5. Close the code window. Press CTRL-W or from the File menu, choose Save. In
	  the View Designer window note that an error message similar to the following
	  appears:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver] Command contains
	  unrecognized phrase/keyword
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbDesigner kbSQL kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbMDAC250 kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
