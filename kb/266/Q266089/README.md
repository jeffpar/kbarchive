---
layout: page
title: "Q266089: PRB: MODIFY VIEW with Long IN Clause Causes VFP to Terminate"
permalink: /kb/266/Q266089/
---

## Q266089: PRB: MODIFY VIEW with Long IN Clause Causes VFP to Terminate

{% raw %}

	Article: Q266089
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC
	Last Modified: 01-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify a view in the View Designer that contains a long IN clause,
	Visual FoxPro terminates. Visual FoxPro 6.x either generates a fatal error or
	terminates without any error message. Visual FoxPro 5.x generates the error
	message
	
	  Mismatched Pushjmp/Popjmp Call
	
	followed by:
	
	  .DBC Internal Consistency Error
	
	and then terminates.
	
	RESOLUTION
	==========
	
	To resolve this problem, you can:
	
	1. Reduce the IN clause to a shorter statement
	
	-or-
	
	2. Break the IN clause into two statements and use the .OR. operator to join
	  them together as two separate criteria, such as:
	
	  CREATE SQL VIEW view2 as SELECT *;
	   FROM customer!customer1;
	   WHERE Customer1.cust_id IN ("ABC11","DBF11","ADF11","DFR11","WDS11","RRR11");
	     OR (Customer1.cust_id IN ("GGG11","AFR11","TRE11","YUI11","OUI11","POI11","QWE11"));
	   ORDER BY Customer1.cust_id
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code to create a database and a table:
	
	  CREATE DATABASE customer
	  CREATE TABLE customer1 (cust_id C(5), cust_name C(40))
	  INSERT INTO customer1 VALUES ("ASD11","John")
	  INSERT INTO customer1 VALUES ("OUI11","Smith")
	  INSERT INTO customer1 VALUES ("TRE11","Ken")
	  INSERT INTO customer1 VALUES ("BRE11","Kenneth")
	  INSERT INTO customer1 VALUES ("ABC11","Joe")
	
	2. While the database is still open, in the Command window, run the following
	  code to create a view:
	
	  CREATE SQL VIEW view2 as SELECT *;
	     FROM customer1;
	     WHERE Customer1.cust_id IN ;                 
	     ("ABC11","DBF11","ADF11","DFR11","WDS11","RRR11", "GGG11","AFR11","TRE11","YUI11","OUI11","POI11","QWE11");
	     ORDER BY Customer1.cust_id
	
	3. Type the following into the Command window to try to modify view2:
	
	      MODIFY VIEW view2
	
	NOTE: Visual FoxPro 6.x will error out with fatal error or terminate without any
	error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
