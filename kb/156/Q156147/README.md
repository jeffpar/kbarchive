---
layout: page
title: "Q156147: Full Court Press: Troubleshooting Display Problems"
permalink: /kb/156/Q156147/
---

## Q156147: Full Court Press: Troubleshooting Display Problems

{% raw %}

	Article: Q156147
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to resolve display problems you may encounter when
	you run Full Court Press.
	
	MORE INFORMATION
	================
	
	Displaying 256 Colors
	---------------------
	
	Your computer must display 256 colors to run Full Court Press.
	
	If you don't have the necessary 256-color driver, or if you aren't sure that your
	video card supports 256 colors, contact your video card manufacturer.
	
	To display 256 colors in Windows 95/98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Display icon.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Color drop-down list, click 256 Color.
	
	5. Click OK.
	
	DirectX Display Problems
	------------------------
	
	NOTE: Full Court Press uses DirectX 2.0 technology. In some cases, the DirectX
	video driver may not interact correctly with your video driver. If you
	experience display problems, contact your video card manufacturer for the latest
	DirectX drivers, or find an appropriate driver on our web site at:
	
	  http://www.microsoft.com/sports/baskball
	
	The latest version of DirectX is available at:
	
	  http://www.microsoft.com/directx
	
	For more information about how to obtain the latest version of DirectX, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	If you experience display problems, contact your video card manufacturer for the
	latest DirectX drivers. If you continue to experience problems with DirectX
	installed, try the following procedures:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Display icon.
	
	3. Click the Settings tab.
	
	4. Click Change Display Type to display the Advanced Display Properties dialog
	  box.
	
	  NOTE: If you are using Microsoft Windows 95 OEM Service Release 2 (OSR2),
	  click Advanced Properties, and if you are using Microsoft Windows 98, click
	  Advanced.
	
	5. Click the Adapter tab. If there is no Adapter tab, see the next procedure.
	
	6. In the Refresh Rate box, change the refresh rate, and then click OK.
	
	If your screen is unreadable and you are unable to follow the previous steps, try
	the following troubleshooting steps:
	
	1. Restart Windows in Safe mode. To do so, follow the steps in the appropriate
	  section below:
	
	  Microsoft Windows 95
	  --------------------
	
	  Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	  Microsoft Windows 98
	  --------------------
	
	  Restart your computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then choose Safe Mode from the
	  Startup menu.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click the Display icon.
	
	4. Click the Settings tab.
	
	5. Click Change Display Type to display the Change Display Type dialog box.
	
	  NOTE: If you are OSR2, click Advanced Properties, and if you are using
	  Microsoft Windows 98, click Advanced.
	
	6. Under Adapter Type, click Change. NOTE: If you are OSR2 or Windows 98, click
	  the Adapter tab, and then click Change.
	
	7. In the Select Device dialog box, select the DirectX-compatible video driver
	  suggested by your video card manufacturer. If you do not have a
	  DirectX-compatible video driver, contact your video card manufacturer for an
	  updated video driver.
	
	  NOTE: If you are using Windows 98, follow the instructions in the Update
	  Device Driver wizard to select a compatible video driver.
	
	8. Restart your computer to apply the change you have made, and then start Full
	  Court Press.
	
	9. Re-install your video drivers. Note that Full Court Press will not run
	  without DirectX drivers.
	
	You may not be able to switch between full-screen mode and a window with a menu
	bar with some video cards at some resolutions. If this happens, try using a
	lower game resolution.
	
	  -or-
	
	To achieve the best display without using full-screen mode, set your game
	resolution to be the same as your screen resolution.
	
	If you consistently cannot get a game started, DirectX may be having problems
	with your video drivers. Try the following procedures to work around these
	problems:
	
	- Change your DirectDraw settings (Full Court Press will run in slow display
	  mode, but it may enable you to play):
	
	  1. On the Start menu, click Run.
	
	  2. In the Open box, type "regedit" (without the quotation marks), and then
	     click OK.
	
	  3. In the following order, click the plus signs next to HKEY_CURRENT_USER,
	     Software, Microsoft, Games, NBA Full Court Press, and 96-97, and then
	     click Graphics.
	
	  4. On the Edit menu, click New, and then click DWORD Value.
	
	  5. Type "directdraw" (without the quotation marks), and then press ENTER.
	
	  6. Double-click DIRECTDRAW.
	
	  7. Under Value Data, type "1" (without the quotation marks), and then click
	     OK.
	
	- Change Full Court Press's game graphics setting to high speed:
	
	  1. On the Start Up screen, click Options, and then click Performance.
	
	  2. On the Performance screen, under Game Graphics, click High Speed.
	
	  3. Click OK.
	
	- Contact your video card manufacturer for updated DirectX drivers. The Nexgen
	  586 system doesn't support DirectX, and therefore does not run Full Court
	  Press. More information may be available on the AMD World Wide Web site at:
	
	  http://www.amd.com/html/products/pcd/nx586/support/pscpuid.html
	
	  NOTE: Companies frequently update their web sites and sometimes change their
	  site address without notice. If the above site address changes, contact AMD
	  to obtain the new address.
	
	Video Cards That Don't Support Full Court Press
	-----------------------------------------------
	
	If you are using any of the following cards or processors, you may experience
	problems when playing Full Court Press. If you experience any of the following
	problems, please contact your hardware manufacturer for the latest DirectX 2.0
	video drivers:
	
	- Boca SXVGA5-CLGD5424
	- Trident 9440
	- # 9 Imagine 128
	- Diamond Stealth 64 Video 3400XL S3 Vision 968
	- Diamond Speedstar 64 PCI Cirrus CLGD-5434
	- SDIS Weitek 9100
	- Any video card using the Hornet Tender Pro video chip
	- Any video card using the Nvidia chip
	- Matrox Impression: display problems
	- Ensoniq Soundscape: If you're having problems installing Full Court Press
	  with the Ensoniq Soundscape, and you know there is nothing wrong with the
	  sound card, try changing the synth routing:
	
	  1. On the Start menu, point to Settings, and then click Control Panel.
	
	  2. Double-click System.
	
	  3. In the System Properties dialog box, click the Device Manager tab.
	
	  4. Click the plus sign next to Sound, Video And Game Controllers. There
	     should be an Ensoniq Soundscape card listed. Click it, and then click
	     Properties.
	
	  5. In the Ensoniq Soundscape dialog box, click the DOS Settings tab.
	
	  6. Under Synth Routing, make sure Internal is selected.
	
	  7. Close all dialog boxes, then restart your computer and try to reinstall
	     Full Court Press.
	
	Additional query words: 1.00 improve improving perform increase speed access run faster video graphics pictures
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbGamesSearch kbZNotKeyword kbNBAFullCourtPress
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
