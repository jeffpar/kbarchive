---
layout: page
title: "Q239009: XFOR: Exchange Supports Time Zones Not Declared in RFC 822"
permalink: /kb/239/Q239009/
---

## Q239009: XFOR: Exchange Supports Time Zones Not Declared in RFC 822

	Article: Q239009
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Some SMTP servers use and support time zone declarations outside of those
	specifically defined in RFC 822. Microsoft Exchange Server 5.5 can be configured
	to support these new time zone specifications. This article describes how to
	configure this additional support.
	
	MORE INFORMATION
	================
	
	To configure the Exchange Server Internet Mail Service to use a time zone not
	specifically defined in RFC 822:
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersSystem\InternetContent
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value
	
	  Value Name: NewTimeZones
	  Data Type: REG_MULTI_SZ
	  Value: <New Time Zone>;<Time Offset>
	
	  where <New Time Zone> can be any string of three characters. The
	  <Time Offset> should be in the following format: +/-XX:XX; expressed in
	  hours (0-12) and minutes (0-59). For example:
	
	  Value: LCL;-7:00
	
	4. Quit Registry Editor.
	
	5. Stop and restart the information store and the Internet Mail Service.
	
	Note that these time zones are static definitions that do not take into account
	Daylight Savings Time. Manual corrections to this registry value are necessary
	to maintain the correct time zone offset. The Outlook calendar and task can be
	configured to remind you in advance.
	
	Additional query words: IMS, IMC, Date:, date-time
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
