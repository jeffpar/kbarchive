---
layout: page
title: "Q315609: Train Simulator: Error Message: Failed to Load Car-Spawner"
permalink: /kb/315/Q315609/
---

## Q315609: Train Simulator: Error Message: Failed to Load Car-Spawner

{% raw %}

	Article: Q315609
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Train Simulator tutorial, you may receive the
	following error message:
	
	  Failed to load car-spawner
	
	CAUSE
	=====
	
	This behavior can occur if the program is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods to uninstall Train Simulator,
	perform a clean-boot restart of the computer, and then reinstall Train
	Simulator.
	
	Uninstall Train Simulator
	-------------------------
	
	To uninstall Train Simulator, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Train Simulator, and then click Add/Remove.
	
	4. Click Uninstall, and then click Yes.
	
	5. When the uninstall process is finished, click OK.
	
	Delete the Train Simulator Folder
	---------------------------------
	
	To delete the Train Simulator folder, follow these steps.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Remove the Train Simulator compact disc (CD) from the CD-ROM drive.
	
	2. Click Start, point to Find or Search, and then click "Files or Folders" or
	  "For Files or Folders".
	
	3. In the Named box or the "Search for files or folders named" box, type "Train
	  Simulator" (without the quotation marks).
	
	4. In the "Look in" box, click My Computer.
	
	5. Click to select the "Include subfolders" check box, if it is available.
	
	6. Click Find Now or Search Now.
	
	7. Right-click the Train Simulator folder, click Delete, and then click Yes.
	
	8. Close the Find dialog box or the Search dialog box.
	
	Use a Clean-Boot Operation to Restart the Computer
	--------------------------------------------------
	
	Use the appropriate method for your version of Microsoft Windows.
	
	Microsoft Windows Millennium Edition (Me):
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Selective startup".
	
	3. Click to clear all of the check boxes under "Selective startup".
	
	4. On the "Startup" tab, click to select the *StateMgr check box.
	
	
	5. Click OK. When you are prompted to restart your computer, click Yes. After
	  the computer restarts, click Start, click Run, type "msconfig" (without the
	  quotation marks) in the Open box, and then click OK.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	NOTE: To restore your original startup options, follow these steps:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Normal startup".
	
	3. Click OK. Click Yes when you are prompted to restart your computer.
	
	Microsoft Windows 98:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	
	   - Process Autoexec.bat File
	
	   - Process Winstart.bat File (if available)
	
	   - Process Win.ini File
	
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in System Configuration Utility.
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete.
	
	3. Turn off any anti-virus or disk tool programs that are installed on the
	  computer.
	
	  For information about how to turn off these programs, see the printed or
	  online documentation for the program.
	
	4. Quit all programs that are running, except Windows Explorer and Systray. To
	  do this, press CTRL+ALT+DELETE, click the program that you want to quit, and
	  then click End Task. If you receive a message stating that the program is
	  busy or not responding, click End Task again. Repeat this step to quit all
	  programs except Windows Explorer and Systray.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Quit All Programs
	-----------------
	
	Follow these steps to quit all programs that are running, except Windows Explorer
	and Systray.
	
	1. Press CTRL+ALT+DELETE.
	
	2. Click the program that you want to quit, and then click End Task.
	
	3. If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	4. Repeat steps 2 and 3 to quit all programs except Windows Explorer and
	  Systray.
	
	Reinstall Train Simulator:
	
	1. Insert the Train Simulator Disk 1 CD into your CD-ROM drive.
	
	2. Click Install, and then click the right arrow button on the screen.
	
	3. Click Custom, and then click Change.
	
	4. In the Path box, delete the existing path, and then type the following line
	  <drive>:\Program Files\Microsoft Games\TrainSimulator where
	  <drive> is the drive letter of the hard disk on which you want to
	  install Train Simulator.
	
	5. Click OK. When you are prompted to create the folder, click Yes.
	
	6. Click the right arrow button on the screen twice. Follow the onscreen
	  instructions to complete the installation.
	
	7. When Setup is complete, restore the Startup options, and then restart the
	  computer.
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, clean the CD-ROM with a damp cloth or a
	commercial CD cleaning solution. Dry the CD-ROM thoroughly before you insert it
	into the CD-ROM drive.
	
	For additional information about CD-ROM troubleshooting, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Errors
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbTrainSim kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
