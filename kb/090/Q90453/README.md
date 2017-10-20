---
layout: page
title: "Q90453: WFWG Err Msg: Not Enough Memory Available for This Task..."
permalink: /kb/090/Q90453/
---

## Q90453: WFWG Err Msg: Not Enough Memory Available for This Task...

{% raw %}

	Article: Q90453
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error message may occur when you choose the Adapters button under
	the Networks option in Control Panel:
	
	  There is not enough memory available for this task. Quit one or more
	  applications to increase available memory, and then try again.
	
	CAUSE
	=====
	
	This error can occur if the NETWORK.INF is being accessed by another program.
	
	NETWORK.INF file contains specific information used to install network adapter
	cards and network transports that are supported in Windows for Workgroups 3.1.
	Setup places NETWORK.INF in the Windows SYSTEM subdirectory during
	installation.
	
	If a program such as Microsoft Write has a file handle for NETWORK.INF open, the
	above message appears.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
