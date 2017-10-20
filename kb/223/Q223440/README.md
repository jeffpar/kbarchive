---
layout: page
title: "Q223440: Warning Message During Small Business Server Upgrade"
permalink: /kb/223/Q223440/
---

## Q223440: Warning Message During Small Business Server Upgrade

{% raw %}

	Article: Q223440
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbtool
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to upgrade Microsoft Small Business Server (SBS) version 4.0 or
	4.0a to SBS version 4.5, you may receive the following warning message:
	
	  WARNING: The version of Small Business Server you are installing only
	  supports 40-bit encryption. If you continue, the encryption strength
	  available to you will be reduced from 128-bit to 40-bit, and it may not be
	  possible to recover full 128-bit capability. If you do not want your current
	  level of encryption to be changed, you should cancel Setup at this time and
	  run Setup again using a 128-bit version of Small Business Server. Do you wish
	  to continue?
	
	CAUSE
	=====
	
	This issue can occur if you try to upgrade the 128-bit version of SBS to a
	40-bit version of SBS. The warning is to inform you that your 128-bit encryption
	will change to 40-bit encryption if you choose to continue.
	
	RESOLUTION
	==========
	
	To resolve this issue if you want to return to 128-bit encryption, install
	Microsoft Windows NT 4.0 Service Pack 4.
	
	Additional query words: smallbiz bof 4.00
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400 kbBackOfficeServ450
	Version           : winnt:4.0,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
