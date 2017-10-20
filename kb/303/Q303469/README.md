---
layout: page
title: "Q303469: Combat Flight Simulator 2: Black Screen Appears at Start of Game"
permalink: /kb/303/Q303469/
---

## Q303469: Combat Flight Simulator 2: Black Screen Appears at Start of Game

{% raw %}

	Article: Q303469
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	WARNING:This information is preliminary and has not been confirmed or tested by Microsoft. Use only with discretion.
	
	SYMPTOMS
	========
	
	When you attempt to play Microsoft Combat Flight Simulator 2 and you click FLY
	NOW!, a black screen appears and the mission does not start. You cannot play
	Combat Flight Simulator 2.
	
	CAUSE
	=====
	
	This issue can occur when your Microsoft Combat Flight Simulator 2 installation
	is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall Combat Flight Simulator 2, start Microsoft
	Windows with a minimal set of drivers, and then reinstall Microsoft Combat
	Flight Simulator 2. To do this, follow these steps.
	
	Uninstall Combat Flight Simulator
	---------------------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Quit all running programs.
	
	2. On the taskbar, click Start, then point to Settings, and then click Control
	  Panel.
	
	3. In Control Panel, double-click Add/Remove Programs.
	
	4. In the "Add/Remove Programs Properties" dialog box, on the Install/Uninstall
	  tab, click "Microsoft Combat Flight Simulator 2", and then click Add/Remove.
	
	5. On the "Combat Flight Simulator 2" screen that appears, click Uninstall, and
	  then click OK.
	
	6. Follow the instructions on the screen to completely remove Combat Flight
	  Simulator 2.
	
	7. Remove the Combat Flight Simulator 2 folder.
	
	  a. Click Start, point to Find, and then click "Files or Folders".
	
	     In Microsoft Windows Millennium Edition (Me), click Start, point to Search,
	     and then click "For Files or Folders".
	
	  b. In the Named box, type ""combat flight simulator 2"" (without the
	     quotation marks).
	
	     NOTE: Include the quotation marks in the above search item.
	
	  c. In the "Look in" box, click My Computer.
	
	  d. Make sure that the "Include subfolders" check box is selected.
	
	  e. Click Find Now.
	
	  f. Right-click the Combat Flight Simulator 2 folder and then on the shortcut
	     menu that appears, click Delete.
	
	     WARNING: This step will delete all saved games in the folder.
	
	  g. On the Confirm Folder Delete message that appears, click Yes.
	
	  h. Quit the "Find: Files named Combat Flight Simulator 2" dialog box.
	
	Start Windows with a Minimal Set of Drivers (Clean Boot)
	--------------------------------------------------------
	
	Use the method appropriate for your operating system.
	
	Microsoft Windows Millennium Edition:
	
	For additional information about how to start Windows Me using a minimal set of
	drivers, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Microsoft Windows 98:
	
	To start Windows 98 using a minimal set of drivers, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes (if available):
	
	  Process Config.sys File
	  Process Autoexec.bat File
	  Process Winstart.bat File
	  Process Win.ini File
	  Load Startup Group Items
	
	4. Click OK.
	
	  You receive the following message:
	
	  You must restart your computer before the new settings will take effect.
	
	  Do you want to restart your computer now?
	
	5. Click Yes.
	
	For additional information about starting Windows 98 with a minimal set of
	drivers, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	NOTE: To later restore your original Startup options, click Normal Startup on the
	General tab in System Configuration Utility.
	
	Microsoft Windows 95:
	
	a. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	b. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold the SHIFT key until the Windows startup sequence
	  is complete.
	
	c. Turn off any anti-virus or disk tool programs installed on the computer.
	
	  For information about how to turn off these programs, see the printed or
	  online documentation for the program.
	
	d. Quit all running programs except Windows Explorer and Systray. To do this,
	  press CTRL+ALT+DELETE, click the program that you want to quit, and then
	  click End Task. If you receive a message that the program is busy or not
	  responding, click End Task again. Repeat this step to quit all programs
	  except Windows Explorer and Systray.
	
	For additional information about how to start Windows 95 with a minimal set of
	drivers, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Install Combat Flight Simulator
	-------------------------------
	
	- After Windows restarts, insert the Combat Flight Simulator 2 Disc 1 CD into
	  the CD-ROM or DVD-ROM drive.
	
	  The Microsoft Combat Flight Simulator 2 screen appears.
	
	- Click Install, and then click Next.
	
	- Click "Customize installation options", and then click Next.
	
	- If you are prompted to install DirectX Media, click Yes.
	
	- Click the type of installation that you want (for example, Typical), and then
	  click Change.
	
	- In the Path box, delete the existing path, and then type the following
	
	  <drive>:\Program Files\Microsoft Games\CFS2
	
	  where <drive> is the drive letter of the hard disk on which you want to
	  install Combat Flight Simulator 2.
	
	- Click OK. When you are prompted to create the folder, click Yes, and then
	  click Install. Follow the instructions to install Microsoft Combat Flight
	  Simulator 2.
	
	- Restore your original Startup configuration. To do this, follow these steps:
	
	a. Click Start, and then click Run.
	
	b. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	c. On the General tab, click "Normal startup", and then click OK.
	
	d. Click Yes to restart the computer.
	
	MORE INFORMATION
	================
	
	The latest version of DirectX is available from Microsoft at the following URL:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
