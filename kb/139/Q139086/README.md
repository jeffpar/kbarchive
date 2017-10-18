---
layout: page
title: "Q139086: How to Update Files in Use by Windows"
permalink: kb/139/Q139086/
---

## Q139086: How to Update Files in Use by Windows

	Article: Q139086
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to update Windows client system files that are currently in use,
	the update fails and the files are not overwritten. This article outlines a
	procedure that you can use to ensure these files are updated when you restart
	the computer. The procedure is not supported and may be used at your own risk.
	The SMSWORK component can change in future releases of Systems Management
	Server.
	
	MORE INFORMATION
	================
	
	The C:\SMS.INI file can include a [SMS Work] section, and a PendingWork key. For
	this key, you can create a comma separated list of commands for the SMSWORK.EXE
	component of Systems Management Server. SMSWORK.EXE executes these commands when
	AUTOEXEC.BAT calls the Systems Management Server batch file, CLIENT.BAT.
	
	For example, if you want to update the NETAPI.DLL file in the C:\WINDOWS\SYSTEM
	directory, do the following:
	
	1. Use Microsoft Test or another method to update SMS.INI as follows:
	
	        [SMS Work]
	        PendingWork=copy c:\temp\netapi.dll c:\windows\system\netapi.dll /y,
	        del c:\temp\netapi.dll
	
	  NOTE: SMS.INI is a critical file for the Systems Management Server client and
	  great care should be taken when altering it. SMS.INI has the file attribute
	  Hidden. Be sure to restore the Hidden file attribute after you remove it.
	
	2. In the script you use, place the new version of NETAPI.DLL into the c:\TEMP
	  directory and possibly notify the user that a reboot is needed.
	
	In this example, when the client reboots, AUTOEXEC.BAT calls CLIENT.BAT, which
	invokes SMSWORK.EXE. SMSWORK reads the items from PendingWork and executes them
	as separate commands according to where you place the comma starting with the
	left command first. SMSWORK then copies NETAPI.DLL over the old one, and the
	next command deletes the temporary version of NETAPI.DLL. Following each
	command, SMSWORK automatically removes the executed command from the PendingWork
	key.
	
	By design, SMSWORK is a helper component to the modules that perform operating
	system upgrades and installs. SMSWORK helps these modules by removing local
	temporary directories created during the operating system setup or undoes other
	actions taken by these modules, when the system reboots.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	
