---
layout: page
title: "Q131622: How to Display Current Control Properties at Run Time"
permalink: kb/131/Q131622/
---

## Q131622: How to Display Current Control Properties at Run Time

	Article: Q131622
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While the property sheet is available for controls during design time, Visual
	FoxPro does not provide a direct way to display the current values of an active
	control during run time. You can place a maximum of sixteen entries in the Debug
	Window, but this has limited application.
	
	Insert the code listed in this article in an appropriate method to display a list
	of the current properties and their values in a scrollable window.
	
	MORE INFORMATION
	================
	
	For the following code sample to function as intended, the following conditions
	must be true:
	
	- The WindowState must be normal (0).
	
	- The form and control must be active and visible.
	
	- No other instances of the form can be running.
	
	Insert the following code sample into a method (such as Click or
	InteractiveChange) that can be called interactively to determine the current
	state of the control's properties.
	
	When you run the code, the currently active form is minimized and the property
	list window activated. Once the desired status is determined, close the property
	list window to return the form to its normal state.
	
	Code Sample
	-----------
	
	  * Property list display code
	  LOCAL lnCnt
	  lnCnt=AMEMBERS(paTmp,THIS)    && Store properties in private array Tmp
	  SET SAFETY OFF
	  SET TEXTMERGE TO objsho
	  SET SAFETY ON
	  SET TEXTMERGE ON NOSHOW
	  THISFORM.WINDOWSTATE=1
	  FOR nI = 1 TO lnCnt
	      \\<<paTmp[nI] + ' = '>>
	      \\<<EVALUATE( 'THIS.' + paTmp[nI] )>>
	      \ 
	  ENDFOR
	  SET TEXTMERGE OFF
	  SET TEXTMERGE TO
	  DEFINE WINDOW shobj AT 0,0 SIZE WROW()-12,WCOL()/2.5 ;
	     TITLE 'Property List' SYSTEM GROW FLOAT CLOSE ;
	     FONT _screen.FontName, _screen.FontSize ;
	     STYLE IIF(_screen.FontBold,'B','N')
	  MODIFY FILE objsho NOMODIFY WINDOW shobj
	  RELEASE WINDOW shobj
	  THISFORM.WINDOWSTATE=0
	  * End of code
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
