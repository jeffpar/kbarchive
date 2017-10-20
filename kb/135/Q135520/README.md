---
layout: page
title: "Q135520: DOCERR: Syntax Error When Using INSERT INTO Example Code"
permalink: /kb/135/Q135520/
---

## Q135520: DOCERR: Syntax Error When Using INSERT INTO Example Code

{% raw %}

	Article: Q135520
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Page 155 in the Developer's Guide, an INSERT INTO command is given to insert
	a record into the Customer table of the Tastrade database. When this code is
	typed into the Command window or in a program, a 'Syntax error' message is
	displayed. Because an apostrophe is used in the text to be added for the Company
	field, the Company data needs to be enclosed in double quotation marks.
	
	MORE INFORMATION
	================
	
	This incorrect code:
	
	     INSERT INTO customer (cust_id, company, contact) ;
	        VALUES ('SMI007', 'Smith's Delicatessen', 'Sarah Smith')
	
	should be:
	
	     INSERT INTO customer (cust_id, company, contact) ;
	        VALUES ('SMI007', "Smith's Delicatessen", 'Sarah Smith')
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
