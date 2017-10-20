---
layout: page
title: "Q122999: PC WSPlus: Err Msg: Schedule+ Is Not Available for Booking..."
permalink: /kb/122/Q122999/
---

## Q122999: PC WSPlus: Err Msg: Schedule+ Is Not Available for Booking...

{% raw %}

	Article: Q122999
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you respond to a meeting request in Microsoft Mail for Windows that was
	created in Schedule+ for Windows, the following error may occur:
	
	  Schedule+ Messages: Schedule+ is not available for booking appointments. You
	  can only send messages to respond to this meeting request.
	
	CAUSE
	=====
	
	The following line appears in the [Microsoft Schedule+] section of the
	SCHDPLUS.INI file:
	
	  ScheduleTransport=TRNOFF
	
	RESOLUTION
	==========
	
	Change the line to the following:
	
	  ScheduleTransport=TRNSCHED.DLL
	
	The TRNSCHED.DLL file should be located in the Windows SYSTEM subdirectory.
	Restart Schedule+; the problem should not reoccur.
	
	If the TRNSCHED.DLL file is missing, it can usually be copied from another
	workstation or expanded from the product disks. To do this, you need EXPAND.EXE,
	which should be located in both the MS-DOS and Windows directories. Use the
	following the syntax
	
	  expand <drive>:\trnsched.dl_ <winpath>\trnsched.dll
	
	where <drive> is the drive containing the installation disk and
	<winpath> is the path to the Windows SYSTEM subdirectory. For example, if
	the installation disk is in drive A and the Windows directory is C:\WINDOWS,
	type the following command:
	
	  expand a:\trnsched.dl_ c:\windows\system\trnsched.dll
	
	The TRNSCHED.DLL file can be found in the following locations:
	
	                File     File     3.5-inch            5.25-inch
	
	Product          size     date      disk                 disk
	--------------------------------------------------------------
	Retail 1.00      12960   07/12/92   Disk 3 - Program 2   Same
	Retail 1.00a     12960   10/06/92   Disk 3 - Program 2   Same
	Windows for      12960   10/01/92   Disk 6               Disk 8
	 Workgroups 3.1
	Windows for      12960   11/01/93   Disk 6               Disk 8
	 Workgroups 3.11
	Mail Remote for  12960   04/06/93   Disk 1               Same
	 Windows (3.2)
	
	Also, if you have the Microsoft Mail for Gateway to IBM PROFS and OfficeVision,
	you must use the TRNSCHED.DLL file included with the gateway. It is available on
	Disk 1 dated 3-16-94 with a size of 13,104.
	
	MORE INFORMATION
	================
	
	In addition to the above error, all network functions of Schedule+ will be
	unavailable. The File menu will not contain the Work Offline/Online option, and
	the Set Access Privileges option (under the Options menu) and the Open Other's
	Appointment Book option (under the File menu) will be unavailable (grayed).
	
	Additional query words: schedule plus 1.00 1.00a gray grey
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
