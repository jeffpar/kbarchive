---
layout: page
title: "Q151402: Specifying Different Domain In User Manager Icon"
permalink: /kb/151/Q151402/
---

## Q151402: Specifying Different Domain In User Manager Icon

	Article: Q151402
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article tells you how you can modify the properties of the User Manager for
	Domains icon so that User Manager for Domains will select a different domain
	user account database. Changing the icon's properties will allow you to look at
	multiple user account databases without having to wait for an account list from
	the default domain.
	
	To do this, you will open User Manager for Domains on a Windows NT Server that is
	acting in a member-server role, bypass the default domain account list and bring
	up the user account list for the local computer account or for other trusted
	domains.
	
	MORE INFORMATION
	================
	
	Difference Between Member Server and Domain Controller:
	-------------------------------------------------------
	
	A computer that is running Windows NT Server that is not installed as a domain
	controller will act much like a NT Workstation and is usually referred to as a
	member-server. It has much of the functionality of a domain controller but it
	can never act as a domain controller[ASCII 151]it cannot maintain a domain user
	account database. The member-server maintains a local workgroup account
	database. It can function as a member of a workgroup or as a member of a domain,
	just like Windows NT Workstation.
	
	One of the differences between a member-server running Windows NT Server
	(hereafter referred to as a Windows NT server) and a Windows NT Workstation is
	that, by default, the Windows NT Server has an Administrative Tools group that
	contains a set of applications identical to those that appear in the
	Administrative Tools group on a Windows NT Server domain controller.
	
	User Manager for Domains:
	-------------------------
	
	One of the tools in the Administrative group on an NT Server is User Manager for
	Domains. By default, when you launch this application, User Manager will open up
	either the local computer account database if Windows NT is configured for a
	workgroup, or it will open up the domain account database if Windows NT is
	configured to be part of a domain.
	
	In a domain configuration, User Manager will open up the domain database that it
	is part of. After the application is running, you can view another domain
	account database by choosing User>Select Domain on the menu.
	
	If the default domain account database is large, you will have to wait until the
	full list is received before you can switch to another account database.
	
	Changing The Icon Properties:
	-----------------------------
	
	You can set up an icon or icons with properties that allow you to look at
	multiple user account databases without having to wait for an account list from
	the default domain. To do this, perform the following steps:
	
	1. In Administrative Tools, click the User Manager for Domains icon.
	
	2. Type ALT-Enter to bring up the icon's Properties page.
	
	3. On the command line after USRMGR.EXE type a space, then type the name of the
	  domain (or the local computer name).
	
	NOTE: To bring up the user account database for another domain, there must be a
	trust relationship between the user's domain and the domain the user wants to
	view.
	
	NOTE: Setting the icon properties to view another member-server's or Windows NT
	Workstation's local account database will cause Windows NT to respond with
	"Could not find domain controller for this domain. Do you want to select another
	domain to administer?" Selecting "NO" closes User Manager; selecting "YES"
	brings up the "Select Domain" dialog box.
	
	4. Optional: These icons can be copied by holding down CTRL and dragging and
	  dropping the icons to a new location in Administrative Tools (or any other
	  group).The icons can then be modified with properties that open the local
	  account database, the default domain database, and a trusted domain's
	  database.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
