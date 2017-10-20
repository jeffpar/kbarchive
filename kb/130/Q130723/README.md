---
layout: page
title: "Q130723: Multiple NwRdr Network Errors (8005) Recorded In Event Viewer"
permalink: /kb/130/Q130723/
---

## Q130723: Multiple NwRdr Network Errors (8005) Recorded In Event Viewer

{% raw %}

	Article: Q130723
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multiple Event Id (8005) error messages appear in the system log every thirty to
	sixty seconds. The log entries look similar to the following:
	
	  Event ID: 8005
	  Source: NwRdr
	  Type: Error
	  Description: The Microsoft Client Service for Netware redirector has
	  encountered a network error.
	
	
	CAUSE
	=====
	
	The redirector is creating a system log entry for unmapped error codes generated
	primarily by NetWare aware applications.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodnt time out outs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
