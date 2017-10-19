---
layout: page
title: "Q242595: English Locale Appears when Japanese Language Pack Installed"
permalink: /kb/242/Q242595/
---

## Q242595: English Locale Appears when Japanese Language Pack Installed

	Article: Q242595
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Japanese language pack is installed and Japanese is set as the local
	and default system locale, the Server Side Include <!-- #echo
	var="DATE_LOCAL" --> reflects an English locale.
	
	For Example: Tuesday September 28, 1999.
	
	This should be expressed in Japanese characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	MORE INFORMATION
	================
	
	The language packs can be installed by selecting the Control Panel from the
	Start button, selecting Regional Options, and then selecting General.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
