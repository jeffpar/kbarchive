---
layout: page
title: "Q279752: SMS: Sms.ini File Is Missing Site Code and Domain Information"
permalink: /kb/279/Q279752/
---

## Q279752: SMS: Sms.ini File Is Missing Site Code and Domain Information

	Article: Q279752
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3,1.2 SP4
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbServer kbsms120 kbsms120bug kbAudit kbInventory kbMaintMan kbPackag
	Last Modified: 12-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP3, 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a secondary site with Systems Management Server (SMS) 1.2
	Service Pack 3 or Service Pack 4, the following fields may be blank in the
	Sms.ini file of the site and any new clients:
	
	- Site
	
	- Domain
	
	- CurrentLogonServer
	
	- Server1
	
	Because of this, Audit packages may not work as the site and domain entries are
	evaluated during the audit. However, the Domain.ini file on the site and the
	Sms.new file on the client contain the correct information.
	
	CAUSE
	=====
	
	This problem can be caused when the client does not populate the SITE and DOMAIN
	entries in the Sms.ini file.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	1. Manually stop and then restart the SMS_INVENTORY_AGENT_NT Service of the
	  secondary site server.
	
	2. While you are logged on locally to the secondary site server, map a drive
	  letter to a logon server, and then run Upgrade.bat.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms smsinventory
	
	======================================================================
	Keywords          : kbClient kbConfig kbServer kbsms120 kbsms120bug kbAudit kbInventory kbMaintMan kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS120SP3 kbSMS120SP4
	Version           : :1.2 SP3,1.2 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
