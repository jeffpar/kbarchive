---
layout: page
title: "Q148690: SMS: Windows NT 3.51 Service Pack 4 PDF Availability"
permalink: /kb/148/Q148690/
---

## Q148690: SMS: Windows NT 3.51 Service Pack 4 PDF Availability

	Article: Q148690
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbPCM smssetup smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A package definition file (PDF) for Windows NT 3.51 Service Pack 4 is available
	for download in the following electronic service:
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the /bussys/winnt/winnt-public/fixes/usa/nt351/ussp4
	  folder.
	  Get NT351SP4.PDF
	
	MORE INFORMATION
	================
	
	The Service Pack 4 UPDATE.EXE has been modified to include new switches. They
	are as follows:
	
	  /f   Unattended install, forcing applications to close (overrides /u)
	  /u   Unattended install, do not force applications to close
	  /x   Wait for SETUP to complete before exiting UPDATE
	
	Administrator privileges are required to run UPDATE.EXE. It is possible to run
	UPDATE.EXE using AT.EXE and a user account on the system with administrator
	privileges.
	
	
	NOTE: After you apply Service Pack 4 (SP4), you cannot go back to the previous
	version or Service Pack because SP4 makes several changes to the registry and
	the SAM database. Therefore, it is strongly recommended that you have a working
	backup of the Windows NT system directory and registry before you apply SP4.
	
	Compaq Computers
	----------------
	
	If you have Compaq SSD version 1.15 (or earlier) already installed, you may
	encounter problems after you apply Windows NT 3.51 Service Pack 4. To correct or
	prevent this problem, apply the latest Compaq SSD before you run the Service
	Pack 4 UPDATE.EXE.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbPCM smssetup smspcm 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
