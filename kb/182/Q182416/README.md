---
layout: page
title: "Q182416: SMS: SMS Version 1.2 SP3 GETDISK Reports Two Floppy Disk Drives"
permalink: /kb/182/Q182416/
---

## Q182416: SMS: SMS Version 1.2 SP3 GETDISK Reports Two Floppy Disk Drives

	Article: Q182416
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Service Pack 3 (SP3) for Systems Management Server 1.2, all
	Microsoft Windows for Workgroup and Microsoft Windows 95 clients report a floppy
	disk drive B in the inventory even if computers have only one floppy disk drive
	(drive A).
	
	This drive is added in the "Disks" icon property without information about the
	size of the floppy disk drive (3.5" 1.44 MB for example) in the Storage Type
	list.
	
	This problem did not occur prior to Systems Management Server 1.2 Service Pack 3.
	
	WORKAROUND
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. To resolve this problem immediately, contact
	Microsoft Technical Support to obtain the fix. If you are not severely impacted
	by this specific problem, Microsoft recommends that you wait for the next
	Systems Management Server service pack that contains this fix.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix should have the following file attributes:
	
	  Date     Time    Size    File Name    Platform
	  ----------------------------------------------
	  5/15/98  2:10am  18KB    GETDISK.EXE  Intel
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the SMS Site Server:
	
	1. In the <SMS_root_directory>\Site.srv\maincfg.box\client.src\x86.bin
	  directory on the site server, replace the Getdisk.exe file with the version
	  obtained from the hotfix.
	
	2. That file will replicated at the next Maintenance Manager work cycle to all
	  SMS Logon Servers to the following directory:
	
	  SMS\Logon.srv\X86.bin
	
	  When that occurs the clients may be updated.
	
	To update the clients, either manually run Upgrade.bat on each client or follow
	the instructions in the following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
