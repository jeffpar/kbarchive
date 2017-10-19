---
layout: page
title: "Q90457: WinLogin Doc Err: Group Settings Not Selected"
permalink: /kb/090/Q90457/
---

## Q90457: WinLogin Doc Err: Group Settings Not Selected

	Article: Q90457
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a documentation error in the "Microsoft WinLogin Administrator's Guide"
	regarding the way WinLogin 1.0 manages group administrative settings. Following
	the instructions in the administrator's guide will result in the Group settings
	not being selected when WinLogin boots on the client machine.
	
	MORE INFORMATION
	================
	
	Page 42 of the "Microsoft WinLogin Administrator's Guide," under the topic
	"Managing Group Administrative Settings," step number 5 reads:
	
	  Using Merge Rule Editor, set the merge rule for each entry in the Colors
	  section of each WIN.INI file to use the Admin Default Source and to Disallow
	  User Preferences.
	
	Following these instructions will result in the Admin (global default) settings
	being selected, not the Group settings.
	
	To manage group administrative settings, use the Merge Rule Editor to make the
	following merge rule settings for each Group entry in the WIN.INI file:
	
	1. Select Admin as Default Source.
	
	2. Select Replace Default as User Preferences.
	
	NOTE: Any changes made to the local configuration will be saved with the
	individual User settings and will override the Group settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in WinLogin version 1.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	
	Additional query words: WIN31 1.00 3.10 WinLogin win login merge group
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
