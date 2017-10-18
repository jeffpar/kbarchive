---
layout: page
title: "Q153139: Removing Deleted or Renamed Servers from License Manager"
permalink: kb/153/Q153139/
---

## Q153139: Removing Deleted or Renamed Servers from License Manager

	Article: Q153139
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Domain controllers that have been renamed or removed from Server manager still
	appear in the Server Browser of License Manager, even though you expect these
	domain controllers to disappear from the list.
	
	CAUSE
	=====
	
	This information is replicated from the domain controllers to the primary domain
	controller or Enterprise server.
	
	RESOLUTION
	==========
	
	Stop the License Logging service, delete or rename the Llsuser.lls file in the
	%Systemroot%\System32\Lls directory, and then restart the License Logging
	service.
	
	This procedure will clear all the entries for domain controllers and users that
	have connected to the server. It will not reset your purchase history or any
	license groups you have created.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbprb
	
	=============================================================================
	
