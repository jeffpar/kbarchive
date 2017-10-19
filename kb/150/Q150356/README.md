---
layout: page
title: "Q150356: Error Trying to Upgrade Win95 to Windows NT via SMS"
permalink: /kb/150/Q150356/
---

## Q150356: Error Trying to Upgrade Win95 to Windows NT via SMS

	Article: Q150356
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:1.0,1.1,1.2,3.5,3.51
	Operating System(s): 
	Keyword(s): kbsetup kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to upgrade Windows 95 to Windows NT using SMS, the job does not
	complete and SMS Pcmwin.log records the following error message:
	
	  The operating system installation package could not be completed.
	
	MORE INFORMATION
	================
	
	Windows 95 is not designed to allow an upgrade to Windows NT. The job should be
	canceled.
	
	To install Windows NT on a computer running Windows 95, you must perform a new
	installation of Windows NT to a different directory than the one containing
	Windows 95.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : WINDOWS:95; winnt:1.0,1.1,1.2,3.5,3.51
	
	=============================================================================
	
