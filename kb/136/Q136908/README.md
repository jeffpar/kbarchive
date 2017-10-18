---
layout: page
title: "Q136908: FLTSIM 5.1: Problems Creating and Using a System Startup Disk"
permalink: kb/136/Q136908/
---

## Q136908: FLTSIM 5.1: Problems Creating and Using a System Startup Disk

	Article: Q136908
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	5.10
	MS-DOS
	kbusage kbsetup kbenv kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a boot disk in Flight Simulator, you have the option to write
	the boot disk to the hard drive.
	
	After you complete the boot disk process, you experience a continual computer
	reboot or loop back to Flight Simulator. The symptom may appear when you end the
	current Flight Simulation session, or when you exit the program.
	
	RESOLUTION
	==========
	
	If the system is in a constant reboot loop, use the steps below to stop the
	loop:
	
	1. When the message Starting MS-DOS... appears on screen, press the F8 function
	  key. The F8 function key starts the InterActive boot and allows you to step
	  through the boot process.
	
	2. Answer (Y)es (press the Y key) to all the items in the Config.sys file.
	
	3. Answer (Y)es to Process Autoexec.bat.
	
	4. Answer (Y)es to all entries in the Autoexec.bat, except for the line that
	  displays FS5_stg2.bat. Say (N)o (press the N key) to this line.
	
	The system no longer continually reboots.
	
	MORE INFORMATION
	================
	
	Restoring the Original Boot Configuration
	-----------------------------------------
	
	NOTE: The following steps assume C is the letter of the hard drive where you
	installed Flight Simulator.
	
	1. To change to the Flight Simulator folder, type the following at the C:\
	  MS-DOS command prompt and press ENTER:
	
	  cd \fltsim5
	
	2. Type the following and press ENTER:
	
	  setup
	
	3. When the first screen appears, select the Install option. You will be asked
	  to confirm the sound card. Then you get the Boot Disk Options.
	
	4. The Auto Reboot System Detected screen appears. When you are asked if you
	  want to remove the Auto Reboot System, press Y for yes.
	
	5. The original boot sequence is restored.
	
	A failure to restore the original system indicates the FSYSTEM boot disk program
	has run more than one time.
	
	The Write Boot Disk to Hard Drive option saves the original boot sequence to the
	Fs5aboot folder. A modified Config.sys and Autoexec.bat containing an optimum
	boot sequence for Flight Simulator is created. The original Config.sys is saved
	as Config.fs5 and the original Autoexec.bat is saved as Autoexec.fs5.
	
	When Flight Simulator starts, the file FS5.com calls and executes a batch file
	named Reboot.com. This starts the reboot sequence.
	
	In the new Autoexec.bat is the file Fs_stg2.bat. This file calls a small menu
	system.
	
	Your Menu Choices Are:
	
	1. Start Microsoft Flight Simulator.
	
	2. Install System Startup Disk on Hard Drive.
	
	3. Exit to MS-DOS.
	
	When you first see this menu you may assume menu choice 2, "Install Startup Disk
	on Hard Disk," may not have correctly installed. If this option is picked again,
	the modified Config.sys and Autoexec.bat are saved to the Fs5aboot folder
	overwriting the originally saved files.
	
	Running Setup and choosing to remove the Auto Reboot System does not restore the
	original boot sequence because the original files have be overwritten with the
	modified file versions.
	
	Searching the Hard Disk for Saved Configuration Files
	-----------------------------------------------------
	
	Searching for a backup copy or saved version of the original Config.sys or
	Autoexec.bat may help when you restore the original configuration.
	
	1. From the C:\ prompt type the following
	
	  dir \config.* /s
	
	  and press ENTER.
	
	2. From the C:\ prompt type the following
	
	  dir \autoexec.* /s
	
	  and press ENTER.
	
	  The command searches the entire hard disk and locates any saved configuration
	  files.
	
	  NOTE: If Memmaker has been run prior to running the Flight Simulator Setup, a
	  copy of the original Config.sys and Autoexec.bat files are saved in the Dos
	  folder with the .umb extension.
	
	3. If the .umb files are found in the Dos folder, copy the files to the root
	  directory by typing the following command for each file followed by pressing
	  ENTER:
	
	  copy \dos\config.umb c:\config.sys
	
	  copy \dos\autoexec.umb c:\autoexec.bat
	
	  The MS-DOS Copy command copies and renames the saved files to the original
	  configuration files.
	
	4. Restart the computer and the system will function normally.
	
	  Flight Simulator must have sufficient free extended or expanded memory to
	  function properly. If the computer has insufficient free conventional or
	  expanded memory, the Setup program asks if you want to create a system
	  Startup disk to maximize the computer's memory.
	
	  NOTE: Do not create a system Startup disk on systems running Microsoft Windows
	  95. Systems running Microsoft Windows NT are able to create a system Startup
	  disk.
	
	Creating a System Startup Disk
	------------------------------
	
	1. When Setup prompts you to create a system startup disk, press the Y key and
	  follow the screen instructions.
	
	2. Insert a blank disk into the disk drive when requested. Setup reformats the
	  blank disk for use as a system Startup disk.
	
	3. Setup tells you to press any key to exit. The creation of a system Startup
	  disk is complete.
	
	4. Restart the computer with the system Startup disk in the floppy disk drive.
	
	  After you restart your computer, you have three options:
	
	   - If you want to start flying right away, choose Run Microsoft Flight
	     Simulator (press the 1 key).
	
	   - If you want to install the system Startup disk on your Hard Drive, choose
	     Install System Startup Disk on Hard Drive (press the 2 key). If you choose
	     this option, you can start Flight Simulator without the system startup
	     disk.
	
	   - If you want to exit to MS-DOS and start Flight Simulator later, choose
	     Exit To MS-DOS (press 3 key).
	
	Additional query words: 5.10 flightsim fltsim dos d_fltsim loop bootdisk restart continuous
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.1
	Issue type        : kbprb
	
	=============================================================================
	
