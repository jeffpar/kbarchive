---
layout: page
title: "Q196025: DOC: Incorrect Syntax for TAG() and DESCENDING() Commands"
permalink: /kb/196/Q196025/
---

## Q196025: DOC: Incorrect Syntax for TAG() and DESCENDING() Commands

	Article: Q196025
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbDatabase kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbXBase KbDBFDBC
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro help the syntax for the TAG() and DESCENDING() commands
	incorrectly shows the "nTagNumber" and "nIndexNumber" arguments respectively as
	required when they are actually optional. If you run either of the commands,
	without any arguments, they return information for the controlling Index of a
	table that is open in the current work area.
	
	MORE INFORMATION
	================
	
	The text of the TAG() and DESCENDING() functions in the Visual FoxPro Help notes
	that the syntax is as follows:
	
	  TAG([CDXFileName,] nTagNumber [, nWorkArea | cTableAlias])
	
	  DESCENDING([CDXFileName,] nIndexNumber [, nWorkArea | cTableAlias])
	
	The text incorrectly shows the nTagNumber and nIndexNumber arguments, for TAG()
	and DESCENDING() functions respectively, as required.
	
	The syntax should be as follows:
	
	  TAG([CDXFileName[, nTagNumber [, nWorkArea | cTableAlias]]])
	
	  DESCENDING([CDXFileName[, nIndexNumber [, nWorkArea | cTableAlias]]])
	
	The nTagNumber and nIndexNumer arguments are optional. If nTagNumber or
	nIndexnumber are not specified, then the TAG() and DESCENDING() functions will
	return information for the controlling Index of the table that is open in the
	current Work Area. If there is no table open, in the current Work Area or a
	controlling index is not in place, then TAG() returns an empty string and
	DESCENDING() returns a False.
	
	To test this issue, create and run a program with the following code:
	
	     CLEAR
	     CLOSE ALL
	
	     ?"Return values with no open Tables:"
	        DO TagInfo
	
	     CREATE DATABASE MyDbc
	     CREATE TABLE MyTbl (Fld1 C(7) PRIMARY KEY, Fld2 C(4))
	     INSERT INTO MyTbl VALUES("111-111","AAAA")
	     INSERT INTO MyTbl VALUES("111-112","BBBB")
	     INSERT INTO MyTbl VALUES("111-113","CCCC")
	
	     ?"Return values with no controlling Index:"
	        OPEN DATABASE MyDbc
	        USE MyTbl
	        DO TagInfo
	
	     ?"Return values with controlling Index:"
	        SET ORDER TO Fld1 DESCENDING
	        DO TagInfo
	
	     PROCEDURE TagInfo
	        ?TAG()
	        ?DESCENDING()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbDatabase kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbXBase KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	
	=============================================================================
	
