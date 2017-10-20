---
layout: page
title: "Q154175: Users May Lose Designated Default Printer After Multiple Logins"
permalink: /kb/154/Q154175/
---

## Q154175: Users May Lose Designated Default Printer After Multiple Logins

{% raw %}

	Article: Q154175
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The designated default printer is lost after multiple attempts to log on and log
	off the network. Applications, such as Microsoft Word, fail to print and report
	that no default printer is defined on the system.
	
	CAUSE
	=====
	
	The Windows NT Spooler Service updates the user's profile with an invalid
	default printer name while trying to set the default printer for the user.
	
	MORE INFORMATION
	================
	
	The Microsoft Windows NT Spooler Service attempts to set the designated default
	printer in a user's profile while logging on. The Windows NT Spooler Service
	determines the default printer to use by checking to see if the user's profile
	already has a default printer selected, then checking to see what the first
	printer defined on the local system is. The Spooler Service will update the
	local user's profile with the printer information already defined in the user's
	profile if the printer information exists on the local computer. However, if
	that printer information is not on the local computer, Spoolss will update the
	user's profile with the first printer found on the local system.
	
	RESOLUTION
	==========
	
	Install the fix referenced below. Spoolss.dll has been modified to set the
	default printer correctly when using the first printer found on the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Contact Microsoft
	Product Support Services for more information.
	
	
	
	Additional query words: 3.51 prodnt printing
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
