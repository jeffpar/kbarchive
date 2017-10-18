---
layout: page
title: "Q215032: SMS: Batch File Program on Windows 9x Not Closing Command Window"
permalink: kb/215/Q215032/
---

## Q215032: SMS: Batch File Program on Windows 9x Not Closing Command Window

	Article: Q215032
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbAdvertisement kbSoftwareDist
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Batch file programs, executing on Windows 95 and Windows 98 computers, may not
	close the MS-DOS Prompt window if the batch file was not called with a 'command
	/c' prefix.
	
	This causes the Advertised Program Manager (APM) to think the program is still
	running, which then prevents the APM from running other advertised programs
	until the MS-DOS Prompt is manually closed.
	
	When distributing batch file programs to Windows 9x clients, the following syntax
	should be used for the Command line:
	
	   command /c batchfile.bat
	
	Additional query words: prodsms windows 95 98 batch APM
	
	======================================================================
	Keywords          : kbsms200 kbAdvertisement kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
