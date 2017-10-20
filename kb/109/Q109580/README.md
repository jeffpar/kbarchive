---
layout: page
title: "Q109580: Causes of Common SELECT - SQL Error Messages"
permalink: /kb/109/Q109580/
---

## Q109580: Causes of Common SELECT - SQL Error Messages

{% raw %}

	Article: Q109580
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 3.00 | 2.00 2.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error messages can be produced by improper usage of the SELECT
	statement:
	
	  SQL column <field> not found <field> is not a memory variable
	  Alias <alias> not found
	
	The code sample below illustrates some possible causes of these error messages
	and explains why they occur.
	
	MORE INFORMATION
	================
	
	The following code sample executes a variety of SELECT statements. If the SELECT
	statement produces an error message, the reasoning behind the error message is
	explained.
	
	     CREATE TABLE customer (company C(20),state C(2))
	     INSERT INTO customer (company,state) VALUES ;
	      ("ABC Company","WA")
	     INSERT INTO customer (company,state) VALUES ;
	      ("Main Street Store ","NY")
	
	     CLOSE ALL
	
	     USE customer ALIAS test
	
	     SELECT customer.company FROM test WHERE customer.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * customer.company does not exist. The table is aliased as 'test'.
	      * This should be: "test.company"
	      * customer.state does not exist. The table is aliased as 'test'.
	      * "customer.state" should be "test.state"
	
	     SELECT customer.company FROM test WHERE test.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * customer.company does not exist. The table is aliased as 'test'.
	      * "customer.company" should be "test.company"
	
	     SELECT test.company FROM test WHERE customer.state = "WA"
	
	      * Produces Error: 'STATE' is not a memory variable
	      * customer.state does not exist. The table is aliased as 'test'.
	      * "customer.state" should be "test.state"
	
	     SELECT test.company FROM test WHERE test.state = "WA"
	
	      * OK.  This is a valid SELECT statement.
	
	     SELECT customer.company FROM customer WHERE customer.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * Since the customer table is already open, FoxPro will try
	      * to use it. It won't go to disk to open the table. But
	      * the table is aliased as 'test' so the fields should be
	      * aliased as 'test'.
	      * customer.company does not exist. The table is aliased as 'test'.
	      * "customer.company" should be "test.company"
	
	     SELECT customer.company FROM customer WHERE test.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * Since the customer table is already open, Fox will try
	      * to use it. It won't go to disk to open the table. But
	      * the table is aliased as 'test' so the fields should be
	      * aliased as 'test'.
	      * customer.company does not exist. The table is aliased as 'test'.
	      * "customer.company" should be "test.company"
	
	     SELECT test.company FROM customer WHERE customer.state = "WA"
	
	      * Produces Error: 'STATE' is not a memory variable
	      * Since the customer table is already open, FoxPro will try
	      * to use it. It won't go to disk to open the table. But
	      * the table is aliased as 'test' so the fields should be
	      * aliased as 'test'.
	      * customer.state does not exist. The table is aliased as 'test'.
	      * "customer.state" should be "test.state"
	
	     SELECT test.company FROM customer WHERE test.state = "WA"
	
	      * OK. This is a valid SELECT statement.
	
	     CLOSE ALL
	
	     USE customer ALIAS customer
	
	     SELECT customer.company FROM customer WHERE customer.state = "WA"
	
	      * OK. This is a valid SELECT statement.
	
	     SELECT customer.company FROM customer WHERE test.state = "WA"
	
	      * Produces Error: Alias 'TEST' not found
	      * There is no table named test.
	      * No table is opened with a alias of test.
	      * "test.state" should be "customer.state"
	
	     SELECT test.company FROM customer WHERE customer.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * There is no table named test.
	      * No table is opened with a alias of test.
	      * "test.company" should be "customer.company"
	
	     SELECT test.company FROM customer WHERE test.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * There is no table named test.
	      * No table is opened with a alias of test.
	      * "test.company" should be "customer.company"
	
	     CLOSE ALL
	
	     SELECT customer.company FROM customer WHERE customer.state = "WA"
	
	      * OK.  This is a valid SELECT statement.
	
	     SELECT customer.company FROM customer WHERE test.state = "WA"
	
	      * Produces Error: Alias 'TEST' not found
	      * There is no table named test.
	      * No table is opened with a alias of test.
	      * "test.state" should be "customer.state"
	
	     SELECT test.company FROM customer WHERE customer.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * There is no table named test.
	      * No table is opened with a alias of test.
	      * "test.company" should be "customer.company"
	
	     SELECT test.company FROM customer WHERE test.state = "WA"
	
	      * Produces Error: SQL column 'COMPANY' not found
	      * There is no table named test.
	      * No table is opened with a alias of test.
	      * "test.company" should be "customer.company"
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.50 2.50a 2.50b 3.00 | 2.00 2.5
	
	=============================================================================
	

{% endraw %}
