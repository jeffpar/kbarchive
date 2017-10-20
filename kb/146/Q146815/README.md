---
layout: page
title: "Q146815: Using Internet Information Server with Windows NT Authentication"
permalink: /kb/146/Q146815/
---

## Q146815: Using Internet Information Server with Windows NT Authentication

{% raw %}

	Article: Q146815
	Product(s): Internet Information Server
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Internet Information Server 1.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to a Windows NT Internet Information Server (IIS), you receive
	one of the following error messages:
	
	  From Windows NT Internet Explorer 1.5:
	
	  Authentication is required for this document. The server did not specify a
	  supported authentication method.
	
	  From Windows 95 Internet Explorer 2.0:
	
	  Error: Access is Denied.
	
	CAUSE
	=====
	
	Your Internet browser software does not support the Windows NT
	Challenge/Response password authentication and this option is enabled on the
	computer running IIS.
	
	NOTE: This is not the default authentication method for IIS.
	
	RESOLUTION
	==========
	
	There are 2 methods to resolve this issue:
	
	1. Upgrade your client software to a version that supports Windows NT
	  Challenge/Response password authentication. IIS ships with a version of
	  Internet Explorer for Windows 95 that supports this method of authentication.
	
	2. Change the password authentication on the IIS computer to either Allow
	  Anonymous or Basic (clear text).
	
	Additional query words: prodnt chap errmsg
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
