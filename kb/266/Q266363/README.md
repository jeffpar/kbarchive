---
layout: page
title: "Q266363: BUG: Fatal Error When Closing Forms That Use DHTML Edit Control"
permalink: kb/266/Q266363/
---

## Q266363: BUG: Fatal Error When Closing Forms That Use DHTML Edit Control

	Article: Q266363
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbCodeSnippet kbGrpDSFox kbActiveX kbCtrl kbvfp600 kbvfp600bug
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you release a form being executed that contains a Dynamic HTML Edit Control
	(DHTMLed.ocx), a fatal exception error may occur.
	
	CAUSE
	=====
	
	The fatal exception error occurs when the _VFP.AutoYield property is set to
	False (.F.). The fatal exception error may occur on Microsoft Windows 2000,
	regardless of the setting of the _VFP.AutoYield property.
	
	RESOLUTION
	==========
	
	When you execute forms that contain the Dynamic HTML Edit Control, set the
	_VFP.AutoYield property to True (.T.).
	
	NOTE: Setting the _VFP.AutoYield property to True (.T.) does not prevent the
	occurrence of a fatal exception on Windows 2000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	NOTE: The Microsoft Dynamic HTML Edit Control has not been tested with and may
	not be supported by Microsoft Visual FoxPro.
	
	This behavior does not occur when forms containing the Dynamic HTML Edit Control
	are released on Microsoft Windows NT 4.0.
	
	This behavior occurs when Microsoft Visual FoxPro forms that contain the Dynamic
	HTML Edit Control are released on the Microsoft Windows 2000 Server, regardless
	of the value of _VFP.AutoYield.
	
	The Visual FoxPro Help Documentation indicates that the AutoYield property should
	be set to False (.F.) when a form contains an ActiveX control. Setting AutoYield
	to False (.F.) prevents events for an ActiveX control from executing between
	lines of user program code.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named "Dhtml.prg" (without the quotation marks), by
	  using the following code:
	
	  PUBLIC ox
	  OldAutoYield=_VFP.AutoYield
	  _VFP.AutoYield=.T.
	  FOR i=1 TO 10
	     ox=CREATEOBJECT("DEMO")
	     ox.SHOW
	     IF _VFP.AUTOYIELD
	        WAIT WINDOW "AutoYield = TRUE" NOWA
	     ELSE
	        WAIT WINDOW "AutoYield = FALSE" NOWA
	     ENDIF
	     FOR EACH oform IN _SCREEN.FORMS
	        oform.RELEASE
	     ENDFOR
	     IF i=5
	        _VFP.AUTOYIELD=.F.
	     ENDIF
	  ENDFOR
	  *!* Reset the AutoYield property to default
	  _VFP.AUTOYIELD=OldAutoYield
	
	  DEFINE CLASS demo AS FORM
	     TOP = 0
	     LEFT = 0
	     AUTOCENTER = .T.
	     HEIGHT = 454
	     WIDTH = 633
	     DOCREATE = .T.
	     CAPTION = "Form1"
	     NAME = "Form1"
	
	     ADD OBJECT olecontrol1 AS OLECONTROL WITH ;
	        TOP = 24, ;
	        LEFT = 12, ;
	        HEIGHT = 276, ;
	        WIDTH = 612, ;
	        NAME = "Olecontrol1", ;
	        OLECLASS = "DHTMLEdit.DHTMLEdit.1"
	
	     ADD OBJECT text1 AS TEXTBOX WITH ;
	        VALUE = "http://www.msn.com", ;
	        HEIGHT = 25, ;
	        LEFT = 24, ;
	        TOP = 408, ;
	        WIDTH = 577, ;
	        NAME = "Text1"
	
	     ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	        TOP = 324, ;
	        LEFT = 24, ;
	        HEIGHT = 25, ;
	        WIDTH = 145, ;
	        CAPTION = "\<Navigate", ;
	        NAME = "Command1"
	
	  ENDDEFINE
	
	2. Save and run the program file, and note that after the fifth iteration, a
	  fatal exception error may occur.
	
	REFERENCES
	==========
	
	For additional information, query the Visual FoxPro Help Files; search on
	"AutoYield."
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words: DHTMLed AutoYield
	
	======================================================================
	Keywords          : kbDSupport kbCodeSnippet kbGrpDSFox kbActiveX kbCtrl kbvfp600 kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
