---
layout: page
title: "Q166246: SMS: Inventory Is Not Always Reported to Current Logon Server"
permalink: kb/166/Q166246/
---

## Q166246: SMS: Inventory Is Not Always Reported to Current Logon Server

	Article: Q166246
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From a client computer running Windows NT when a logon script is called,
	Invwin32.exe does not always report inventory to the current logon server. The
	client runs Invwin32.exe from the correct logon server (based on the return from
	the SETLS32 program), but actually reports the .tmp (later renamed to .raw) file
	to a different server. The client's Sms.ini file shows that the Current Logon
	Server is the server from which it ran the executables, and not the server to
	which it passed its inventory.
	
	CAUSE
	=====
	
	The actual destination of the .raw file is determined as the server from which
	the _Invwn32.dll file is loaded, not necessarily the one from which Invwin32.exe
	is run. The choice of server from which to run Invwn32.dll is made by a random
	selection from the Domain.ini file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.1 and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server version 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	----------------
	
	If the server selected from the Domain.ini file is unavailable or offline, logon
	scripts may cause the client to stop responding for up to 20 minutes.
	
	If you use verbose reporting, the following is displayed when a Systems
	Management Server 1.1 client stops responding:
	
	     SMSLS.INI failed to find server
	     Find the Server from current logon server
	     Server(\\NTSMS) has share(SMS_SHR) avail
	     Found a Server UNC(\\NTSMS\SMS_SHR)
	     Attempting to execute file (\\NTSMS\SMS_SHR\x86.bin\INVWIN32.EXE)
	     arg (/L:\\NTSMS\SMS_SHR\ /E /T0 /I /V )
	     Root directory = [\\NTSMS\SMS_SHR\]
	     Domain.Ini Path path = [\\NTSMS\SMS_SHR\DOMAIN.INI]
	     Copy list file = [\\NTSMS\SMS_SHR\cl_nt.txt]
	
	     Warning: Could not load a Language resource. Defaulting to U.S.
	     English.Network Card Address: 08:00:2B:31:7B:4C
	
	     SMS inventory in progress...
	
	     Attempting to find the Apple zone...
	
	If you use verbose reporting, the following is displayed when a Systems
	Management Server 1.2 client stops responding:
	
	     Attempting to execute file (\\NTSMS\SMS_SHR\x86.bin\INVWIN32.EXE) arg
	     (/L:\\NTSMS\SMS_SHR\ /E /T0 /I /V )
	
	     Warning: Could not load language resource DLL.
	
	     Some messages may not be displayed/logged.
	     SMS root directory: \\NTSMS\SMS_SHR\.
	     DOMAIN.INI path: \\NTSMS\SMS_SHR\DOMAIN.INI.
	     Copy list file: \\NTSMS\SMS_SHR\cl_nt.txt.
	     Network address: 08:00:2B:31:7B:4C
	     Scanning local machine.
	
	     INVWIN32.EXE running as executable.
	     Attempting to locate/identify Apple zone.
	     Locating/reading SMS.INI.
	     Creating output file.
	
	Additional query words: prodsms winnt sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : :1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
