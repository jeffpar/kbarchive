---
layout: page
title: "Q191700: PRB: Cannot Change Visual FoxPro Installation Directory"
permalink: /kb/191/Q191700/
---

## Q191700: PRB: Cannot Change Visual FoxPro Installation Directory

	Article: Q191700
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Visual FoxPro 6.0 on a computer that currently has Visual
	FoxPro version 5.0a installed, you are presented with an option to uninstall the
	existing Visual Studio '97 products with the updated 6.0 versions. Choosing
	Visual FoxPro during this step of the Install Wizard does not allow you to
	change the location for Visual FoxPro 6.0.
	
	CAUSE
	=====
	
	You chose to replace your existing Visual FoxPro 5.0a installation with Visual
	FoxPro 6.0. The setup program installs Visual FoxPro 6.0 in your old Visual
	FoxPro 5.0a directory.
	
	RESOLUTION
	==========
	
	Do not select Visual FoxPro in the dialog box when asked which Visual Studio
	products to uninstall.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro 5.0a
	
	2. Start the Visual FoxPro 6.0 installation.
	
	3. When you see the prompt for which products you wish to uninstall, choose
	  Visual FoxPro.
	
	4. Try and change the location for the Visual FoxPro 6.0 installation.
	
	You cannot change the directory because Visual FoxPro 6.0 will be installed in
	your existing Visual FoxPro 5.0a directory.
	
	Additional query words: kbVFp600 kbSetup
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
