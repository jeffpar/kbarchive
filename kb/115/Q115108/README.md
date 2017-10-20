---
layout: page
title: "Q115108: Cursor Name Must Be Alias, Not .DBF Name"
permalink: /kb/115/Q115108/
---

## Q115108: Cursor Name Must Be Alias, Not .DBF Name

{% raw %}

	Article: Q115108
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following commands will cause a syntax error:
	
	     CREATE CURSOR 'new cursor' (name c(20))
	     SELECT * FROM tutorial\customer INTO CURSOR 'new cursor'
	
	CAUSE
	=====
	
	The cursor name specified is a valid .DBF name for FoxPro for Macintosh, but is
	not a valid alias name. The cursor name must be a valid alias name.
	
	The documentation for the CREATE CURSOR command on page 282 in the "Language
	Reference" and in the online Help file shows the following syntax:
	
	     CREATE CURSOR <dbf_name>
	
	This syntax is incorrect. It should say "<alias_name>" instead of
	"<dbf_name>". The SELECT - SQL command does not specify whether a .DBF or
	alias name must be used when the output is selected into a cursor. If the query
	is directed into a cursor, a valid alias name must be used. If the query is
	directed into a table, a valid table name must be used. Selecting into a table
	instead of a cursor allows the use of spaces within a table name.
	
	RESOLUTION
	==========
	
	To avoid this problem, do the following:
	
	- Use a valid alias name. A valid alias name can contain up to 10 letters,
	  digits, or underscores, and must begin with a letter or an underscore.
	
	- If the output filename must contain spaces, use the CREATE TABLE or SELECT
	  ... INTO TABLE commands.
	
	Additional query words: VFoxMac FoxMac docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	

{% endraw %}
