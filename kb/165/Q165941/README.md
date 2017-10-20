---
layout: page
title: "Q165941: RAS Fails w/ Error 1068 &quot;RIP for NWLINK Failed to Start&quot;"
permalink: /kb/165/Q165941/
---

## Q165941: RAS Fails w/ Error 1068 &quot;RIP for NWLINK Failed to Start&quot;

{% raw %}

	Article: Q165941
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Remote Access Service, you receive the following error:
	
	  Error starting Remote Access Service on <servername>. Check the Event
	  log on <servername> for details. Error 1068: The dependency service
	  failed to start.
	
	The System Event log on <servername> contains the following errors:
	
	  Event Id 7000
	  The RIP for Nwlink IPX service failed to start due to the following
	  error: The parameter is incorrect.
	
	  Event Id 7001
	  The Remote Access Service depends on the RIP for Nwlink IPX service
	  which failed to start because of the following error:
	  The parameter is incorrect.
	
	CAUSE
	=====
	
	If you install Remote Access Service after you install a Service Pack, an older
	version of Nwlnkrip.sys is installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, reapply the Windows NT Service Pack.
	
	
	Additional query words: 7000 7001 1068 IPX RIP Nwlink RAS
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
