---
layout: page
title: "Q173118: Incorrect Dialog Displayed When Password On Preferred Server"
permalink: /kb/173/Q173118/
---

## Q173118: Incorrect Dialog Displayed When Password On Preferred Server

	Article: Q173118
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user with an expired NetWare password logs on to a computer running Windows NT
	3.51 after installing Client Services for NetWare (CSNW) for the first time.
	After typing his or her Windows NT password and clicking OK, the user is
	prompted to select a preferred server for NetWare. After selecting the preferred
	server and clicking OK, the following message is displayed:
	
	  NetWare Network
	
	  Your password on NOVELL_SERVER_NAME has expired.
	  Please change it by pressing Ctrl+Alt+Del and choosing the Change
	  Password button.
	
	This is incorrect. The message should instruct the user to change their NetWare
	password with the SETPASS utility. The SETPASS utility is a NetWare utility
	usually found in SYS:PUBLIC and is used to change the Novell user's password.
	Contact your NetWare administrator for instructions on using the SETPASS
	utility.
	
	CAUSE
	=====
	
	An incorrect message was being called into the message box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
