---
layout: page
title: "Q256913: SMS: Cannot Connect to SMS Database After Upgrading SMS"
permalink: kb/256/Q256913/
---

## Q256913: SMS: Cannot Connect to SMS Database After Upgrading SMS

	Article: Q256913
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug kbsmsProvider
	Last Modified: 01-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a computer running Systems Management Server 2.0 Site Server,
	or Systems Management Server Administrator console system, running on Microsoft
	Windows NT 4.0 to Windows 2000, you may not be able to connect to the Systems
	Management Server database from the Administrator console. You may not be able
	to schedule reports from Crystal Info snap-in of the Administrator console, or
	run reports directly from the Info Report Designer.
	
	CAUSE
	=====
	
	The Windows 2000 upgrade removes the WMI ODBC driver (wbemdr32.dll) from the
	WinNT\system32 directory. A clean install of Windows 2000 does not install this
	driver. Systems Management Server 2.0 installs the WMI ODBC driver on Systems
	Management servers and remote Administrator console computers as part of the WMI
	install (Wbemsdk.exe). Therefore, this problem occurs when either an Systems
	Management Server 2.0 site server or remote Administrator console computer is
	upgraded from Windows NT 4.0 to Windows 2000.
	
	WORKAROUND
	==========
	
	To resolve this issue, do one of the following:
	
	- Run the WBEMSDK.EXE /SERVER command on a Systems Management Server 2.0 site
	  server, from the SMS\BIN\I386 folder (if the site server has been upgraded to
	  Windows 2000 and is exhibiting the problem).
	
	- For a computer running the Administrator console, connect to the computer
	  running Systems Management Server 2.0 Site Server, and then run the
	  WBEMSDK.EXE /SERVER command from the SMS\BIN\I386 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The Windows 2000 Setup program removes the Windows Management Interface (WMI)
	ODBC driver, Wbemdr32.dll, from the System32 folder. Open Database Connectivity
	(ODBC) requires this driver to connect to WMI. Programs that use this driver
	cannot connect to WMI or the Systems Management Server database. Programs that
	use the WMI driver include Crystal Reports, Microsoft Access, Microsoft Excel
	and others.
	
	NOTE: For Systems Management Server 2.0 SP1 and earlier versions, the driver
	installed by this method does not work on Windows 2000 for Crystal reports when
	the site server is on the computer as the Systems Management Server provider.
	The version in Systems Management Server 2.0 SP2 functions correctly.
	
	An alternative location for the WMI ODBC driver DLL is the ValueAdd directory of
	the Windows 2000 CD (ValueAdd\MSFT\MGMT\WBEMODBC); it can be installed from
	here. However, this version of the driver (Wbemdr32.dll) does not work on
	Windows 2000 for Crystal reports when the site server is on the same computer as
	the Systems Management Server provider.
	
	WMI is the Microsoft implementation of an industry standard called Web Based
	Enterprise Management (WBEM). For more information about Systems Management
	Server architecture and WMI, see Chapter 1 of the Systems Management Server
	Administrators Guide.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug kbsmsProvider 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
