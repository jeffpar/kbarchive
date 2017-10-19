---
layout: page
title: "Q153565: Sender Manager Only Accepts UPPERCASE Site Server Names"
permalink: /kb/153/Q153565/
---

## Q153565: Sender Manager Only Accepts UPPERCASE Site Server Names

	Article: Q153565
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsUtil smsgeneral smsutil kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you start Sender Manager, the Site Server dialog box prompts for a site
	server name. When you enter the site server name, the application capitalizes
	the text.
	
	Sender Manager then looks for the uppercase name in the registry of the site
	server (SMS\Identification\Site Server). If the site server name is stored in
	lowercase, it reports that there is no match.
	
	CAUSE
	=====
	
	Although Sender Manager capitalizes the text, the case of the name does not
	match the actual registry entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sender manager servername
	
	======================================================================
	Keywords          : kbnetwork kbsmsUtil smsgeneral smsutil kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
