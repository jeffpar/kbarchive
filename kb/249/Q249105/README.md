---
layout: page
title: "Q249105: &quot;Short Date Style&quot; Setting May Not Maintain 4-Digit Year Format"
permalink: /kb/249/Q249105/
---

## Q249105: &quot;Short Date Style&quot; Setting May Not Maintain 4-Digit Year Format

	Article: Q249105
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft Windows 95 Year 2000 Update and you configure
	the Short Date Style setting to a 4-digit year on the Date tab in the Regional
	Settings tool in Control Panel, the setting may revert to a 2-digit year setting
	when you restart the computer.
	
	CAUSE
	=====
	
	This behavior can occur if the computer is configured to use user profiles and
	the default profile's Short Date Style setting is configured to use a 2-digit
	year format. The default setting overrides other profiles if they are configured
	to use a 4-digit year setting.
	
	RESOLUTION
	==========
	
	To resolve this issue, log on to the default profile and change the format of
	the Short Date Style setting to the 4-digit format. Or, start the computer in
	Safe mode, which uses the default user profile, and change the Short Date Style
	setting to a 4-digit year format.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
