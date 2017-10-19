---
layout: page
title: "Q122383: Problems Running SMS w/Non-English Versions of Windows NT"
permalink: /kb/122/Q122383/
---

## Q122383: Problems Running SMS w/Non-English Versions of Windows NT

	Article: Q122383
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Systems Management Server version 1.0 with a non-English
	version of Windows NT, one or both of the following problems may occur:
	
	- Site Configuration Manager cannot set any directory permissions.
	
	- Despooler fails on any package because the directory permissions cannot be
	  set.
	
	RESOLUTION
	==========
	
	To allow SMS to work with non-English versions of Windows NT Server, the
	following procedure is recommended in User Manager:
	
	1. Duplicate the non-English local Administrators group to "Administrators" in
	  English.
	
	2. Duplicate the non-English local Guests group as the "Guests" group in
	  English.
	
	3. Duplicate the non-English local Users group as the "Users" group in English.
	
	4. Duplicate the non-English local Users group as the "Everyone" group in
	  English and add the global Domain Guests group to it.
	
	5. Restart Windows NT.
	
	Additional query words: config sms prodsms umd
	
	======================================================================
	Keywords          : kbnetwork kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
