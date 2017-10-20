---
layout: page
title: "Q190199: BUG: OLEcont MSDN Sample Does Not Allow a SaveAs Cancel"
permalink: /kb/190/Q190199/
---

## Q190199: BUG: OLEcont MSDN Sample Does Not Allow a SaveAs Cancel

{% raw %}

	Article: Q190199
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Visual Basic sample application OLECont, the following
	error may occur:
	
	  Path/File access error
	
	This error occurs when the sample application is run and the user clicks Cancel
	when attempting to use Save As from the File menu of the sample application.
	
	CAUSE
	=====
	
	The CancelError property of the CommonDialog is not set to True. Therefore, the
	run-time error is executed.
	
	RESOLUTION
	==========
	
	To allow the Common Dialog control to be cancelled during a Save, the
	CancelError property of the CommonDialog should be set to True. The following
	line of code allows the Cancel button to function correctly:
	
	     ParentForm.ActiveForm.CommonDialog1.CancelError = True
	
	The line of code above should be entered into the OpenSave subroutine in the
	ModOLECont module immediately below the following lines of the subroutine, as
	follows:
	
	     Sub OpenSave(Action as String)
	        Dim Filenum
	        Filenum = FreeFile
	        'Insert line here to resolve Cancel button for CommonDialog1
	        ParentForm.ActiveForm.CommonDialog1.CancelError = True
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Microsoft Visual Basic, and open the OLECont sample project. This
	  project should be located in the following directory:
	
	  \Microsoft Visual Studio\MSDN98\98VS\1033\Samples\Vb98\Olecnt
	
	  NOTE: The path to the directory may vary depending on where Visual Basic has
	  been installed.
	
	2. From the Run menu, click Start once the project has been opened.
	
	3. From the File menu, click New in the running application.
	
	4. For Object Type, select Bitmap Image, and then click Ok.
	
	5. From the File menu, click Save As in the running application.
	
	6. In the Save As dialog, click Cancel.
	
	Additional query words: kbDSupport kbdss kbDSupport kbVBp600bug kbVBp kbCodeSamProd
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
