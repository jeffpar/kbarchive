---
layout: page
title: "Q281776: FIX: SET COLLATE TO &quot;General&quot; Causes Problem with SQL SELECT"
permalink: kb/281/Q281776/
---

## Q281776: FIX: SET COLLATE TO &quot;General&quot; Causes Problem with SQL SELECT

	Article: Q281776
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5f
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SET COLLATE TO "General" command before you run certain
	SQL-SELECT statements, an incorrect result may appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Fox Pro, create a program.
	
	2. Add the following code to the program:
	
	  SET SAFETY OFF
	  SET COLLATE TO "General"
	  CREATE TABLE test (nID N(5))
	  FOR T=1 TO 10000
	  	INSERT INTO test VALUE (T)
	  ENDFOR
	  SELECT * FROM test WHERE nID NOT IN (SELECT * FROM test)
	  SET SAFETY ON
	  ? RECCOUNT()
	  CLOSE ALL
	  DELETE FILE test.DBF
	
	3. Run the program file.
	
	Note that the SQL-SELECT statement and RECCOUNT() function return 24 records,
	when no records should be returned.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
