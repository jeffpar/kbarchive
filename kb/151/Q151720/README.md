---
layout: page
title: "Q151720: Auditing Stand-Alone Servers in a Windows NT Domain"
permalink: /kb/151/Q151720/
---

## Q151720: Auditing Stand-Alone Servers in a Windows NT Domain

{% raw %}

	Article: Q151720
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Audit Policy for your domain is set to audit File and Object Access Success
	and Failure. You use File Manager to connect to a share on one of your Windows
	NT servers. The server is a member of the domain but is not a domain controller.
	You highlight a directory, click on Security, Auditing, select Events to Audit,
	and Add Users and Groups. Clicking OK returns the following:
	
	  Current audit policy does not have auditing turned on. Ask an Administrator
	  to use User Manager to turn on auditing.
	
	RESOLUTION
	==========
	
	Start User Manager for Domains, click User, Select Domain, and enter the
	Server's name instead of a domain name. For instance, if you wish to audit
	events on the stand-alone server \\SA_SERVER, type "\\SA_SERVER" (without the
	quotes) in the Domain box. User Manager will display accounts database of
	\\SA_SERVER. Proceed to set the Audit Policy for \\SA_SERVER.
	
	MORE INFORMATION
	================
	
	Domain audit policies apply to domain controllers. Domain audit policies will
	not automatically take effect on stand-alone Windows NT servers even though such
	servers may be members of a domain. To establish audit policies on a stand-alone
	server, User Manager must be focused on the server, not on the domain.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
