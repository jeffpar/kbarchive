---
layout: page
title: "Q112205: PC WRmt: Modem Script (.SCR) Update Process"
permalink: /kb/112/Q112205/
---

## Q112205: PC WRmt: Modem Script (.SCR) Update Process

	Article: Q112205
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When modem scripts (.SCR files) are found in the same location as user data
	files during the update-user-data process of Microsoft Mail Remote for Windows,
	the scripts will be installed along with the user data, replacing older versions
	(if any).
	
	MORE INFORMATION
	================
	
	Any time you are prompted for a directory containing user data files, if in
	addition to the data files, .SCR files are found, then the .SCR files are copied
	to the proper directory. However, those scripts are not automatically selected
	as being the current script used by Remote Mail for Windows.
	
	This provides a very convenient method for installing scripts. The administrator
	can simply include it on the data disk.
	
	Scripts on the datadisk will become the master scripts. If you have a script on
	the data disk that has the same name as one on your distribution disk or already
	installed in the client workstation, the one on the data disk will be the one
	that gets installed.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
