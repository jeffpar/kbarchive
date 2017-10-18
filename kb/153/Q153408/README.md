---
layout: page
title: "Q153408: Sms.ini Not Updating Server/Share Names"
permalink: kb/153/Q153408/
---

## Q153408: Sms.ini Not Updating Server/Share Names

	Article: Q153408
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetupkbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	During a site or domain change, Invwin32.exe leaves old server names and share
	names in the Sms.ini. This will cause problems for other client components (such
	as PCM and PGC.) The other client components attempt to use one of the old
	server names, assuming they are logon servers for the new site/domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Solution Type     : kbfix
	
	=============================================================================
	
