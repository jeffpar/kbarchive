---
layout: page
title: "Q130658: PRB: &quot;This operation not supported for Class Member Object&quot;"
permalink: kb/130/Q130658/
---

## Q130658: PRB: &quot;This operation not supported for Class Member Object&quot;

	Article: Q130658
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the CLONEOBJECT() method is used to duplicate a member of a class, the
	error "This operation not supported for Class Member Object" is displayed.
	
	CAUSE
	=====
	
	The object is a contained member of an instance of a visual class stored in a
	class library (.VCX file). Visual FoxPro does not support cloning of contained
	member objects. The CLONEOBJECT() method is designed to copy information that is
	contained at the object level.
	
	WORKAROUND
	==========
	
	If, when designing a wizard or a builder, you plan on duplicating a control at
	form design time, define a class for this specific control and place an instance
	of this class on the form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Select the View Class button from the Form Controls toolbar. Select Add, and
	  add the Buttons VCX located in the SAMPLES\CONTROLS directory.
	
	3. Select the VCR control, and place it on the form. Select the CmdTop button in
	  the Object dropdown.
	
	4. In the Command window, type:
	
	  a. "=ASELOBJ(acmdTop)" (without the quotation marks)
	     *Places information about the selected control in the acmdtop array
	
	  b. "acmdTop(1).Cloneobject('cmdtop2') && Generates an error" (without
	     the quotation marks)
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
