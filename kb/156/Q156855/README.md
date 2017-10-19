---
layout: page
title: "Q156855: Incorrect User Profile Loaded When Logging On to Workstation"
permalink: /kb/156/Q156855/
---

## Q156855: Incorrect User Profile Loaded When Logging On to Workstation

	Article: Q156855
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Windows 95, an incorrect user profile may be loaded.
	
	CAUSE
	=====
	
	If you are using server-based user profiles, this behavior can occur if you log
	on to one workstation, change your user profile, log off the workstation, and
	then log on to another workstation, and the time settings on the two
	workstations do not match.
	
	RESOLUTION
	==========
	
	Set each workstation to the correct time. To do so, follow these steps on each
	workstation:
	
	1. Double-click the time in the taskbar.
	
	2. Click the Time Zone tab, and then select the correct time zone.
	
	3. Click the Date & Time tab, and then set the correct date and time.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	When you log on to a workstation configured to use server-based user profiles,
	the workstation compares its copy of the user profile with the copy of the
	profile on the server. The workstation then uses the most recently updated
	profile. If the user profile on the server appears to be invalid or damaged, the
	workstation uses its local copy of the profile.
	
	When a user profile is saved to a server, the file is stamped with the date and
	time of the workstation from which the profile was saved. If a profile on the
	server is stamped with a date or time that is later than the time set on the
	workstation, the workstation interprets the date and time as invalid, assumes
	the profile is damaged, and uses the local profile instead.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
