---
layout: page
title: "Q111676: BUG: SHOW POPUP Does Not Work with Menu Popups"
permalink: kb/111/Q111676/
---

## Q111676: BUG: SHOW POPUP Does Not Work with Menu Popups

	Article: Q111676
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp250bug kbvfp250aBUG kbvfp250bBUG kbvfp250cBUGkbbuglist
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The command SHOW POPUP will not show a popup defined as part of the system menu.
	The following example is taken from the FoxPro for Windows 2.x Help to
	illustrate this problem. The Visual FoxPro Help file does not provide this
	example. This same code works correctly in FoxPro for MS-DOS.
	
	     *** CODE BEGINS HERE ***
	     *** Name this program SHOW.PRG ***
	
	     CLEAR
	
	     SET SYSMENU SAVE
	     SET SYSMENU TO
	     DEFINE PAD cardpad OF _MSYSMENU PROMPT '\<Card Info';
	        COLOR SCHEME 3 KEY ALT+I, ''
	     DEFINE PAD showpad OF _MSYSMENU PROMPT '\<Show Card Info' ;
	        COLOR SCHEME 3 KEY ALT+I, ''
	     DEFINE PAD clearpad OF _MSYSMENU PROMPT 'C\<lear Card Info' ;
	        COLOR SCHEME 3 KEY ALT+I, ''
	
	     ON PAD cardpad OF _MSYSMENU ACTIVATE POPUP cardinfo
	     ON SELECTION PAD showpad  OF _MSYSMENU ;
	        DO choice IN show WITH PROMPT( ), POPUP( )
	     ON SELECTION PAD clearpad OF _MSYSMENU ;
	        DO choice IN show WITH PROMPT( ), POPUP( )
	
	     DEFINE POPUP cardinfo MARGIN RELATIVE SHADOW COLOR SCHEME 4
	     DEFINE BAR 1 OF cardinfo PROMPT '\<View Charges' ;
	        KEY ALT+V, ''
	     DEFINE BAR 2 OF cardinfo PROMPT 'View \<Payments' ;
	        KEY ALT+P, ''
	     DEFINE BAR 3 OF cardinfo PROMPT 'Vie\<w Users' ;
	        KEY ALT+W, ''
	     DEFINE BAR 4 OF cardinfo PROMPT '\-'
	     DEFINE BAR 5 OF cardinfo PROMPT '\<Charges '
	     DEFINE BAR 6 OF cardinfo PROMPT '\-'
	     DEFINE BAR 7 OF cardinfo PROMPT 'E\<xit '
	
	     ON SELECTION POPUP cardinfo;
	        DO choice IN show WITH PROMPT( ), POPUP( )
	
	     PROCEDURE choice
	     PARAMETERS mprompt, mpopup
	
	     IF mprompt = 'Show Card Info'
	        SHOW POPUP cardinfo
	        RETURN
	     ENDIF
	
	     IF mprompt = 'Clear Card Info'
	        CLEAR
	        RETURN
	     ENDIF
	
	     WAIT WINDOW 'You chose ' + mprompt + ;
	        ' from popup ' + mpopup NOWAIT
	
	     IF mprompt = 'Exit'
	        SET SYSMENU TO DEFAULT
	     ENDIF
	
	     *** CODE ENDS HERE ***
	     * Choosing "Show Card Info" from the menu does not show the popup, which
	     * illustrates the problem.
	
	RESOLUTION
	==========
	
	To work around this problem, use the following syntax and place the appropriate
	code in CHOICE:
	
	     ON SELECTION PAD cardpad OF _MSYSMENU DO choice IN show WITH PROMPT( ),;
	      POPUP( )
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbFP250 kbFP260 kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp250bug kbvfp250aBUG kbvfp250bBUG kbvfp250cBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
