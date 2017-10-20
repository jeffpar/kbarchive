---
layout: page
title: "Q302729: &quot;We were unable to sign you in&quot; Error When Protocols Are Not Ena"
permalink: /kb/302/Q302729/
---

## Q302729: &quot;We were unable to sign you in&quot; Error When Protocols Are Not Ena

{% raw %}

	Article: Q302729
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to sign in to MSN Explorer 6.1. MSN Explorer attempts to sign in
	five times, and then returns an error message stating "We were not able to sign
	you in. There may be a problem with our service or your Internet connection.
	Please try again later."
	
	CAUSE
	=====
	
	Protocols are not enabled on the machine.
	
	RESOLUTION
	==========
	
	To allow MSN Explorer to function, at least one of the following security
	protocols must be enabled: PCT 1.0, SSL 2.0 or 3.0, or TLS 1.0.
	To enable a protocol
	
	1. Click Start, point to Settings, and then Control Panel.
	
	2. Double-click the Internet Options icon.
	  Note: For Windows Millenium and Windows 2000, you may have to click the
	  Display all Control Panel options link in Control Panel to view the Internet
	  Options icon.
	
	3. At the top of the Internet Properties window, click the Advanced tab.
	
	4. Scroll through the list of options until you find the section labeled
	  Security.
	
	5. Select at least one of the following boxes:
	   - PCT 1.0
	
	   - SSL 2.0
	
	   - SSL 3.0
	
	   - TLS 1.0
	
	6. Click the Apply button at the bottom of the screen, and then click the OK
	  button.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610 kbMSNExplorer
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
