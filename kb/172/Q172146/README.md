---
layout: page
title: "Q172146: Character Strings For 3270 Logon Scripting Aren't Localized"
permalink: kb/172/Q172146/
---

## Q172146: Character Strings For 3270 Logon Scripting Aren't Localized

	Article: Q172146
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some character strings used by the logon script process in the SNA Server-J 3.0
	SP1 version of the 3270 Applet display in English instead of Japanese.
	
	RESOLUTION
	==========
	
	The character strings which were hard-coded in English were moved from the
	source codes to resource files. The Logon script process now properly handles
	these characters for the Japanese version of the 3270 applet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0 and 3.0 SP1.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: logon script 3270
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
