---
layout: page
title: "Q181081: SMS: ScanDisk Runs After a Remote Reboot of a Win95 OSR2 Client"
permalink: /kb/181/Q181081/
---

## Q181081: SMS: ScanDisk Runs After a Remote Reboot of a Win95 OSR2 Client

	Article: Q181081
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProgkbbuglist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Remote Reboot feature of Systems Management Server on a client
	computer running Windows 95 OEM Service Release 2 (OSR2), the following message
	is displayed during the restart:
	
	  Windows was not properly shut down. One or more of your disk drives may have
	  errors on it. Press any key to run ScanDisk on these drives.
	
	CAUSE
	=====
	
	Remote Reboot issues a CPU reset instruction, not a graceful shutdown.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. This problem has been corrected in the latest U.S. service
	pack for Systems Management Server version 1.2. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Open the Msdos.sys file and add the following line to the [Options] section:
	
	        Autoscan=0
	
	  NOTE: This method completely disables the OSR2 Autoscan feature. The kernel
	  does not check the Clean Shutdown and Hard Disk Error bits, and ScanDisk is
	  not started.
	
	- Obtain the hotfix mentioned in STATUS section below. This fix should have the
	  following timestamp:
	
	     2/9/98   10:05am         144,896    Idisp16.dll
	
	- Wait for the next Systems Management Server service pack.
	
	
	MORE INFORMATION
	================
	
	Windows 95 OSR2 includes versions of the Io.sys and Win.com files that check the
	Clean Shutdown and Hard Disk Error bits in the Virtual File Allocation Table
	(VFAT) during startup. If either of these bits is enabled (that is, cleared to
	0) on any drive present in real mode, you are prompted to run ScanDisk. If you
	do not press a key within 60 seconds, ScanDisk runs anyway.
	
	Additional query words: prodsms osr windows95 win95 win original equipment manufacturer
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg kbbuglist
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
