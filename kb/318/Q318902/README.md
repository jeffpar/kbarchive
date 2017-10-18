---
layout: page
title: "Q318902: FIX: Visual FoxPro 7.0 Quits When You Run a Form with Grid"
permalink: kb/318/Q318902/
---

## Q318902: FIX: Visual FoxPro 7.0 Quits When You Run a Form with Grid

	Article: Q318902
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a form that has a grid control in the Visual FoxPro 7.0 (VFP7)
	development environment, VFP7 quits without an error message.
	
	CAUSE
	=====
	
	The ControlSource property of a control that the grid contains is set to a
	non-existent data source, and the Unload event of the form contains code.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  8-Mar-2002 13:30:01  9499      4.16MB   Vfp7.exe
	  8-Mar-2002 13:30:02  9499      1.09MB   Vfp7enu.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro 7.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior:
	--------------------------------
	
	Paste the following code in a program (.prg) file, and then run the program from
	the Command window:
	
	  LOCAL laForm[1], loForm AS FORM
	  CD JUSTPATH(SYS(16))
	  CLOSE DATABASES ALL
	  ERASE Q318902*.*
	
	  CREATE TABLE Q318902_dbf (cField1 C(10), cField2 C(10))
	  CREATE FORM Q318902_frm NOWAIT
	
	  ASELOBJ(laForm, 1)
	  loForm = laForm(1)
	  WITH loForm
	  	.ADDOBJECT("Grid1", "Grid")
	  	.grid1.COLUMNCOUNT = 2
	  	.grid1.RECORDSOURCE = "Q318902_dbf"
	  	.grid1.Column1.CONTROLSOURCE = "Q318902_dbf.cField1"
	  	.grid1.Column2.CONTROLSOURCE = "Q318902_dbf.cField2Bad"
	  ENDWITH
	  KEYBOARD '{ctrl+w}'
	  DOEVENTS()
	
	  MODIFY FORM Q318902_frm NOWAIT METHOD UNLOAD
	  DOEVENTS()
	  KEYBOARD "* Remove this line: form does not disappear.{CTRL+W}{CTRL+W}"
	  DOEVENTS()
	
	  CLOSE ALL
	  USE Q318902_dbf
	  DO FORM Q318902_frm
	
	Observe that Visual FoxPro quits.
	
	Additional query words: exit crash grid gone disappears
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
