---
layout: page
title: "Q191525: FIX: OpenTables of Cursor Object May Fail with Locate Dialog"
permalink: /kb/191/Q191525/
---

## Q191525: FIX: OpenTables of Cursor Object May Fail with Locate Dialog

	Article: Q191525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are programmatically creating a Dataenvironment object, and you add a Cursor
	object to it at run-time. If the Cursor object added uses a free table as its
	CursorSource, and you attempt to set its Database property to "" in its class
	definition, calling the OpenTables() method of the Dataenvironment object
	erroneously opens a dialog asking to locate a database.
	
	RESOLUTION
	==========
	
	As a workaround, do not set the Database property of the Cursor object in its
	class definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        CREATE TABLE mytable FREE (myFld c (10))
	
	        CLOSE DATABASE ALL
	        PUBLIC oDataEnv
	        oDataEnv = CREATEOBJECT("DataEnv")
	        oDataEnv.OPENTABLES()
	
	        DEFINE CLASS DataEnv AS DATAENVIRONMENT
	           PROCEDURE INIT()
	              THIS.ADDOBJECT("oFreeCursor","FreeCursor")
	           ENDPROC
	        ENDDEFINE
	
	        DEFINE CLASS FreeCursor AS CURSOR
	           * Setting the Database property to empty string, as it should be,
	           * generates an error.
	           DATABASE = ""
	           CURSORSOURCE = SET('DEFAULT')+CURDIR()+"myTable.dbf"
	        ENDDEFINE
	
	A dialog displays with the following:
	
	  Locate Database
	  Error instantiating cursor object. Cannot find <current
	  drive/directory>
	  [Locate][Ignore][Cancel][Help]
	
	This dialog displays in error since there should not be a database associated
	with a free table. As a workaround, run the preceding code after removing the
	DATABASE = "" code. The program then executes without error.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbVFp600fix kbOOP KbDBFDBC kbDatabase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
