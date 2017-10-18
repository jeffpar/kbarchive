---
layout: page
title: "Q137827: Program and .ini Files Not Transferred with User Profiles"
permalink: kb/137/Q137827/
---

## Q137827: Program and .ini Files Not Transferred with User Profiles

	Article: Q137827
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using user profiles and you log on to another workstation on the
	network, your personal desktop icons and Start menu shortcuts appear, but some
	of the programs associated with your shortcuts may not run. If you can run a
	program, some or all of your custom settings for that program may not appear.
	
	CAUSE
	=====
	
	When user profiles are enabled, your own personal configuration is used when you
	log on to a computer on the network. This configuration includes desktop icons
	and Start menu shortcuts, but does not include the actual program files that are
	installed on your computer. If you create a shortcut for a program installed on
	your computer, but that program is not installed on the computer you log on to,
	you cannot run that program using the shortcut.
	
	If the program is installed on the computer you log on to, the program may run,
	but your custom program settings may not appear. If the program stores its
	custom settings in an initialization (.ini) file instead of the Windows 95
	registry, those custom settings are not available when you log on to another
	computer on the network. Your personal configuration includes the user portion
	of the registry (User.dat), but does not include the .ini files found in the
	Windows folder or any other program folders.
	
	RESOLUTION
	==========
	
	If you cannot run a program for which you have a desktop icon or Start menu
	shortcut, install that program on the computer you are logged on to. Install the
	program in the same folder as on your own computer.
	
	If you can run a program, but your custom settings do not appear, change the
	settings in the program to match your custom settings. Note that when you do so,
	the custom settings you create will be used for everyone who uses the program on
	this computer.
	
	MORE INFORMATION
	================
	
	User profiles contain configuration preferences and options for each user. User
	profile settings include everything in the Hkey_Current_User section of the
	registry, including the following items:
	
	- Control Panel settings and preferences for the Windows 95 user interface,
	  including settings for desktop layout, background, font selection, colors,
	  and shortcuts on the desktop and Start menu.
	
	  NOTE: For desktop icons and Start menu shortcuts to be included in user
	  profiles, the "Include desktop icons and Network Neighborhood contents in
	  user settings" and "Include Start menu and program groups in user settings"
	  check boxes on the User Profiles tab must be selected. To access the User
	  Profiles tab, double-click the Passwords icon in Control Panel.
	
	- Settings for persistent network connections and information about recently
	  used resources, including documents, Find Computer results, installation
	  locations, and printer ports.
	
	- Program settings (for programs that can write directly to the registry),
	  including settings for the accessories and programs installed with Windows
	  95, menu and toolbar configurations, and fonts.
	
	REFERENCES
	==========
	
	"Microsoft Windows 95 Resource Kit," Chapter 15, "User Profiles and System
	Policies"
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
