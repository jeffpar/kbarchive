---
layout: page
title: "Q98366: Using Print Commands in FoxBASE+/Mac"
permalink: /kb/098/Q98366/
---

## Q98366: Using Print Commands in FoxBASE+/Mac

{% raw %}

	Article: Q98366
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The printing commands ? and @ SAY use different command sets. There are a
	variety of command combinations that affect output to the printer, screen, and
	text files, and there are several options that can affect formatting.
	
	MORE INFORMATION
	================
	
	OUTPUT TO THE PRINTER
	---------------------
	
	To Use ?
	--------
	
	     SET PRINT ON
	     ? "Print String"
	     SET PRINT OFF
	     SET PRINT TO
	
	To Use @ ... SAY
	----------------
	
	     SET DEVICE TO PRINT
	     @ 1,1 SAY "Print String"
	     SET DEVICE TO SCREEN
	     SET PRINT TO
	
	To Use Both
	-----------
	
	     SET PRINT ON
	     SET DEVICE TO PRINT
	     ? "This is a ?"
	     @ 2,1 SAY "@ SAY"
	     SET DEVICE TO SCREEN
	     SET PRINT OFF
	     SET PRINT TO
	
	Notes
	-----
	
	- SET PRINT ON does NOT direct output from @ ... SAY commands.
	
	- SET DEVICE TO PRINT does NOT direct output from ?.
	
	- Output from ? will be printed with the current screen font.
	
	- SET PRINT TO is needed to close the print job. Without it, if there is an
	  error during printing, the Macintosh will remain in a background conversation
	  with the printer.
	
	- The output will be sent to a buffer and will not be released until the SET
	  PRINT TO command is encountered. An EJECT or SET PRINT TO command can be
	  inserted within the print job to force a dump of the buffer and complete the
	  page feed.
	
	- SET CONSOLE OFF will prevent the output from being echoed to the screen.
	
	- SET DEVICE TO PRINT can be issued before SET PRINT ON with the same results.
	  Likewise, the order of SET DEVICE TO SCREEN and SET PRINT OFF is
	  interchangeable.
	
	OUTPUT TO TEXT FILE
	-------------------
	
	To Use ?
	--------
	
	     SET ALTERNATE TO "filename"
	     SET ALTERNATE ON
	     ? "Text String"
	     SET ALTERNATE OFF
	     SET ALTERNATE TO
	
	To Use @ ... SAY
	----------------
	
	     SET PRINTER TO "filename"
	     SET DEVICE TO PRINT
	     @ 1,1 SAY "Text String"
	     SET DEVICE TO SCREEN
	     SET PRINTER TO
	
	Notes
	-----
	
	- If output is not to be echoed to the screen, issue SET CONSOLE OFF. This
	  command does not work in interactive mode. It must be issued from a program.
	
	- The ? command issues a carriage return before outputting, which creates a new
	  line each time ? is issued. To prevent this from occurring, use the ??
	  command.
	
	REFERENCES
	==========
	
	"Commands & Functions," pages 3-2 to 3-15
	
	Additional query words: 2.01 print @say ? alternate FoxBASE+/MAC
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
