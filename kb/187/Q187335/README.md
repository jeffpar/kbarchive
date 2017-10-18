---
layout: page
title: "Q187335: SMS: Clients Not Re-mapped After DOMAIN:SITECODE Change"
permalink: kb/187/Q187335/
---

## Q187335: SMS: Clients Not Re-mapped After DOMAIN:SITECODE Change

	Article: Q187335
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Smsls.ini file is used to map Systems Management Server clients to a
	specific site in a common Windows NT domain, the client does not get remapped to
	a different Systems Management Server logon server if the sitecode is changed in
	the Smsls.ini.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem do one of the following:
	
	- Delete the following from the Sms.ini file:
	
	        The SiteCode= line from the [SMS] section
	
	  -and-
	
	        The entire [SMSLSini] section
	
	  -or-
	
	- Contact Microsoft Technical Support to obtain the following fix, or wait for
	  the next Systems Management Server service pack.
	
	  The fix should have the following timestamp:
	
	     4/2/98      1:26pm        175,288 Setls16.exe (Intel)
	     4/2/98      1:26pm         93,152 Setls32.exe (Intel)
	     4/2/98      1:26pm        184,592 Setls32.exe (Alpha)
	
	Additional query words: prodsms Setls
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
