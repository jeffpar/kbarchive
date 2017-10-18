---
layout: page
title: "Q174738: XFOR: Migrated Users Assigned Random PST Password"
permalink: kb/174/Q174738/
---

## Q174738: XFOR: Migrated Users Assigned Random PST Password

	Article: Q174738
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have migrated a user's messages to a PST file, the user may not be able
	to open the migrated PST file with his or her Exchange account.
	
	CAUSE
	=====
	
	The Migration Wizard assigns a random password for the PST file. This password
	is not the same as the individual user's logon password.
	
	RESOLUTION
	==========
	
	The PST password is located in the Pst.password file. This file is located in
	the directory where the PST file was created. The Event Viewer will record the
	following:
	
	  Event Id: 10075
	  Source: MSExchangeMig
	  Type: Information
	  Category: None
	  Description:
	  Passwords for new PST files are listed in the file:
	  :\\PST.PASSWORD.
	
	MORE INFORMATION
	================
	
	This is by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
