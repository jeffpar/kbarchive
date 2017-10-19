---
layout: page
title: "Q145845: HOWTO: Suppress the Default Menu for a Visual FoxPro .EXE File"
permalink: /kb/145/Q145845/
---

## Q145845: HOWTO: Suppress the Default Menu for a Visual FoxPro .EXE File

	Article: Q145845
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp300 kbvfp500 kbvfp600
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain circumstances, you may want to keep the default Visual FoxPro menu
	from appearing in an Visual FoxPro created .exe file. To do this, place the
	following command in the Config.fpw configuration file for Visual FoxPro.
	
	     SYSMENU = OFF
	
	This will keep the menu from appearing. For more information regarding the
	Config.fpw file, please see the Help Topic "Setting the Environment with a
	Configuration File" in the Visual FoxPro Help file.
	
	Additional query words: disable hide appear
	
	======================================================================
	Keywords          : kbsetup kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
