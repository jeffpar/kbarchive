---
layout: page
title: "Q111991: PRB: &quot;Compiled Code for This Line Too Long&quot; Error Message"
permalink: kb/111/Q111991/
---

## Q111991: PRB: &quot;Compiled Code for This Line Too Long&quot; Error Message

	Article: Q111991
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although the FoxPro command-line length limit is 2048 bytes, a line of compiled
	code cannot exceed 1024 bytes (1 kilobyte). This means you can write a line of
	code containing fewer than 2048 characters that will generate the error message
	"Compiled code for this line too long" (1252).
	
	In Visual FoxPro, the maximum number of characters per line is 8K (kilobytes).
	The maximum size of a line of compiled code is 4K.
	
	CAUSE
	=====
	
	The relationship between the character representation of a command and its
	compiled or "tokenized" length is unpredictable.
	
	Variable names and object references of different lengths may compile to the same
	number of bytes. For example, a reference to the memory variable "A" compiles to
	3 bytes. However, a reference to the variable "ABCDEFGH" also compiles to 3
	bytes. Similarly, a reference to the number "1" and a reference to the number
	"200" will each compile to 3 bytes. For this reason, shortening alias names has
	no effect on the length of the tokenized line.
	
	In addition, white space and literal strings (character strings placed within
	quotation marks) are not tokenized. Therefore, eliminating spaces and
	indentation in the command line also will not affect the tokenized line length.
	
	WORKAROUND
	==========
	
	To work around this behavior, do one of the following:
	
	- Use an ON ERROR routine that traps errors 18 (Line too long), 1252 (Compiled
	  code for this line too long), and 1812 (SQL statement too long).
	
	-or-
	
	- Replace literal strings with variable references. This would also work for
	  date literals (for example, {12/30/93}) and many numeric literals (for
	  example, 4.5).
	
	  For example, in the following SQL SELECT command
	
	        SELECT * FROM customer ;
	             WHERE company = "Allied Products" or company = "Microsoft Corp."
	
	  the quoted text strings, "Allied Products" and "Microsoft Corp.", cannot be
	  tokenized any further.
	
	  To work around this, create a set of variables such as
	
	        m.company1="Allied Products"
	        m.company2="Microsoft Corp."
	
	  and change your SELECT command line to the following:
	
	        SELECT * FROM customer;
	             WHERE company=m.company1 or company=m.company2
	
	  In many cases, this command will tokenize smaller than the original command.
	
	  NOTE: This solution does not work for small integers (less than 256) because
	  the size of a tokenized 1-byte integer is the same as the size of a tokenized
	  variable reference.
	
	REFERENCES
	==========
	
	FoxPro online Help file, "Error Messages" topic
	
	FoxPro for MS-DOS "Developer's Guide," Appendix A
	
	FoxPro for Windows "Developer's Guide," Appendix B
	
	FoxPro for Macintosh "Developer's Guide," Appendix B
	
	Additional query words: FoxMac FoxDos FoxWin VFoxWin 2.50 2.50a 2.50b 2.50c 2.60 errmsg err msg browse create table insert rqbe limitation capacities capacity
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
