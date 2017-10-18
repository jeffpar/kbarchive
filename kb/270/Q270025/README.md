---
layout: page
title: "Q270025: Automatic Dial Settings Are Lost After You Upgrade to ISA Server"
permalink: kb/270/Q270025/
---

## Q270025: Automatic Dial Settings Are Lost After You Upgrade to ISA Server

	Article: Q270025
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbenv kbUpgrade
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Security and Acceleration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer that is running Microsoft Windows 2000 Server with Proxy
	2.0, if you upgrade to Internet Security and Acceleration (ISA) Server, all
	automatic dial settings that you previously configured is lost.
	
	CAUSE
	=====
	
	This issue occurs because ISA Server does not use the automatic dial
	functionality from Proxy 2.0. ISA Server uses dial-up networking configurations
	directly from Windows 2000.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure an automatic dial or demand dial connection for
	ISA Server:
	
	1. Start ISA Server Microsoft Management Console (MMC).
	
	2. Click Policy elements, click "Dial-up entries", and then click New.
	
	The new Dial-Up Entry user interface enables you to create a new connection or
	use an existing dial-up networking connection.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: ppp ras vpn
	
	======================================================================
	Keywords          : kbenv kbUpgrade 
	Technology        : kbAudDeveloper kbISAS2000 kbISAServSearch
	Version           : :2000
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
