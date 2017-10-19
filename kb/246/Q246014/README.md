---
layout: page
title: "Q246014: XCLN: Outlook Y2K Information &amp; Compliancy with Exchange Server"
permalink: /kb/246/Q246014/
---

## Q246014: XCLN: Outlook Y2K Information &amp; Compliancy with Exchange Server

	Article: Q246014
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To determine whether the version of Microsoft Outlook you are running is year
	2000 (Y2K) compliant, check the client version.
	
	IMPORTANT: You cannot use the Microsoft Exchange Administrator program to make
	this check even though the Administrator program includes a Client Version
	column in the private information store Logons container. The client version
	information in this column is collected from the Emsmdb32.dll file, which
	resides on the client workstation, and not from the actual client. That is, the
	client version number displayed in the Client Version column is that of the
	Emsmdb32.dll file, not Outlook, and therefore, doesn't determine Y2K compliancy
	for Outlook applications.
	
	To determine the correct version of Microsoft Outlook applications, in Outlook,
	click About Microsoft Outlook on the Help menu.
	
	MORE INFORMATION
	================
	
	To provide in-depth Y2K information for both the IT professional and the home
	computer user, Microsoft has created the "Microsoft Year 2000 Guide for Home
	Computers."
	
	Additional query words: Y2K 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
