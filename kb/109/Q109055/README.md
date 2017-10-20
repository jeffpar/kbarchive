---
layout: page
title: "Q109055: MS-DLC Setup Err Msg: &quot;The Network Setup Process Could...&quot;"
permalink: /kb/109/Q109055/
---

## Q109055: MS-DLC Setup Err Msg: &quot;The Network Setup Process Could...&quot;

{% raw %}

	Article: Q109055
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows for Workgroups 3.11, if you try to install the Microsoft Data Link
	Control (MS-DLC) protocol for Windows for Workgroups by using the SETUP.EXE
	program provided on the installation disk, you receive the following error
	message:
	
	  The network setup process could not be started.
	
	  Setup Error 908: The version of the NETWORK.INF file that is currently on your
	  system is incompatible with Setup and Control Panel. Expand and copy the
	  NETWORK.INF file into the Windows SYSTEM directory.
	
	CAUSE
	=====
	
	When you run MS-DLC SETUP.EXE, it first copies over the WFWSETUP.DLL and
	WFWSETUP.CPL files. This replaces the Windows for Workgroups 3.11 WFWSETUP.DLL
	file with an older version and causes a file that is no longer used to be added.
	Next, the MS-DLC Setup program attempts to run the Windows for Workgroups 3.11
	network setup routine. MS-DLC Setup uses the correct routine for Windows for
	Workgroups 3.1, but this routine doesn't work with version 3.11.
	
	RESOLUTION
	==========
	
	Do not modify the NETWORK.INF file (there is nothing wrong with it). To correct
	this problem, first delete the WFWSETUP.DLL file from the Windows SYSTEM
	directory, then expand the correct version from the Windows for Workgroups 3.11
	Disk 2 (for both the 3.5-inch and 5.25-inch disk sets). To expand the file, use
	the following syntax
	
	       expand <a>:\wfwsetup.dl_ <c>:<\windows\system>\wfwsetup.dll
	
	where <a> is your floppy disk drive containing Disk 2, <c> is your
	drive containing Windows, and <\windows\system> is the path for your
	Windows SYSTEM directory. Also, delete the WFWSETUP.CPL file from your computer.
	Windows for Workgroups 3.11 does not use this file. Restart Windows and add the
	MS-DLC protocol as an unlisted or updated protocol by choosing the Network Setup
	icon, which is located in the Network program group.
	
	MORE INFORMATION
	================
	
	For information on installing an unlisted or updated protocol in Windows for
	Workgroups 3.11 see the "User's Guide." For additional information on setting up
	and configuring Microsoft DLC, see the Windows for Workgroups 3.11 Resource Kit
	or the MS-DLC documentation.
	
	
	KBCategory: kbnetwork kbsetup
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.11 MS-DLC DLC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
