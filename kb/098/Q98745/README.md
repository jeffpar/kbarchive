---
layout: page
title: "Q98745: How to Emulate a READ Inside Another READ"
permalink: kb/098/Q98745/
---

## Q98745: How to Emulate a READ Inside Another READ

	Article: Q98745
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code example below shows one method of emulating a READ inside a READ.
	Occasionally, you may need to bring up a new screen with GETs or a new GET field
	dependent upon the information entered in the original GET. Because FoxBASE+/Mac
	does not allow nested READs, the original READ must be terminated before a new
	GET with a READ is issued.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	expressed or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Code Example
	------------
	
	     *This is an example of how to create a READ inside a READ.
	     SET PROCEDURE TO readread && This file is named READREAD.PRG.
	     SET TALK Off
	     SET BELL Off
	     * Create memory variable for the GETs.
	     STORE space(10) to b,c,d
	     STORE 0 to a
	     * Create two public variables, one that will act as a flag
	     * to terminate the read and execute the "multiple read," and
	     * the other that will contain the information input for the
	     * GET inside the second READ.
	     Store .F. to flag
	     Store Space(10) to mvar
	
	     DO WHILE .T.
	       SCREEN 1 TYPE 0 HEADING "This is it!" AT 20,2 SIZE 286,492;
	         PIXELS FONT "Geneva",12 COLOR 0,0,0,-1,-1,-1 TOP
	       CLEAR
	       @ PIXELS 72,122 GET a PICTURE "@^ First;Second;Third";
	          VALID udf(a)
	       @ PIXELS 72,89 SAY "A" STYLE 0 FONT "Helvetica",270;
	          COLOR 0,0,0,-1,-1,-1
	       @ PIXELS 108,98 SAY "B" STYLE 0 FONT "Helvetica",270;
	          COLOR 0,0,0,-1,-1,-1
	       @ PIXELS 153,116 SAY "C" STYLE 0 FONT "Helvetica",270;
	          COLOR 0,0,0,-1,-1,-1
	       @ PIXELS 189,134 SAY "D" STYLE 0 FONT "Helvetica",270;
	          COLOR 0,0,0,-1,-1,-1
	       * There is nothing in it now so it will appear blank. The
	       * information will appear after input and the call to the UDF
	       * procedure is complete.
	       @ PIXELS 108,145 SAY mvar STYLE 0 FONT "Helvetica",14;
	          SIZE 14,121 COLOR 0,0,0,-1,-1,-1
	       @ PIXELS 153,158 GET c STYLE 0 FONT "Helvetica",14;
	          SIZE 14,121 COLOR 0,0,0,-1,-1,-1
	       @ PIXELS 189,173 GET d STYLE 0 FONT "Helvetica",14;
	          SIZE 14,121 COLOR 0,0,0,-1,-1,-1
	       READ
	       * This must be in the loop so it will come back to the READ
	       * when it is done.
	       IF Flag
	         DO inside
	       ENDIF
	     ENDDO
	
	     * This is the procedure called upon from the popup menu.
	     PROCEDURE udf
	     PARAMETER pram
	       DO CASE
	       * This portion of the code needs to be modified. This is
	       * just a shell of what must be used. The two commands
	       * (STORE and KEYBOARD) must be present.
	       CASE a=1
	         STORE .T. to Flag      && Set flag to true.
	         KEYBOARD CHR(23)       && Cause the READ to terminate.
	       CASE a=2
	         STORE .T. to Flag      && Set flag to true.
	         KEYBOARD CHR(23)       && Cause the READ to terminate.
	       CASE a=3
	         STORE .T. to Flag      && Set flag to true.
	         KEYBOARD CHR(23)       && Cause the READ to terminate.
	       ENDCASE
	     RETURN .T.                 && Return to the DO loop.
	
	     * This is the procedure that emulates a READ inside a READ.
	     PROCEDURE inside
	       @ PIXELS 108,145 GET mvar STYLE 0 FONT "Helvetica",14;
	          SIZE 14,121 COLOR 0,0,0,-1,-1,-1
	       READ
	       STORE .F. to flag    && Make flag false again to not come back
	                            && to this procedure.
	       KEYBOARD CHR(9)      && TAB to the next field.
	       RETURN               && Return to the DO WHILE...ENDDO loop.
	     *End program.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
