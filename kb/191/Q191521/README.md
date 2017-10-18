---
layout: page
title: "Q191521: FIX: DROP TABLE Case Sensitive if Table in Persistent Relation"
permalink: kb/191/Q191521/
---

## Q191521: FIX: DROP TABLE Case Sensitive if Table in Persistent Relation

	Article: Q191521
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to issue a DROP TABLE command to remove a table from a Database
	Container (DBC), and the table is involved in a persistent relation in the DBC,
	the manner in which the DROP TABLE command is processed depends on the case of
	the table name passed to the command. If the table name is in mixed or lower
	case, the following error occurs:
	
	  Table test2 is referenced in a relation.
	
	If the table name is in upper case, the table is deleted.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Expected behavior is that the error is generated regardless of the case of the
	table name in the DROP TABLE command.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        CLOSE DATA ALL
	        CREATE DATABASE Testdb
	
	        CREATE TABLE Test2 (cField C(5) PRIMARY KEY)
	        CREATE TABLE Test1 (cField C(5) references Test2 TAG cField )
	        DROP TABLE test2  && Fails with error 1577.
	        DROP TABLE TEST2  && Works.
	
	2. Press Ignore when the following error occurs:
	
	  Table test2 is referenced in a relation.
	
	DROP TABLE test2 gives the error. DROP TABLE TEST2 works without error and the
	table is deleted.
	
	The REMOVE TABLE had a similar issue and it has also been resolved in Visual
	FoxPro 6.0.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600fix KbDBFDBC kbDatabase kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
