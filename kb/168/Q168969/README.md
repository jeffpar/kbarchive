---
layout: page
title: "Q168969: Cannot Install WinNT Server Tools While File Manager Is Running"
permalink: /kb/168/Q168969/
---

## Q168969: Cannot Install WinNT Server Tools While File Manager Is Running

	Article: Q168969
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Windows NT Server Tools on a Windows NT
	Workstation-based computer, Setup may stop, and you may receive the following
	error message:
	
	  The process cannot access the file because it is being used by another
	  process.
	
	  The Client-based Network Administration Tools were not correctly installed on
	  the system. Check for sufficient disk space and correct access permissions on
	  the Windows NT system drive, then retry the installation. Setup must be run
	  from the directory where the Administration Tools reside."
	
	CAUSE
	=====
	
	This behavior can occur because the installation setup process has already been
	executed.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit File Manager prior to running the installation of NT
	Server Tools.
	
	MORE INFORMATION
	================
	
	File Manager is the user interface used to administer Macintosh Accessible
	Volumes. Installing the Server Tools on the Windows NT Workstation modifies File
	Manager to include the MacFile menu required to administer these volumes.
	
	The Setup.bat file that accomplishes this is in the Clients\Srvtools\Winnt folder
	on the Windows NT Server CD-ROM and attempts to register a .dll file with
	Windows NT. If File Manager is running, this cannot be accomplished since either
	the .dll is in use or the registry is locked.
	
	The following section of code that accomplishes this is taken from the Setup.bat
	file:
	
	  :Sfm_REG
	  call %systemroot%\system32\sfmreg SMAddons sfmmgr.dll ntnet.ini > nul:
	  call %systemroot%\system32\sfmreg Addons sfmmgr.dll winfile.ini > nul:
	  goto Exit_SUCCESS
	
	If Setup does not finish during an initial attempt to install the server tools,
	this article should not apply and the error is probably due to some other
	cause.
	
	
	Additional query words: mac sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
