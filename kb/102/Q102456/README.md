---
layout: page
title: "Q102456: How to Activate Buttons While a Browse Window Is Open"
permalink: /kb/102/Q102456/
---

## Q102456: How to Activate Buttons While a Browse Window Is Open

	Article: Q102456
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	The code example below demonstrates one method of having buttons
	active while a Browse window is open. When the following program
	example is executed, a Browse window with two buttons below it will
	appear. An alert box will be displayed when either button is chosen.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT
	YOUR OWN RISK. Microsoft provides this code "as is" without warranty
	of any kind, either expressed or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a
	particular purpose.
	
	     DO WHILE .t.
	
	     SCREEN 1 TYPE 2 HEADING " " AT 250,114 SIZE 47,100 PIXELS ;
	       FONT "Geneva",12 TOP
	     @ PIXELS 27,32 SAY "Mark" FONT "Geneva",270
	
	     SCREEN 2 TYPE 2 HEADING " " AT 250,282 SIZE 47,100 PIXELS ;
	       FONT "Geneva",12 TOP
	     @ PIXELS 27,22 SAY "Unmark" FONT "Geneva",270
	
	     SCREEN 4 TYPE 2 AT -20,1 SIZE 1,1 PIXELS TOP
	     BROWSE AT 50,40 SIZE 150,400 SAVE
	
	     IF SYS(1035)='1' THEN
	       ALERT NOTE 1 "You marked it!"
	     ELSE
	       IF SYS(1035)='2' THEN
	         ALERT NOTE 1 "You unmarked it!"
	       ELSE
	         SCREEN 4 OFF
	         SCREEN 4 DELETE
	        EXIT
	       ENDIF
	     ENDIF
	     ENDDO
	
	     SCREEN 1 DELETE
	     SCREEN 2 DELETE
	
	Additional query words: 2.01 example screen button browse
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
