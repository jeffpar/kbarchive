---
layout: page
title: "Q303748: PRB: Express Purchase hangs with &quot;Loading, please wait...&quot;"
permalink: /kb/303/Q303748/
---

## Q303748: PRB: Express Purchase hangs with &quot;Loading, please wait...&quot;

{% raw %}

	Article: Q303748
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you click the Express Purchase button on a production site using Microsoft
	Internet Explorer 5.5, "Loading, please wait", appears in all text areas, and
	Internet Explorer "hangs", or stops responding, on this page.
	
	CAUSE
	=====
	
	Active Scripting is turned off in the security settings of the browser.
	
	RESOLUTION
	==========
	
	To turn on Active Scripting, follow these steps:
	
	1. On the Tools menu in Internet Explorer, click Internet Options.
	
	2. Click the Security tab, and then click Custom Level.
	
	3. Under Scripting, click Enable under Active scripting
	
	Additional query words: Wallet
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassport200 kbPassportSearch
	Version           : :1.3,1.4,1.99,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
