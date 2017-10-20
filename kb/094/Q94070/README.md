---
layout: page
title: "Q94070: Creating Bound Applications with LAN Man PTK/SDK"
permalink: /kb/094/Q94070/
---

## Q94070: Creating Bound Applications with LAN Man PTK/SDK

{% raw %}

	Article: Q94070
	Product(s): Microsoft LAN Manager
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager Programmer's Toolkit, version 2.0 
	- Microsoft LAN Manager Software Development Kit, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PROBLEM ID: BUG# 1913
	
	SYMPTOMS
	========
	
	Bound applications that call LAN Manager APIs will not run correctly under
	MS-DOS. All APIs will return errorcode 3 (path not found) when called under
	MS-DOS.
	
	Applications created solely for MS-DOS or for MS OS/2 will run correctly.
	
	RESOLUTION
	==========
	
	As a workaround, create separate MS-DOS and OS/2 versions of your program. If
	desired, the separate programs can be linked together into one "dual-mode"
	executable. See your compiler documentation for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the LAN Manager Programmer's
	Toolkit version 2.0 and in the LAN Manager Software Development Kit version 2.1.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSDKSearch kbLanManSearch kbLanManProgTK200 kbSDKLanMan210
	Version           : :2.0,2.1
	
	=============================================================================
	

{% endraw %}
