---
layout: page
title: "Q235725: SMSINST: Sleep Functionality Now Built Into SMS Installer"
permalink: kb/235/Q235725/
---

## Q235725: SMSINST: Sleep Functionality Now Built Into SMS Installer

	Article: Q235725
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Service Pack 1 of Systems Management Server 2.0 Installer has an additional
	Sleep script item that can be used to pause the installation program for a
	specified length of time.
	
	Use the Sleep action to temporarily halt the setup program. You can temporarily
	halt the Setup program to allow time for other processes to end before
	proceeding. For example, you should temporarily halt the Setup program if an
	external executable file that is being called from the Setup program calls
	another executable file, then returns without waiting for the second executable
	process to end.
	
	NOTE: The time that the Setup program will pause is in milliseconds. For example,
	enter 2000 milliseconds to temporarily halt the Setup program for two seconds.
	Do not use a comma or other non-numeric characters.
	
	STATUS
	------
	
	MORE INFORMATION
	================
	
	This functionality is included in versions of Systems Management Server
	Installer 2.0.80.00 and higher.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
