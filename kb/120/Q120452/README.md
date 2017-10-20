---
layout: page
title: "Q120452: Invalid Machine ID with OEM Windows Sound System 2.0"
permalink: /kb/120/Q120452/
---

## Q120452: Invalid Machine ID with OEM Windows Sound System 2.0

{% raw %}

	Article: Q120452
	Product(s): Miscellaneous Windows Products
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open the Microsoft Windows Sound System Audio Control icon, the
	following error message is displayed:
	
	  Invalid Machine ID
	
	CAUSE
	=====
	
	Toshiba uses a subset of the Windows Sound System that is coded to identify
	Toshiba systems. This subset is meant to function on Toshiba systems with
	integrated audio only. If it is installed in a non-Toshiba system, the subset
	loads correctly but generates the above error when you open the Audio Control
	icon.
	
	MORE INFORMATION
	================
	
	This problem may also occur on other systems that include subsets of Windows
	Sound System not specifically designed for those particular systems.
	
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : 2.00
	
	=============================================================================
	

{% endraw %}
