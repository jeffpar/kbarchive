---
layout: page
title: "Q227392: FPNW Login.exe Errors for Dates After 7:15 P.M. January 18, 2038"
permalink: /kb/227/Q227392/
---

## Q227392: FPNW Login.exe Errors for Dates After 7:15 P.M. January 18, 2038

{% raw %}

	Article: Q227392
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT 3.51 or 4.0 server running the File and Print Services for
	NetWare (FPNW) service with a system date set to the year 2038, all of the time
	and date information is garbled from the perspective of a NetWare MS-DOS client
	or a NetWare Windows NT client (Client32).
	
	MORE INFORMATION
	================
	
	The NetWare Login.exe program works correctly with no error messages up to 2099.
	Windows NT is not designed to work in years this late.
	
	
	
	Additional query words: nwscript.exe
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
