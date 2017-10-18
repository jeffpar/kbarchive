---
layout: page
title: "Q86609: PC WSPlus: Appointment or Message Window Off Screen"
permalink: kb/086/Q86609/
---

## Q86609: PC WSPlus: Appointment or Message Window Off Screen

	Article: Q86609
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Schedule+ for Windows Appointment or Messages window does not
	display properly.
	
	CAUSE
	=====
	
	The SCHDPLUS.INI file contains settings for MainWindow, AppointmentView, and
	RequestSummary to enable Schedule+ to control the location of those windows. If
	this section of the file gets edited or if a copy of the SCHDPLUS.INI file is
	moved from a workstation with a larger monitor, these numbers may be invalid.
	
	RESOLUTION
	==========
	
	To reset the window, either maximize the Schedule+ program window or turn the
	status bar off, then on.
	
	
	Additional query words: 1.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
