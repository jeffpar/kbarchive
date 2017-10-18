---
layout: page
title: "Q149745: XCLN: Dr. Watson Crash When Windows NT Client is Installed"
permalink: kb/149/Q149745/
---

## Q149745: XCLN: Dr. Watson Crash When Windows NT Client is Installed

	Article: Q149745
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user who is not a member of the local administrator group attempts to
	install a Microsoft Exchange Client for Windows NT on a Windows NT Workstation
	or Windows NT Server using the NTFS file system, and a local administrator has
	never logged onto the computer and run the Microsoft Exchange Client Setup, the
	setup process will get approximately 61% of the way through and then crash. The
	following information, among other things, is displayed in the Dr. Watson log:
	
	  Application exception occurred:
	  App: [Pid number of occurrence]
	  Time: [Time of occurrence]
	  Exception number: c0000005 (access violation)
	
	The access violation is the error.
	
	The above information is only applicable when you attempt install from the .CAB
	files. The symptoms are slightly different when you attempt to install from a
	shared install point (created by an administrator running SETUP /A). In this
	case, instead of receiving a Dr. Watson log, the user will receive a messagebox
	informing them that the installation was unsuccessful but not giving a reason.
	
	CAUSE
	=====
	
	When Windows NT is installed, the Mapi.dll file is installed into the
	%WINNT%\SYSTEM32 directory with Read permissions (RX) for everyone, except the
	members of the administrator group who have Full permissions. During
	installation of the Microsoft Exchange Client for Windows NT, the Mapi.dll must
	be upgraded and the rights to this file must be changed to Change rights (RWXD).
	If the user attempting the install is not a member of the local administrators
	group, this file cannot be upgraded nor can the rights be changed. This causes
	the crash.
	
	RESOLUTION
	==========
	
	The first user who attempts to install the Microsoft Exchange Client for Windows
	NT on this computer must be a member of the local administrator group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of the Microsoft
	Exchange Client for Windows NT. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: Exchange Setup
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
