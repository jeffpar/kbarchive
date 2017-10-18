---
layout: page
title: "Q158772: Err Msg: Fltsim95 Caused an Invalid Page Fault in Simsui.dll"
permalink: kb/158/Q158772/
---

## Q158772: Err Msg: Fltsim95 Caused an Invalid Page Fault in Simsui.dll

	Article: Q158772
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsgkbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Flight Simulator for Windows 95, you may receive the
	following error message:
	
	  Fltsim95 caused an invalid page fault in module Simsui.dll.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods. After you complete each
	method, attempt to start Flight Simulator. If the issue continues to occur,
	continue to the next method.
	
	Remove and Reinstall Flight Simulator in the Default Folder
	-----------------------------------------------------------
	
	The installation process for Flight Simulator does not allow you to create a new
	folder. If you change the installation drive letter without also specifying a
	folder name, Flight Simulator is installed in the root folder of the drive. To
	resolve this issue, remove Flight Simulator and then reinstall Flight Simulator
	in its default installation folder.
	
	Restore Windows Video Driver (Windows 95 only)
	----------------------------------------------
	
	Replace the DirectDraw video driver with the original Windows video driver. To do
	so, use the following steps:
	
	1. Insert the Flight Simulator CD-ROM into the CD-ROM drive. Press and hold down
	  the SHIFT key when you insert the CD-ROM to prevent Flight Simulator from
	  starting automatically.
	
	2. Double-click My Computer.
	
	3. Right-click the Flight Simulator (CD-ROM drive) icon, and then click Explore.
	
	4. Double-click the Fs6 folder.
	
	5. Double-click the Setup folder.
	
	6. Double-click the Directx folder.
	
	7. Double-click the Dxsetup.exe file.
	
	8. Click Restore Windows 95 drivers. Follow the instructions on the screen.
	
	9. When you are prompted to restart the computer, click Yes.
	
	Reinstall Windows Video Driver (Windows 95 only)
	------------------------------------------------
	
	To reinstall the Windows video driver, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Change Display Type or Advanced Properties.
	
	4. Click Change next to the Adapter Type box, or on the Adapter tab, click
	  Change.
	
	5. Click Show All Devices. Note the current manufacturer and model.
	
	6. In the Manufacturers box, click (Standard Display Types).
	
	7. In the Models box, click Standard Display Adapter (VGA), and then click OK.
	
	8. Click Close until you return to Control Panel.
	
	9. When you are prompted to restart the computer, do so.
	
	10. Follow the instructions provided with your display adapter to reinstall the
	  original video driver from the manufacturer's CD-ROM or floppy disk(s).
	
	11. Start Flight Simulator. If you receive the error message, remove and then
	  reinstall Flight Simulator. If you are prompted to update your video driver
	  when you reinstall Flight Simulator, click No.
	
	Check for Missing or Damaged Fonts
	----------------------------------
	
	To check for missing or damaged fonts, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Fonts.
	
	3. Look for the Courier New font. If the Courier New font is not present, Flight
	  Simulator may not start properly. For information about how to restore the
	  Courier New font, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q152974 How to Restore the Default Fonts in Windows 95
	
	4. Look for the Monotype Sorts font. Flight Simulator does not use the Monotype
	  Sorts font; however, if the Monotype Sorts font is damaged, Flight Simulator
	  may not start properly. If the Monotype Sorts font is present, move it to the
	  desktop and then restart the computer.
	
	5. If you continue to receive the error message when you start Flight Simulator,
	  create a new temporary folder. Move all of the fonts from the Fonts folder
	  into this folder, and then delete the original Fonts folder and create a new
	  one. Move the fonts from the temporary folder into the new Fonts folder ten
	  at a time. Restart the computer after you move each group of fonts into the
	  new Fonts folder, and attempt to start Flight Simulator.
	
	MORE INFORMATION
	================
	
	Reinstalling or restoring the original video driver without first changing to
	VGA may not fully restore the original video driver. Changing to VGA and then
	back to the original video driver forces the reinstallation of all the video
	driver components.
	
	Additional query words: 1.00 6.00 fs95 fs6 flightsim
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
