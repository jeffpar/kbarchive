---
layout: page
title: "Q245195: Event ID 12288 with Windows NT Server 3.51"
permalink: kb/245/Q245195/
---

## Q245195: Event ID 12288 with Windows NT Server 3.51

	Article: Q245195
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer running Microsoft Windows NT Server 3.51, Event Viewer
	may record event ID 12288, which indicates the Security Accounts Manager (SAM)
	is the source of the event. If the computer is a domain controller, it may stop
	authenticating user logon requests, and you may receive the following error
	message:
	
	  Out of virtual memory.
	
	CAUSE
	=====
	
	This behavior can occur if the paging file is too small or if it is severely
	fragmented.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Set the initial size and maximum size of the paging file to zero:
	
	  a. In Control Panel, double-click System.
	
	  b. Click Virtual Memory.
	
	  c. In the Initial Size (MB) and Maximum Size (MB) boxes, type "0" (without
	     the quotation marks).
	
	  d. Click Set, and then click OK.
	
	  e. Click OK when you receive a message about increasing the registry size
	     limit.
	
	  f. Click OK.
	
	  g. When you are prompted, click Restart Now to restart the computer.
	
	  h. Click OK when you receive a Limited Virtual Memory message.
	
	2. Reset the initial size and maximum size of the paging file to the same size:
	
	  a. Click Virtual Memory.
	
	  b. In the Initial Size (MB) and Maximum Size (MB) boxes, type the same number
	     for both sizes.
	
	  c. Click Set, and then click OK.
	
	  d. Click OK.
	
	  e. When you are prompted, click Restart Now.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbprb
	
	=============================================================================
	
