---
layout: page
title: "Q113515: MS DLC over ODI May Cause GP Faults in WFWG 3.11"
permalink: /kb/113/Q113515/
---

## Q113515: MS DLC over ODI May Cause GP Faults in WFWG 3.11

{% raw %}

	Article: Q113515
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	You receive a general protection (GP) fault in the KEYBOARD.DRV driver file or
	another driver file.
	
	CAUSE
	=====
	
	If you install the MS DLC protocol over an ODI driver in a token-ring
	configuration on a computer running Microsoft Windows for Workgroups version
	3.11, the computer may produce GP faults.
	
	RESOLUTION
	==========
	
	The following actions may help you to work around this problem:
	
	- Use an MS DLC protocol intended for Windows for Workgroups 3.11.
	
	- For instructions about using ODINSUP with Windows for Workgroups, contact
	  Novell or a Novell authorized reseller, and query on the following words here
	  in the Microsoft Knowledge Base:
	
	  odinsup and netx and novell and wfwg
	
	- Use current Novell NetWare drivers.
	
	Additional query words: 3.11 Gpfault msdlc gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
