---
layout: page
title: "Q235729: SMS: Silent Unattended Setup for SMS 2.0 Service Packs"
permalink: /kb/235/Q235729/
---

## Q235729: SMS: Silent Unattended Setup for SMS 2.0 Service Packs

	Article: Q235729
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 has the capability to do silent/unattended
	upgrades of Systems Management Server Service Packs.
	
	To install Service Pack 1 silently, you can run "Setup.exe /Upgrade /NoUserInput"
	from the \SMSSetup\Bin\%platform% directory on the Systems Management Server SP1
	CD.
	
	MORE INFORMATION
	================
	
	NOTE: If you use the /NOUSERINPUT switch, the user won't be presented with any
	dialog boxes. If the Systems Management Server Administrator Console is open on
	the server, the upgrade process will close it for you.
	
	If you do NOT use the /NOUSERINPUT switch and just use /Upgrade, the user will be
	prompted to close down any administrator consoles if open, and the dialog box
	indicating that Systems Management Server Setup has finished will be displayed.
	
	STATUS
	------
	
	Additional query words: prodsms unattended silent upgrade
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
