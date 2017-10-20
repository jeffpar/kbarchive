---
layout: page
title: "Q147669: PRB: SetupWiz Generated Setup Program Fails to Start Correctly"
permalink: /kb/147/Q147669/
---

## Q147669: PRB: SetupWiz Generated Setup Program Fails to Start Correctly

{% raw %}

	Article: Q147669
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbDSSTools kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Immediately after a Setup-Wizard-generated setup program starts and displays the
	"Copying initialization files..." dialog box, one of the following error
	messages appears:
	
	  (16-bit application)
	  $(SomePath)\FileName.ext
	  Cannot create temporary file. The file could not be installed.
	
	  (32-bit application)
	  Setup will now start the application removal utility to remove
	  temporary installation files.
	
	NOTE: Microsoft Technical Support does not support any modifications to the Setup
	Wizard.
	
	CAUSE
	=====
	
	This problem can be caused when one or more shared files have their installation
	directory changed from the default directory in step 7 of the Setup Wizard. The
	behavior of any setup media generated after modifying the installation directory
	of shared files is undefined. Shared files should always be installed into the
	default directory specified.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start either the 16-bit or 32-bit version of the Visual Basic 4.0 Setup
	  Wizard.
	
	2. Select the \VB\SAMPLES\CALC\CALC.VBP sample project.
	
	3. Choose Next repeatedly until Step 7 of the wizard is reached.
	
	4. Ensure that either VB40016.DLL or VB40032.DLL is selected and then press the
	  'File Details' button.
	
	5. Using the Destination Directory combo box, change the install path for the
	  file selected in step four from $(WinSysPath) to $(AppPath). Allow the Setup
	  Wizard to finish and create distribution media.
	
	6. Run the SETUP.EXE program that the Setup Wizard has generated. Observe the
	  behavior described in the Symptoms section above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbDSSTools kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
