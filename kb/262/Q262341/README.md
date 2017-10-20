---
layout: page
title: "Q262341: SMS: SMSClitoknAcct&amp; Account Lockout When HINV Is Run"
permalink: /kb/262/Q262341/
---

## Q262341: SMS: SMSClitoknAcct&amp; Account Lockout When HINV Is Run

{% raw %}

	Article: Q262341
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200 kbsms200bug kbsms200fix kbsms120 kbsms120bug kbInventory smsinst kbs
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) 2.0 Service Pack 1 (SP1) Windows NT clients may
	use the SMSClitoknAcct& account to make network calls during hardware
	inventory. This behavior occurs if mapped drives are in the system PATH and the
	IBM 100/10 EtherJet PCI adapter driver is installed.
	
	If you disable enumeration of all hardware classes in the SMS_def.mof file, the
	problem still occurs.
	
	CAUSE
	=====
	
	Hardware inventory runs under the local SMSCliToknAcct& user account, and
	calls into Windows Management Instrumentation (WMI) under this context. WMI then
	uses this account to authenticate any calls it needs to make off the computer.
	Because this account exists on all Windows NT SMS clients and has a unique
	password on each computer, these network calls cause the account to be locked
	out if lockout is enabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this issue, use either of the following methods:
	
	- Swap the IBM 100/10 EtherJet PCI adapter with a new card and driver.
	
	- Remove the network drive from the system PATH.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsms200 kbsms200bug kbsms200fix kbsms120 kbsms120bug kbInventory smsinst kbsms200preSP2fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
