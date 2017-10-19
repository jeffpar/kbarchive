---
layout: page
title: "Q103902: PC WRmt: Baud Rate Displayed Not Always Accurate"
permalink: /kb/103/Q103902/
---

## Q103902: PC WRmt: Baud Rate Displayed Not Always Accurate

	Article: Q103902
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Remote for Windows can display a different modem
	speed than you are actually using. The setting for baud rate can be overridden
	by your modem script, yet you will neither see the configured modem speed nor
	the speed displayed.
	
	CAUSE
	=====
	
	This is by design.
	
	Because there is no standard return code for modem speed, Remote for Windows has
	no way to confirm what modem speed will be used. The modem script often sets the
	baud rate, thus taking precedence over the user setting.
	
	NOTE: If the setting is not in the script, the user setting is still required.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
