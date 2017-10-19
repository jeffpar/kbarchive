---
layout: page
title: "Q130797: Cannot Specify Different Default Logon Name for Second Client"
permalink: /kb/130/Q130797/
---

## Q130797: Cannot Specify Different Default Logon Name for Second Client

	Article: Q130797
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you have both the Microsoft Client for Microsoft Networks and the Microsoft
	Client for NetWare Networks installed, you cannot specify different default
	logon names for the two servers you want to log on to. The logon name that is
	used for the primary network client is always used as the default logon name for
	the secondary network client.
	
	MORE INFORMATION
	================
	
	When you have both the Microsoft Networks and the NetWare Networks clients
	installed, the number of logon dialog boxes you are presented with depends on
	the organization of your logon passwords. If your Windows 95, Windows NT, and
	NetWare passwords are the same, you are presented with only one logon dialog box
	when you start Windows 95. If your Windows 95 and Windows NT passwords are the
	same, but your NetWare password is different, you are presented with two logon
	dialog boxes.
	
	You cannot avoid multiple logon dialog boxes if any two of your logon names are
	different. Because there is no way to specify different default logon names for
	the Microsoft Networks and the NetWare Networks clients, you must manually
	change the logon name for the secondary network client in the logon dialog box
	for that client.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
