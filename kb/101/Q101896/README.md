---
layout: page
title: "Q101896: Err Msg: Server Manager -- Access is Denied"
permalink: /kb/101/Q101896/
---

## Q101896: Err Msg: Server Manager -- Access is Denied

{% raw %}

	Article: Q101896
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Server Manager from Windows NT Advanced Server, one of the
	following error messages may appear when you double-click a workstation:
	
	  Server Manager Access is denied.
	
	  -or-
	
	  Server Manager
	  The computer WFW_COMPUTER_NAME is not configured for remote administration.
	
	CAUSE
	=====
	
	This error message is due to having a workgroup and a domain on the network with
	the same name. When this situation exists, the workgroup computers will appear
	on the domain as a workstation under Server Manager. However, they are not
	members of the domain and cannot be administered from the server on the domain.
	
	RESOLUTION
	==========
	
	To correct this problem, you can either rename the domain or the Windows NT
	workgroup or the Windows for Workgroups workgroup.
	
	Additional query words: wfw wfwg prodnt alert errmsg err msg
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
