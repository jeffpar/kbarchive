---
layout: page
title: "Q189189: SMS: Fiperf.bat - Add SMS File Counters to Performance Monitor"
permalink: /kb/189/Q189189/
---

## Q189189: SMS: Fiperf.bat - Add SMS File Counters to Performance Monitor

	Article: Q189189
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Fiperf.bat, a utility that is available in the Microsoft BackOffice Resource
	Kit, adds counters to Performance Monitor that monitor the number, size, and age
	of files in various directories. This is particularly useful in Systems
	Management Server to monitor directories such as
	Ms\Site.srv\Dataload.box\Deltamif.col.
	
	The name of the new Performance Monitor object is SMS_Files. Review the Explain
	text in Performance Monitor for definitions of the counters.
	
	FIPERF must be run on the computer running the Systems Management Server site
	services.
	
	MORE INFORMATION
	================
	
	Usage Notes
	-----------
	
	Do not run these counters with a polling interval that is too small. Doing so
	adversely affects server performance because the server continuously scans
	directories. Although one minute is a reasonable minimum polling interval, one
	hour is recommended.
	
	The directories that are monitored are stored in the
	\\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\SMS_Files\Linkage registry key.
	You can add or remove items from this list as needed.
	
	In Performance Monitor, when you bring up a list of counters, the counter DLLs
	are called to return data (a scan of all the directories is performed). If these
	directories have many files, the scan may take from a few seconds to a few
	minutes. If there is a large delay and there are directories that you do not
	want to monitor, remove them from the Linkage key.
	
	Removing FIPERF
	---------------
	
	To remove this software, run the following command:
	
	     unlodctr SMS_Files
	
	Unlodctr is provided with Windows NT Server.
	
	NOTE: Do not simply delete the registry keys. Doing so may cause you to lose
	other Performance Monitor counters.
	
	Runs on Alpha, MIPS, and x86.
	
	Files Required for FIPERF
	-------------------------
	
	  Fiperf.dll
	  Smsperf.dll
	
	The following files are required to install the SMS_Files counter, but can safely
	be removed after installation:
	
	  Fiperf.bat
	  Fictrnm.h
	  Fi.ini
	
	FIPERF Syntax
	-------------
	
	To run the FIBPERF utility, use the following syntax
	
	  fiperf <path>
	
	where <path> is the path to the root SMS directory, for example, D:\SMS.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
