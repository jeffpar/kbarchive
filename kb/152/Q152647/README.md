---
layout: page
title: "Q152647: How To Copy a Table and Preserve Long Field Names"
permalink: /kb/152/Q152647/
---

## Q152647: How To Copy a Table and Preserve Long Field Names

{% raw %}

	Article: Q152647
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to copy a table and preserve long file names even
	though COPY TO and COPY STRUCTURE EXTENDED do not provide this functionality. It
	is possible to use AFIELDS() and CREATE TABLE .. FROM ARRAY to accomplish the
	task. An example is provided below.
	
	MORE INFORMATION
	================
	
	In order to preserve long file names, a database must be open and active when
	the CREATE TABLE command is issued. This causes the CREATE TABLE to create a
	database table, rather than a free table.
	
	Example
	-------
	
	Enter the following commands in the Command window:
	
	     OPEN DATABASE HOME()+"SAMPLES\MAINSAMP\DATA\tastrade"
	     USE customer
	
	     nFldcount = AFIELDS(aFldarray)    && creates an array of fields
	
	     * The following command creates and opens a table with the structure
	     * described in the array
	     CREATE TABLE newcopy FROM ARRAY aFldarray
	
	     * If the data needs to be copied, you can then APPEND it
	     APPEND FROM customer
	
	Additional query words: VFoxWin VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
