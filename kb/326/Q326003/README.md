---
layout: page
title: "Q326003: Zoo Tycoon: Cannot Install the Dinosaur Digs Expansion Pack"
permalink: /kb/326/Q326003/
---

## Q326003: Zoo Tycoon: Cannot Install the Dinosaur Digs Expansion Pack

	Article: Q326003
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 09-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zoo Tycoon: Dinosaur Digs Expansion Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Microsoft Zoo Tycoon: Dinosaur Digs, you may receive an
	error message similar to the following:
	
	  Zoo Tycoon was not installed. We could not install this product.
	
	CAUSE
	=====
	
	This behavior may occur if either of the following conditions is true:
	
	- You do not have Microsoft Zoo Tycoon installed.
	
	- Your installation of Microsoft Zoo Tycoon is damaged.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the appropriate method:
	
	Method 1: Install Zoo Tycoon
	----------------------------
	
	Dinosaur Digs is an expansion pack for Microsoft Zoo Tycoon. You must have
	Microsoft Zoo Tycoon installed before you can install Dinosuar Digs. To resolve
	this behavior, install Zoo Tycoon, and then install Dinosaur Digs.
	
	Method 2: Remove and Then Reinstall Zoo Tycoon
	----------------------------------------------
	
	If you have Microsoft Zoo Tycoon installed, your installation may be damaged. To
	remove and then reinstall Zoo Tycoon, follow these steps in order in which they
	are presented.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Part 1: Remove Zoo Tycoon:
	
	Microsoft Windows 98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Zoo Tycoon, and then click Change/Remove.
	
	4. Click to select the Uninstall check box, and then click OK.
	
	Microsoft Windows XP:
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click "Add or Remove Programs".
	
	3. Click "Change or Remove Programs", click Microsoft Zoo Tycoon, and then click
	  Change/Remove.
	
	4. Click to select the Uninstall check box, and then click OK.
	
	Part 2: Delete the Zoo Tycoon Folder:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following:
	
	"c:\program files\microsoft games\zoo tycoon" (with the quotation marks)
	
	3. Click OK.
	
	4. Right-click Saved Games, point to Send To, and then click My Documents.
	
	5. Locate and then open the Microsoft Games folder, right-click the Zoo Tycoon
	  folder, and then click Delete.
	
	6. Click Yes, and then close the Microsoft Games window.
	
	Part 3: Perform a Clean Boot Operation:
	
	Use a clean boot to restart your computer.
	
	NOTE: A clean boot is a way to create a clean environment. When you start your
	computer with a clean boot, Microsoft Windows starts and loads only basic
	devices and services.
	
	To perform a clean boot, follow the steps that are appropriate for your version
	of Windows.
	
	NOTE: For more information about how to use a clean boot in other operating
	systems, see the "More Information" section later in this article.
	
	Microsoft Windows 98:
	
	Run the System Configuration Utility (Msconfig.exe) to perform a clean boot. To
	do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. Restart your computer when you are prompted to do so.
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	Microsoft Windows XP:
	
	NOTE:You must be logged on as an administrator or a member of the Administrators
	group to complete this procedure. If your computer is connected to a network,
	network policy settings may also prevent you from completing this procedure.
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click Selective Startup, and then click to clear the
	  Process SYSTEM.INI File, Process WIN.INI File, and Load Startup Items check
	  boxes. You cannot clear the Use Original BOOT.INI check box.
	
	3. On the Services tab, click to select the Hide All Microsoft Services check
	  box, and then click Disable All.
	
	4. Click OK, and then click Restart to restart your computer.
	
	For additional information about how to perform a clean boot, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Part 4: Reinstall Zoo Tycoon:
	
	Insert the Zoo Tycoon disc into your CD-ROM drive or DVD-ROM drive, and then
	follow the on-screen instructions to reinstall the program.
	
	Part 5: Replace the Saved Games:
	
	1. Open My Documents, right-click Saved Games, and then click Cut.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following:
	
	"c:\program files\microsoft games\zoo tycoon" (with the quotation marks)
	
	4. Click OK.
	
	5. Right-click anywhere in the folder, and then click Paste.
	
	Part 6: Install Dinosaur Digs:
	
	Insert the Dinosaur Digs disc into your CD-ROM drive or DVD-ROM drive, and then
	follow the on-screen instructions to install the program.
	
	Part 7: Return from a Clean Boot State:
	
	Windows 98:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. Click the General tab, click Normal Startup, and then click OK.
	
	3. When you are prompted to restart your computer, click Yes.
	
	Windows XP:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Normal Startup - load all device drivers and
	  services".
	
	3. Click OK, and then click Restart when you are prompted to restart your
	  computer.
	
	Part 8: Install Additional Items (Optional):
	
	If your saved games included animals, buildings, or items that you downloaded
	from the Zoo Tycoon Web site, you have to download those new items again before
	you use the saved games. To do this, follow these steps:
	
	1. Start Zoo Tycoon.
	
	2. Click "Get New Zoo Tycoon Items", and then click Check Internet.
	
	3. Click to select the items that you want to download, and then click Add Zoo
	  Items.
	
	4. After all the items are downloaded and installed, click Yes to restart Zoo
	  Tycoon.
	
	MORE INFORMATION
	================
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q243039 How to Perform a Clean Boot in Windows 95
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Additional query words: msgame Zoo Tycoon Dino Digs ZTDD install setup
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
