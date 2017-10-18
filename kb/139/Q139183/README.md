---
layout: page
title: "Q139183: BUG: View Not Accurate with One-to-Many Grandchild Relation"
permalink: kb/139/Q139183/
---

## Q139183: BUG: View Not Accurate with One-to-Many Grandchild Relation

	Article: Q139183
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SET RELATION TO and SET SKIP TO commands to relate a parent
	table into many records in a child table that relates to many records in a
	grandchild table, the view window may actually indicate that a one-to-one
	relationship exists from the child table into the grandchild table.
	
	CAUSE
	=====
	
	The display of the relation between the child and grandchild table in the view
	window is incorrect.
	
	WORKAROUND
	==========
	
	To determine if the relation is constructed properly, use the BROWSE FIELDS or
	LIST FIELDS command with fields from the parent, child, and grandchild tables to
	verify that the relation is correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	
	     *beginning of code
	     WAIT WINDOW "For the following to work," + ;
	         CHR(13) + "Please take your hand off the mouse" ;
	        TIMEOUT 2
	
	     CLOSE DATA
	
	     * create the testing tables
	     SET SAFETY OFF
	     CREATE TABLE customer (cno c(5), company c(20))
	     INSERT INTO customer (cno, company) VALUES ("B9278","1st record")
	     CREATE TABLE invoices (cno c(5), ino N(4,0))
	     INSERT INTO invoices (cno, ino) VALUES ("B9278",1106)
	     INSERT INTO invoices (cno, ino) VALUES ("B9278",1107)
	     CREATE TABLE detail (ino N(4,0), pno c(5))
	     INSERT INTO detail (ino, pno) VALUES (1107,"AAAAA")
	     INSERT INTO detail (ino, pno) VALUES (1107,"BBBBB")
	     INSERT INTO detail (ino, pno) VALUES (1107,"CCCCC")
	     INSERT INTO detail (ino, pno) VALUES (1106,"AAAAA")
	     INSERT INTO detail (ino, pno) VALUES (1106,"BBBBB")
	     SET SAFETY ON
	     CLOSE ALL
	
	     USE detail.DBF EXCLUSIVE IN 0
	     SELECT detail
	     DELETE TAG ALL
	     INDEX ON ino TAG ino
	     SET ORDER TO ino
	
	     USE invoices.DBF EXCLUSIVE IN 0
	     SELECT invoices
	     DELETE TAG ALL
	     INDEX ON cno TAG cno
	     SET ORDER TO cno
	     SET RELATION TO ino INTO detail
	     SET SKIP TO detail
	     USE customer.DBF IN 0
	     SELECT customer
	     SET RELATION TO cno INTO invoices
	     SET SKIP TO invoices
	     WAIT WINDOW "Notice how the relation looks in the view"+ ;
	      CHR(13)+"Press ESC to continue" NOWAIT
	     SET VIEW ON
	     BROWSE FIELDS customer.cno, invoices.ino, detail.pno
	     CLOSE ALL
	
	     CLOSE DATA
	     USE detail.DBF EXCLUSIVE IN 0
	     SELECT detail
	     DELETE TAG ALL
	     INDEX ON ino TAG ino
	     SET ORDER TO ino
	     USE invoices.DBF EXCLUSIVE IN 0
	     SELECT invoices
	     DELETE TAG ALL
	     INDEX ON cno TAG cno
	     SET ORDER TO cno
	     SET RELATION TO ino INTO detail
	
	     *set skip to detail
	     USE customer.DBF IN 0
	     SELECT customer
	     SET RELATION TO cno INTO invoices
	     SET SKIP TO invoices, detail
	     WAIT WINDOW "NOW notice how the relation looks in the view"+ ;
	      CHR(13)+"Press ESC to continue" NOWAIT
	     ACTIVATE WINDOW VIEW
	     BROWSE FIELDS customer.cno, invoices.ino, detail.pno
	     CLOSE ALL
	
	     KEYBOARD("{ESC}")     && to remove view window
	
	     *end of code
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
