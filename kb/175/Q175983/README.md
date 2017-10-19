---
layout: page
title: "Q175983: PRB: Extra Menu Pad Added if Modal Screen Called 31 Times"
permalink: /kb/175/Q175983/
---

## Q175983: PRB: Extra Menu Pad Added if Modal Screen Called 31 Times

	Article: Q175983
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro for Windows or in FoxPro for Windows 2.x, specific
	circumstances make an additional menu pad appear, that causes unpredictable
	problems if the menu pad is selected.
	
	The additional menu pad is a duplicate of the next-to-last menu pad.
	
	All of the following circumstances have been noted to exist when this condition
	occurs:
	
	- Menu pads have a SKIP FOR condition to disable them.
	
	- More than six menu pads with five characters in each pad are required.
	
	- A MODAL screen is being displayed when the extra menu pad appears.
	
	- The problem occurs only if a screen is activated by a READ MODAL that is
	  being called from within a DO WHILE loop.
	
	- The extra menu pad appears on the 31st time the MODAL screen is called.
	
	- If you exit the program, without exiting FoxPro, and then rerun the program,
	  the number of times that the MODAL screen must be called before the extra
	  menu pad is displayed decrements by one. Then, during this second running of
	  the program, the extra menu pad appears during the 30th appearance of the
	  MODAL screen. In a multi-user environment, this creates a random appearance
	  of the extra menu pad.
	
	This problem does not occur in FoxPro for DOS.
	
	CAUSE
	=====
	
	This behavior appears to be caused by a combination of the looping of the MODAL
	READ (screen) and the SKIP FOR conditions on the menu pads.
	
	RESOLUTION
	==========
	
	A workaround is to call the Menu.mpr program again at the end of the DO loop, so
	that the last line of code in the Main.prg before the ENDDO is:
	
	     DO Testmnu.mpr
	
	This additional calling of the menu has the effect of re-setting whatever
	internal counter is causing the extra menu to appear on the 31st run of the
	MODAL screen. However, in a multi-user environment this workaround may not
	prevent the behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Included below are three sample programs, Main.prg, Testmnu.mpr, and
	Testapp.spr.
	
	Main.prg is the initial calling program that calls the sample menu allowing the
	selection of a menu pad that calls the sample modal screen. Testmnu.mpr is a
	sample menu and Testapp.spr is a sample modal screen.
	
	1. Select the text below from the comment box that identifies the beginning of
	  Main.prg to the comment box that identifies the end of Main.prg and press
	  CTRL+C, or you may click COPY on the Edit menu.
	
	2. In the FoxPro Command window, type the following command:
	
	        MODIFY COMMAND Main.prg
	
	3. You will see a new program window. Press CTRL+V or click PASTE on the Edit
	  menu, and then save the program.
	
	4. Repeat steps 1-3 for the two other programs Testmnu.mpr and Testapp.spr.
	
	5. In the FoxPro Command window, type the following command:
	
	        DO main.prg
	
	6. On the application's main menu, click the Test Bar pad from the Test Pad 1
	  menu or press ALT+T. This displays a modal screen that has an Exit command
	  button. Notice that the menu pads, with the exception of the Exit menu pad,
	  are disabled and cannot be selected. Also notice that the "Menu hit count" is
	  displayed on the FoxPro desktop.
	
	7. Click the Exit button on the modal screen, or press ALT+E. Note that the menu
	  pads are again enabled.
	
	8. Repeat steps 6 - 7 until the "Menu hit count" display reaches 30.
	
	9. Repeat step 6 to call the modal screen once more. While it is being
	  displayed, notice that a second pad named Test Pad 7, has been added to the
	  end of the other menu pads (prior to the Exit pad) and that unlike the other
	  menu pads, it seems to be enabled. However, if selected, Test Pad 7 has no
	  menu choices and sometimes causes erratic menu behavior.
	
	        *       *********************************************************
	        *       *
	        *       * 10/20/97             Main.prg              16:46:24
	        *       *
	        *       *********************************************************
	        *       *
	        *       * Description:
	        *       * This main program is one of three sample programs that
	        *       * illustrates the problem of an extra menu pad appearing
	        *       * during the 31st display of a MODAL screen.
	        *       *
	        *       *********************************************************
	
	        CLEAR
	        ll_fread = .f.
	        lc_pad = ""
	        ln_bar = 0
	        lc_choice = ""
	        m0sysoff = .f.
	        ln_count = 0
	        PUSH MENU _msysmenu
	        DO TESTMNU.MPR
	
	        DO WHILE .T.
	           ll_fread = .f.
	           READ VALID ll_fread
	           ll_fread = .t.
	
	           DO CASE
	
	           CASE UPPER(lc_pad) = "TEST BAR"
	              ln_count = ln_count + 1
	              @ 2, 35 SAY "Menu hit count " + STR(ln_count)
	              DO TESTAPP.SPR
	
	           CASE UPPER(lc_pad) = "QUIT TO FOXPRO"
	              CLEAR
	              RELEASE ln_count
	              EXIT
	
	           ENDCASE
	
	        ENDDO
	
	        POP MENU _msysmenu
	        RETURN
	
	        PROCEDURE l_actmnu
	        PARAMETERS lc_parm1
	        ll_fread = .t.
	        CLEAR READ
	        lc_bar = BAR()
	        lc_pad = lc_parm1
	
	        RETURN
	
	        *       *********************************************************
	        *       *
	        *       *                  END OF Main.prg
	        *       *
	        *       *********************************************************
	
	        *       *********************************************************
	        *       *
	        *       * 10/20/97             Testmnu.mpr              16:46:24
	        *       *
	        *       *********************************************************
	        *       *
	        *       * Description:
	        *       * This menu program is one of three sample programs to
	        *       * illustrate the problem of an extra menu pad appearing
	        *       * during the 31st display of a MODAL screen.
	        *       *
	        *       *********************************************************
	
	        SET SYSMENU TO
	        SET SYSMENU AUTOMATIC
	
	        DEFINE PAD tp1 OF _MSYSMENU PROMPT "Test Pad \<1"  ;
	           COLOR SCHEME 3 ;
	           KEY ALT+1, "ALT+1" ;
	           SKIP FOR m0sysoff
	        DEFINE PAD tp2 OF _MSYSMENU PROMPT "Test Pad 2" ;
	           COLOR SCHEME 3 ;
	           SKIP FOR m0sysoff
	        DEFINE PAD tp3 OF _MSYSMENU PROMPT "Test Pad 3" ;
	           COLOR SCHEME 3 ;
	           SKIP FOR m0sysoff
	        DEFINE PAD tp4 OF _MSYSMENU PROMPT "Test Pad 4" ;
	           COLOR SCHEME 3 ;
	           SKIP FOR m0sysoff
	        DEFINE PAD tp5 OF _MSYSMENU PROMPT "Test Pad 5" ;
	           COLOR SCHEME 3 ;
	           SKIP FOR m0sysoff
	        DEFINE PAD tp6 OF _MSYSMENU PROMPT "Test Pad 6" ;
	           COLOR SCHEME 3 ;
	           SKIP FOR m0sysoff
	        DEFINE PAD tp7 OF _MSYSMENU PROMPT "Test Pad 7" ;
	           COLOR SCHEME 3 ;
	           SKIP FOR m0sysoff
	        DEFINE PAD exitpad OF _MSYSMENU PROMPT "\<Exit" ;
	           COLOR SCHEME 3 ;
	           KEY ALT+E, "ALT+E"
	        ON PAD tp1 OF _MSYSMENU ACTIVATE POPUP testpad1
	        ON PAD exitpad OF _MSYSMENU ACTIVATE POPUP exit
	
	        DEFINE POPUP testpad1 MARGIN RELATIVE SHADOW COLOR SCHEME 4
	        DEFINE BAR 1 OF testpad1 PROMPT "\<Test Bar" ;
	           KEY ALT+T, "Alt+T"
	        DEFINE BAR 2 OF testpad1 PROMPT "test1"
	
	        ON SELECTION BAR 1 OF testpad1 DO l_actmnu WITH PROMPT()
	
	        DEFINE POPUP exit MARGIN RELATIVE SHADOW COLOR SCHEME 4
	        DEFINE BAR 1 OF exit PROMPT "Quit to Foxpro"
	        DEFINE BAR 2 OF exit PROMPT "Do something else 1"
	        DEFINE BAR 3 OF exit PROMPT "Do something else 2"
	        ON SELECTION BAR 1 OF exit DO l_actmnu WITH PROMPT()
	
	        *       *********************************************************
	        *       *
	        *       *                  END  OF  Testmnu.mpr
	        *       *
	        *       *********************************************************
	
	        *       *********************************************************
	        *       *
	        *       * 10/20/97             TESTAPP.SPR              16:46:24
	        *       *
	        *       *********************************************************
	        *       *
	        *       * Description:
	        *       * This screen program is one of three sample programs that
	        *       * illustrates the problem of an extra menu pad appearing
	        *       * during the 31st display of a MODAL screen.
	        *       *
	        *       *********************************************************
	
	              DEFINE WINDOW test ;
	                 AT  0.000, 0.000  ;
	                 SIZE 15.846,92.600 ;
	                 FONT "MS Sans Serif", 8 ;
	                 FLOAT ;
	                 NOCLOSE ;
	                 MINIMIZE ;
	                 SYSTEM
	              MOVE WINDOW test CENTER
	
	        #REGION 1
	        m0sysoff = .t.
	
	        #REGION 1
	        IF WVISIBLE("test")
	           ACTIVATE WINDOW test SAME
	        ELSE
	           ACTIVATE WINDOW test NOSHOW
	        ENDIF
	        @ 12.000,36.800 GET lc_choice ;
	           PICTURE "@*HN \<Exit" ;
	           SIZE 1.8,10.000,1.0 ;
	           DEFAULT 1 ;
	           FONT "MS Sans Serif", 8 ;
	           STYLE "B" ;
	           VALID lc_val()
	
	        IF NOT WVISIBLE("test")
	           ACTIVATE WINDOW test
	        ENDIF
	
	        READ CYCLE MODAL
	        RELEASE WINDOW test
	
	        #REGION 1
	        m0sysoff = .f.
	
	        FUNCTION lc_val    &&  lc_choice VALID
	           CLEAR READ
	           RETURN
	        *       *                  END OF Testapp.spr
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
