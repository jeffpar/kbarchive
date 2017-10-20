---
layout: page
title: "Q172881: Nwssvc.exe Access Violates When GetFileSecDesc Returns NULL"
permalink: /kb/172/Q172881/
---

## Q172881: Nwssvc.exe Access Violates When GetFileSecDesc Returns NULL

{% raw %}

	Article: Q172881
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
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
	
	File and Print Service for NetWare's (FPNW) user-mode process, Nwssvc.exe,
	displays an access violation error message due to a Null value being returned.
	
	  "The application obj\i386\nwssvc.exe generated an application error. The
	  error occurred on <date> at <time>. The exception generated was
	  xC0000005 at address x77F7BEED. RTL Get DACL Security Descriptor."
	
	CAUSE
	=====
	
	The function GetFileSecDesc returns success even though it was returned a NULL
	value when it called RtlGetDaclSecurityDescriptor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but is not fully regression tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
