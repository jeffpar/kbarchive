---
layout: page
title: "Q165171: DOC: USE Command Incorrectly Documented in Help File &amp; Manual"
permalink: /kb/165/Q165171/
---

## Q165171: DOC: USE Command Incorrectly Documented in Help File &amp; Manual

{% raw %}

	Article: Q165171
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbdocerr kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online Help and the "Visual FoxPro Language Guide" both show the separator
	between database name and the table name in the USE command as the period (.).
	This is incorrect. The separator should be the exclamation point.
	
	MORE INFORMATION
	================
	
	Type USE in the command window. Highlight it and press F1. The following is
	displayed as the syntax:
	
	     USE [[DatabaseName.]Table
	
	Also the second paragraph under Arguments incorrectly says the following:
	
	  To open a table not in the current database, qualify the table name with the
	  database name, using a period (.) to separate the database and tables names.
	  If you don't qualify a table with a database name, Visual FoxPro can open
	  tables only in the current database.
	
	Note that the period should be replaced with an exclamation point (!).
	
	REFERENCES
	==========
	
	For more information about the correct notation, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q131265 Use Exclamation Mark (!) Notation for Precise Referencing
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	
	=============================================================================
	

{% endraw %}
