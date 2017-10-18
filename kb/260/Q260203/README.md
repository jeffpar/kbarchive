---
layout: page
title: "Q260203: SMS: NetWare Client 4.7 Redirector May Cause Problems in Windows"
permalink: kb/260/Q260203/
---

## Q260203: SMS: NetWare Client 4.7 Redirector May Cause Problems in Windows

	Article: Q260203
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Novell NetWare Client version 4.7 for Microsoft Windows NT
	4.0 or Microsoft Windows 2000 on a computer that is running Windows NT or
	Windows 2000, NetWare Client is set as the first default file services
	redirector. In this state, the NetWare Client software may interfere with
	programs that make connections to servers running Windows. This interference may
	cause connection errors or general protection (GP) faults.
	
	CAUSE
	=====
	
	You may encounter the following problems with Systems Management Server (SMS)
	operation on computers running Windows NT or Windows 2000:
	
	Issue 1
	-------
	
	NetWare Client causes a GP fault on SMS clients because the account that starts
	the SMS client processes does not have access to all drives mapped (logical
	disks) on that workstation. This issue can occur in clients running the Hardware
	Inventory Agent when Win32_LogicalDisk is specified for Hardware Inventory
	through SMS_Def.mof. To prevent this issue from occurring, the alternative
	class, SMS_LogicalDisk, is enabled by default in SMS 2.0 Service Pack 2 (SP2).
	
	This issue can also occur if other processes attempt to list all logical disks,
	or when the account that lists the logical disks does not have access to the
	mapped drives.
	
	Issue 2
	-------
	
	NetWare Client opens handles but does not close them properly when SMS makes
	connections to NetWare servers configured as site systems.
	
	Issue 3
	-------
	
	NetWare Client may cause SMS server components to not authenticate to other
	computers running Windows NT or Windows 2000.
	
	For example, communication can be disrupted between the site server and the site
	database servers if they are different computers and the SMS Provider is
	installed on the site database server. Alternately, Standard Sender may not be
	able to communicate to a parent or child site. When this occurs, you receive the
	following error message:
	
	  Attempt to access Invalid Address
	
	WORKAROUND
	==========
	
	To work around these Windows communication issues, change the redirector order.
	
	NOTE: Issues that occur while connecting to NetWare servers remain.
	
	Issue 1
	-------
	
	In SMS_Def.mof, the entry for WIN32_Logical_Disk should be disabled, and the
	entry for SMS_LogicalDisk should be enabled. (This selection is now the default
	for SMS_Def.mof in SMS 2.0 SP2 and later releases.) This workaround prevents
	Hardware Inventory from causing a GP fault, but it does not prevent other
	processes from causing the same GP fault.
	
	Issues 2 and 3
	--------------
	
	Windows NT 4.0:
	
	1. In Control Panel, double-click Networks.
	
	2. Click Services, and then click "Network Access Order".
	
	3. Click Novell NetWare if that entry is listed first, and then click Move Down.
	  (Ensure that Microsoft Windows NT is listed as the first provider in the
	  Network Providers list.)
	
	Windows 2000:
	
	1. On the desktop, right-click My Network Places, and then click Properties.
	
	2. Click the connection you want to modify.
	
	3. On the Advanced menu, click Advanced Settings, and then click the Provider
	  Order tab.
	
	4. In Network Providers, click the NetWare Services network provider, and then
	  click the Down Arrow button. (Ensure that Microsoft Windows Network is listed
	  as the first provider in the Network Providers list.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	For more information about Novell redirector support for SMS 2.0 SP2, see the
	section, "Known Issues Regarding Novell NetWare Client v4.7 for Windows NT/2000"
	in the Systems Management Server 2.0 SP2 Release Notes.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
