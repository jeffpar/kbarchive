---
layout: page
title: "Q325037: Dungeon Siege: Command-Line Switches, Troubleshooting Shortcuts"
permalink: /kb/325/Q325037/
---

## Q325037: Dungeon Siege: Command-Line Switches, Troubleshooting Shortcuts

{% raw %}

	Article: Q325037
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use command-line parameters to customize the Dungeon Siege startup
	process and to resolve certain problems that may occur when you try to start or
	play the game. This article lists the command-line parameters and explains how
	they work.
	
	This article also lists several troubleshooting shortcuts that Dungeon Siege
	provides. The troubleshooting shortcuts are preconfigured with command-line
	parameters to resolve certain problems.
	
	MORE INFORMATION
	================
	
	The following table lists the command-line parameters that you can use to start
	Dungeon Siege.
	
	  Parameter           Description
	  ----------------------------------------------------------------------
	
	  fpslog=true         Records frames-per-second information and outputs it 
	                      to the Fps.log file in the DS folder. 
	
	  zonematch=true      Disables the Microsoft and GPG logo movies and goes
	                      immediately to ZoneMatch. 
	  
	  nosound=true        Turns off all sounds, including music. 
	
	  nointro=true        Disables the Microsoft and GPG logo movies.
	
	  fullscreen=false    Forces Dungeon Siege to run in windowed mode. 
	
	  height=xxxx         Forces Dungeon Siege to run at xxxx resolution
	                      height.
	
	  width=xxxx          Forces Dungeon Siege to run at xxxx resolution 
	                      width.
	
	  bpp=xx              Forces Dungeon Siege to run in a specific color
	                      depth, where xx can be 16 or 32.
	
	  verifydata=true     Instructs Dungeon Siege to verify the integrity of 
	                      its executable and resource data when it starts up.  
	                      This process takes time to run and shows a dialog 
	                      box after it verifies each file. If the test 
	                      indicates that a file is corrupted, try reinstalling 
	                      Dungeon Siege.
	
	                      NOTE: Turn this option off after you use it.
	
	  bltonly=true        Forces blt mode instead of flip mode (to work 
	                      around the nVidia blinking problem with earlier
	                      drivers). 
	
	  aa_screenshots=true Uses anti-aliasing when it renders a screen shot (may 
	                      cause your computer to stop running with earlier 
	                      drivers). By default, anti-aliasing is off. 
	
	  nospacecheck=true   Skips the free-disk-space and available-memory 
	                      checks on startup. 
	
	  simplerender=true   Forces simple rendering mode. This turns off         
	                      multitexturing. Use this parameter to get rid of
	                      rendering problems for some video adapter/driver 
	                      combinations. 
	
	  asynccursor=false   Turns off the asynchronous cursor. This parameter 
	                      increases the frame rate but slows mouse response 
	                      time. 
	
	  turtle=true         Turns on auto-disconnect from a multiplayer session  
	                      when a computer times out (that is, when a computer 
	                      is not heard from for a long time). By default,
	                      this feature is on. Setting turtle=false turns off 
	                      auto-disconnection. Changing this option is not 
	                      recommended. 
	
	  maxfps=xx           Forces Dungeon Siege to run at a maximum framerate 
	                      of xx. 
	
	When you install the Dungeon Siege 1.1 Update, additional parameters are
	available:
	
	+-----------------------------------------------------------------------------------------------+
	| Parameters     | Description                                                                  | 
	+-----------------------------------------------------------------------------------------------+
	| noalttab=true  | Prevents task switching during gameplay (supported on Windows XP only).      | 
	+-----------------------------------------------------------------------------------------------+
	| nowinkeys=true | Disables the Windows keys (supported on Windows 2000 and Windows XP only).   | 
	+-----------------------------------------------------------------------------------------------+
	| user_path=path | Specifies where the user files go (rather than \My Documents\Dungeon Siege). | 
	+-----------------------------------------------------------------------------------------------+
	
	NOTE: Other path-related command line options are: keys_path, map_paths,
	mod_paths, res_paths, save_path, and shots_path.
	
	To manually add parameters to the Dungeon Siege shortcut command line, follow
	these steps:
	
	1. Insert Dungeon Siege disc 1 into the CD-ROM or DVD-ROM drive. Hold down the
	  SHIFT key to prevent the program from starting automatically.
	
	2. Right-click Start, and then click Open or Open All Users.
	
	3. Double-click the Programs folder.
	
	4. Double-click the Dungeon Siege folder.
	
	5. Right-click the Dungeon Siege shortcut, and then click Properties.
	
	6. Click the Shortcut tab.
	
	7. Click the Target box, press END, press SPACEBAR, and then type the parameter
	  that you want to use. If you want to use an additional parameter, press
	  SPACEBAR, and then type the next parameter.
	
	  For example, the following command line includes several parameters:
	
	  "C:\Program Files\Microsoft Games\Dungeon Siege\DungeonSiege.exe"
	  nosound=true bltonly=true fullscreen=false nointro=true
	
	  NOTE: Parameters are not case-sensitive. The path must be in quotation marks
	  if it contains spaces.
	
	8. Click Apply or OK.
	
	9. Double-click the Dungeon Siege shortcut to start the game.
	
	Troubleshooting Shortcuts
	-------------------------
	
	When you install Dungeon Siege, the Setup program creates several troubleshooting
	shortcuts that customize the Dungeon Siege startup process.
	
	To access these shortcuts, click Start, point to Programs, point to Microsoft
	Games, point to Dungeon Siege, and then click Troubleshooting.
	
	These troubleshooting shortcuts include the following:
	
	- Dungeon Siege 640 x 480
	
	  This shortcut starts Dungeon Siege with the following parameters: height=480
	  width=640 bpp=16
	
	- Dungeon Siege No Intro
	
	  This shortcut starts Dungeon Siege with the following parameter: nointro=true
	
	- Dungeon Siege No Sound
	
	  This shortcut starts Dungeon Siege with the following parameter: nosound=true
	
	Additional query words: hang black screen flickering quit crash creative distort gforce
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
