---
layout: page
title: "Q141064: Problems w/ Automatic Adjust Clock for Daylight Saving Time"
permalink: kb/141/Q141064/
---

## Q141064: Problems w/ Automatic Adjust Clock for Daylight Saving Time

	Article: Q141064
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	7.00
	WINDOWS
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are on a network which operating system has the functionality of
	adjusting for changes in daylight savings time, there will be a problem if you
	also use the Automatically Adjust Clock for Daylight Savings Time Changes
	feature in Microsoft Windows 95, particularly if all workstations on the network
	are either not using Windows 95 or have disabled this feature in Control Panel,
	Date/Time, Time Zone tab.
	
	If you allow the network operating system as well as Windows 95 to adjust for
	these changes, then you are no longer synchronized with the rest of the network
	and entries made into other users' schedules will be changed to try to adjust
	for this.
	
	The following is an example of a Schedule+ problem that has been encountered:
	
	Use Schedule+ to schedule meetings on a Novell network, running Windows 95 and
	Office 95. The other workstations are running Windows for Workgroups. The
	network operating system had adjusted all clocks on the system when there was a
	change between daylight saving time and eastern standard time. When the Windows
	95 user was asked if he or she wanted to have Windows 95 automatically adjust
	for changing the clocks, the user chooses Yes. After this, all other schedules
	on the network that had meetings scheduled, prior to the time change, for 1:00
	P.M. found that the time has now been changed to 2:00 P.M.
	
	CAUSE
	=====
	
	If the network operating system adjusts the time and then Windows 95 adjusts the
	time. The Windows 95 machine is no longer synchronized with the other machines
	on the network. It has actually had its time set back by one hour twice. The
	workstation appears to be in a different time zone than the rest of the
	machines. In an effort to synchronize the times, the scheduled appointment times
	change.
	
	RESOLUTION
	==========
	
	To avoid this problem, choose Date/Time from the Control Panel. In the Time Zone
	tab, disable Automatically adjust clock for daylight savings time changes.
	
	MORE INFORMATION
	================
	
	If you click the question mark (?) on Automatically adjust clock for daylight
	savings time changes, you get an explanation of the feature as well as the
	following warning:
	
	  If you use more than on operating system, make sure that only one of then
	  adjusts for daylight saving time.
	
	Additional query words: 7.00 schedule plus daylight saving time network
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
