---
layout: page
title: "Q189915: BUG: ALTER TABLE Can Add Duplicate Relations to DBC"
permalink: /kb/189/Q189915/
---

## Q189915: BUG: ALTER TABLE Can Add Duplicate Relations to DBC

{% raw %}

	Article: Q189915
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the ALTER TABLE ... ADD FOREIGN KEY command, it will add a relation
	to the database that contains it. If you run the equivalent ALTER TABLE ... ADD
	FOREIGN KEY command again, it will add a duplicate relation to the database.
	This can cause duplicate stored procedures to be created with the Referential
	Integrity Builder, and these can cause duplication of functionality when the
	triggers are called.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        #DEFINE DBCNAME    'testdb'
	        #DEFINE TABNAME    'testtab'
	        #DEFINE TABCOUNT      2
	
	        LOCAL lmRel1, lmRel2
	
	        CLEAR
	        CLOSE DATABASE ALL
	        DELETE FILE testdb.DBC
	        DELETE FILE testdb.dc?
	
	        CREATE DATABASE DBCNAME
	
	        FOR lni = 1 TO TABCOUNT
	           DELETE FILE (TABNAME+ALLTR(STR(lni)))+'.dbf'
	           DELETE FILE (TABNAME+ALLTR(STR(lni)))+'.cdx'
	           CREATE TABLE (TABNAME+ALLTR(STR(lni))) (F1 C(10) NOT NULL ;
	              PRIMARY KEY, ;
	              F2 C(10) NOT NULL)
	        ENDFOR
	
	        ALTER TABLE (TABNAME+ALLTR(STR(lni-2))) ADD FOREIGN KEY TAG ;
	           F1 REFERENCES (TABNAME+ALLTR(STR(lni-1))) TAG F1
	        CLOSE DATABASE ALL
	        USE DBCNAME+'.dbc'
	        BROWSE FOR objecttype = 'Relation' TITLE "1st relation added" ;
	           TIMEOUT 2
	        USE
	        OPEN DATABASE DBCNAME
	        ALTER TABLE (TABNAME+ALLTR(STR(lni-2))) ADD FOREIGN KEY TAG ;
	           F1 REFERENCES (TABNAME+ALLTR(STR(lni-1))) TAG F1
	        CLOSE DATABASE ALL
	        USE DBCNAME+'.dbc'
	        BROWSE FOR objecttype = 'Relation' TITLE "2nd relation added" ;
	           TIMEOUT 2
	        LOCATE FOR objecttype = 'Relation'
	        lmRel1 = property
	        CONTINUE
	        IF !EOF()
	           lmRel2 = property
	           ?lmRel1 = lmRel2, "The two relation property fields are equal"
	        ELSE
	           ?'2nd relation not found'
	        ENDIF
	        USE
	
	2. Watch the two browse windows appear.
	
	The first browse displays one relation after the first ALTER TABLE command. The
	second browse displays two relations after the second ALTER TABLE command. The
	Property fields of the two relations are equal. This indicates that the same
	relation has been added twice.
	
	NOTES:
	
	A DBC with multiple identical relation objects causes the RI Builder to display
	the relationship twice and causes the builder to generate two blocks of RI code,
	each of which is run every time the trapped event is triggered.
	
	There will also be multiple rows for the relationship being displayed in the RI
	Builder's grid, and you could change the trigger settings for one but not the
	other(s).
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbVFp300bbug kbDatabase
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
