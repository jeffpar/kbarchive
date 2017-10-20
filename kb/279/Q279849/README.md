---
layout: page
title: "Q279849: MM2: Troubleshooting Game Controller Problems (Part 2)"
permalink: /kb/279/Q279849/
---

## Q279849: MM2: Troubleshooting Game Controller Problems (Part 2)

{% raw %}

	Article: Q279849
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	SUMMARY
	=======
	
	This article is part 2 of a series of two Microsoft Knowledge Base articles that
	present a systematic approach to troubleshooting game controller problems.
	
	  Q279858 Midtown Madness 2: Game Controller Problems Troubleshooting (Part 1)
	
	MORE INFORMATION
	================
	
	Calibrate as a Different Device
	-------------------------------
	
	Use the Game Controllers Control Panel to configure your game controller as a
	different device.
	
	NOTE: You can configure on the SideWinder Standard or the SideWinder 3D Pro as a
	different device.
	
	For example, to configure a SideWinder 3D Pro joystick as a 3-axis 4-button
	joystick with Rudder/Pedals, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers, and then click Microsoft SideWinder 3D Pro.
	
	3. Click Remove, and then click Yes.
	
	4. Click Add, click "3-Axis, 4-Button Joystick", and then click OK.
	
	5. Click Properties.
	
	6. Click the Settings tab. Click to select the Rudder/Pedals check box.
	
	7. Click Calibrate, and then follow the instructions on the screen to calibrate
	  the game controller.
	
	  NOTE: Axis 3 is the throttle control, and axis 4 is the rudder control.
	
	8. Click Test to verify that the game controller functions properly.
	
	9. When you finish calibrating and testing the game controller, click OK. Click
	  OK again.
	
	If the issue continues to occur, proceed to the next method.
	
	Lower sound quality
	-------------------
	
	Sometimes controller problems are related to using high sound quality. If the
	controller isn?t functioning, or is cutting in and out, turning off or reducing
	the sound quality before starting a race might solve the problem:
	
	1. From any screen, select Options.
	
	2. Click Audio.
	
	3. On the Audio Options screen, clear the Sound FX, City Sounds, and Play Music
	  check boxes to turn off music and sound effects.
	
	  -or-
	
	  Set Stereo FX to Mono to play sound effects and music in mono.
	
	4. In the Sound Quality list, select Low to reduce the quality of sound effects.
	
	5. Click Done and then click the arrow repeatedly to return to the screen where
	  you were before you selected Options.
	
	Adjust the Controller Settings in the Game 
	------------------------------------------
	
	1. Start Midtown Madness 2.
	
	2. Click Control.
	
	3. Adjust the Controller Dead Zone slider to reduce twitches of driving.
	
	4. Adjust the Steering Sensitivity slider to make your controller more or less
	  sensitive to your movements, and so that it's reponsive without being
	  twitchy.
	
	Disable Sound in the Game
	-------------------------
	
	If your sound card is unable to properly process game port signals and high
	quality game sounds at the same time, you may be able to work around the issue
	by disabling sound in the game.
	
	When you install Midtown Madness 2, several troubleshooting shortcuts are
	installed in the installation folder for the game.
	
	The default location of the Midtown Madness 2 folder is:
	
	  C:\Program Files\Microsoft Games\Midtown Madness 2
	
	When you open the folder double-click the No Sound shortcut.
	
	This shortcut disables both the introductory movie and sound in the game.
	
	Use this shortcut if you think there is a conflict between Midtown Madness and
	the audio adapter installed in the computer.
	
	For additional information about Midtown Madness shortcuts, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q231828 Midtown 1.0/2.0: Description of the Troubleshooting Shortcuts
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall Midtown Madness 2
	--------------------------------------
	
	1. Remove Midtown Madness 2
	
	  a. Insert the Midtown Madness 2 compact disc into the CD-ROM drive. Press and
	     hold down SHIFT when you insert the compact disc to prevent the program
	     from starting automatically.
	
	  b. Click Start, point to Settings, and then click Control Panel.
	
	  c. Double-click Add/Remove Programs.
	
	  d. Click the Install/Uninstall tab. Click Microsoft Midtown Madness 2 , and
	     then click Add/Remove or Remove (on Windows 2000).
	
	  e. Click Uninstall, and then select Remove Driver Profiles.
	
	  f. Click OK.
	
	2. Delete the Midtown Madness 2 folder. By default, Midtown Madness 2 is
	  installed in the following folder:
	
	  <drive>:\Program Files\Microsoft Games\Midtown Madness 2
	
	  where <drive> is the drive letter of the hard disk on which Midtown
	  Madness 2 is installed.
	
	3. Quit All Other Running Programs
	
	  To quit all other programs that are running on your computer before you
	  install Midtown Madness 2 use the method appropriate for your version of
	  Windows.
	
	   - Windows 95, Windows 98 and Windows ME.
	
	     a. Press CTRL+ALT+DELETE.
	
	     b. In the Close Program dialog box, click any program except Explorer or
	        Systray (these are components of Windows), and then click End Task.
	
	        If you receive a message stating that the program is busy or not
	        responding, click End Task again.
	
	     c. Repeat steps 1 and 2 to quit all unnecessary programs that are running
	        on your computer.
	
	   - Windows 2000
	
	     a. Press CTRL+SHIFT+ESC.
	
	     b. Click the Applications tab. Click any program, and then click End
	        Task.
	
	        Repeat this step to quit all unnecessary programs that are running on
	        your computer.
	
	     c. Quit Windows Task Manager.
	
	4. Reinstall Midtown Madness 2.
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following, and then click OK.
	
	  <cd-rom>:\setup.exe
	
	     where <cd-rom> is the drive letter of the CD-ROM drive.
	
	  c. Follow the instructions on the screen to install the program.
	
	If the issue continues to occur, proceed to the next method.
	
	Obtain and Install Updated Device Drivers
	-----------------------------------------
	
	Contact your game controller and sound card manufacturers (if your game
	controller is connected to a 15-pin gameport on your sound card) to obtain and
	install the latest version of the drivers for your game controller and sound
	card.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To determine the manufacturer and model of your sound card, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Expand the Sound, video and game controllers list. Note the manufacturer and
	  model of your sound card.
	
	5. Click OK, and then close Control Panel.
	
	If the issue continues to occur, proceed to the next method.
	
	Configure the Sound Card to Use Only One DMA Channel
	----------------------------------------------------
	
	If your game controller is connected to a 15-pin gameport, your game controller
	may perform better if you configure the sound card to use only one DMA (Direct
	Memory Address) channel.
	
	NOTE: Some programs are unable to run with only one DMA channel. If you
	experience this issue, restore your original sound card settings.
	
	To configure a legacy sound card driver on a Windows 95-, Windows 98-, or Windows
	ME-based computer or a native sound card driver on a Microsoft Windows NT
	4.0-based computer to use single-mode DMA:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click either the Devices or Advanced tab. Expand the Audio Devices list.
	
	4. Click the sound card, and then click Properties.
	
	5. Click Settings.
	
	6. To configure the sound card to use single-mode DMA, see your sound card
	  documentation, or use one of the following procedures:
	   - Click to select the Use Single-Mode DMA check box. Click OK until you
	     return to Control Panel, and then restart the computer.
	
	   - In the DMA Channel (16-bit) box, click Disable. Click OK until you return
	     to Control Panel, and then restart the computer.
	
	   - In the High DMA box, click Use DMA. Click OK until you return to Control
	     Panel, and then restart the computer.
	
	  If you cannot use the sound card driver to configure single-mode DMA, click
	  Cancel until you return to Control Panel, and then proceed to the "Disable
	  Force-Feedback Effects" method in this article.
	
	To configure a native sound card driver on a Windows 95-, Windows 98-, or Windows
	ME-based computer to use single-mode DMA, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Expand the "Sound, video and game controllers" list.
	
	5. Click the sound card, and then click Properties.
	
	6. Click the Resources tab.
	
	7. Under Resource Type, locate the Direct Memory Access (DMA) lines. If you see
	  more than one Direct Memory Access (DMA) line, configure the sound card for
	  single-mode DMA. To do this, follow these steps:
	
	  a. Click to clear the Use Automatic Settings check box.
	
	  b. In the Settings Based On box, click a Basic Configuration that uses only
	     one DMA channel setting.
	
	     If you see a message about a conflict in the Conflicting Device List box,
	     repeat this step to select another basic configuration that uses only one
	     DMA channel and does not conflict with any other devices.
	
	     If you do not see a message about a conflict in the Conflicting Device List
	     box, click OK, and then click Yes.
	
	  c. Click Close, and then restart the computer.
	
	  If you see only one Direct Memory Access (DMA) line, or if you cannot find a
	  basic configuration that uses only one DMA channel, click Cancel twice, and
	  then proceed to the next method.
	
	Disable Force-Feedback Effects
	------------------------------
	
	If you use a SideWinder Force Feedback Pro 1 joystick or SideWinder Force
	Feedback Wheel, disable the force-feedback effects. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. Click to select Microsoft SideWinder Force Feedback Pro or Microsoft
	  SideWinder Force Feedback Wheel.
	
	4. Click Properties.
	
	5. Click the Settings tab. Drag the Force Feedback slider to the Off position.
	
	6. Click OK, and then click OK again.
	
	  -or-
	
	  Start Midtown Madness 2.
	
	7. Click Options and then click Control.
	
	8. Click to clear the Force Feedback check box.
	
	9. Click Done.
	
	If this resolves the issue, you may need to call Microsoft SideWinder Force
	Feedback Technical Support at (425) 635-7040 for additional assistance with
	troubleshooting your SideWinder Force Feedback game controller.
	
	REFERENCES
	==========
	
	For additional information about how to troubleshoot issues with your SideWinder
	Force Feedback game controller, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q175184 SideWinder Force Feedback Pro: No Forces Felt on Test Forces Tab
	
	  Q175701 No Force Feedback Effects Testing SideWinder Force Feedback Pro
	
	  Q175233 SideWinder Force Feedback Pro Test Is Slow or Does Not Respond
	
	  Q174436 Game Port Resource Settings for SideWinder Force Feedback
	
	  Q174432 Game Port Requirements for SideWinder Force Feedback Controller
	
	  Q173689 SideWinder Force Feedback Controller Behaves Erratically
	
	  Q175158 Your Gaming Device is Not Connected...
	
	  Q175054 SideWinder Not Compatible with Game Port-MIDI Adapter Cable
	
	  Q174437 Joystick Does Not Work or You Do Not Feel Force Feedback Effects
	
	  Q174433 How to Connect SideWinder Force Feedback for Best Performance
	
	Additional query words: kbimu homegame msgame
	
	======================================================================
	Keywords          : kbimu 
	
	=============================================================================
	

{% endraw %}
