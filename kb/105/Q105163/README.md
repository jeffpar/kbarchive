---
layout: page
title: "Q105163: PC WSPlus: How to Change User Name Displayed on the Desktop"
permalink: kb/105/Q105163/
---

## Q105163: PC WSPlus: How to Change User Name Displayed on the Desktop

	Article: Q105163
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbother kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, there are two
	ways to change the user name that appears on the Schedule+ desktop. Which
	method you use depends on whether Schedule+ is running with Microsoft Mail
	for PC Networks, or whether Schedule+ is running off line.
	
	Running Schedule+ in Conjunction with Microsoft Mail
	----------------------------------------------------
	
	The name is extracted from the Microsoft Mail ACCESS2.GLB file. The user's
	full name can be changed in the Mail Administrator (ADMIN.EXE) program, by
	selecting Local-Admin, Modify.
	
	Running Schedule+ Offline (Stand-Alone)
	---------------------------------------
	
	The name is originally extracted from the Login= entry in the MSMAIL.INI
	file and the user's .CAL file when it is first created. This character
	string is now embedded in the file, but can be changed by performing the
	following steps:
	
	1. Export all appointments from the old .CAL file, by choosing Export
	  Appointments from the File menu. Select the Schedule+ file format and
	  Schedule Range: All.
	
	2. Edit the SCHDPLUS.INI file and change the following lines
	
	        LocalUser=newname
	        LocalPath=c:\windows\newname.cal
	        StartUpOffLine=1
	
	  where newname is the new name you want to appear on the Schedule+ desktop.
	
	  NOTE: When specifying a new name, do not use a space or any other invalid
	  MS-DOS characters.
	
	3. Edit the MSMAIL.INI file and change the following line:
	
	        Login=newname
	
	4. Restart your Windows session, and import all the appointments from the
	
	export file by choosing Import Appointments from the File menu.
	
	Additional query words: schedule plus 1.00 1.00a offline
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
