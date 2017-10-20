---
layout: page
title: "Q111535: Connect from WfWG Computer Without Network Policy"
permalink: /kb/111/Q111535/
---

## Q111535: Connect from WfWG Computer Without Network Policy

{% raw %}

	Article: Q111535
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Trying to log onto a Windows NT Advanced Server domain with the "Access
	this computer from the network" policy not assigned to the Everyone group
	causes the following error message to appear on Windows for Workgroups
	computers:
	
	  No domain server was available to validate your password. You were logged on
	  without password validation.
	
	To avoid this error message, start User Manager for Domains on the Windows
	NT Advanced Server server for the domain and perform the following steps:
	
	1. Choose User Rights from the Policies menu.
	
	2. Select the "Access this computer from the network" right.
	
	3. Select Administrator and Everyone.
	
	4. Choose OK.
	
	Additional query words: wfw wfwg prodnt wfwg
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
