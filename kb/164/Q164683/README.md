---
layout: page
title: "Q164683: Dial-Up Networking Prompts for Number to Dial"
permalink: /kb/164/Q164683/
---

## Q164683: Dial-Up Networking Prompts for Number to Dial

{% raw %}

	Article: Q164683
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr2 win95 _IK12469 kbSDKPlatform kbGrpDSNet
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you clear the Use Country And Area Code check box in the properties of one
	Dial-Up Networking connectoid, you may need to manually enter the number you are
	dialing for other connectoids.
	
	CAUSE
	=====
	
	Clearing the Use Country And Area Code check box in one Dial-Up Networking
	connectoid may disable the feature for all other Dial-Up Networking connectoids.
	
	RESOLUTION
	==========
	
	Enable the Use Country And Area Code option in all connectoids. TAPI removes the
	country and area code when it is not required.
	
	MORE INFORMATION
	================
	
	RAS does not use TAPI to format the dialing string if the Use Country And Area
	Code check box is cleared.
	
	Additional query words: dun
	
	======================================================================
	Keywords          : kbenv kbnetwork osr2 win95 _IK12469 kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
