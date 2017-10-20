---
layout: page
title: "Q117219: Using STRTRAN() to Add Carriage Returns to ASCII File"
permalink: /kb/117/Q117219/
---

## Q117219: Using STRTRAN() to Add Carriage Returns to ASCII File

{% raw %}

	Article: Q117219
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Macintosh, the COPY TO TYPE DELIMITED command creates a delimited
	ASCII file, with each record terminated by a linefeed only. Some programs
	require a carriage return as the record terminator. If the ASCII file is placed
	in a memo field with APPEND MEMO, the STRTRAN() function can be used to replace
	the linefeed character with a carriage return character. COPY MEMO can then be
	used to create a new file with carriage returns.
	
	MORE INFORMATION
	================
	
	The following code illustrates the use of STRTRAN() to add carriage return
	characters.
	
	     CREATE TABLE memonly (textfile M)
	     SELECT 0
	     USE SYS(2004)+"\tutorial\customer.dbf"
	     COPY TO test.txt TYPE DELIMITED FOR RECNO() < 5
	     SELECT memonly
	     APPEND BLANK
	     APPEND MEMO memonly.textfile FROM test.txt OVERWRITE
	     REPLACE memonly.textfile WITH STRTRAN(textfile,CHR(10),CHR(13))
	     COPY MEMO memonly.textfile FROM test2.txt
	
	Open both files in Microsoft Word. TEST.TXT contains a box character at the end
	of each record. TEST2.TXT starts a new line where the box characters used to be
	in TEST.TXT.
	
	CHR(10) is the ASCII code for the linefeed character and CHR(13) is the ASCII
	character for the carriage return. If both the carriage return and the linefeed
	character are necessary use the following REPLACE command instead.
	
	     REPLACE textfile WITH STRTRAN(textfile,CHR(10),CHR(13)+CHR(10))
	
	For information about using low-level file commands to export data to a delimited
	ASCII file, please see the following article in the Microsoft Knowledge Base:
	
	  Q115418 Appending from a Delimited ASCII File Using Low-Level File I/O
	
	Additional query words: VFoxMac FoxMac line feed hard return soft CR/LF text
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	

{% endraw %}
