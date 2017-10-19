---
layout: page
title: "Q197712: XCLN: How to Configure Default Free/Busy Options"
permalink: /kb/197/Q197712/
---

## Q197712: XCLN: How to Configure Default Free/Busy Options

	Article: Q197712
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In Microsoft Outlook, two options are available for configuring how much and how
	often Calendar Free/Busy information is published to a Microsoft Exchange Server
	computer. This article explains how to modify an Outlook.prf file so that you
	can specify default values for these two options.
	
	This customized .prf file can then be used by Profgen.exe and/or Newprof.exe to
	create a new profile using these default values.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The Microsoft Outlook client allows a user to specify how many months of
	free/busy data should be published on the server, and how often (in minutes) to
	update the information on the server. These values are stored as part of a
	user's profile in the following registry key:
	
	Windows 95 or Windows 98
	------------------------
	
	HKEY_CURRENT_USER
	\Software
	 \Microsoft
	  \Windows Messaging Subsystem
	   \Profiles
	    \<profile name>
	     \0a0d020000000000c000000000000046
	
	Windows NT
	----------
	
	HKEY_CURRENT_USER
	\Software
	 \Microsoft
	  \Windows NT
	   \CurrentVersion
	    \Windows Messaging Subsystem
	     \Profiles
	      \<profile name>
	      \0a0d020000000000c000000000000046
	
	To specify the number of months to publish Free/Busy information, change the
	following registry value to a value between 0 and 12:
	
	
	  Value Name: 00030330
	  Value Type: REG_BINARY
	  Value Range: 00 00 00 00 (0) to 0c 00 00 00 (12)
	
	To specify the update interval to publish Free/Busy information, change the
	following Registry value to a value between 60 and 5940 seconds:
	
	  Value Name: 00030331
	  Value Type: REG_BINARY
	  Value Range: 3c 00 00 00 (60)  to  34 17 00 00 (5940)
	
	For example, to specify an update interval of 60 minutes:
	
	  60 min. * 60 secs. = 3600 (decimal) = E10 (hex) = 10 0e 00 00
	
	If you wish to include these values in a .prf file, you must reverse the order of
	the numbers. For example, the above value would be represented as 0x00000e10.
	The following shows how these values would be entered in a .prf file:
	
	     [Service List]
	     Service1=Microsoft Outlook Client
	     
	     [Service1]
	     NumberOfMonthsFB=0x0000000c
	     FrequencyToPublishFB=0x00000e10
	     
	     [Microsoft Outlook Client]
	     SectionGUID=0a0d020000000000c000000000000046
	     
	     NumberOfMonthsFB=PT_LONG,0x0330
	     ; -- Number of months of Calendar data to publish to the server
	     
	     FrequencyToPublishFB=PT_LONG,0x0331
	     ; -- Frequency in seconds to publish Calendar data to server
	
	Outlook 2000 writes these values to the following registry locations:
	
	HKEY_CURRENT_USER
	\Software
	 \Microsoft
	  \Office
	   \9.0
	    \Outlook
	     \Preferences
	
	  Value Name: FBPublishRange
	  Value Type: DWORD
	
	HKEY_CURRENT_USER
	\Software
	 \Microsoft
	  \Office
	   \9.0
	    \Outlook
	     \Preferences
	
	  Value Name: FBUpdateSecs
	  Value Type: DWORD
	  Value Data: <interval in seconds>
	
	Additional query words: f/b freebusy outlook.prf 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook97 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
