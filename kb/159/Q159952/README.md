---
layout: page
title: "Q159952: SMS: &quot;Please Insert Diskette in Drive&quot; Message"
permalink: /kb/159/Q159952/
---

## Q159952: SMS: &quot;Please Insert Diskette in Drive&quot; Message

{% raw %}

	Article: Q159952
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,1.2 SP1,1.2 SP2,1.2 SP3,95
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfaq kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP1, 1.2 SP2, 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client computers running Windows for Workgroups or Windows 95 may receive a
	"Please insert diskette in drive X:" message (where X is the drive letter) at 17
	percent of the hardware inventory. The message appears after you have applied
	Systems Management Server Service Pack 1, 2, or 3.
	
	CAUSE
	=====
	
	This is a software regression in the Systems Management Server inventory
	component Getdisk.exe.
	
	Getdisk.exe was modified to resolve an issue with inventory collection on MS-DOS
	clients with removable cartridge drives installed, such as the Iomega Zip drive.
	This modification affected Getdisk.exe code to handle MS-DOS clients with one
	floppy disk drive that also impersonate drive B.
	
	WORKAROUND
	==========
	
	To work around this problem, use the original Systems Management Server 1.2
	version of Getdisk.exe. To do this, perform the following steps:
	
	1. Retrieve Getdisk.ex_ from the Systems Management Server 1.2 compact disc and
	  rename the file to Getdisk.exe (it is not compressed).
	
	2. Copy Getdisk.exe to the Sms\Site.srv\Maincfg.box\Client.src\X86.bin directory
	  on the computer running Systems Management Server. Getdisk.exe will be
	  replicated to your logon servers from this directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2 Service Packs 1, 2 and 3.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: prodsms err msg errmsg SP1 SP2 SP win95 removeable GETDISK.EXE
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfaq kbfixlist
	Technology        : kbSMSSearch kbSMS120 kbSMS120SP2 kbSMS120SP3 kbSMS120SP1
	Version           : :1.2,1.2 SP1,1.2 SP2,1.2 SP3,95
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
