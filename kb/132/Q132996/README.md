---
layout: page
title: "Q132996: Games (R-Z) Requiring or Performing Better in MS-DOS Mode"
permalink: kb/132/Q132996/
---

## Q132996: Games (R-Z) Requiring or Performing Better in MS-DOS Mode

	Article: Q132996
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists games (R-Z) that must be run in MS-DOS mode. Additional
	information is provided when available.
	
	For information about running games in MS-DOS mode, please see the "Running an
	Application in MS-DOS Mode" section later in this article.
	
	MORE INFORMATION
	================
	
	Realms of Arkania - Blade of Destiny by Sir-Tech
	------------------------------------------------
	
	Executable: BLADE.BAT, BLADEM.EXE
	
	Realms of Arkania attempts to calibrate the computer in a manner not compatible
	with Windows 95. Running it in MS-DOS mode allows the calibration to succeed.
	
	NOTE: The calibration problem occurs only in the program title sequence. To skip
	the title sequence, double-click the BLADEM.EXE program icon instead of
	BLADE.BAT. This avoids the calibration problem and allow the program to run in
	Windows 95 without requiring MS-DOS mode.
	
	Rebel Assault by Lucas Arts
	---------------------------
	
	Rebel Assault may require MS-DOS mode on some computers, particularly 386- based
	computers or computers with less than 8 MB of RAM. Rebel Assault cannot play
	sound on a ProAudio Spectrum 16 sound card unless it is using an 8-bit DMA
	channel.
	
	Relentless Twinsen's Adventure by Electronic Arts
	-------------------------------------------------
	
	Executable: RELENT.EXE
	
	Relentless Twinsen's Adventure makes incorrect assumptions about the system
	memory configuration when Windows 95 is running. It must be run in MS-DOS mode.
	
	
	Return to Zork by ActiVision
	----------------------------
	
	Although you can install Return to Zork in Windows 95, it runs only in MS-DOS
	mode. If you receive error messages on a blue background while installing Return
	to Zork, ignore them.
	
	Rise of the Robots by Time Warner Interactive
	---------------------------------------------
	
	Executable: RISE.EXE
	
	Rise of the Robots has a problem in its timing code that causes it to pause for
	long periods of time under certain conditions. The problems may be resolved in
	MS-DOS mode.
	
	
	Robinson's Requiem by Ready Soft
	--------------------------------
	
	Executable: START.EXE
	
	Robinson's Requiem has a problem in its timing code that causes it to stop
	responding (hang). There are also problems with the MS-DOS extender used by the
	program.
	
	
	Rodney's Funscreen by ActiVision
	--------------------------------
	
	Executables: RODNEY.BAT, RODNEY.EXE
	
	The MS-DOS-based version of Rodney's Funscreen is unable to play sounds in
	Windows 95. Note that there is a Windows-based version of the program, in the
	same package, that works fine.
	
	Sabre
	-----
	
	Executable: SABRE.EXE
	
	Sabre requires MS-DOS mode.
	
	Sam 'n Max Hit the Road by Lucas Arts
	-------------------------------------
	
	Sam 'n Max Hit the Road may require MS-DOS mode on some computers. On others, it
	may run but with degraded sound quality. If you experience problems, run Sam 'n
	Max Hit the Road in MS-DOS mode.
	
	Secret Weapons of the Luftwaffe by Lucas Arts
	---------------------------------------------
	
	The CD-ROM version of Secret Weapons of the Luftwaffe experiences problems in
	Windows 95. You may be able to avoid these problems in MS-DOS mode.
	
	The floppy disk version appears to run in Windows 95 without any problems.
	
	Shadowcaster by Origin
	----------------------
	
	If you have a computer without a math coprocessor, you must run Shadowcaster in
	MS-DOS mode.
	
	Sherlock Holmes Consulting Detective by ICOM Simulations
	--------------------------------------------------------
	
	Sherlock Holmes requires MS-DOS mode.
	
	SimCity Classic by Maxis
	------------------------
	
	SimCity requires MS-DOS mode.
	
	SimHealth by Maxis
	------------------
	
	Executable: HEALTH.EXE
	
	The MS-DOS extender used by SimHealth is not compatible with Windows 95. It must
	be run in MS-DOS mode.
	
	SimLife by Maxis
	----------------
	
	Executable: SIMLIFE.BAT
	
	SimLife requires MS-DOS mode.
	
	NOTE: Before installing this game on a 486-based computer, you may have to
	restart your computer, press F8 when you see the "Starting Windows 95" message,
	then choose Safe Mode Command Prompt Only from the Startup menu.
	
	Simon the Sorcerer by Infocom
	-----------------------------
	
	Simon the Sorcerer requires MS-DOS mode.
	
	Slam City with Scottie Pippen by Digital Pictures
	-------------------------------------------------
	
	Executable: SLAM.EXE
	
	When you run Slam City for the first time it causes a fault in the MS-DOS
	extender. The fault occurs because Slam City encounters a problem when it
	attempts to determine the proper settings for your sound card. A file called
	SLAMTEMP.$$$ is created in the root directory to record the problem. Do not
	delete this file.
	
	When you run Slam City a second time, it should detect that the previous attempt
	to detect the sound card failed and display an appropriate message.
	
	It may be necessary to restart your computer after you choose the sound card for
	sounds to play properly. Depending on your sound card, sound may not work even
	after you restart the computer. If this occurs, run Slam City in MS-DOS mode.
	
	
	Sound Configuration Utility by Dynamix (Sierra Online)
	------------------------------------------------------
	
	Executable: SOUNDSET.EXE
	
	This configuration program is used by many Dynamix games. This program accesses
	memory after freeing it. Windows 95 memory protection terminates the program due
	to an invalid operation. Run the program in MS-DOS mode to avoid the problem.
	
	
	Space Adventure II by Knowledge Adventure
	-----------------------------------------
	
	Space Adventure II requires MS-DOS mode.
	
	Speed Racer by Accolade
	-----------------------
	
	Executable: SR.BAT
	
	When you exit Speed Racer, you receive an error message. The error message occurs
	because Speed Racer accesses memory after freeing it. Windows 95 memory
	protection terminates the program due to an invalid operation. Run Speed Racer
	in MS-DOS mode to avoid the problem.
	
	
	Stalingrad by Avalon Hill
	-------------------------
	
	Executable: STALIN.EXE
	
	Stalingrad must be run in MS-DOS mode.
	
	Star Crusader by GameTek
	------------------------
	
	Executable: SC.COM
	
	Star Crusader (which comes pre-installed on some Leading Edge computers) runs
	poorly in Windows 95. It runs better in MS-DOS mode.
	
	Strike Commander by Origin
	--------------------------
	
	Executables: SC.EXE, SCCD.EXE
	
	When you run Strike Commander you receive the following error message:
	
	  Protected mode driver is not responding to EMS function calls. Make sure your
	  EMS driver is not configured with the NOEMS option. If it is, replace the
	  option "NOEMS" with "RAM."
	
	This error is misleading as Strike Commander is really asking for Virtual Control
	Program Interface (VCPI) services, not EMS memory. Windows 95 does not support
	VCPI services, so you must run Strike Commander in MS-DOS mode.
	
	Super Street Fighter 2 Turbo by GameTek
	---------------------------------------
	
	Executable: SSF2T.BAT
	
	Super Street Fighter 2 Turbo is not compatible with Win32. It must be run in
	MS-DOS mode.
	
	NOTE: This program does not run if you have a BLASTER environment variable with
	no "T" attribute. Please contact GameTek for instructions on including an
	appropriate "T" value in the BLASTER environment variable before running Super
	Street Fighter 2 Turbo.
	
	
	Syndicate (and add-ons) by Electronic Arts
	------------------------------------------
	
	Executables: SYND.BAT, SYND.EXE
	
	When you run Syndicate or any of its add-ons in Windows 95, you receive the
	following error message:
	
	  DOS/16M error: [31] protected mode already in use in this DPMI virtual
	  machine
	
	Syndicate requires complete control of the computer and must be run in MS-DOS
	mode.
	
	System Shock by Origin
	----------------------
	
	Executables: SSHOCK.BAT, SSHOCK.EXE
	
	System Shock has trouble reading the joystick if run from a Windows 95 MS-DOS
	prompt. Either disable the joystick feature, or run System Shock in MS-DOS
	mode.
	
	
	The Treehouse by Broderbund
	---------------------------
	
	If you have more than 500K of free conventional memory, you can run The Treehouse
	in Windows 95. Otherwise, you must run The Treehouse in MS-DOS mode.
	
	Trump Castle 3 by Capstone
	--------------------------
	
	Executable: TC3.EXE
	
	Trump Castle sets the timer rate to a speed faster than it can handle. Running it
	in MS-DOS mode may resolve the problem.
	
	Ultima VII - The Black Gate by Origin
	-------------------------------------
	
	Executable: ULTIMA7.COM
	
	The Black Gate requires MS-DOS mode.
	
	
	Ultima VII - Part II - Serpent Isle by Origin
	---------------------------------------------
	
	Executable: SERPENT.COM
	
	Ultima VII - Serpent Isle refuses to run in a protected-mode operating system. It
	must be run in MS-DOS mode.
	
	To run Serpent Isle in MS-DOS mode, you must specify a new MS-DOS configuration.
	The following sample CONFIG.SYS and AUTOEXEC.BAT files may work. If they do not,
	please contact Origin for assistance.
	
	  CONFIG.SYS:
	
	  Files=25
	  Buffers=25 (per Origin, PS/2 users should use Files & Buffers of 50)
	
	  AUTOEXEC.BAT:
	
	  Path=<Windows folder>;<Windows\Command folder>;<Serpent Isle folder>
	  C:\<Path to mouse driver>
	
	Note that Origin recommends that you not run Serpent Isle with any disk
	compression.
	
	Ultima VIII - Pagan by Origin
	-----------------------------
	
	Executable: U8.EXE
	
	Pagan requires MS-DOS mode.
	
	
	Ultimate Football by Microprose
	-------------------------------
	
	Executables: FOOTBALL.BAT, FOOTBALL.EXE
	
	Ultimate Football requires MS-DOS mode.
	
	Ultrabots by Electronic Arts
	----------------------------
	
	Ultrabots sets the timer rate to a speed too fast for Windows 95 to handle
	comfortably. It runs, although slowly. Running Ultrabots in MS-DOS mode allows
	it to run at full speed.
	
	Under a Killing Moon by Access Software
	---------------------------------------
	
	Executable: MOON.EXE
	
	Under a Killing Moon uses the sound card in a way that is not compatible with
	Windows 95. If you disable sound support for the game, it may run in Windows 95.
	Otherwise, you must run and install Under a Killing Moon in MS-DOS mode.
	
	US Navy Fighters by Electronic Arts
	-----------------------------------
	
	Executable: USNF.EXE
	
	US Navy Fighters makes incorrect assumptions about the system memory
	configuration when Windows 95 is running; therefore, it must be run in MS-DOS
	mode.
	
	
	Wing Commander II by Origin
	---------------------------
	
	Executable: WC2.BAT
	
	Wing Commander manipulates expanded (EMS) memory in a manner incompatible with
	Windows 95. It must be run in MS-DOS mode.
	
	
	Wing Commander II - Special Operations Disk by Origin
	-----------------------------------------------------
	
	Executables: SO1.BAT, SO2.BAT, SO1.EXE, SO2.EXE
	
	This add-on to Wing Commander II manipulates expanded (EMS) memory in a manner
	incompatible with Windows 95. It must be run in MS-DOS mode.
	
	
	Wing Commander Armada by Origin
	-------------------------------
	
	Executable: ARMADA.EXE
	
	Wing Commander Armada requires Virtual Control Program Interface (VCPI) services,
	which are not supported by Windows 95.
	
	Wings of Glory by Origin
	------------------------
	
	Executable: GLORY.EXE
	
	Wings of Glory requires Virtual Control Program Interface (VCPI) services, which
	are not supported by Windows 95.
	
	Wordtris by Spectrum Holobyte
	-----------------------------
	
	Wordtris requires MS-DOS mode.
	
	World Atlas version 4 by Software Toolworks
	-------------------------------------------
	
	Executable: WA.BAT
	
	World Atlas is unable to play sounds when run at a Windows 95 MS-DOS prompt due
	to the way it uses the system timer. To work around this problem, disable the
	sound in World Atlas or run it in MS-DOS mode.
	
	World of Xeen - Might and Magic by New World Computing
	------------------------------------------------------
	
	World of Xeen requires MS-DOS mode.
	
	Zephyr by New World Computing
	-----------------------------
	
	Executable: ZEPHYR.EXE
	
	Zephyr requires MS-DOS mode.
	
	Running an Application in MS-DOS Mode
	-------------------------------------
	
	Windows 95 usually runs programs that require MS-DOS mode in MS-DOS mode
	automatically. If it does not, delete the corresponding .PIF file and
	double-click the program icon again. Note that .PIF files usually have the same
	name as the program file, but with a .PIF extension instead of the .BAT, .COM,
	or .EXE extension. The corresponding .PIF file can be found in one of the
	following locations:
	
	- In the folder that contains the program file.
	
	- In the hidden PIF folder in the Windows 95 folder.
	
	- In a folder specified by your PATH statement.
	
	To make certain you find all copies of the .PIF file, use the Find Files Or
	Folders feature.
	
	If Windows 95 does not configure the program to run in MS-DOS mode automatically,
	follow these steps:
	
	1. Click the executable file with the right mouse button, then click Properties
	  on the menu that appears.
	
	2. On the Program tab, click the Advanced button.
	
	3. Click the MS-DOS Mode check box to select it.
	
	4. You can usually use the Use Current MS-DOS Configuration option. However,
	  some programs may require that you use the Specify A New Configuration
	  option. Consult the program's documentation for sample CONFIG.SYS and
	  AUTOEXEC.BAT files.
	
	5. Click OK.
	
	These steps cause the program to run in MS-DOS mode. You may need to optimize the
	settings if the program requires a mouse, expanded memory, a CD-ROM drive, or a
	sound card. Consult the program's documentation to determine if it has specific
	needs.
	
	NOTE: You may have to double-click the program icon in Windows Explorer or My
	Computer, or type the program name in the Run dialog box, for the program's
	settings to take effect. Typing the program name at an MS-DOS prompt does not
	always cause the program's settings to be used.
	
	Additional query words: single sdam
	
	======================================================================
	Keywords          : kb3rdparty kbenv win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	
