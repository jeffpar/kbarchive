---
layout: page
title: "Q314655: FIX: &quot;Cannot update the cursor&quot; Error Indexing a View"
permalink: /kb/314/Q314655/
---

## Q314655: FIX: &quot;Cannot update the cursor&quot; Error Indexing a View

{% raw %}

	Article: Q314655
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to create an index on a view that is part of a database, and the
	database is read-only or has been opened with the NOUPDATE clause, you may
	receive the following error message:
	
	  Cannot update the cursor.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the problem, run the following code from a program (.prg) file:
	
	  * This code demonstrates the problem using the NOUPDATE clause.
	  * The problem will also occur if the database is read-only.
	  #define DBCNAME   'testdb'
	  #define TABNAME   'testtab1'
	
	  CLEAR 	
	  CLOSE DATABASES ALL
	  DELETE FILE DBCNAME + '.dbc'
	  DELETE FILE DBCNAME + '.dc?'
	
	  DELETE FILE TABNAME+'.dbf'
	  DELETE FILE TABNAME+'.cdx'
	
	  CREATE TABLE TABNAME (F1 C(10), F2 C(10) ) 
	  INSERT INTO TABNAME VALUES ('xxx','yyy')
	
	  CLOSE TABLES 
	
	  CREATE DATABASE DBCNAME
	  CREATE SQL VIEW v1 AS Select * From TABNAME
	  CLOSE DATABASES ALL 
	
	  OPEN DATABASE DBCNAME NOUPDATE
	
	  USE testdb!v1
	  INDEX ON f1 TAG f1
	  RETURN 
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
