---
layout: page
title: "Q191697: BUG: ALTER TABLE Command With Multiple Drop Statements Fails"
permalink: kb/191/Q191697/
---

## Q191697: BUG: ALTER TABLE Command With Multiple Drop Statements Fails

	Article: Q191697
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing an ALTER TABLE command, with multiple Drop statements, fails with the
	following error:
	
	  No rule to drop.
	
	RESOLUTION
	==========
	
	Use one ALTER TABLE command for each Drop statement needed.
	
	Replace the ALTER TABLE command in the MORE INFORMATION section with the
	following code:
	
	     ALTER TABLE test ALTER COLUMN field1 DROP DEFAULT
	     ALTER TABLE test ALTER COLUMN field1 DROP CHECK
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from a program (.prg) file:
	
	     CLOSE DATABASES ALL
	     CREATE DATABASE TestDB
	     CREATE TABLE test (field1 c(10) CHECK NOT EMPTY(field1) DEFAULT 'xxx')
	     *** The next line fails with the "No rule to drop" error.
	     ALTER TABLE test ALTER COLUMN field1 DROP DEFAULT DROP CHECK
	
	Additional query words: kbVFp500abug kbVFp600bug kbVFp300bbug KbDBFDBC kbDatabase kbvfp500a kbvfp500 kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
