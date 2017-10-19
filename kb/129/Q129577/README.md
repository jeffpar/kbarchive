---
layout: page
title: "Q129577: Modem Defaults to Auto Answer Mode in Windows 95"
permalink: /kb/129/Q129577/
---

## Q129577: Modem Defaults to Auto Answer Mode in Windows 95

	Article: Q129577
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your modem is set to Auto Answer mode under Microsoft Exchange in Windows 95,
	even though the current Exchange profile calls for Auto Answer mode to be
	disabled.
	
	CAUSE
	=====
	
	The modem's answer mode is a modem property, not a profile property. Therefore,
	the answer mode is set by the last profile created in Microsoft Exchange.
	
	For example:
	
	- Profile 1 is created and sets the modem to Auto Answer mode.
	
	- Profile 2 is created and sets the modem to No Answer mode.
	
	In this example, the modem is set to No Answer mode regardless of the current
	Exchange profile setting.
	
	RESOLUTION
	==========
	
	Changing profiles does not change the state of the modem's properties. To change
	the properties, you must either create a new profile or set the properties
	directly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior also explains why a modem appears to default to Auto Answer mode
	when you set up a profile. If the modem was configured to use Auto Answer mode
	in a previous profile, the modem defaults to this mode.
	
	If the modem was configured to use No Answer mode in a previous profile, it
	defaults to No Answer mode.
	
	Additional query words: autoanswer
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
