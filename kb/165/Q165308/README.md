---
layout: page
title: "Q165308: FIX: Left Outer Join with &quot;WHERE NOT IN&quot; Clause Incorrect"
permalink: /kb/165/Q165308/
---

## Q165308: FIX: Left Outer Join with &quot;WHERE NOT IN&quot; Clause Incorrect

	Article: Q165308
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Left Outer Join with the WHERE NOT IN clause displays the wrong fields in the
	cursor. The cursor replaces one of the fields that should be in the cursor with
	the field in the SELECT statement in the WHERE NOT IN clause.
	
	RESOLUTION
	==========
	
	Use the Outer Join syntax used in Visual FoxPro 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual FoxPro
	5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code:
	
	        CLOSE ALL
	        ERASE one.dbf
	        ERASE two.dbf
	        ERASE three.dbf
	        CREATE TABLE one (id c(5),first c(10))
	        CREATE TABLE two (id2 c(5), secnd c(10))
	        CREATE TABLE three (id3 c(5),third c(10))
	        INSERT INTO one(id,first) VALUES('11111','one')
	        INSERT INTO one(id,first) VALUES('22222','two')
	        INSERT INTO one(id,first) VALUES('33333','three')
	        INSERT INTO one(id,first) VALUES('44444','four')
	
	        INSERT INTO two(id2,secnd) VALUES('11111','uno')
	        INSERT INTO two(id2,secnd) VALUES('22222','duo')
	        INSERT INTO two(id2,secnd) VALUES('33333','tre')
	
	        INSERT INTO three(id3,third) VALUES('22222','whatever')
	
	        SELECT one.id,one.first,two.id2,two.secnd  ;
	           FROM one LEFT OUTER JOIN two ON one.id=two.id2 INTO CURSOR cursor1
	        BROWSE NOWAIT
	        SELECT one.id,one.first,two.id2,two.secnd  ;
	           FROM one left OUTER JOIN two ON one.id=two.id2 WHERE two.id2 ;
	             NOT IN (SELECT id3 FROM three) INTO CURSOR cursor2
	        BROWSE NOWAIT
	
	2. Compare the two Browse windows.
	
	The cursor2 Browse window displays id3 instead of id2.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q124589 How to Create a Left-Right Outer Join in FoxPro for Windows
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
