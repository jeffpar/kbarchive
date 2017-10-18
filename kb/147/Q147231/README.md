---
layout: page
title: "Q147231: Adding Program Groups and Items During Unattended Setup"
permalink: kb/147/Q147231/
---

## Q147231: Adding Program Groups and Items During Unattended Setup

	Article: Q147231
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To add additional Program Groups and Program Items automatically during
	Unattended Setup, modification of the PARTIAL.INF is required.
	
	MORE INFORMATION
	================
	
	From a shared copy of Windows NT on a systems hard drive expand the PARTIAL.IN_
	to PARTIAL.INF (expand partial.in_ partial.inf). Rename PARITIAL.IN_ to
	PARTIAL.BAK.
	
	NOTE: The Windows NT version of EXPAND.EXE is required to properly expand the
	file.
	
	There are four areas that have to modified/added:
	
	- 
	
	  (modified) [PartialDestinationVars]
	                <Group_Name>Dest      = $(!STF_WINDOWSSYSPATH)
	
	- 
	
	  (modified) [InstallProgramGroups] - Modified
	                 set <Group_Name>ToInstall = ^(<Group_Name>,1)
	
	- 
	
	  (added) [<Group_Name>Items]
	             Item_Name_1
	             Item_Name_2
	
	- 
	
	  (added) [<Group_Name>ItemsENG]
	             Item_Name_1  = "Item Description", Command Line, "Command
	                             Line Parameters", "Icon Resource File", icon
	                             offset
	             Item_Name_2  = "Item Description", Command Line, "Command
	                             Line Parameters", "Icon Resource File", icon
	                             offset
	
	EXAMPLE
	-------
	
	This example uses TerraFlora to identify the new item to be added and in
	referenced throughout the example.
	
	NOTE: "*" means an added line.
	
	[PartialDestinationVars]
	
	  ReadmeDest = $(!STF_WINDOWSPATH)
	  AccessoriesDest = $(!STF_WINDOWSSYSPATH)
	  GamesDest = $(!STF_WINDOWSSYSPATH)
	  SaversDest = $(!STF_WINDOWSSYSPATH)
	  WallpapersDest = $(!STF_WINDOWSPATH)
	  MainDest = $(!STF_WINDOWSSYSPATH)
	  AdminToolsDest = $(!STF_WINDOWSSYSPATH)
	  StartupDest = $(!STF_WINDOWSSYSPATH)
	
	  * TerraFloraDest = $(!STF_WINDOWSSYSPATH)
	
	exit
	[InstallProgramGroups]
	
	  set Groups = ^(ProgmanGroups, 1)
	  set MainToInstall = ^(MainItems$(!STF_PRODUCT)$(!STF_PLATFORM), 1)
	  set AdminToolsToInstall = ^(AdminToolsItems$(!STF_PRODUCT), 1)
	  set StartupToInstall = {}
	
	  * set TerraFloraToInstall = ^(TerraFloraItems,1)
	
	    ForListDo $(Groups)
	       set Group       = $($)
	       ifstr(i) $(Group) != Startup
	
	[MainItemsWinntI386]
	
	  FileManager
	  ControlPanel
	  PrintManager
	  Clipboard
	  Command
	  Setup
	  Pifedit
	  Mail
	  SchedulePlus
	  CommandRefWinnt
	  Intro
	  readme
	  OnlineBooks
	
	* [TerraFloraItems]
	*    Terra1
	*    Terra2
	*    Terra3
	*    Terra4
	*    Terra5
	*    Terra6
	
	* [TerraFloraItemsENG]
	*    Terra1  = "Terra Flora Help 1", INTRO.EXE,
	              "%windir%\SYSTEM32\INTRO.EXE", "intro.ico", 0
	
	*    Terra2  = "Terra Flora Help 2", INTRO.EXE,
	              "%windir%\SYSTEM32\INTRO.EXE", "intro.ico", 0
	
	*    Terra3  = "Terra Flora Help 3", INTRO.EXE,
	              "%windir%\SYSTEM32\INTRO.EXE", "intro.ico", 0
	
	*    Terra4  = "Terra Flora Help 4", INTRO.EXE,
	              "Q:\SYSTEM32\INTRO.EXE", "intro.ico", 0
	
	*    Terra5  = "Terra Flora Help 5",INTRO.EXE,
	              "\\TRAINING\INTRO\WINNT35\SYSTEM32\INTRO.EXE",
	              "intro.ico", 0
	
	*    Terra6  = "Terra Flora Help 6", INTRO.EXE,
	              "\\TRAINING\INTRO2\WINNT35\SYSTEM32\INTRO.EXE",
	              "intro.ico", 0
	
	For additional information, see the "Windows NT Resource Kit Volume 1," Chapter
	3: Customizing Windows NT Setup.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
