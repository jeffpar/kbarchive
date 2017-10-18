---
layout: page
title: "Q134956: Logon Script Not Removed After Domain Is Removed From Site"
permalink: kb/134/Q134956/
---

## Q134956: Logon Script Not Removed After Domain Is Removed From Site

	Article: Q134956
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a Windows NT domain is added to a Systems Management Server site, there is
	an option to configure the logon script of each user account to run SMSLS.BAT.
	If the user account did not contain a logon script prior to this action, it
	receives the SMSLS logon script. User accounts configured for a logon script
	prior to this action will have their logon script files modified with a
	reference to SMSLS.BAT.
	
	If the Windows NT domain is removed from the site, the SMSLS.BAT file is removed
	from %SYSTEMROOT%>\SYSTEM32\REPL\IMPORT\SCRIPTS directory. However, the
	references to SMSLS are not removed from the domain user account profiles.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the domain user account profiles using User
	Manage for Domains to remove the reference to SMSLS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
