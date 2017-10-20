---
layout: page
title: "Q199248: SMS: Limited Support for Dual Boot Clients"
permalink: /kb/199/Q199248/
---

## Q199248: SMS: Limited Support for Dual Boot Clients

{% raw %}

	Article: Q199248
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200
	Last Modified: 18-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dual boot support in System Management Server 2.0 is limited to computer that
	have a System Management Server role of client. This is supported only on 32-bit
	Windows clients, that is, Windows 95, Windows 98, and Windows NT, or multiple
	instances of Windows NT. The default location for the MS\SMS tree will be under
	%Windir%.
	
	MORE INFORMATION
	================
	
	The same System Management Server unique identifier (ID) is used for all
	operating system instances on a computer. System Management Server scans the
	hard disk to determine whether another installation of System Management Server
	2.0 exists. If it does, the same unique ID is used and the computer appears only
	once in the database.
	When distributing software to this machine, each operating system instance
	attempts to process the advertisement. This can be limited by changing the
	package properties to support only Windows 95, Windows 98, or Windows NT. Note
	that a specific instance of Windows NT on a computer cannot be targeted.
	If all instances run the advertisement the next time they are started, the status
	is reported without any detail about which instance ran the program.
	
	Additional query words: sms20 setup prodsms
	
	======================================================================
	Keywords          : kbsetup kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
