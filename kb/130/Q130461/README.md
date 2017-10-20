---
layout: page
title: "Q130461: New Header Structure for Tables in Visual FoxPro"
permalink: /kb/130/Q130461/
---

## Q130461: New Header Structure for Tables in Visual FoxPro

{% raw %}

	Article: Q130461
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro now contains a new header structure for tables contained in a
	database container (.DBC files) and for free tables (.DBF files). The header
	record defines the structure of that table and contains any relevant information
	related to the table.
	
	The number of bytes that make up FoxPro header structure has been increased to
	accommodate the tables that are now contained in a database (.DBC files). To add
	a FoxPro version 2.x table to a Visual FoxPro database, Visual FoxPro converts
	the header structure internally. If you need to use a table created in Visual
	FoxPro in FoxPro version 2.x, you must convert it back to the version 2.x format
	by using this command:
	
	     COPY TO <filename> Type FOX2X
	
	MORE INFORMATION
	================
	
	Here is the new header information. Basically the header was increased by 263
	bytes to allow for the backlink to that DBC.
	
	1. The first byte (signature) has a 0x30 (hex or 48 decimal) in it for all
	  tables created in Visual FoxPro.
	
	2. The 29th byte contains flag bits with the following meaning:
	
	  0x01 - has production MDX (note that this is as in previous versions)
	  0x02 - has memos
	  0x04 - is a database container (DBC)
	
	  Since a DBC also has memos and an index, the value for the 29th byte 28 is 07.
	
	3. Immediately following the field definition are 263 bytes reserved for a
	  backlink ending at the location described by bytes 9th and 10th in the
	  header. This means that you should use these header bytes to determine the
	  start of the data instead of trying to calculate the end of the dictionary.
	
	REFERENCES
	==========
	
	For additional information about header files, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q98743 ERR: "Not a Database File"; How to Modify Database Header
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
