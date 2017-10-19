---
layout: page
title: "Q275892: XADM: Error c103073a When Starting the Administrator Program"
permalink: /kb/275/Q275892/
---

## Q275892: XADM: Error c103073a When Starting the Administrator Program

	Article: Q275892
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to start the Microsoft Exchange Server Administrator program,
	you may receive the following error message:
	
	  The required MAPI profile cannot be created because the file MAPISVC.INF
	  cannot be modified.
	
	  Microsoft Exchange Administrator
	  ID number: c103073a
	
	MORE INFORMATION
	================
	
	This error message can occur if you do not have sufficient rights to modify the
	Mapisvc.inf file in the <Windir>\System32 directory when you start the
	Administrator program. You must have Change permissions or higher to start the
	Administrator program.
	
	Have your administrator follow these steps to grant you the right to modify the
	Mapisvc.inf file:
	
	1. Log on to the computer with the Administrator account.
	
	2. Right-click the <Windir>\System32\Mapisvc.inf file, and then click
	  Properties.
	
	3. Click the Security tab, and then click Permissions.
	
	4. Add the appropriate Windows NT user or group to the list.
	
	5. Give the users the Modify right.
	
	Additional query words: global logon start log in exch2kp2w
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
