---
layout: page
title: "Q271556: SMS: Advertisements Not Sent If IBM DB2 Installed"
permalink: /kb/271/Q271556/
---

## Q271556: SMS: Advertisements Not Sent If IBM DB2 Installed

	Article: Q271556
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200
	Last Modified: 20-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An advertisement that is sent to users or groups may not be sent when the
	Systems Management Server (SMS) 2.0 Service Pack 2 (SP2) client and IBM DB2 for
	Windows NT 4.0 are installed on the same computer. You may discover this issue
	because it appears as though the user or group has been targeted incorrectly, or
	the client is unable to read advertisement data from the Client Access Point
	(CAP).
	
	MORE INFORMATION
	================
	
	To confirm that this issue is affecting your computer, view the following log
	files:
	
	- Open the Odpusr32.log file on the client. This file is located in the
	  Windows\MS\SMS\Logs folder. Search the log file for "exception". If found,
	  the log entries should look like the following example:
	
	  <<<<<<<<<<<<< EXCEPTION EXCEPTION
	  EXCEPTION >>>>>>>>>>>>>
	  <<CLIEXCEPT>>(Logged to all threads)An exception was raised in the
	  application 'SMS User Offer Data Provider (ODP)',thread 0xYYY(Main Thread)
	
	- Check the Windows NT 4.0 event log on the client computer. The program logs
	  likely contain event ID 1009 that pertain to Perflib. The entry description
	  is similar to the following description:
	
	  The Open Procedure for service "DB"_NT_Performance" in DLL
	  "x:\%systemroot%\System32\DB2Perf.DLL" generated an exception.
	
	  Performance data for this service is not available and the exception code that
	  is returned is DWORD 0.
	
	Note that this issue is known to occur only with the SMS 2.0 SP2 client,
	Odpusr32.exe version 2.00.1493.2011 or later, and IBM DB2 for the Windows NT 4.0
	performance library .dll file, Db2perf.dll (version 6 at the time that this
	article was published). IBM is currently aware of the problem and an IBM
	Technote will be available.
	
	Until this problem is addressed in a DB2 FP, Microsoft recommends the following
	workaround:
	
	1. Locate the Db2perfi.exe file in the SQLLIB\Bin folder.
	
	2. Run Db2perfi.exe -u. This is an IBM utility that uninstalls the DB2
	  performance counters.
	
	You do not need to reboot the computer; the SMS User Offer Data Provider
	(ODPUsr32) starts to function on the next ODP run cycle.
	
	Additional query words: prodsms db2 exception odpusr32
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
