---
layout: page
title: "Q192487: SMS: Logon Discovery May Not Find Windows NT Domain Controllers"
permalink: kb/192/Q192487/
---

## Q192487: SMS: Logon Discovery May Not Find Windows NT Domain Controllers

	Article: Q192487
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Microsoft Systems Management Server version 2.0 environment, all Windows NT
	Server computers may not become Systems Management Server Logon Points.
	
	The Systems Management Server 2.0 Logon Server Manager relies on the Windows NT
	Master Browser to find Domain Controllers for Logon Discovery. This is an
	intermittent problem that is dependant upon how up to date the Master Browser
	list is when Logon Discovery takes place.
	
	MORE INFORMATION
	================
	
	If there is an open connection to the computer that needs to be a Logon Point,
	then the computer will be in the Master Browser list. It will then be installed
	the next time Logon Server Manager polls the domain.
	
	This may account for Logon Points not being discovered and installed in some
	instances.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : :1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
