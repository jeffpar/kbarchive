---
layout: page
title: "Q195273: FIX: Fatal Exception C0000005 When Removing Form from a Formset"
permalink: /kb/195/Q195273/
---

## Q195273: FIX: Fatal Exception C0000005 When Removing Form from a Formset

	Article: Q195273
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type the command THISFORMSET.REMOVEOBJECT("FORM_NAME") to remove a form
	from a formset, a message box with following message appears:
	
	  Fatal error: Exception code = C0000005
	
	After this message appears, Visual FoxPro terminates.
	
	CAUSE
	=====
	
	This behavior occurs when a form is removed from a formset using the following
	syntax:
	
	  THISFORMSET.REMOVEOBJECT("FORM_NAME")
	
	RESOLUTION
	==========
	
	The behavior does not occur if the form is released from the formset.
	
	Use the following syntax to release a form that is part of a formset:
	
	  THISFORM.RELEASE
	
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
	
	1. Close any open data files and exit any running applications.
	
	2. Create a program file called RemFrm.prg using the following code:
	
	  PUBLIC ox
	  ox=CREATEOBJECT('testset')
	  ox.SHOW
	
	  DEFINE CLASS testset AS FORMSET
	     ADD OBJECT form1 AS test1 WITH ;
	        TOP    = 0, ;
	        LEFT   = 0, ;
	        HEIGHT = 250, ;
	        WIDTH  = 375
	  ENDDEFINE
	
	  DEFINE CLASS test1 AS FORM
	     DOCREATE = .T.
	     CAPTION = "Form1"
	     NAME = "Form1"
	
	     ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	        TOP = 200, ;
	        LEFT = 56, ;
	        HEIGHT = 25, ;
	        WIDTH = 241, ;
	        CAPTION = "Add Form", ;
	        NAME = "Command1"
	
	     PROCEDURE command1.CLICK
	        THISFORM.HIDE
	        THISFORMSET.ADDOBJECT("Form2","test2")
	        THISFORM.ENABLED=.F.
	        THISFORMSET.FORMS[2].ENABLED=.T.
	        THISFORMSET.FORMS[2].SHOW
	     ENDPROC
	  ENDDEFINE
	
	  DEFINE CLASS test2 AS FORM
	     TOP = 33
	     LEFT = 140
	     DOCREATE = .T.
	     CAPTION = "Form2"
	     VISIBLE = .F.
	     NAME = "FORM2"
	     AUTOCENTER=.T.
	
	  ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	     TOP = 192, ;
	     LEFT = 48, ;
	     HEIGHT = 25, ;
	     WIDTH = 241, ;
	     CAPTION = "Remove Me", ;
	     NAME = "Command1"
	
	     PROCEDURE command1.CLICK
	        THISFORM.HIDE
	        THISFORMSET.FORMS[1].ENABLED=.T.
	        THISFORMSET.FORMS[1].SHOW
	        THISFORMSET.REMOVEOBJECT(THISFORM.NAME)
	     ENDPROC
	  ENDDEFINE
	
	3. From the command prompt, type the following:
	
	  DO REMFRM
	
	4. Click Add Form.
	
	5. Click Remove Me.
	
	RESULT: A message box appears with the following error message:
	
	  Fatal error: Exception code = C0000005
	
	After clicking OK in the error message box, Visual FoxPro terminates.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
