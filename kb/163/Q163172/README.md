---
layout: page
title: "Q163172: ODE97: Autorun Screen Appears When Adding ODE Tools Components"
permalink: kb/163/Q163172/
---

## Q163172: ODE97: Autorun Screen Appears When Adding ODE Tools Components

	Article: Q163172
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you run the Microsoft Office 97 Developer Edition Tools (ODE) Setup program
	to add a component, Setup prompts you to insert the CD-ROM. When you do, the
	original Microsoft Office 97 Developer Edition installation options screen is
	displayed on your computer.
	
	CAUSE
	=====
	
	The Setup program for ODE Tools does not disable the Autorun.exe program on the
	CD-ROM. Autorun.exe invokes the installation options screen whenever you insert
	the CD-ROM in your computer.
	
	RESOLUTION
	==========
	
	Close the Microsoft Office 97 Developer Edition installation options screen and
	proceed to add the ODE Tools components using the Setup program that is already
	running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition Tools.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Insert the ODE Tools CD-ROM in your computer. Note that the installation
	  options screen appears.
	
	2. Click the "Install the Office Developer Edition Tools" button to start the
	  ODE Tools Setup program.
	
	3. Perform a Custom installation, and leave at least one ODE Tools component
	  uninstalled.
	
	4. Run the Setup program again, this time from the Add/Remove Programs icon in
	  Control Panel, or by running Setup.exe from the Setup subfolder of the
	  ODETools folder on your computer.
	
	5. When the installation maintenance screen appears, click Add/Remove, and then
	  select a component to add.
	
	6. Insert the CD-ROM when prompted. Note that the CD-ROM automatically opens the
	  Microsoft Office 97 Developer Edition installation options screen.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
