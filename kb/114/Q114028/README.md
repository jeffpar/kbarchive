---
layout: page
title: "Q114028: PC Forms: Run Minimized Property Doesn't Function in E-form"
permalink: /kb/114/Q114028/
---

## Q114028: PC Forms: Run Minimized Property Doesn't Function in E-form

{% raw %}

	Article: Q114028
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select Run Minimized in the Properties dialog box (choose Properties from
	the Program Manager File menu) for an electronic form (E-form) created with
	version 1.0 of Microsoft Electronic Forms Designer, the form opens as a
	full-screen window when you start it.
	
	CAUSE
	=====
	
	When you create an executable file in Visual Basic, you can set the startup form
	by choosing Project from the Options menu. The two sample forms and the generic
	template form included with Electronic Forms Designer use a subroutine for the
	startup form, rather than an actual Visual Basic form. Because E-forms are
	loaded using the Show method from this subroutine, the Run Minimized property is
	ignored. To run an E-form minimized, you must add additional code to the
	EFORM.BAS file.
	
	RESOLUTION
	==========
	
	To run an E-form minimized, modify the ParseCommandLine function defined in the
	EFORM.BAS file. To do this, use the following procedure:
	
	1. Open the E-form project in Visual Basic.
	
	2. From the Project window, select EFORM.BAS.
	
	3. Choose View Code.
	
	4. From the Proc list, select ParseCommandLine.
	
	5. Scroll to the following comment in the code:
	
	        Load form based on command and message flags.
	
	6. Add "frmCompose.WindowState = 1" to the Select Case function as defined
	  below:
	
	        Select Case gCommand
	           Case wcommandCompose
	           frmCompose.WindowState = 1
	           frmCompose.Show
	
	This will set the WindowState property of the form to be minimized.
	
	NOTE: Making this code modification will load the form minimized regardless of
	how it is started in Windows.
	
	
	Additional query words: 1.00 minimize
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
