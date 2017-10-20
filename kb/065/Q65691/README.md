---
layout: page
title: "Q65691: Cannot Load NETLOGON.PRO from within Windows 3.00"
permalink: /kb/065/Q65691/
---

## Q65691: Cannot Load NETLOGON.PRO from within Windows 3.00

{% raw %}

	Article: Q65691
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	NETLOGON.PRO does not load correctly when you log in from within the Windows
	version 3.00 Control Panel if you use version 3.00 of LANMAN.DRV, which is
	shipped with Windows version 3.00.
	
	CAUSE
	=====
	
	The MS-DOS LAN Manager installer does not recognize the existence of the Windows
	LANMAN.DRV file.
	
	RESOLUTION
	==========
	
	Manually delete or rename LANMAN.DRV.
	
	MORE INFORMATION
	================
	
	When you try to log in, version 3.00 of LANMAN.DRV tries to run
	$(LANROOT)\PROFILES\???.PRO (which does all of the USES when a user logs in) and
	either:
	
	1. fails to execute the profile
	
	--or--
	
	2. fails to execute the profile, flips to a full-screen window, and puts up an
	  "Invalid Drive Specification" error
	
	This problem does not occur if you use a NET LOGON command before starting
	Windows, or if you use version 3.01 of LANMAN.DRV (that is, if you rename or
	delete the version of this file that is shipped with Windows version 3.00).
	Version 3.01 of LANMAN.DRV is shipped with MS-DOS LAN Manager version 2.00.
	
	Please note that this problem is different from the LOGON SCRIPT problem that
	occurs when loading a profile from Windows. For more information on this
	problem, query in this Knowledge Base on the following words:
	
	  profile and spawn and logon and dlanman
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
