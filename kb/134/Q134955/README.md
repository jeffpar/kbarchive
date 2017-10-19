---
layout: page
title: "Q134955: SETUP.EXE Not Installed During Network Monitor Installation"
permalink: /kb/134/Q134955/
---

## Q134955: SETUP.EXE Not Installed During Network Monitor Installation

	Article: Q134955
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smsnetmon smssetup kbNetworkMon
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	During the installation of Network Monitor from the Systems Management Server CD,
	an icon is created for Systems Management Server Setup. The icon does not run
	anything.
	
	CAUSE
	=====
	
	The Systems Management Server Setup icon references the following command line:
	
	  <drive>:\SMSadmin\SITE.SRV\X86.BIN\SETUP.EXE
	
	where <drive> indicates the drive letter of the drive Network Monitor is
	installed on. SETUP.EXE is not copied into this directory during setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: netmon prodsms sms
	
	======================================================================
	Keywords          : kbsetup smsnetmon smssetup kbNetworkMon 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
