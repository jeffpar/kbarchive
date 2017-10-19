---
layout: page
title: "Q135126: Server Manager/User Manager for Domains Do Not Run in SMS Admin"
permalink: /kb/135/Q135126/
---

## Q135126: Server Manager/User Manager for Domains Do Not Run in SMS Admin

	Article: Q135126
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2,3.5,3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your computer running Windows NT Workstation, if you attempt to start the
	Windows NT administrative tools Server Manager and User Manager for Domains from
	within the Systems Management Server Administrator, the following error message
	appears:
	
	  Unable to start the <administrative_tool>. SMS either cannot connect to
	  the remote machine or the <administrative_tool> is not in your path.
	
	where <administrative_tool> is either Server Manager or User Manager for
	Domains, depending on which program you attempt to start.
	
	Other Windows NT administrative tools operate properly when started within
	Systems Management Server Administrator.
	
	CAUSE
	=====
	
	The program files for Server Manager (Srvmgr.exe) and for User Manager for
	Domains (Usrmgr.exe) do not exist on your computer.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the following program and help files to your
	%SystemRoot%\System32 subfolder:
	
	- Usrmgr.exe
	
	- Usrmgr.hlp (User Manager for Domains help file)
	
	- Srvmgr.exe
	
	- Srvmgr.hlp (Server Manager help file)
	
	NOTE: You can obtain these files from the following sources:
	
	- A computer running Windows NT Server.
	
	- The Windows NT Server CD-ROM (NOTE: Files are in compressed format and need
	  to be expanded before you can run the programs).
	
	- The Windows NT 3.5 Resource Kit CD-ROM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms srvtools usrmgr srvmgr reskit
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2,3.5,3.51
	
	=============================================================================
	
