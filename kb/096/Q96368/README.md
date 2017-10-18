---
layout: page
title: "Q96368: How to Encrypt a Program with a Password"
permalink: kb/096/Q96368/
---

## Q96368: How to Encrypt a Program with a Password

	Article: Q96368
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Password protection can be included with an application. The following code
	snippet is an example of a password routine that displays a " * " in place of
	the characters being typed. It also gives a time limit of 15 seconds to type in
	the correct password. The password in this program is "password".
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	expressed or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	     ON ESCAPE
	     SET TALK OFF
	     SCREEN 1 TOP HEADING "Log in" FIXED SIZE 10,50 AT 0,0
	
	     PASSWORD = SPACE(10)
	     STARTTIME = VAL(SYS(2))
	     ENDTIME = STARTTIME + 15
	
	     DO WHILE PASSWORD # "password"
	        CLEAR
	        PASSWORD = SPACE(10)
	        PW = SPACE(1)
	        @ 5,13 SAY "Password: "
	        X=1
	        PW=-1
	        @ 2,16 SAY "Seconds to type your password."
	        STARTPOS=23
	        @ 8,12 SAY "press return when done"
	           DO WHILE PW # 13 .AND. VAL(SYS(2)) < ENDTIME
	              PW=INKEY(.75)
	              IF PW > 32 .AND. PW < 127
	                 @ 5,STARTPOS SAY "*"
	                 STARTPOS = STARTPOS+1
	                 PASSWORD = STUFF(PASSWORD,X,1,CHR(PW))
	                 X=X+1
	              ENDIF
	              @ 2,13 SAY RIGHT(STR(ENDTIME -VAL(SYS(2))),2)
	           ENDDO
	           DO WHILE PASSWORD # "password"
	              IF PASSWORD # "password"
	                 ALERT NOTE 1 "Password is incorrect"
	                 EXIT
	              ENDIF
	           ENDDO
	           IF PW # 13
	              ALERT NOTE 1 "Time expired... Log in aborted."
	              CANCEL
	           ENDIF
	     ENDDO
	
	Additional query words: 2.10 FoxBASE+/Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
