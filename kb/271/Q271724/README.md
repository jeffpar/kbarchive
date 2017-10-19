---
layout: page
title: "Q271724: SMS May Time Out Attempting a PDC/BDC Resynchronization"
permalink: /kb/271/Q271724/
---

## Q271724: SMS May Time Out Attempting a PDC/BDC Resynchronization

	Article: Q271724
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Client Setup may not start on a Windows 2000-based domain controller because the
	replication of the SMS#_<DCname> account creation takes longer than 60
	minutes on a large Windows 2000 Active Directory site. The same symptoms occur
	if the replication for the temporary bootstrap account succeeds in time and the
	SMS#_<DCname>client service account is created.
	
	CAUSE
	=====
	
	The SMS#_<DCname> account is created by the CCM thread of the SMS
	Executive service after the thread receives a client configuration request for
	the target system. The Systems Management Server (SMS) Client Configuration
	Manager (CCM) Client Bootstrap is started with this account to start the client
	installation on the domain controller. After startup, the Bootstrap service
	creates the SMS&<DCname> account, which is used by the Client service
	to spawn the client agents in a separate account context.
	
	Both accounts are created only when the SMS client is installed on a domain
	controller and needs the "Logon as a service," "Act as part of the operating
	system," "Create objects," "Increase quotas," and "Shut down system" user
	rights. These rights are assigned after the account creation. The client code
	waits a maximum of 60 minutes for the account replication between the primary
	domain controller (the PDC emulator in Windows 2000 Active Directory) and backup
	domain controller. Because of the architectural changes in Windows 2000, the
	replication may take longer than 60 minutes and the client installation may not
	work on a Windows 2000-based domain controller.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You must configure a time-out value on the primary domain controller (PDC)
	emulator in Windows 2000 Active Directory because the client installation reads
	the value directly from the PDC's registry. You need to insert the registry
	value only on the PDC emulator. To determine which computer is the PDC
	emulator:
	
	1. Start the Active Directory Users and Computers administrative tool.
	
	2. Right-click the domain, and then click Operations Master.
	
	3. The PDC emulator is listed on the PDC tab under Operations Master.
	
	To configure the time-out value, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) on the PDC emulator only.
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Configuration\Domain
	  Controller
	
	3. Add the following value :
	
	  Value name: Account Synchronization Max Wait (minutes)
	  Data type: DWORD
	  Value: 60 is the default; set the value depending on the domain replication
	  interval or use 300 minutes (5 hours) as a start point.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
