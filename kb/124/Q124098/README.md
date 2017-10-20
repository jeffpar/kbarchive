---
layout: page
title: "Q124098: Browse List Incomplete When Using RAS"
permalink: /kb/124/Q124098/
---

## Q124098: Browse List Incomplete When Using RAS

{% raw %}

	Article: Q124098
	Product(s): Microsoft Windows NT
	Version(s): 3.11 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse the network from a Windows for Workgroups computer connected to
	a Windows NT Remote Access server, you receive an incomplete browse list. The
	browse list displays computers that are using the NWLink protocol. You are not
	able to view computers using only the NetBEUI protocol. However, you are allowed
	to directly connect to any computer on the network by specifying the exact
	server and share names.
	
	CAUSE
	=====
	
	If you are using the IPX/SPX Compatible Transport (NWLink) and NetBEUI
	protocols, this problem occurs when NWLink is being bound to the Server and
	Workstation services before being bound to NetBEUI.
	
	WORKAROUND
	==========
	
	To work around this problem, change the binding order of the Server and
	Workstation services so that NetBEUI is bound before NWLink, and then restart
	Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.11 ras wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.11 3.50
	
	=============================================================================
	

{% endraw %}
