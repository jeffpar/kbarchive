---
layout: page
title: "Q235766: SMS: Admin Console Installation Causes Dr. Watson"
permalink: /kb/235/Q235766/
---

## Q235766: SMS: Admin Console Installation Causes Dr. Watson

	Article: Q235766
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Since Microsoft's Systems Management Server version 2.0 is a network management
	application, there is a need to be able to install an Administrator's Console on
	various Windows NT computers throughout the organization.
	
	If the CD-ROM is not available and you attempt to install Systems Management
	Server Administrator Console from the x:\SMS\Bin\i386 directory on the site
	server, the following Dr. Watson may be generated:
	
	  An application error has occurred and an application error log is being
	  generated.
	  unknown
	  Exception access violation (0xc0000005), Address 0x004d79ea
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0. This problem has been corrected in the latest U.S. service pack for Systems
	Management Server version 2.0. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	NOTE: This fix prevents Dr. Watson error messages to be generated when using
	Setup.exe from the x:\SMS\Bin\i386 directory on the site server. You should not
	use Setup.exe from this location to install the Systems Management Server
	Administrator console. Use the Systems Management Server CD to install a remote
	Systems Management Server Administrator console.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
