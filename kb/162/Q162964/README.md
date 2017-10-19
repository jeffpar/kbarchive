---
layout: page
title: "Q162964: ODE97: Cannot Add/Remove in ODE Tools Sampler Setup Maintenance"
permalink: /kb/162/Q162964/
---

## Q162964: ODE97: Cannot Add/Remove in ODE Tools Sampler Setup Maintenance

	Article: Q162964
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you run the Setup program for Microsoft ODE Tools Sampler, and you choose
	the Minimum Install option, you cannot add components later to create a Maximum
	Install. When you run the Setup program again, the installation maintenance
	program only shows buttons for Reinstall and Remove All; there is no Add/Remove
	button.
	
	RESOLUTION
	==========
	
	You can access the same program features in the ODE Tools Sampler whether you
	choose Maximum Install or Minimum Install in Setup. The difference is how many
	files are copied from the compact disc to your hard drive; however, most of the
	program is still run from the compact disc with either installation type.
	
	If you want to add or remove components to increase or decrease the number of
	files installed on your hard drive, you must remove the ODE Tools Sampler, and
	then reinstall it:
	
	1. Run the Setup program for the ODE Tools Sampler.
	
	2. When the installation maintenance screen appears, click Remove All. Confirm
	  that you want to remove the ODE Tools Sampler.
	
	3. After ODE Tools Sampler is removed from your computer, run its Setup program
	  again and reinstall it with the installation option you want to use (Maximum
	  Install or Minimum Install).
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Setup and install the Microsoft ODE Tools Sampler from the Microsoft
	  Office 97 Professional Edition Tools compact disc. Select either Maximum
	  Install or Minimum Install.
	
	2. Run the Setup program again to invoke the installation maintenance screen.
	  Note that only Reinstall and Remove all buttons appear on the screen.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: MSDN
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
