---
layout: page
title: "Q152423: Pcmsvc32.exe Does Not Check &#92;MSTEST Directory for Files"
permalink: kb/152/Q152423/
---

## Q152423: Pcmsvc32.exe Does Not Check &#92;MSTEST Directory for Files

	Article: Q152423
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbPCM smsgeneral smspcm kbArtTypeINFkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When sending out a package that requires using an executable file from the
	\Mstest directory on the logon server, Pcmsvc32.exe will fail to find the
	executable file and thus the job will fail on the client. Because the job is
	being run in background mode no error message will show on the client.
	
	For example, if an MSTEST script is sent out in a package Pcmsvc32.exe will not
	check the \Mstest directory on the logon server for Mtrun.exe.
	
	CAUSE
	=====
	
	Pcmsvc32.exe does not look in the \Mstest directory for any executables or
	associated DLLs. Pcmsvc32.exe will only look in the package source for any
	required executable files and DLLs.
	
	WORKAROUND
	==========
	
	Send the required executable files in the package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server version 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbusage kbPCM smsgeneral smspcm kbArtTypeINF kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
