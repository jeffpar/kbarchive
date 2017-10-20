---
layout: page
title: "Q309135: Games: Using GOS Switches for Troubleshooting"
permalink: /kb/309/Q309135/
---

## Q309135: Games: Using GOS Switches for Troubleshooting

{% raw %}

	Article: Q309135
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Crimson Skies 
	- Microsoft Links 2001 
	- Microsoft MechWarrior 4: Black Knight 
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use GOS switches to customize the startup process for the game and to
	resolve certain issues you may encounter when you attempt to start or play the
	game. For example, the game may stop responding (hang), quit unexpectedly
	(crash) or generate an error message.
	
	
	MORE INFORMATION
	================
	
	To manually add GOS switches to the command line in the game shortcut, follow
	these steps:
	
	1. Insert the game CD into the CD-ROM drive. Press and hold the SHIFT key as you
	  insert the CD-ROM to prevent the program from starting automatically.
	
	2. Right-click Start, and then click "Open" or "Open All Users".
	
	3. Double-click the Programs folder.
	
	4. Double-click the Microsoft Games folder.
	
	5. Double-click the game folder.
	
	6. Right-click the game shortcut icon, and then click Properties.
	
	7. On the Shortcut tab, in the Target box, press END, press SPACEBAR, and then
	  type the GOS switch that you want to use. If you want to use an additional
	  GOS switch, press SPACEBAR, and then type the next parameter.
	
	  For example, to add the GOS switch to MechWarrior Vengeance, type:
	   - MechWarrior 4: Vengeance:
	
	  "<drive>:\Program Files\Microsoft Games\MechWarrior
	  Vengeance\MW4.exe/gosnovideo" (without the quotation marks)
	
	   - MechWarrior 4: Black Knight
	
	  "<drive>:\Program Files\Microsoft Games\MechWarrior
	  Vengeance\MW4x.exe/gosnovideo" (without the quotation marks)
	
	  NOTE: GOS Switches are not case sensitive.
	
	8. Click "Apply" or "OK".
	
	The following table lists the GOS switches you can use to start MechWarrior 4.
	
	Parameter             Description
	--------------------------------------------------------------------------- 
	/gosUseHW             Overrides all checks and forces the use of 3-D 
	                     acceleration. 
	
	/gosNoDialogs         All PAUSE dialog boxes will run automatically but 
	                     will never be displayed. 
	
	/gosNoJoystick        Disables joystick enumeration and use. 
	
	/gosNoForceFeedback   Disables force feedback joysticks from using forces. 
	                     You can still use them as joysticks. 
	
	/gosNoMemory          Disables the GameOS memory manager. 
	
	/gosNoBlade           Disables the Blade software rasterizer and uses the 
	                     D3D RGB rasterizer instead. 
	
	/gosCheckMemory       Checks for memory overwrites/reads on all allocated 
	                     memory blocks. 
	
	/gosAllSymbols        All modules loaded with MechWarrior 4 will have their 
	                     .PDBs loaded and will display symbols in any stack 
	                     walks. 
	
	/gosInfo "fred.txt"   Writes machine information to the Fred.txt file and 
	                     exits without doing anything else. /gosInfo on its 
	                     own writes to the Debuglog.txt file. 
	
	If the /gosNoSound switch resolved the issue, click the article number below to
	view article in the Microsoft Knowledge Base:
	
	  Q263047 Games: How to Troubleshoot Sound Related Issues
	
	Q If the /gosNoVideo switch resolved the issue, click the article number below to
	view article in the Microsoft Knowledge Base:
	
	  Q133365 Windows 95/98: Troubleshooting Problems with Compressed Audio
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbLinkGolfSearch kbGamesSearch kbGolfSearch kbCrimsonSkiesSearch kbCrimsonSkies kbLinks2001
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
