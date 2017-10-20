---
layout: page
title: "Q173960: Create Renewal Request Option Grayed Out in Key Manager"
permalink: /kb/173/Q173960/
---

## Q173960: Create Renewal Request Option Grayed Out in Key Manager

{% raw %}

	Article: Q173960
	Product(s): Internet Information Server
	Version(s): WinNT:1.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Create Renewal Request option is always grayed out in Key Manager. This
	option is found when you highlight the certificate, and then click Key.
	
	CAUSE
	=====
	
	The Create Renewal Request option is found grayed out in three different
	scenarios:
	
	- If the certificate is valid and not yet expired.
	
	- If the certificate will expire within ten days. The status message will also
	  indicate, "It will Expire soon."
	
	- If the certificate has already expired. The status message will also
	  indicate, "This key has expired."
	
	This condition will be found in all certificates that are created in Internet
	Information Server (IIS) 1.0, even if the certificate is moved to an IIS version
	2.0 or higher system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbui 
	Technology        : kbiisSearch kbiis100
	Version           : WinNT:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
