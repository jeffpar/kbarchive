---
layout: page
title: "Q300399: Countries Missing from List in the IIS Certificate Wizard"
permalink: /kb/300/Q300399/
---

## Q300399: Countries Missing from List in the IIS Certificate Wizard

{% raw %}

	Article: Q300399
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP3Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Geographical Information in the IIS Certificate Wizard, the entries for
	Cayman Islands (KY), Grenada (GD), and San Marino (SM) are missing.
	
	RESOLUTION
	==========
	
	To work around this problem, use a different tool (such as the Web client that
	is installed with Certificate Services) for the enrollment process.
	
	IMPORTANT: Make sure that you select Allow Private Key to be exported.
	
	After the keyset is bound to the certificate, it can be exported as a Personal
	Information Exchange (.pfx) file (PKCS#12) and imported on the Web server using
	the certificate snap-in.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services 5.0.
	
	This problem is scheduled to be fixed in Windows 2000 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP3Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
