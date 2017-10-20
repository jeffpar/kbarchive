---
layout: page
title: "Q114177: PC Win: Err Msg: Some Names Could Not Be Matched..."
permalink: /kb/114/Q114177/
---

## Q114177: PC Win: Err Msg: Some Names Could Not Be Matched...

{% raw %}

	Article: Q114177
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0 and 3.0b of Microsoft Mail for Windows, when you use the Check
	Names option to validate a name against the Global Address List (GAL), the
	following error message may be displayed, even though the name exists in the
	Global Address list:
	
	  Some names could not be matched to names in the address list
	
	CAUSE
	=====
	
	This error is caused by an improper rebuild of the GAL using version 3.0 of the
	Rebuild program.
	
	RESOLUTION
	==========
	
	This issue was addressed in version 3.2 of the Rebuild program (REBUILD.EXE).
	
	MORE INFORMATION
	================
	
	The Check Names utility is one of the options available in the Mail for Windows
	Compose screen. The purpose of the utility is to check the characters in the To:
	and Cc: lines against the address lists.
	
	
	Additional query words: 3.00 3.00b 3.20 dirsync T3 update
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
