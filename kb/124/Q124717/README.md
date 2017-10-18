---
layout: page
title: "Q124717: How to Use the FXALERT() Function in FOXTOOLS.MLB"
permalink: kb/124/Q124717/
---

## Q124717: How to Use the FXALERT() Function in FOXTOOLS.MLB

	Article: Q124717
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FXALERT() function in FOXTOOLS.MLB (FOXTOOLS.CFM or FOXTOOLS.SLM in Visual
	FoxPro for Macintosh), displays an alert and waits for a user response. One of
	three icons can be displayed in the alert dialog box based on the type of alert
	chosen <expN1>. FXALERT returns a value representing the user exit action.
	Because of the presence of the function, the user can take advantage of the
	Macintosh system interface and pause the execution of an application without
	requiring an additional READ level.
	
	MORE INFORMATION
	================
	
	Sample Code - Example Syntax for FXALERT Function
	-------------------------------------------------
	
	The following code is an example of the syntax required to use the FXALERT
	function.
	
	  The following code is an example of the syntax required to use the FXALERT
	  function.
	
	  *** Begin Code ***
	   * ***************************************************************
	     * The sample program named MY_ALERT.PRG uses the FOXTOOLS     *
	     * Library function FXALERT. The program prompts the user to   *
	     * enter a message or stop to quit the program. If the user    *
	     * enters a message other than "stop," the program requests an *
	     * icon value of 0=Caution, 1=Stop, or 2=Note. After the user  *
	     * chooses an icon, the program displays the selected icon and *
	     * entered message in an alert dialog box. Once the FXALERT    *
	     * function is activated, the user is allowed to choose either *
	     * Yes or No. After the user selects the push button prompt in *
	     * the dialog, the screen is cleared and a message is          *
	     * displayed as a wait window displaying the choice made. The  *
	     * cycle continues until stop is entered in the message area.  *
	     * NOTE: No READ CYCLE was required for the push button prompts*
	     * or the FXALERT dialog interface.                            *
	     * *************************************************************
	  * WARNING: Make sure all work is saved before running this code.
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS.MLB" ADDITIVE
	     * Use the following line with FoxPro for Macintosh
	     * SET LIBRARY TO SYS(2004)+"FOXTOOLS.CFM" ADDITIVE
	     ACTIVATE WINDOW SCREEN  && refresh main FoxPro window
	     flag = .t.                   && Set Flag for DO WHILE
	     DO WHILE flag
	        CLEAR
	        ACCEPT "Please Enter a Message or Stop -->" TO msg
	        If UPPER(msg) = "STOP"
	           EXIT
	        ELSE
	          INPUT " 0 = Caution, 1 = Stop, 2 = Note -->" TO fx_icon
	          reply = FXALERT((fx_icon),259,-1,-1,(msg))
	          If reply = 1                       && Determine button pressed
	              WAIT WINDOW "(Yes) was Pressed" TIMEOUT 3
	          Else
	             WAIT WINDOW "(No) was Pressed" TIMEOUT 3
	          ENDIF
	        ENDIF
	     ENDDO
	     SET LIBRARY TO          && Close FOXTOOLS.MLB Library.
	     CLEAR                   && Clear Screen
	  *** End Code ***
	
	The following information describes the syntax and parameters for the FXALERT
	function. It is an excerpt from the FoxTools ReadMe file.
	
	FXALERT() Syntax
	----------------
	
	  Syntax:  FXALERT(<expN1>, <expN2>, <expN3>, <expN4>[, <expC1>]
	  [, <expC2>][, <expC3>][, <expC4>])
	
	NOTE: If the FOXTOOLS.MLB is not referenced the following Program Error is
	generated "File <Name> Does Not Exist."
	
	  <expN1>
	     Specifies a number that indicates the icon to be displayed on the
	     alert. 0=CAUTION; 1=STOP; 2=NOTE.
	
	  <expN2>
	     Specifies the resource number. FOXTOOLS contains the same twelve
	     alerts provided in the FOXUSER file of FoxBASE+ for Macintosh. In
	     FOXTOOLS, the resource numbers are 257 through 268 instead of 1
	     through 12 as in FoxBASE+ for Macintosh. An alert contains different
	     possible push button combinations which you can choose. For example,
	     resource number 259 contains the push buttons "Yes" and "No" with the
	     focus initially on the "Yes" push button.
	
	  <expN3>, <expN4>
	     Specify the coordinates, measured in pixels from the top left of
	     the screen, at which the alert will be placed. Use a value of -1 for
	     <expN3> and/or <expN4> to accept the default position. The default
	     position is centered.
	
	NOTE: Regardless of the coordinates specified in <expN3> and/or
	<expN4>, the alert will always come up centered on the screen.
	
	  [, <expC1>][, <expC2>][, <expC3>][, <expC4>]
	      Specify text that will appear on the alert.
	
	The following table shows the push buttons displayed on each of the twelve alerts
	with the default focus push button shown in parentheses.
	
	Res#   Button 1     Button 2    Button 3   Note
	----------------------------------------------------------------
	257    (Continue)
	258    (OK)
	259    (Yes)         No
	260     Yes         (No)
	261    (Yes)         No         Cancel
	262     Yes         (No)        Cancel
	263    (Continue)                          Bigger alert than 257
	264    (OK)                                Bigger alert than 258
	265    (Yes)         No                    Bigger alert than 259
	266     Yes         (No)                   Bigger alert than 260
	267    (Yes)         No         Cancel     Bigger alert than 261
	268     Yes         (No)        Cancel     Bigger alert than 262
	
	REFERENCES
	==========
	
	FoxTools Readme file in FoxPro:Goodies:Misc folder for FoxPro for Macintosh
	versions 2.x.
	
	FoxTools Help file in the Visual FoxPro:Goodies folder for Visual FoxPro for
	Macintosh version 3.0.
	
	Additional query words: vFoxMac FoxMac msgbox messagebox box message alert
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
