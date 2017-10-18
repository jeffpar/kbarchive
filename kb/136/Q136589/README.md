---
layout: page
title: "Q136589: How to Use Wzsetup.ini &amp; Defaults Created by the Setup Wizard"
permalink: kb/136/Q136589/
---

## Q136589: How to Use Wzsetup.ini &amp; Defaults Created by the Setup Wizard

	Article: Q136589
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup Wizard writes control settings to the Wzsetup.ini file for use as
	default settings the next time you use the Setup Wizard. This article describes
	how Wzsetup.ini is used.
	
	MORE INFORMATION
	================
	
	During initialization, the Setup Wizard looks in the startup (SYS(2004))
	directory for the Wzsetup.ini file. If the file is found, it is used to
	determine the most recent application directory for which disk images were
	generated. If the Wzsetup.ini file is not found, you must specify the
	application directory in Step 1 of the Setup Wizard.
	
	When the application directory is known, the Setup Wizard looks for Wzsetup.ini
	in that directory. If the file is found, it is used to set the controls to the
	same values that were used when disk images were last created for this
	directory. In this manner, the Setup Wizard remembers the various selections and
	file customizations for each application you distribute.
	
	When you click Finish and build disk images, the Setup Wizard writes Wzsetup.ini
	to the application directory and to the SYS(2004) directory for use the next
	time you use the Setup Wizard.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
