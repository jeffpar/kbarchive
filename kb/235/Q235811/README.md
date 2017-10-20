---
layout: page
title: "Q235811: Using the SMS Windows NT Client Software Installation Account"
permalink: /kb/235/Q235811/
---

## Q235811: Using the SMS Windows NT Client Software Installation Account

{% raw %}

	Article: Q235811
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbSoftwareDist
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Advertised Programs Manager uses the Systems Management Server Windows NT
	Client Software Installation account to support advertised programs on Windows
	NT clients that require a special security context. Use this account when the
	advertised program meets all three of these conditions:
	
	- The installation is unattended.
	
	- The program must use network resources other than the distribution point from
	  which it was run.
	
	- The program is not an application coded to use Systems Management Server or
	  other explicit connection mechanisms.
	
	You must create the Systems Management Server Windows NT Client Software
	Installation account manually. Because this account will be used to gain access
	to network resources required by the programs that are part of a package, you
	should do the following:
	
	1. Create the account as a domain account.
	
	2. Give the account the rights needed to access the required network resources.
	
	A minor change was made in Systems Management Server version 2.0 Service Pack 1
	to the Program Environment tab in Program Properties. It clarifies the
	requirements and functionality available with the Windows NT Software
	Installation Account.
	
	MORE INFORMATION
	================
	
	Under Packages, choose an individual Package, then look at Programs. Click the
	Environment tab under an individual Program Properties dialog.
	
	Note the following changes:
	
	The options for using user input and administrative rights required are now
	grouped under a section called Run Mode and organized to reflect the following:
	
	- The ability to Run with user's rights or Run with administrative rights are
	  mutually exclusive, using option buttons instead of check boxes.
	
	- Provided the Program can run: option is set to Whether or not a user is
	  logged on or Only when no user is logged on, when you select Run with
	  administrative rights, you can also click to check a subordinate box to
	  specify that the Windows NT client software installation account be used.
	
	When the option to use the Windows NT client Software Installation account is
	selected, the specified program will be run under the context of that account,
	also using it to connect to required network resources.
	
	STATUS
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0. This problem has been corrected in the latest U.S. service pack for Systems
	Management Server version 2.0. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	REFERENCES
	==========
	
	For more information regarding usage and configuration of the Windows NT
	Software Installation Account, see the Systems Management Server 2.0
	Administrator's Guide and online help.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
