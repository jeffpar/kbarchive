---
layout: page
title: "Q138305: Cannot Configure Windows 95 to Use Default Hardware Profile"
permalink: /kb/138/Q138305/
---

## Q138305: Cannot Configure Windows 95 to Use Default Hardware Profile

	Article: Q138305
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create multiple hardware profiles on your computer, Windows 95 attempts
	to automatically detect the hardware profile that should be used by examining
	the hardware that is currently installed. If Windows 95 cannot determine the
	hardware profile that should be used, you are prompted to select a hardware
	profile. You cannot configure Windows 95 to use a default value at this prompt;
	you must select a profile for Windows 95 to start.
	
	MORE INFORMATION
	================
	
	The hardware profile detection routine combines interrupt checksums, serial and
	parallel port data, computer identification data from the system ROM BIOS, and
	other information to create a unique identifier for the current hardware
	configuration. Windows 95 then compares this value with the values for the
	hardware profiles that you have created.
	
	If the current hardware configuration matches only one hardware profile, that
	profile is used automatically. If the current configuration matches more than
	one profile, you are prompted to select a hardware profile, or to create a new
	hardware profile. If the current configuration matches none of the current
	profiles, a new profile is created and you are prompted to enter a name for the
	new profile. You cannot configure Windows 95 to use a default value at this
	prompt.
	
	If you are using an MS-DOS multiple configuration menu, the menu may not appear
	when you start your computer. Once a hardware profile has been selected (either
	automatically by Windows 95 or manually by you), Windows 95 attempts to match
	the profile with one of the MS-DOS configurations in the Config.sys file. If the
	name of the hardware profile matches the name of one of the MS-DOS
	configurations, that configuration is selected automatically and the multiple
	configuration menu does not appear. If the name of the profile does not match
	the name of one of the MS-DOS configurations, the multiple configuration menu is
	displayed and you are prompted to select one of the configurations. This prompt
	can be configured to use a default value using the "Menudefault=" line in the
	Config.sys file.
	
	Additional query words: multiconfig multi-config
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
