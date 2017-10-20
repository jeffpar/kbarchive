---
layout: page
title: "Q248353: BUG: System Boot Sits at the Blue Blank Screen for ~90 Seconds"
permalink: /kb/248/Q248353/
---

## Q248353: BUG: System Boot Sits at the Blue Blank Screen for ~90 Seconds

{% raw %}

	Article: Q248353
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbKernBase kbOSWin2000 kbService kbDSupport kbGrpDSKernBase
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have installed an auto-started service configured for a non-localsystem
	account.
	When the system is starting, the system pauses at the blank blue screen for ~90
	seconds and then the logon prompt appears.
	
	RESOLUTION
	==========
	
	Add the NWCWorkstation service as a dependency to your non-localsystem service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Client Services for Netware (CSNW) is installed and the NWCWorkstation
	  service isn't configured to run in a group (default for CSNW).
	
	2. Another auto-start service is installed that runs in a non-LocalSystem
	  account.
	
	3. The Auto-start service from step 2 comes before NWCWorkstation service
	  alphabetically in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Services
	
	  or it belongs to a service load order group. (Services that belong to a load
	  order group always start before a service that doesn't belong to a load order
	  group.)
	
	4. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbKernBase kbOSWin2000 kbService kbDSupport kbGrpDSKernBase 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
