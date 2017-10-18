---
layout: page
title: "Q275448: Encarta 2001 Err Msg: Invalid Page Fault in Module Swonce.dll"
permalink: kb/275/Q275448/
---

## Q275448: Encarta 2001 Err Msg: Invalid Page Fault in Module Swonce.dll

	Article: Q275448
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Africana, Third Edition 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Interactive World Atlas 2001 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta World English Dictionary 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive the following error message
	
	  GLJ<####> has caused an invalid page fault in module Swonce.dll.
	
	where <####> is a number.
	
	NOTE: You may also receive this error message when you attempt to install
	Macromedia Shockwave.
	
	CAUSE
	=====
	
	This behavior can occur if the system date on your computer is set to a date
	earlier than 1980 or if the computer date is set to several years into the
	future.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, set the system date on your computer to the current date.
	To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Date/Time.
	
	3. Click the Date & Time tab.
	
	4. Under Date, click the current day, month, and year.
	
	5. Click OK.
	
	6. Close Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: multi multi-media media mm ee2001 ers2001 ea3 eiwa ewed gpf ipf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaAfricana300 kbEncartaReference2001 kbEncartaWorldAtlas2001 kbEncartaWorldEngDict2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
