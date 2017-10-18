---
layout: page
title: "Q198641: SMS: Netware Redirector Causes Message During SMS 2.0 Setup"
permalink: kb/198/Q198641/
---

## Q198641: SMS: Netware Redirector Causes Message During SMS 2.0 Setup

	Article: Q198641
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbOSNovellkbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A message may appear when running the setup program for Systems Management
	Server 2.0. The message states:
	
	  You are using a Novell NetWare Login Box which may cause connectivity
	  problems affecting Systems Management Server. It is recommended that you
	  refer to the Systems Management Server 2.0 Release Notes (Readme.htm) before
	  continuing. Do you want to continue?
	
	This message appears as a precaution if the IntranetWare client is installed on
	the machine that the Systems Management Server setup program is run on as some
	versions of the IntranetWare client may cause problems on your site server.
	
	Please refer to the Novell TID article 2947938 if you receive this message. For
	further information see the Novell Web site at: http://www.novell.com.
	
	MORE INFORMATION
	================
	
	To reinstall the MSGina, perform the steps below.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Open the registry of the computer and go to the following location:
	
	    HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\WinLogon\NWGINA.DLL
	
	2. Change Nwgina.dll to Msgina.dll.
	
	3. Restart the server and run the setup program again.
	
	If you choose not to replace the registry entry, there may be future problems
	with the Systems Management Server Executive service not responding due to
	remote procedure call (RPC) problems caused by the Nwgina.dll.
	
	
	Additional query words: prodsms nwroles nwgina
	
	======================================================================
	Keywords          : kbsms200 kbOSNovell kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
