---
layout: page
title: "Q133387: SETLS16 Fails to Enumerate a Domain Using SMSLS.INI"
permalink: /kb/133/Q133387/
---

## Q133387: SETLS16 Fails to Enumerate a Domain Using SMSLS.INI

	Article: Q133387
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SETLS16 may fail to perform the domain to domain mapping in the SMSLS.INI file.
	This can happen in two cases.
	
	- SETLS16 is unable to find the primary domain controller for the domain the
	  client is being mapped to, and the call it made to do so returns the
	  following error:
	
	  a list of servers for this workgroup is currently unavailable
	
	- The domain name is lowercase in the SMSLS.INI file.
	
	  To work around this problem, make sure the domain names are in upper case
	  letters in the [domain section] section of the SMSLS.INI file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms sms windows for workgroups inventory
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
