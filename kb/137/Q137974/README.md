---
layout: page
title: "Q137974: How to Set Up User Profiles with the Microsoft Service for NDS"
permalink: /kb/137/Q137974/
---

## Q137974: How to Set Up User Profiles with the Microsoft Service for NDS

	Article: Q137974
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set up roving user profiles using the Microsoft Service for NetWare Directory
	Services (NDS), you must set up home directories with full permissions for each
	user.
	
	You can use Nwadmin.exe or Netadmin.exe to edit the properties for each user so
	that there is a home directory set under Environment. For example:
	
	  Volume:testserver_sys.company
	  Path:home\username
	
	When you are using only the Microsoft Client for NetWare Networks, profiles are
	typically saved in the Mail directory. Mail directories are not available with
	Novell NetWare 4.x (unless they are left from a previous version of NetWare).
	Therefore, the Microsoft Service for NetWare Directory Services (NDS) uses the
	home directory instead.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
