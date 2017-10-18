---
layout: page
title: "Q112594: Unable to Administer Domain when NetLogon Not Started"
permalink: kb/112/Q112594/
---

## Q112594: Unable to Administer Domain when NetLogon Not Started

	Article: Q112594
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	User Manager for Domains displays the following message:
	
	  Could not find domain controller for this domain. Do you want to
	  select another domain to administer?
	
	Server Manager displays this message:
	
	  Cannot find the Primary DC for <name>. You may administer this
	  domain, but certain domain-wide operations will be disabled.
	
	CAUSE
	=====
	
	The NetLogon service is not started on the domain controller.
	
	RESOLUTION
	==========
	
	Start the NetLogon service on the domain controller. You can do this by using
	the Services portion of Control Panel.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinNTS350search kbWinNT310Search kbWinAdvServSearch
	Version           : :2000,3.1,3.5,3.51,4.0
	
	=============================================================================
	
