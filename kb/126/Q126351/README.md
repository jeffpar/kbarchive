---
layout: page
title: "Q126351: Different Language Site Reporting Not Supported in SMS"
permalink: /kb/126/Q126351/
---

## Q126351: Different Language Site Reporting Not Supported in SMS

	Article: Q126351
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot report from one site to another using different language versions of
	Systems Management Server version 1.0. For example, a German SMS site cannot
	report to a parent French SMS site.
	
	CAUSE
	=====
	
	Language strings are localized and cannot be accurately converted by the
	receiving site. Converting the language strings (used in packages, comments,
	events, etc.) requires single-byte to multi-byte conversion.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the site hierarchies as follows:
	
	1. Use the same language version of SMS.
	
	2. Configure the code-page and country settings to appropriate languages.
	
	NOTE: In this situation, all needed event codes, error codes, etc., required by
	the system, are presented in a consistent way without any conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms hierarchy
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
