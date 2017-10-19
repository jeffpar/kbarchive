---
layout: page
title: "Q137358: Client Upgrade from U.S. to German SMS needs Repeated Upgrade"
permalink: /kb/137/Q137358/
---

## Q137358: Client Upgrade from U.S. to German SMS needs Repeated Upgrade

	Article: Q137358
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you load U.S. Systems Management Server on a German version of the Windows 95
	client and the German client is added to the server, the upgrade of the client
	downloads the German files, but SMSRUN16.INI does not get converted to German.
	Only after a second upgrade does the SMSRUN16.INI get upgraded to German.
	
	CAUSE
	=====
	
	The szLangPath variable in CLISETUP is not being reset after the new language
	code was determined during the upgrade.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	
	=============================================================================
	
