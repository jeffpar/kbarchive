---
layout: page
title: "Q114029: PC WSPlus: Set Access Privileges Option Unavailable/Disabled"
permalink: /kb/114/Q114029/
---

## Q114029: PC WSPlus: Set Access Privileges Option Unavailable/Disabled

{% raw %}

	Article: Q114029
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a, used with:
	   - the operating system: Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot choose the Set Access Privileges option from the Options menu (the
	option is unavailable [gray]). No error messages appear and both Mail and
	Schedule+ seem to work correctly.
	
	This problem only occurs when you run Schedule+ with Microsoft Windows for
	Workgroups version 3.11 while using Microsoft At Work PC Fax.
	
	CAUSE
	=====
	
	If you select the FAX Only option when setting up Microsoft At Work PC Fax
	instead of the FAX And Email option, Mail works correctly only if it was set up
	before the At Work PC Fax software. However, Mail runs Schedule+ offline only,
	disabling any of the online options in Schedule+.
	
	RESOLUTION
	==========
	
	When the FAX Only option is selected, the transport entry in the SCHDPLUS.INI
	file is changed to the following value:
	
	     ScheduleTransport=TRNOFF
	
	To activate the Set Access Privileges option, change the line to read as
	follows:
	
	     ScheduleTransport=TRNSCHED.DLL
	
	When you restart Schedule+ after making this change, the offline calendar file
	will update the server's copy of the calendar file and you can then use the Set
	Access Privileges, Work Online, and Work Offline menu options.
	
	Additional query words: schedule plus 1.00 1.00a grey greyed grayed awfax wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch
	Version           : WINDOWS:1.0,1.0a,3.11
	
	=============================================================================
	

{% endraw %}
