---
layout: page
title: "Q177295: Error Message: Unable to Save the Registry..."
permalink: /kb/177/Q177295/
---

## Q177295: Error Message: Unable to Save the Registry...

{% raw %}

	Article: Q177295
	Product(s): Microsoft Windows NT
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use System Policy Editor (Poledit.exe) to remotely edit a
	computer's registry, you may receive either of the following error messages:
	
	   - Unable to save the Registry: error 1243220 occurred.
	
	   - Unable to save the Registry: error 1243216 occurred.
	
	CAUSE
	=====
	
	This behavior can occur if you are using the wrong .adm file for the registry
	you are attempting to remotely edit.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the appropriate .adm file for the registry you are
	editing. For example, if you are editing a Windows NT 4.0 Workstation registry
	from a computer running Windows 95, use the Winnt.adm file instead of the
	Windows.adm file.
	
	NOTE: Because of differences in registry formats between Windows 95 and Windows
	NT 4.0, you cannot use the Windows.adm file to remotely edit a Windows 95
	registry from a computer running Windows NT 4.0. Instead, you must run System
	Policy Editor from another computer running Windows 95.
	
	MORE INFORMATION
	================
	
	Using the Common.adm and Windows.adm files, Windows 95-based computers can
	modify the registry and Config.pol file of other Windows 95-based computers.
	
	Using the Winnt.adm and Common.adm files, Windows NT 4.0-based computers can
	modify the registry and Ntconfig.pol file of other Windows NT 4.0- based
	computers.
	
	Additional query words: 4.00 prodnt 1243220 1243216
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 1.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
