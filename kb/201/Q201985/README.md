---
layout: page
title: "Q201985: SMS: Unattended Windows NT Upgrades Need Network Card Settings"
permalink: /kb/201/Q201985/
---

## Q201985: SMS: Unattended Windows NT Upgrades Need Network Card Settings

{% raw %}

	Article: Q201985
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbsms kbsms200 kbsms200bug kbsms100 kbsms110 kbsms120 kbAdvertisement
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 1.2 SP1, 1.2 SP2, 1.2 SP3, 1.2 SP4, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server 2.0 has the ability to upgrade an operating
	system on any client computer just as if it were installing program software
	locally to the computer.
	
	One caveat to this statement is that when you are upgrading 16-bit operating
	systems such as Microsoft Windows 3.1 or Microsoft Windows for Workgroups to
	Microsoft Windows NT, the administrator is responsible for specifying the
	network adapter settings during the setup process.
	
	This Windows NT requirement may limit Systems Management Server's ability to
	perform an unattended installation. The administrator must specify the interrupt
	request line (IRQ) and port address of the network adapter during Windows NT
	setup.
	
	MORE INFORMATION
	================
	
	This behavior is generally an issue only when Systems Management Server is used
	to upgrade 16-bit operating systems such as MS-DOS or Windows 3.x to Windows NT.
	When you are upgrading Microsoft Windows 95 or earlier versions of the Windows
	NT operating system to Windows NT, the settings are correctly ported over to the
	new operating system.
	
	NOTE: Be sure, when you create any customized scripts for upgrading Windows 3.x
	to Windows NT, that they include specific network adapter setup information. For
	details on customizing unattended upgrades, refer to the Windows NT Resource
	Guide.
	
	Additional query words: prodsms swdist32
	
	======================================================================
	Keywords          : kbsetup kbClient kbsms kbsms200 kbsms200bug kbsms100 kbsms110 kbsms120 kbAdvertisement kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200 kbSMS120SP2 kbSMS120SP3 kbSMS120SP4 kbSMS200SP1 kbSMS200SP2 kbSMS120SP1
	Version           : :1.0,1.1,1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4,2.0,2.0 SP1,2.0 SP2
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
