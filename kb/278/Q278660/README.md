---
layout: page
title: "Q278660: SMS: SMSCliToknAcct May Be Locked Out"
permalink: /kb/278/Q278660/
---

## Q278660: SMS: SMSCliToknAcct May Be Locked Out

	Article: Q278660
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbClient kbConfig kbSecurity kbServer kbsms200 kbNetMon kbNetTrace
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Client User Token account (SMSCliToknAcct&) may be locked out of your
	domain.
	
	CAUSE
	=====
	
	This issue can occur if the Systems Management Server (SMS) client workstation
	contains certain third-party drivers. This issue is not caused by SMS; instead,
	this issue is caused by drivers that attempt to access resources across the
	network. These drivers attempt to locate files on the local computer. If the
	files cannot be found, the drivers continue to search the location that the
	system path variable points to. If the system path contains references to any
	network locations, these locations are searched as well.
	
	This issue can also occur if an account lockout policy is enabled in the domain.
	In this case, the <Domain>\SMSCliToknAcct& account is locked out
	because the local and domain accounts have different passwords.
	
	WORKAROUND
	==========
	
	To work around this issue, capture network traffic, frames, or packets to
	determine which files the drivers are attempting to locate. You can also use
	Network Monitor to perform a trace. For additional information about how to use
	Network Monitor, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	  Q232247 Using Network Monitor to Capture Traffic Using a Remote Agent
	
	MORE INFORMATION
	================
	
	The following audio drivers have been reported to cause this issue:
	
	- Crystal Audio
	
	- Yamaha
	
	- Creative
	
	- ESS
	
	NOTE: Not all versions of these drivers exhibit this issue.
	
	For additional information about how audio drivers are used with the
	SMSCliToknAcct account, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q248880 SMS: SMSCliToknAcct Account Accesses Network from Computers with
	  Compaq's Auddrive.sys Driver Installed
	
	You can use the SMSCliToknAcct& account to create user tokens on client
	computers. On computers that are not domain controllers, SMS grants permissions
	to this account as they are needed and deletes these permissions immediately
	after they are used. On domain controllers, the permissions for this account
	persist as long as the SMS client services exist in the site. This account is
	used to start installations in several specific situations:
	
	- If the "Run with administrative rights" option is enabled for a program that
	  is not also configured to use the Microsoft Windows NT 4.0 client software
	  installation account.
	
	- If the program is set to run even if the user is not logged on and the
	  program is not configured to use the Windows NT client software installation
	  account.
	
	- If the program is set to run only when users are not logged on and the
	  program is not configured to use the Windows NT client software installation
	  account.
	
	
	Additional query words: netmon prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbClient kbConfig kbSecurity kbServer kbsms200 kbNetMon kbNetTrace 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
