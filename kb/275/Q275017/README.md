---
layout: page
title: "Q275017: Misspelled &quot;Microsoft Corporatoin&quot; Is Listed as Manufactucturer"
permalink: /kb/275/Q275017/
---

## Q275017: Misspelled &quot;Microsoft Corporatoin&quot; Is Listed as Manufactucturer

	Article: Q275017
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 07-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you review a software inventory in Resource Explorer for Microsoft Windows
	98-based or Microsoft Windows Millennium Edition-based (Me) clients, you observe
	that "Microsoft Corporation" is listed as a manufacturer.
	
	CAUSE
	=====
	
	This behavior can occur because the Locproxy.exe file which collects the
	software inventory information from Windows 98-based and Windows Me-based
	clients, has the header information misspelled. The Company Name property in the
	header lists "Microsoft Corporation" instead of "Microsoft Corporation."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
