---
layout: page
title: "Q131958: Access Denied for Account Operators in User Manager for Domains"
permalink: /kb/131/Q131958/
---

## Q131958: Access Denied for Account Operators in User Manager for Domains

	Article: Q131958
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5,3.51,4.0,95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on as an Account Operator using User Manager for Domains on a
	computer running Windows 3.1, Windows for Workgroups 3.11 or Windows 95 the
	following message appears when you attempt to create or change the password of
	any user in the Windows NT domain:
	
	  Administrative Password Verification
	
	  The operation you have initiated requires an
	  administrative password for the server listed
	  below. Please enter that password now.
	
	  Server Name: <Servername>
	  Password: <Enter password>
	
	After you enter the administrative password for the server, the following error
	message appears:
	
	  Access is denied.
	
	CAUSE
	=====
	
	This problem occurs when the user's password restriction of Minimum Password Age
	is set to Allow Changes in x Days, where x represents any number of days (limit
	of 999). By default, the Minimum Password Age for any user is set to Allow
	Changes Immediately.
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Log on as one of the Windows NT domain administrators.
	
	2. In User Manager for Domains, select the user.
	
	3. From the Policies menu, choose Account.
	
	4. For Minimum Password Age, choose Allow Changes Immediately.
	
	
	Additional query words: prodnt wfw wfwg srvtools usrmgr win95 win95x
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : :3.11,3.5,3.51,4.0,95
	
	=============================================================================
	
