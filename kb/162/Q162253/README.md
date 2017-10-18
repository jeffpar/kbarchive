---
layout: page
title: "Q162253: FIX: Form Builder Form Causes Illegal Operation"
permalink: kb/162/Q162253/
---

## Q162253: FIX: Form Builder Form Causes Illegal Operation

	Article: Q162253
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500fix kbVBp600fix kbvfp500bug kbvfp600bug
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run (or attempt to modify after running) a Form that was created with
	the Form Builder, the following error message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	Select Details to reveal the following error:
	
	  VFP caused a stack fault in module VFP.EXE ...
	
	CAUSE
	=====
	
	One of the labels that was added by the Form Builder was modified so that both
	the AutoSize and WordWrap properties are .T. (True).
	
	RESOLUTION
	==========
	
	Before running a form where you have set both the AutoSize and WordWrap
	properties on a label added by the Form Builder, right-click the Visible
	property of the label and click "Reset to Default."
	
	If you already ran the form and received the problem described in the "Symptoms"
	section, type the following commands in the command window to correct the form
	so that you can modify it and run it in the future.
	
	NOTE: Spacing and case are important in the REPLACE command.
	
	     scxfile = GETFILE('SCX', 'Locate your form')
	     USE (scxfile)
	     REPLACE ALL properties WITH ;
	       STRTRAN(properties, "Visible = .T."+CHR(13)+CHR(10)) ;
	       FOR "label" $ baseclass
	     USE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This behavior does not occur in Visual FoxPro 3.0b for Windows.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form in Visual FoxPro.
	
	2. On the Form menu, click Quick Form, or right-click the form and select
	  Builder from the Shortcut menu.
	
	3. Select any table and any fields that you want to add to the form.
	
	4. Select any label that was added to the form and set the following
	  properties:
	
	     AutoSize = .T. (True)
	     WordWrap = .T. (True)
	
	5. Run the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500fix kbVBp600fix kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
