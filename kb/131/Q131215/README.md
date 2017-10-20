---
layout: page
title: "Q131215: FIX: COPY STRUCTURE EXTENDED Ignores Long Field Names"
permalink: /kb/131/Q131215/
---

## Q131215: FIX: COPY STRUCTURE EXTENDED Ignores Long Field Names

{% raw %}

	Article: Q131215
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro's COPY STRUCTURE EXTENDED command was enhanced to provide for many
	of the new properties that a table may have, but it still only observes
	standard-length (10 character) field names. It ignores long field names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Issue the following commands in the Command window:
	
	     CREATE DATABASE mydbc
	     CREATE TABLE mytbl (a2345678901234 c(3))
	     COPY STRUCTURE EXTENDED TO backup
	     USE backup
	     CREATE mytbl2 FROM backup
	
	Note the field name in mytbl2 is only 10 characters (a123456789).
	
	NOTE: Though the COPY STRUCTURE EXTENDED command has been corrected, in order to
	create a table that uses the same long field names, you must specify the
	database name and long table name for the new table. For the example above,
	change the last CREATE command as follows:
	
	     CREATE mytbl2 DATABASE mydbc NAME mytbl2 FROM backup
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
