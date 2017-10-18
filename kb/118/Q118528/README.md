---
layout: page
title: "Q118528: PC Gen: Mail Client Polling Defaults and How to Reset Them"
permalink: kb/118/Q118528/
---

## Q118528: PC Gen: Mail Client Polling Defaults and How to Reset Them

	Article: Q118528
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail has default polling intervals that are used to check for new
	mail. You can control how often the workstation polls the database to check for
	new mail.
	
	The following table lists the mail clients, their polling defaults, and how to
	reset them.
	
	  Program                    Default         Modify with
	  -----------------------------------------------------------------------
	
	  MS-DOS workstation         30 seconds      -N command-line option
	
	  MICRO/MONITOR/OPERATOR     30 seconds      -X command-line option
	                                             (no NetBIOS)
	
	  Windows client             10 minutes      Mail menu Option command
	                                             (see note below)
	
	  Macintosh workstation      30 seconds      Select the application
	                                             and press the Command+I
	                                             keystroke combination or
	                                             Click Get Info on the
	                                             File menu.
	
	                                             You can then set a value
	                                             for Check New Mail (secs)
	
	  Presentation Manager        5 seconds      -N command-line option
	
	IMPORTANT: For the Windows workstation, the administrator can set the default
	polling value with the PollingInterval variable in the MSMAIL.INI template file
	that is stored in the Mail executables directory on the server (or in some
	cases, in the user's Windows directory). The user must modify the Check For New
	Mail option from the Options menu from the Windows workstation. This value is
	stored in the user's Mail message file (MMF) and the MSMAIL.INI value is ignored
	after the MMF is created.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
