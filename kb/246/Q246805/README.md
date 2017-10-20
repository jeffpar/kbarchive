---
layout: page
title: "Q246805: Rasctrs.dll Error Message Appears with RAS on Windows NT 4.0 SP4"
permalink: /kb/246/Q246805/
---

## Q246805: Rasctrs.dll Error Message Appears with RAS on Windows NT 4.0 SP4

{% raw %}

	Article: Q246805
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Remote Access Service (RAS) and Dial-Up Networking (DUN) to
	connect to a server from a computer running Microsoft Windows NT Server 4.0
	Service Pack 4, you may not be able to establish the connection and you may
	receive an error message about the Rasctrs.dll file.
	
	Also, Event Viewer may record the following information:
	
	  Event 2001
	  Source: rasctrs
	  Type: Error
	  Description: Load of Rasctrs.dll failed. Make sure the DLL file is in the
	  PATH. WIN32 Error number is returned in the data.
	  Data: 0000: 000003eb (in words)
	
	  Event 1008
	  Source: perflib
	  Type: Error
	  Description: The Open Procedure for service 'Remote Access' in DLL
	  ''Rasctrs.dll'' failed. Performance data for this service will not be
	  available. Status code returned is DWORD 0.
	  Data: 0000: 000003eb (in words)
	
	CAUSE
	=====
	
	This behavior can occur if you install RAS on a computer that already has
	Service Pack 4 (SP4) installed but do not then reapply SP4 or apply the latest
	service pack before you restart the computer.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Remove RAS.
	
	2. Restart the computer.
	
	3. Reinstall RAS.
	
	4. Reapply SP4, or apply the latest service pack.
	
	5. Restart the computer.
	
	Additional query words: remote
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
