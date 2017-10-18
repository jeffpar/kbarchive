---
layout: page
title: "Q223125: FIX: &quot;Addins VB6.EXE - Application Error&quot; in Data Project"
permalink: kb/223/Q223125/
---

## Q223125: FIX: &quot;Addins VB6.EXE - Application Error&quot; in Data Project

	Article: Q223125
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbide kbVBp600bug kbIDEProject kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error occurs in a Data Project when the toolbox is not visible
	and the default form is clicked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Data Project in Visual Basic 6.0.
	
	2. Make sure that the Visual Basic toolbox is NOT visible within the IDE when
	  Visual Basic loads. If it is, close the toolbox, exit Visual Basic, start it
	  up again, and repeat step 2.
	
	3. From the Project window, double-click the "frmDataEnv" form to view its
	  design.
	
	4. Click on the form.
	
	  This causes an Access Violation in VB6.exe.
	
	NOTE:
	
	- There is no problem with clicking on the form if the toolbox is shown in the
	  IDE.
	
	- This occurs only in the Visual Basic 6.0 IDE and not at run-time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbide kbVBp600bug kbIDEProject kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
