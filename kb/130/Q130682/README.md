---
layout: page
title: "Q130682: SMS: Automating Installations of Windows for Workgroups 3.11"
permalink: /kb/130/Q130682/
---

## Q130682: SMS: Automating Installations of Windows for Workgroups 3.11

	Article: Q130682
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In the current release of Systems Management Server, you must hand-tailor the
	Windows for Workgroups setup script file (SETUP.SHH) for each type of network
	card and protocol configuration used on network clients. A separate SETUP.SHH
	has to be created for each configuration.
	
	To ensure that the correct setup script file is used, the administrator must
	first query for all computers with a specified network card configured a
	specific way (common I/O address, IRQ setting, memory window location) and copy
	these computers to a machine group. The package must be created and the file
	SETUP.SHH must be replaced on each distribution server in order for the
	automated setup routine to configure Windows for Workgroups correctly on the
	target computers. Computers with net card configurations that do not meet the
	general standards used within an organization cannot be upgraded easily.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
