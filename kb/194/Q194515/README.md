---
layout: page
title: "Q194515: BUG: Invalid ALTER TABLE Command Works and Corrupts DBC"
permalink: /kb/194/Q194515/
---

## Q194515: BUG: Invalid ALTER TABLE Command Works and Corrupts DBC

{% raw %}

	Article: Q194515
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After issuing an invalid ALTER TABLE statement, running VALIDATE DATABASE fails
	and returns an error.
	
	RESOLUTION
	==========
	
	To avoid creating an invalid object through the ALTER TABLE command, be sure to
	include an expression in the Add Foreign Key statement.
	
	To remove the invalid object reference in the database, follow the steps listed
	below:
	
	1. Note the object number in the error below: it is Object #14.
	
	2. Use the database as a table.
	
	3. Delete the record for Object #14 (if that is the object number in the error)
	
	4. Pack the database.
	
	Fix Code For "Steps To Reproduce" Sample
	----------------------------------------
	
	        CLOSE DATABASE ALL
	        USE testdb.DBC
	        DELETE FOR objectid=14 &&Delete object #14's record
	        PACK
	        USE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The ALTER TABLE command allows the entry of an Add Foreign Key statement without
	specifying an expression. This causes an invalid entry in the database
	referencing a relationship that does not exist. This causes the VALIDATE
	DATABASE command to return the following error:
	
	  "Object #14 (Relation 'Relation 1'): Cannot find associated Index referenced
	  by this object"
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in a program file:
	
	        #DEFINE DBCNAME    'testdb'
	        #DEFINE TABNAME    'testtab'
	        #DEFINE TABCOUNT      2
	
	        CLEAR
	        CLOSE DATA ALL
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
	
	        * Gives invalid DBC because Foreign key expression is missing
	        ALTER TABLE (TABNAME+("2")) ADD FOREIGN KEY TAG ;
	           F2 REFERENCES (TABNAME+"1") TAG F1
	
	2. Issue the "VALIDATE DATABASE" command from the Command window. Note that this
	  command returns the following error:
	
	  "Object #14 (Relation 'Relation 1'): Cannot find associated Index referenced
	  by this object"
	
	REFERENCES
	==========
	
	For more information about the Alter Table command, search for "ALTER TABLE" in
	the Visual FoxPro Help file.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q186242 BUG: ALTER TABLE Cannot Create a Descending Primary Key
	
	  Q191697 BUG: ALTER TABLE Command With Multiple Drop Statements Fails
	
	  Q191593 BUG: ALTER TABLE Causes Memo File is Missing or Invalid Err
	
	Additional query words: kbVFP600bug kbDatabase kbDBFDBC
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
