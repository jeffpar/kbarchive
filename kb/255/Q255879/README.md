---
layout: page
title: "Q255879: XCLN: Appointments Created Using CDO Off by One Hour"
permalink: kb/255/Q255879/
---

## Q255879: XCLN: Appointments Created Using CDO Off by One Hour

	Article: Q255879
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Autoaccept script, which uses Collaboration Data Objects (CDO),
	to automatically book a conference room, a repeating appointment that falls
	across daylight saving time change periods is displayed with an appointment
	start time that is one hour later than the actual start time of the appointment
	for the first three weeks of March.
	
	CAUSE
	=====
	
	This issue can occur because CDO does not use the operating system TimeZone
	table to calculate daylight saving time adjustments. Instead, CDO uses its own
	internal table. This table incorrectly defines the end date for daylight saving
	time; as a result, appointments that you create during the overlap period are
	off by one hour.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	To manually install this fix, you need the Microsoft Register Server utility,
	Regsvr32.exe. The Regsvr32 utility is usually installed in your Windows\System32
	folder. If you cannot locate the Regsvr32 utility on your computer, you can
	obtain it from the Microsoft Download Center. For additional information about
	where to obtain the Regsvr32.exe file, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q161983 ACC: Regsv32a.exe Available in Download Center
	
	After you obtain the Regsvr32 utility, you must perform the following steps to
	install this fix. The following command path
	
	  c:\winnt\system32
	
	(which is used in the installation steps) may differ on your system, depending on
	the configuration of your installation of Microsoft Windows NT Server or
	Exchange Server.
	
	1. Copy the Regsvr32.exe file to your Windows\System32 folder.
	
	2. If the CDO client application is running on the same computer that Exchange
	  Server is running on, stop all of the Exchange Server services.
	
	3. To unregister the current Cdo.dll file, at a command prompt, type the
	  following:
	
	  regsvr32 /u c:\winnt\system32\cdo.dll
	
	  A message is displayed that indicates the success of this operation.
	
	4. Copy build 2651.91 of the Cdo.dll file to the C:\Winnt\System32 folder.
	
	5. To register the new Cdo.dll file, at a command prompt, type the following:
	
	  regsvr32 c:\winnt\system32\cdo.dll
	
	6. If the CDO client application is running on the same computer that Exchange
	  Server is running on, restart all of the Exchange Server services.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
