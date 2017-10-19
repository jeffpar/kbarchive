---
layout: page
title: "Q103834: Style Metacharacter Not for Use with Main Menu Bar"
permalink: /kb/103/Q103834/
---

## Q103834: Style Metacharacter Not for Use with Main Menu Bar

	Article: Q103834
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): 2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to the "Commands & Functions" manual for FoxBASE+/Mac, use of the
	style metacharacter (<) followed by "B", "I", "U", "O", or "S" causes a menu
	to have the style that corresponds to the letter used. This information applies
	only to menu options (the choices on a menu popup), not to the main menu bar. If
	the style metacharacter is used with the main menu bar, the "<" and the
	letter following it will be placed on the menu bar.
	
	NOTE: The letters following the style metacharacter must be in uppercase.
	
	EXAMPLE
	-------
	
	   *PROGRAM FILE NAME "TEST.PRG"
	          SET PROCEDURE TO TEST.PRG
	          MENU BAR "Position<S;Record;Utilites"
	          MENU 2,"Open/O<S<B;Close<I;(-;(Continue;Locate/L<O"
	          x=.f.
	          ON MENU DO MENUPROC WITH MENU(0), MENU(1)
	
	          DO WHILE .NOT. X
	               READ
	          ENDDO
	
	          PROCEDURE MENUPROC
	          PARAMETER Y,Z
	
	          DO CASE
	               CASE Y=2 .AND. Z=2
	                    X=.T.
	          ENDCASE
	
	     *END OF PROGRAM
	
	Additional query words: 2.01 meta character submenu
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : :2.01
	Issue type        : kbinfo
	
	=============================================================================
	
