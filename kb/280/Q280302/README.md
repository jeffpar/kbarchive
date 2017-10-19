---
layout: page
title: "Q280302: MultiMedia: Troubleshooting IPF and Exception Errors (Part 2)"
permalink: /kb/280/Q280302/
---

## Q280302: MultiMedia: Troubleshooting IPF and Exception Errors (Part 2)

	Article: Q280302
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Reader, version 1.5 
	- Microsoft MapPoint 2001 
	- Microsoft Streets and Trips 2001 
	- Microsoft Picture It! Publishing 2001 Platinum 
	- Microsoft Picture It! Photo Premium 2001 
	- Microsoft Works Suite 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part 2 of a series of two Microsoft Knowledge Base articles that
	present a systematic approach to eliminating invalid page fault (IPF) and
	exception error messages in Microsoft Home Products.
	
	For additional information and troubleshooting steps, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q280305 MultiMedia: Troubleshooting Invalid Page Fault (IPF) and Exception
	  Errors (Part 1)
	
	MORE INFORMATION
	================
	
	Continue troubleshooting invalid page faults and exception errors with the
	following steps after you have completed part 1 of this series of articles.
	
	The following topics are covered in part 2 of this article:
	
	  
	  Does your computer meet the system requirements?
	
	  Are you running Windows NT 4.0 or Windows 2000?
	
	  Is a program running in the background interferring with the game?
	
	  Is the problem with DirectX?
	
	  Is the problem with the video driver?
	
	  Is the problem with  the sound driver?
	
	  Are there duplicate devices?
	
	  Was the game installed properly?
	
	  Microsoft Support Options
	
	Does Your Computer Meet the System Requirements?
	------------------------------------------------
	
	Search the Microsoft Knowledge Base on the Microsoft Support Web Site for
	information about specific game requirements:
	
	  http://support.microsoft.com/?pr=kbinfo
	  (http://support.microsoft.com/?pr=kbinfo)
	
	Use the following parameters to query for information:
	
	1. In the Search (KB) box, select the name of your game.
	
	2. In the "For solutions containing" box, type "System Requirements".
	
	3. In the Using box, select "All the words entered".
	
	NOTE: If you do not see the Using box, click Show Options.
	
	Are You Running Windows NT 4.0 or Windows 2000?
	-----------------------------------------------
	
	Download and install the latest Service Pack from the following Microsoft Web
	Site:
	
	  http://www.microsoft.com/windows/default.asp
	
	Is a Program Running in the Background Interferring with the Game?
	------------------------------------------------------------------
	
	Clean Boot the Computer:
	
	Use the appropriate method for your version of Microsoft Windows.
	
	Microsoft Windows Millennium Edition (ME)
	
	Run the System Configuration Utility (Msconfig.exe) to clean boot Windows ME. To
	do this, follow these steps:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Selective startup".
	
	3. Click to clear all of the check boxes under "Selective startup".
	
	4. On the "Startup" tab, click to select the *StateMgr check box.
	
	
	5. Click OK. When you receive the prompt to restart your computer, click Yes.
	  After the computer restarts, click Start, click Run, type "msconfig" (without
	  the quotation marks) in the Open box, and then click OK.
	
	  IMPORTANT: Ensure that the check boxes you cleared in the General tab are
	  still cleared. Proceed to step 6 if all of the check boxes are still cleared.
	  If you see a disabled or gray check box, your computer is not "clean-booted"
	  and you may need assistance from the manufacturer of the program that places
	  a check mark back into Msconfig.
	
	6. After you verify that your computer is clean-booted in step 5, you can
	  isolate the issue. If the original issue does not reoccur after the clean
	  boot, click one item at a time under "Selective startup", and then restart
	  the computer to see if the additional entry reproduces the original issue.
	
	Microsoft Windows 98
	
	Run the System Configuration Utility (Msconfig.exe) to clean boot Windows 98. To
	do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the General tab. Click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Load Startup Group Items
	
	4. Click the Win.ini tab. Expand the Windows list and then click to clear the
	  Load= and Run= check boxes.
	
	5. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	NOTE: To restore your original Startup options, rerun the System Configuration
	Utility (msconfig.exe), click the General tab, and then click Normal Startup.
	
	Microsoft Windows 95
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key. On the Startup menu, select Command Prompt Only.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete.
	
	3. Disable any anti-virus or disk tool programs installed on the computer.
	
	  For information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	4. Quit all running programs except Explorer and Systray. To do this, press
	  CTRL+ALT+DELETE, click the program that you want to quit, and then click End
	  Task. If you receive a message that the program is busy or not responding,
	  click End Task again. Repeat this step to quit all programs except Explorer
	  and Systray.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Is it DirectX?
	--------------
	
	DirectX is a Windows component that improves access to hardware. Games use
	DirectX to communicate with your hardware like video and sound cards do. For
	additional information about DirectX, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/aboutdx.asp
	  (http://www.microsoft.com/directx/homeuser/aboutdx.asp)
	
	Install the Latest Version of Microsoft DirectX:
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	Install DirectX in Safe Mode:
	
	1. Restart Windows in Safe mode. To do this, use the appropriate method for your
	  version of Windows:
	
	   - Windows 2000
	
	     Restart your computer. When the Startup menu appears, press F8. When the
	     "Windows 2000 Advanced Options" menu appears, select an option, and then
	     press ENTER. When the Startup menu reappears (the words "Safe Mode" are
	     displayed in red at the bottom), select the installation option you want,
	     and then press ENTER.
	
	     WARNING: Do not select a Microsoft Windows NT 4.0 installation option.
	
	   - Windows 98/ME
	
	     Restart your computer. Press and hold down the CTRL key after the computer
	     completes the Power On Self Test (POST). From the Startup menu, choose
	     Safe Mode.
	
	   - Windows 95
	
	     Restart your computer. When you see the "Starting Windows 95" message,
	     press the F8 key. From the Startup menu, choose Safe Mode.
	
	2. When Windows starts in Safe Mode, click OK.
	
	For additional information about how to obtain and install the latest version of
	DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Is it the Video Driver?
	-----------------------
	
	NOTE: If you are using Encarta when encountering an IPF or exception error,
	perform the procedures in the following Microsoft Knowledge Base article:
	
	  Q238925 Encarta 2000: How to Troubleshoot Sound and Video Driver Issues
	
	If these procedures do not solve your problem, then follow these steps:
	
	Update the Video Driver:
	
	MultiMedia products require a great deal of information from your video driver
	when running or starting the program. A damaged or outdated video driver can
	cause an invalid page fault or exception error to occur.
	
	Drivers are small programs that allow your operating system to communicate with
	the hardware in your computer. A driver acts as a translator between your
	hardware and operating system. It helps Windows understand requests from your
	hardware. Beyond acting as a translator, drivers can also enhance the operation
	of a particular piece of hardware, like a video card or a sound card.
	
	It's very important to update your video card drivers because new drivers are
	created for a number of reasons. A new driver for your video card might allow it
	to more efficiently use your video card features. And, having the current
	drivers will improve performance. Companies release updated drivers on a regular
	basis to keep pace with ever-changing software technologies.
	
	Contact your computer or video card manufacturer to inquire about how to obtain
	and install the latest version of the drivers for your video adapter or sound
	card.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To determine the manufacturer and model of your video card, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click Device Manager.
	
	4. Expand the Display adapters list. Note the manufacturer and model of your
	  video adapter.
	
	5. Close System Properties. Close Control Panel.
	
	If the issue continues to occur, proceed to the next method.
	
	Change the Windows Color Palette Setting to High Color (16-bit):
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please see your product documentation
	to complete these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Display icon.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click High Color (16 bit).
	
	5. Click OK. Click OK again.
	
	If you are prompted to reboot your computer, click Yes.
	If the issue continues to occur, proceed to the next method.
	
	Reduce Graphics Hardware Acceleration:
	
	Windows 2000
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Display icon.
	
	3. Click the Settings tab.
	
	4. Click Advanced.
	
	5. Click the Troubleshooting tab.
	
	6. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the basic acceleration setting).
	
	Windows 95/98/ME
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the basic acceleration setting).
	
	5. Click OK. Click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	7. Repeat steps 1-6, but in step 4 move the Hardware Acceleration slider back to
	  its original setting.
	
	NOTE: If you encounter any problems after you reduce the hardware acceleration
	setting, restart Windows in Safe Mode. To do this, use the appropriate method
	for your version of Microsoft Windows:
	
	- Windows 2000
	
	  Restart your computer. When the Startup menu appears, press F8. When the
	  "Windows 2000 Advanced Options" menu appears, select an option, and then
	  press ENTER. When the Startup menu reappears (the words "Safe Mode" are
	  displayed in red at the bottom), select the installation you want, and then
	  press ENTER.
	
	  WARNING: Do not select a Microsoft Windows NT 4.0 installation.
	
	- Windows 98/ME
	
	  Restart your computer, press and hold down the CTRL key after the computer
	  completes the Power On Self Test (POST). From the Startup menu, select Safe
	  Mode. When Windows starts in Safe mode, click OK.
	
	- Windows 95
	
	  Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key. From the Startup menu, choose Safe Mode.
	
	If the issue continues to occur, proceed to the next method.
	
	Is it the Sound Driver?
	-----------------------
	
	NOTE: If you are using Encarta, perform the procedure in the following Microsoft
	Knowledge Base article:
	
	  Q238925 Encarta 2000: How to Troubleshoot Sound and Video Driver Issues
	
	If the steps do not solve the problem or you are not using Encarta, perform the
	following procedures.
	
	Identify the Manufacturer and Model of Your Sound Card:
	
	To determine the manufacturer and model of your sound card, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Device Manager tab.
	
	4. Expand the "Sound, video and game controllers" list.
	
	5. Note the manufacturer and model of the sound card.
	
	6. Click OK, and then close Control Panel.
	
	Temporarily Disable the Sound Card in Windows:
	
	Windows 2000
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Sounds and Multimedia icon.
	
	3. Click the Hardware tab.
	
	4. Double-click your sound card.
	
	5. Click the General tab. In the Device Usage list, select the "Do not use this
	  device (disable)" option.
	
	6. Click OK.
	
	7. Restart your computer.
	
	Window ME
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Sounds and Multimedia icon.
	
	3. Click the Devices tab.
	
	4. Double-click your sound card.
	
	5. Select the following options:
	
	   - Do use the audio features on this device
	   - Do not map through this device
	
	6. Click OK. Click OK again.
	
	7. Restart your computer.
	
	Windows 95/98
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Multimedia icon.
	
	3. Click Devices.
	
	4. Expand the Audio Devices list.
	
	5. Double-click your sound card.
	
	6. Select the following options:
	
	   - Do use the audio features on this device
	   - Do not map through this device
	
	7. Click OK.
	
	8. Restart your computer.
	
	If you did not receive an IPF after disabling your sound card, update your sound
	card drivers. To obtain and install the latest drivers for your sound card,
	contact the sound card manufacturer.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Reduce Hardware Sound Acceleration:
	
	If after updating your sound card drivers, you still recieving an IPF error,
	reduce sound acceleration in Windows. To do this, run the DirectX Diagnostic
	Tool (Dxdiag.exe):
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Under DirectX Features, move the Hardware Sound Acceleration Level slider all
	  the way to the left (the No acceleration setting).
	
	5. Click Exit.
	
	If the issue continues to occur, proceed to the next method.
	
	Change the Preferred Playback Device to the Game Compatible Device:
	
	NOTE: Use this procedure for Windows 95, 98 and ME only.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Multimedia icon (in Windows 95/98) or the Sounds and
	  Multimedia icon (in Windows 2000).
	
	3. Click the Audio tab. Under Sound Playback, in the Preferred device list,
	  click Game Compatible Device.
	
	  NOTE: If Game Compatible Device is not listed, see the following article in
	  the Microsoft Knowledge Base:
	
	  Q177614 What Is the Game Compatible Audio Device?
	
	4. Click to select the "Use only preferred devices" check box, and then click
	  OK.
	
	5. Close Control Panel.
	
	6. Restart the computer.
	
	For additional information about game compatible devices, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q178637 Using Game Compatible Device to Troubleshoot Sound Problems
	
	Are There Duplicate Devices in Safe Mode?
	-----------------------------------------
	
	If the computer initializes multiple versions of a single CD-ROM drive, display
	adapter, or sound, video, or game controller when you start Windows the game
	might generate an error message.
	
	For additional information about how to check for and disable multiple devices,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q187916 Game Stops Responding or Quits Unexpectedly
	
	Was the Game Installed Properly?
	--------------------------------
	
	Uninstall the game, clean boot the computer, delete the game folder and then
	reinstall the game. To uninstall the game and delete the game folder, follow
	these steps:
	
	1. Insert the program compact disc into the CD-ROM or DVD-ROM drive. Press and
	  hold down SHIFT when you insert the compact disc to prevent the program from
	  starting automatically.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Install/Uninstall tab, click the game, and then click Add/Remove
	  (click Remove in Windows 2000).
	
	5. Follow directions on your screen to uninstall the game.
	
	6. Delete the product folder.
	
	7. Reinstall the product.
	
	Gather Information in the DirectX Diagnostic Tool
	-------------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Note the version number. Write down the information from the Notes section,
	  except for the No problems found item. Write down uncertified drivers.
	
	4. Run the following tests.
	
	  Click the Display tab, and test the following:
	
	   - DirectDraw functionality (click the Test DirectDraw button).
	   - Direct3D functionality (click the Test Direct3D button.
	
	  Click the Sound tab, and test the following:
	
	   - DirectSound functionality (click the Test DirectSound button.
	
	  Click the Music tab, and test the following:
	
	   - DirectMusic functionality (click the Test DirectMusic button.
	
	- Repeat step 3, examining all the tabs.
	
	For additional information about the DirectX Diagnostic Tool, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q190900 DirectX: Description of the DirectX Diagnostic Tool
	
	If the problem is not resolved, contact Microsoft Product Support Services.
	
	Microsoft Support Options
	-------------------------
	
	If you cannot resolve this issue, several support options are available to assist
	you at the following Microsoft Web site:
	
	  http://support.microsoft.com/support/default.asp
	  (http://support.microsoft.com/support/default.asp)
	
	Support Online:
	
	To easily diagnose and answer technical questions yourself, visit the following
	Microsoft Web site:
	
	  http://support.microsoft.com/support (http://support.microsoft.com/support)
	
	Or, visit the Microsoft Games FAQs & Highlights web site:
	
	  http://support.microsoft.com/support/games
	  (http://support.microsoft.com/support/games)
	
	Contact Microsoft Online:
	
	You can also submit your support question via the Internet. For more details,
	visit the following Microsoft Web site:
	
	  http://support.microsoft.com/support/webresponse.asp
	  (http://support.microsoft.com/support/webresponse.asp)
	
	NOTE: If your Microsoft product was pre-installed or distributed with your
	personal computer or provided by an Internet service provider (ISP), the
	personal computer manufacturer or ISP is responsible for providing your product
	support. Please contact the manufacturer or source from which you obtained your
	Microsoft product for support information.
	
	When you contact Microsoft for support, you should be at your computer and have
	the appropriate product documentation at hand. Be prepared to give the following
	information:
	
	- The version of the Microsoft product you use.
	- The type of hardware you use.
	- The operating system you use.
	- The exact wording of any messages that appeared on your screen.
	- A description of what happened and what you were doing when the problem
	  occurred.
	- A description of how you tried to solve the problem.
	
	Personal No-Charge Support:
	
	Monday-Friday, excluding holidays, Microsoft offers unlimited no-charge support
	for Microsoft Games. In the United States, call (877) 632-2080, 5:00 A.M. to
	9:00 P.M. Pacific Time. In Canada, call (905) 568-3503, 8:00 A.M. to 11:00 P.M.
	Eastern Time. Support is also available on Saturdays from 9:00 A.M. - 3:00 P.M.
	Pacific time in the US and from 10:00 A.M. - 6:00 P.M. Eastern time in Canada.
	Toll charges may apply.
	
	Pay-Per-Incident Support:
	
	In the United States, for $35 US per incident, call (800) 936-5700, 24 hours a
	day, seven days a week. In Canada, for $45 CDN plus tax per incident, call (800)
	668-7975, 8:00 A.M. to 11:00 P.M., Monday-Friday, excluding holidays and on
	Saturdays 10:00 A.M. 6:00 P.M. Eastern Time. Fees are billed to your VISA,
	MasterCard, or American Express card.
	
	Text Telephone:
	
	Available Monday-Friday, excluding holidays. In the United States and Canada call
	(425) 635-4948, from 5:00 A.M. - 9:00 P.M. and on Saturday from 9:00 A.M. - 3:00
	P.M. Pacific Time.
	
	Additional query words: kbimu homegame msgame
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWorksSearch kbHomeMMsearch kbEncartaSearch kbExpediaSearch kbPictureItSearch kbReaderSearch kbMapptSearch kbEncartaEncycSearch kbMapPoint2001 kbReader150 kbExpediaStreets2001 kbEncartaReference2001
	Version           : :1.5
	Issue type        : kbhowto
	
	=============================================================================
	
