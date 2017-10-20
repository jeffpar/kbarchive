---
layout: page
title: "Q198442: XWEB: Chinese CHS and CHT Cannot Exist on Same OWA Server"
permalink: /kb/198/Q198442/
---

## Q198442: XWEB: Chinese CHS and CHT Cannot Exist on Same OWA Server

{% raw %}

	Article: Q198442
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Multiple languages can be installed on a computer running Windows NT Server
	using Outlook Web Access. The exception to this scenario is that Chinese
	Traditional (CHT) and Chinese Simplified (CHS) cannot exist on the same server.
	
	CAUSE
	=====
	
	The registry values that have to be modified to allow the correct character
	interpretations and code pages are contained in the same location for both
	language versions.
	
	These values are contained in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\MSExchangeWEB\ 
	  AcceptLanguage
	
	NOTE: The above registry key is one line; it has been wrapped for readability.
	
	RESOLUTION
	==========
	
	Separate servers must be used to install the language packs for CHT and CHS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
