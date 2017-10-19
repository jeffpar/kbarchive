---
layout: page
title: "Q221636: FIX: FFCs -_therm.vxc Classes Have Color Problems with Bars"
permalink: /kb/221/Q221636/
---

## Q221636: FIX: FFCs -_therm.vxc Classes Have Color Problems with Bars

	Article: Q221636
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The classes from the _therm.vcx FoxPro Foundation Class appear with the wrong
	colors. The progress bar indicator should use the color of selected text, and
	the back color should inherit the back color of the form. However, the progress
	bar itself appears dark gray and the back color is light gray.
	
	RESOLUTION
	==========
	
	There are two resolutions to this problem:
	
	- Uncomment the Init code of the progress bar found in the example below. This
	  code uses the GetSysColor API and the FillColor property of the _therm.vcx to
	  assign the proper colors.
	
	- Upgrade to Visual Studio 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file containing the following code:
	
	  PUBLIC oform1
	  SET CLASSLIB TO HOME(1)+"ffc\_therm.vcx" ADDITIVE
	  oform1=NEWOBJECT("form1")
	  oform1.SHOW
	  RETURN
	
	  DEFINE CLASS form1 AS FORM
	
	  	CAPTION = "Form1"
	  	NAME = "Form1"
	  	BACKCOLOR = RGB(136,192,184)
	
	  	ADD OBJECT _progressbar1 AS _progressbar WITH ;
	  		TOP = 47, ;
	  		LEFT = 24, ;
	  		BORDERWIDTH = 0
	
	  	ADD OBJECT timer1 AS TIMER WITH ;
	  		TOP = 180, ;
	  		LEFT = 72, ;
	  		HEIGHT = 23, ;
	  		WIDTH = 23, ;
	  		INTERVAL = 30, ;
	  		NAME = "Timer1"
	
	  *!*		PROCEDURE _progressbar1.INIT
	  *!*		#DEFINE COLOR_HIGHLIGHT 	13
	  *!*		DECLARE INTEGER GetSysColor IN win32api INTEGER
	  *!*		THIS.shpThermBar.FILLCOLOR = GetSysColor(COLOR_HIGHLIGHT)
	  *!*		THIS.shape5.FILLCOLOR = THIS.PARENT.BACKCOLOR
	  *!*	ENDPROC
	
	  	PROCEDURE timer1.TIMER
	  	IF THISFORM._progressbar1.ipercentage = 100
	  		THISFORM.RELEASE()
	  	ENDIF
	  	THISFORM._progressbar1.UPDATE(1+THISFORM._progressbar1.ipercentage)
	  	THISFORM.REFRESH
	  ENDPROC
	
	  ENDDEFINE
	
	2. Run the program.
	
	Notice that the progress bar indicator is dark gray and the progress bar back
	color is light gray. To see the workaround, uncomment the Init code in the
	progress bar.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
