---
layout: page
title: "Q130786: Kids: Hangs at Black Screen or Quits After Microsoft Logo"
permalink: kb/130/Q130786/
---

## Q130786: Kids: Hangs at Black Screen or Quits After Microsoft Logo

	Article: Q130786
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,3.1,3.11,95,98
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbtlc mskids msbkbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run any of the programs listed at the top of this article,
	the Microsoft Home logo appears, then the program quits with no error message or
	it stops responding (hangs) with a black screen.
	
	The program may also quit after displaying the picture of the Magic School Bus
	logo.
	
	In addition, a black rectangle may be displayed in the center of the screen when
	you start Setup. The black rectangle is the size of the initial Setup screen,
	but there is no picture of Liz or the Bus, nor any buttons.
	
	CAUSE
	=====
	
	This issue can occur for any of the following reasons:
	
	- The Timer driver is not installed or is installed incorrectly.
	- You are attempting to run the Magic School Bus Explores the Human Body over a
	  network without using a mapped drive letter. In other words, you are using
	  Universal Naming Convention (UNC) path naming to specify the location of your
	  shared compact disc.
	- The display is set to more than 256 colors.
	- Norton Anti-Virus is running as a Terminate-and-Stay-Resident (TSR) program
	  on your computer.
	
	RESOLUTION
	==========
	
	Use the following troubleshooting methods in the order in which they are listed.
	After each section, test to see if the issue is resolved.
	
	NOTE: The following troubleshooting methods are separated by operating system.
	Use the appropriate methods for your version of Microsoft Windows.
	
	Microsoft Windows 95/98
	
	-----------------------
	
	Change Your Display Settings:
	
	To change your display settings, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, note the current settings.
	
	4. In the Color Palette or Colors box, click 256 Colors.
	
	5. Move the Desktop Area or Screen Area slider all the way to the left to reduce
	  the display resolution to 640 x 480 pixels.
	
	6. Click OK. If you are prompted to restart the computer, do so.
	
	Clean Boot Your Computer and Run Setup Again:
	
	To clean boot your computer, follow these steps:
	
	1. Restart the computer at a command prompt. To do so, follow the steps in the
	  appropriate section below:
	
	  Microsoft Windows 95
	
	  Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	  Microsoft Windows 98
	
	  Restart your computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then choose Command Prompt Only
	  from the Startup menu.
	
	2. Start Windows by typing "win" (without the quotation marks) and holding down
	  the SHIFT key for the duration of Windows startup. This prevents any programs
	  from loading automatically at startup.
	
	3. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	4. Quit all programs except Explorer and Systray (which are parts of Windows).
	  To quit a program, click the program, and then click End Task.
	
	5. Repeat steps 3-4 until you have quit all programs except Explorer and
	  Systray.
	
	6. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	7. Run Setup again.
	
	Microsoft Windows 3.x
	---------------------
	
	Install the Timer Driver:
	
	To install the Timer driver, follow these steps:
	
	1. In Program Manager, go to the Main group, then Control Panel.
	
	2. Double-click the Drivers control panel icon.
	
	3. Verify that Timer is present in the Installed Drivers list.
	
	4. If it is not listed, click on the Add button. In the List of Drivers, select
	  Timer and click OK.
	
	5. When you are prompted, insert the requested Microsoft Windows disk in the
	  appropriate disk drive and click OK.
	
	6. When you are prompted, click Restart Now. After Windows has restarted, run
	  the program.
	
	Verify the System.ini File "Timer=" Entry:
	
	If, after following these steps, the application still does not run, use the
	following additional steps to resolve the problem.
	
	1. In Program Manager, go to the File menu and choose Run.
	
	2. In the Command Line dialog box, type "sysedit" (without the quotation marks)
	  and press ENTER. This opens the System Configuration Editor.
	
	3. Click the System.ini file to bring it to the front. Scroll through the
	  System.ini file until you find the [drivers] section. Make sure that the
	  entry "timer=timer.drv" (without the quotation marks) is entered in this
	  section. If "timer=timer.drv" is not present, add this line to the [drivers]
	  section.
	
	4. Exit the System Configuration Editor. Save the changes when you are prompted.
	
	5. Exit and restart Windows.
	
	6. Run the program.
	
	For more information about editing .ini files, see your Windows printed
	documentation or online Help.
	
	Disable Third-Party "System.drv" Settings:
	
	See the following article to solve this problem:
	
	  Q143366 MSB Solar: ErrMsg: Solar System Needs More Memory to Run
	
	Close All TSR Programs:
	
	Remove any Windows terminate-and-stay-resident (TSR) programs that may be using
	Timer.drv. For example, Clock.exe.
	
	MORE INFORMATION
	================
	
	A damaged Timer.drv file might also produce similar problems.
	
	For additional information on problems with Timer.drv, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q102043 Multimedia Err Msg: Multimedia Timers Are Being Used
	
	Additional query words: kids mskids msb msbhb msbss frizz kbmm tad explore series world people nature hangs lockup locks hanging froze hanged locked winmsbhuman msbhuman winmsbsolar msbsolar msbocean msboceans oceans homekids homekid hang crash crashes freezes up freeze frozen msbearth kbimu
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbtlc mskids msb kbfaq
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbExplorapediaNature100 kbExplorapediaPeople100 kbWine100 kbScholasticHuman kbScholasticOcean kbScholasticSolar kbScholasticEarth kbOSWin310 kbOSWin311 kbMSBSearch
	Version           : WINDOWS:1.0,3.1,3.11,95,98
	Issue type        : kbprb
	
	=============================================================================
	
