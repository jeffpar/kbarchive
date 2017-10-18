---
layout: page
title: "Q146436: XCLN: Offline Address Book Files Not Removed w/ Remove All"
permalink: kb/146/Q146436/
---

## Q146436: XCLN: Offline Address Book Files Not Removed w/ Remove All

	Article: Q146436
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Remove All option while you are running the Microsoft
	Exchange client Setup program, the off-line address book (.OAB) files are not
	removed.
	
	CAUSE
	=====
	
	The .OAB files are stored in the same directory as the off-line store file for
	local replication. The default location is the directory of computer's operating
	system. This location can be changed by editing the your profile. Therefor, for
	the Setup program to remove the .OAB files, it would have to go through each
	user's profile looking of the path to the .OAB files.
	
	WORKAROUND
	==========
	
	These files can be manually removed by globally searching for *.OAB files and
	deleting all instances found.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	client. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
