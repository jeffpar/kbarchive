---
layout: page
title: "Q248362: SMS: Windows 95/98 Client Hangs During Hardware Inventory"
permalink: /kb/248/Q248362/
---

## Q248362: SMS: Windows 95/98 Client Hangs During Hardware Inventory

	Article: Q248362
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200 kbsms200bug kbInventory kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A client that is running Microsoft Windows 95 or Microsoft Windows 98 may seem
	to stop responding (hang) for up to two minutes. This behavior occurs only on
	some portable computers on which the floppy disk drive is not connected to the
	computer during hardware inventory.
	
	CAUSE
	=====
	
	During Systems Management Server (SMS) hardware inventory, the Win32_Logicaldisk
	WMI class is enumerated to return logical disk information for removable disk
	drives, CD-ROM drives, hard disks, and connected network drives. On some types
	of portable computers, you can remove the floppy disk drive, but the computer's
	BIOS still registers (or "spoofs") its existence. In Windows 95/Windows 98, the
	floppy disk drive icon still appears in My Computer when no device is actually
	attached. Opening the disk drive icon also causes the symptom described in this
	article to occur until the device times out.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, disable the enumeration of the Win32_LogicalDisk
	class in the Sms_def.mof file for the site. For information about how to do
	this, see chapter 10 of the Microsoft Systems Management Server Administrator's
	Guide.
	
	NOTE: If you have applied the hotfix that is described in the following Microsoft
	Knowledge Base article, the Win32_LogicalDisk class has been replaced by
	SMS_LogicalDisk:
	
	  Q232653 SMSCliToknAcct Locked Out When Hardware Inventory Is Enabled
	
	Follow the same steps as described in chapter 10 of the Administrator's Guide to
	disabled enumeration of the SMS_LogicalDisk class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	This issue can occur on certain portable computer models that contain removable
	floppy disk drives. Portable computers that are known to exhibit this behavior
	include:
	
	- Hewlett-Packard OmniBook 3000
	- Toshiba 700 Series
	
	Any portable computer that "spoofs" the existence of a removed floppy disk drive
	is liable to exhibit the same behavior.
	
	NOTE: This hotfix is dependent on the installation of either of the SMS 2.0
	hotfixes described in the following Microsoft Knowledge Base articles:
	
	  Q232653 SMSCliToknAcct Locked Out When Hardware Inventory Is Enabled
	
	  Q246527 Systems Management Server 2.0 Service Pack 1 Client Hotfix
	
	Hotfix Installation
	-------------------
	
	To install the hotfix, use the appropriate method on the Systems Management
	Server site server.
	
	Using the SMS Hotfix Installer:
	
	NOTE: You can use this method only on Intel platform site servers
	
	1. Copy the hotfix folder structure to a share on your network (for example, the
	  Q248362.exe file is located in a root folder with I386 and Alpha subfolders).
	  Q248362.exe is a Microsoft Windows Installer file that updates specific files
	  on your site server.
	
	2. Log on to your site server by using an account with administrative
	  privileges.
	
	3. Run Q248362.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Manual Installation:
	
	1. Stop all SMS services.
	
	2. Copy the updated Inhinv32.exe file to the
	  SMS\Inboxes\Clicomp.src\Hinv\<Platform> folder to replace the existing
	  file for that platform.
	
	3. Copy Compver1098.ini file from the platform folder to the
	  SMS\Inboxes\Clicomp.src\Hinv folder, renaming it to Compver.ini. This
	  replaces the existing Compver.ini file.
	
	4. Restart all SMS services.
	
	Additional query words: prodsms hinv32
	
	======================================================================
	Keywords          : kbWBEM kbsms200 kbsms200bug kbInventory kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
