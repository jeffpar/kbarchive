---
layout: page
title: "Q188048: SMS: Smsboot.exe Description and Syntax"
permalink: kb/188/Q188048/
---

## Q188048: SMS: Smsboot.exe Description and Syntax

	Article: Q188048
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
	
	Smsboot.exe, included in the Microsoft BackOffice Resource Kit: Part One, 1996,
	restarts a remote computer that runs Windows NT Server or Windows NT
	Workstation.
	
	Smsboot.exe runs on the following hardware platforms: Alpha, MIPS, x86.
	
	MORE INFORMATION
	================
	
	The following is a sample command line. The description of each option or switch
	is included below.
	
	     smsboot  -n:remote_computer  [-d:delay]  [-f]  [-m:"message"]  [-r]
	
	Where:
	
	- "-n:remote_computer" specifies the NetBIOS machine name of a remote computer
	  to restart. Note that SMSBOOT cannot restart the local computer.
	
	- "-d:delay" specifies the number of seconds before shutdown of the remote
	  computer. The default is 30.
	
	- "-f" specifies that SMSBOOT will not wait for applications with pending
	  changes. The default is to wait for each application with a pending change.
	
	- "-m:"message"" specifies a message to be displayed on the remote computer
	  console. The default is "Remote shutdown initiated."
	
	- "-r" specifies that SMSBOOT will not prompt the remote computer console to
	  restart after shutdown. The default is to prompt before restarting.
	
	- "/?" provides a usage statement.
	
	Additional query words: prodsms reboot rebooting rebooted
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
