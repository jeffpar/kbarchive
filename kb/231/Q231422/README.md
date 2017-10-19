---
layout: page
title: "Q231422: Setting Administrative Privileges Using User Manager for Domains"
permalink: /kb/231/Q231422/
---

## Q231422: Setting Administrative Privileges Using User Manager for Domains

	Article: Q231422
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to give users local administrative privileges on
	their workstation using User Manager for Domains.
	
	MORE INFORMATION
	================
	
	User Manager for Domains lets you grant these permissions without visiting each
	workstation. On the server (or on a workstation with server tools loaded):
	
	1. Click Start, point to Programs, point to Administrative Tools (Common), and
	  then click "User Manager for Domains".
	
	2. On the User menu bar, click Select Domain.
	
	3. In the Domain box, type "\\<ComputerName>" (without the quotation
	  marks) (where <ComputerName> is the name of the computer), and then
	  click OK. This starts User Manager for Domains for the computer name you
	  specified.
	
	4. Double-click Administrators in the list of groups at the bottom of the "User
	  Manager for Domains" dialog box.
	
	5. In the Local Groups Properties dialog box, click Add. In the List Names From
	  box (these are the domains in which you can add users from), click the user
	  (or global group) that needs administrative rights, and then click Add. The
	  user name is displayed in the Names box. Click OK.
	
	6. In the Local Group Policies dialog box, click OK.
	
	When you give users local administrative privileges on their workstation, they
	are still ordinary users in the domain, but are simultaneously an Administrator
	on their computer running Windows NT Workstation or Windows NT Server.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173673 Windows NT Server Tools for Windows NT Workstation 4.0 Available
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
