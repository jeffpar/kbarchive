---
layout: page
title: "Q177125: User Cannot Log On to LAN Because of RAS Logon Failures"
permalink: kb/177/Q177125/
---

## Q177125: User Cannot Log On to LAN Because of RAS Logon Failures

	Article: Q177125
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to log on to your local area network (LAN), you may receive the
	following error message:
	
	  Unable to log you on because your account has been locked out, please
	  contact your administrator.
	
	NOTE: This error may occur even though you have not previously failed any logon
	attempts.
	
	CAUSE
	=====
	
	With the Account Lockout feature in Windows NT enabled in User Manager,
	unsuccessful attempts to log on to the network through a Remote Access Service
	(RAS) connection will trigger the lockout. This prevents you from logging on to
	the LAN.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	This fix introduces a new feature called Remote Access Account Lockout Manager
	(RAALM), which resolves the above problem by separating the two lockout
	mechanisms. By making the RAS lockout count lower than the Account Lockout,
	failed RAS logon attempts will not affect a user on the LAN from logging on to
	the domain. This is done by the RAALM revoking the dial-in permissions of the
	user.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	After you have applied the above fixes, follow these steps:
	
	1. If your primary user account database is on the RAS Server, skip to Step 2.
	  If not, follow these steps:
	
	  a. Install the Remote Access Account Lockout Helper service by running
	     Raslock.exe at a command prompt.
	
	  b. In Control Panel, open Services, and then select Remote Access Account
	     Lockout Helper, and click Startup.
	
	  c. Click Log On As This Account and enter an account and password that has
	     appropriate permissions to edit user accounts, such as Administrator or
	     Account Operators.
	
	2. Start Registry Editor (Regedit.exe or Regedt32.exe).
	
	3. Go to the following registry subkey:
	
	  HKLM\SYSTEM\CurrentControlSet\Services\RemoteAccess\Parameters
	
	4. Edit the value MaxDenials to the number of consecutive bad password attempts
	  before locking out the account.
	
	  NOTE: The default value of 0 disables RAS account lockout.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
