---
layout: page
title: "Q325880: Zoo Tycoon: Troubleshoot Performance Issues"
permalink: kb/325/Q325880/
---

## Q325880: Zoo Tycoon: Troubleshoot Performance Issues

	Article: Q325880
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 09-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zoo Tycoon 
	- Microsoft Zoo Tycoon: Dinosaur Digs Expansion Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some general steps you can use to troubleshoot
	performance issues in Zoo Tycoon and the Dinosaur Digs Expansion Pack.
	
	MORE INFORMATION
	================
	
	To troubleshoot poor performance in Zoo Tycoon and the Dinosaur Digs Expansion
	Pack, use the following steps in the order in which they appear. After you
	complete each step, test to determine whether the issue is resolved.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Step 1: Start a New Game
	------------------------
	
	To determine if the problem exists in the currently saved game file, save the
	current game and start a new game. If the issue does not reappear, there is a
	problem with your saved game file. Delete the damaged file.
	
	Step 2: Verify the System Requirements
	--------------------------------------
	
	Make sure your computer meets the minimum system requirements to run Zoo Tycoon.
	For more information, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q309693 Zoo Tycoon: Minimum System Requirements
	
	Step 3: Download the Zoo Tycoon Update
	--------------------------------------
	
	For additional information about how to download the latest update for Zoo Tycoon
	1.0, which addresses performance issues, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q313442 Zoo Tycoon: How to Download and Install Update and Bonus Items
	
	Step 4: Clean Boot Your Computer
	--------------------------------
	
	Use a clean boot to restart your computer and see if the issue persists. A clean
	boot is a way to create a clean environment. When you start your computer with a
	clean boot, Microsoft Windows starts and loads only basic devices and services.
	For more information about how to use a clean boot in Microsoft Windows XP and
	earlier, see the "Reference" section later in this article.
	
	To restart your computer with a clean boot, follow these steps.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Windows XP:
	
	NOTE: You must be logged on as an administrator or a member of the Administrators
	group to complete this procedure. If your computer is connected to a network,
	network policy settings may also prevent you from completing this procedure.
	
	a. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	b. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process SYSTEM.INI File
	   - Process WIN.INI File
	   - Load Startup Items
	
	  You cannot clear the Use Original BOOT.INI check box.
	
	c. On the Services tab, click to select the "Hide All Microsoft Services" check
	  box, and then click Disable All.
	
	d. Click OK, and then click Restart to restart your computer.
	
	Return from a Clean Boot State
	------------------------------
	
	a. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	b. On the General tab, click "Normal Startup - load all device drivers and
	  services".
	
	c. Click OK. Click Restart when you are prompted to restart your computer.
	
	Step 5: Change Video Options
	----------------------------
	
	a. Start Zoo Tycoon, and then click Options.
	
	b. In the Game Options window, click Sound and Video Options.
	
	c. Click 800 x 600 to change the screen resolution.
	
	d. Under Terrain Blending, click Don't Blend.
	
	Step 6: Defragment Your Hard Disk
	---------------------------------
	
	a. Double-click My Computer.
	
	b. Right-click your hard disk, and then click Properties.
	
	c. Click the Tools tab, and then click Defragment Now.
	
	d. Repeat these steps to defragment any additional hard disks on your computer.
	
	Step 7: Clear Temporary Files
	-----------------------------
	
	a. Click Start, point to All Programs, point to Accessories, point to System
	  Tools, and then click Disk Cleanup.
	
	b. Click your hard disk, and then click OK.
	
	c. Under Files to delete, click to select the Temporary files check box, and
	  then click OK.
	
	d. Repeat these steps to delete temporary files on any additional hard disks on
	  your computer.
	
	Step 8: Update Your Video Adapter Driver and Sound Card Driver
	--------------------------------------------------------------
	
	a. Contact your video adapter manufacturer to obtain and install the latest
	  version of the driver for your video adapter.
	
	For additional information about how to determine which video adapter driver you
	currently have installed, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q159487 How to Determine the Version of Installed Video Driver
	
	b. Contact your audio hardware manufacturer to obtain and install the latest
	  version of the driver for your sound card.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	For information about how to contact the manufacturers of your video adapter and
	sound card, click the appropriate article number in the following list to view
	the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Step 9: Update DirectX
	----------------------
	
	To obtain and install the latest version of DirectX, visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows/directx/downloads/default.asp
	
	To determine which version of DirectX is currently installed on your computer,
	follow these steps:
	
	a. Click Start, click Run, type "dxdiag" (without the quotation marks) in the
	  Open box, and then click OK.
	
	b. Click the System tab, and then note the DirectX version at the bottom of the
	  page.
	
	REFERENCES
	==========
	
	For additional information about how to perform a clean boot, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	  Q316434 HOW TO: Perform Advanced Clean-Boot Troubleshooting in Windows XP
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q243039 How to Perform a Clean Boot in Windows 95
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbZooTycoon
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
