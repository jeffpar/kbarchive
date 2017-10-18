---
layout: page
title: "Q128926: Remote Control Fails on Windows 95 with 32-bit IPX Stack"
permalink: kb/128/Q128926/
---

## Q128926: Remote Control Fails on Windows 95 with 32-bit IPX Stack

	Article: Q128926
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the protected mode Windows 95 IPX/SPX compatible protocol the
	remote control utility WUSER.EXE fails to load. It displays an error message
	that it requires NWIPXSPX.DLL. In SMS Version 1.2, the error message "Unable to
	initialize Multi-protocol support DLL IMP16.DLL" will occur when trying to load
	the remote agent.
	
	This file is a Novell NetWare DLL that is not shipped with Microsoft Windows 95
	or Microsoft Systems Management Server. The DLL file is normally part of the
	NetWare client installation, but if necessary, the file can be obtained from
	Novell.
	
	STATUS
	======
	
	This is by product design.
	
	Additional query words: prodsms sms helpdesk win95 nwlink
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbWin95search kbZNotKeyword3 kbSMS110 kbSMS120
	Version           : WINDOWS:95; winnt:1.1,1.2
	
	=============================================================================
	
