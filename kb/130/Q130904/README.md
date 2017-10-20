---
layout: page
title: "Q130904: 32-bit DLL Call From MSMAIL32 to MAPILogon Fails"
permalink: /kb/130/Q130904/
---

## Q130904: 32-bit DLL Call From MSMAIL32 to MAPILogon Fails

{% raw %}

	Article: Q130904
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.0,3.2; winnt:3.5
	Operating System(s): 
	Keyword(s): kbusage SMapiCMC kbSMAPICMC
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When making a dynamic link library call to MAPILogon from a 32-bit application
	directly to MAPI32.DLL, the call will fail from a custom command or a custom
	message in the Windows NT Mail client. The failure occurs in a MAPI error 2
	(MAPI_E_FAILURE) which implies a general failure.
	
	
	CAUSE
	=====
	
	This problem occurs when the extension DLL is called while the Mail32 internal
	lock is on. When the DLL attempts to call out to MAPI, MAPI waits for the
	internal lock to be released and hangs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage SMapiCMC kbSMAPICMC 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2; winnt:3.5
	
	=============================================================================
	

{% endraw %}
