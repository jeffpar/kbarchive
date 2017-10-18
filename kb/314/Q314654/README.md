---
layout: page
title: "Q314654: FIX: &quot;Cannot update the Cursor&quot; Error When Indexing a Table"
permalink: kb/314/Q314654/
---

## Q314654: FIX: &quot;Cannot update the Cursor&quot; Error When Indexing a Table

	Article: Q314654
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to create a compact index on a table that is part of a database, and
	the database is read-only or has been opened with the NOUPDATE clause, you may
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
	
	  CLOSE DATABASES ALL 
	
	  DECLARE INTEGER SetFileAttributes IN win32api STRING, INTEGER
	  SetFileAttributes(FULLPATH('Demo.dbc'), 0) 
	
	  DELETE FILE demo.dbc
	  DELETE FILE demo.dc?
	  DELETE FILE demo.dbf
	  DELETE FILE temp.idx
	
	  CREATE DATABASE Demo
	  CREATE TABLE Demo (;
	  	 cTest C(10))
	  USE
	  CLOSE DATABASES ALL
	  * Make the DBC Read-only.
	  SetFileAttributes(FULLPATH('Demo.dbc'), 1)
	  * OPEN DATABASE demo NOUPDATE && happens with this also.
	
	  USE Demo
	  INDEX ON cTest TO Temp
	  DIR temp.idx
	  CLOSE DATABASES ALL
	  RETURN
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
