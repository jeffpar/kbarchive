---
layout: page
title: "Q172453: PRB: Czech Characters Display Incorrectly in Label Caption"
permalink: /kb/172/Q172453/
---

## Q172453: PRB: Czech Characters Display Incorrectly in Label Caption

	Article: Q172453
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Czech characters do not display properly in a label on a form.
	
	RESOLUTION
	==========
	
	Regional and Keyboard Settings
	------------------------------
	
	Use these steps for the Windows NT 4.0/Windows 95 keyboard:
	
	1. Open the Control Panel and double-click Keyboard.
	
	2. Click the Input Locales or Language tab.
	
	3. Click Add and select Czech from the drop-down list.
	
	4. Click OK.
	
	5. Select the Czech "Input locales" entry and click the "Set as Default" button.
	
	Use these steps for Windows NT 4.0/Windows 95 Regional Settings:
	
	1. Open the Control Panel and double-click Regional Settings.
	
	2. Select the Czech option from the drop-down list.
	
	3. Select the "Set as System Default Locale" check box and click OK.
	
	4. If you get a message that the required files are already on the hard drive,
	  click No to replace the files and follow the instructions to install those
	  files.
	
	5. Reboot the computer.
	
	NOTE: Ensure the "Multilanguage Support" is installed for Windows 95. This can be
	found in the Control Panel by clicking the Add/Remove Programs icon on the
	Windows Setup tab.
	
	Code Pages in Microsoft Visual FoxPro
	-------------------------------------
	
	In the Config.fpw file, place the following setting for the Czech code page:
	
	     CODEPAGE=895
	
	To check the current code page of Microsoft Visual FoxPro, run the following
	function from the Command window.
	
	     ?CPCURRENT()
	
	Use these steps to change the Form's Code Page:
	
	1. To change the code page of a previously created form, called MyForm, and run
	  the following code from the Command window:
	
	        USE MyForm.SCX
	        DO HOME() + "TOOLS\CPZERO\CPZERO" WITH "MyForm.SCX"
	        *Displays the Code Page Selection Dialog.
	        *Select "895 - Kamenicky (Czech) MS-DOS" and click OK button.
	        USE
	
	After performing the above steps, the text from the Caption property of the
	Labels needs to be reentered. At this point they will retain the correct
	characters.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
