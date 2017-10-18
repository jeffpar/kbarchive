---
layout: page
title: "Q326900: FIX: Stop XID Exchange When It Does Not Complete"
permalink: kb/326/Q326900/
---

## Q326900: FIX: Stop XID Exchange When It Does Not Complete

	Article: Q326900
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Under certain error conditions, when the SNA Server service tries to open a
	connection, the Exchange Identifiers (XIDs) that are exchanged between two link
	stations to establish a connection cannot be negotiated. This behavior causes a
	perpetual XID negotiation deadlock situation.
	
	In the Host Integration Server 2000 Management Console snap-in, the affected
	connection shows a "pending" status. If a client application is started at this
	time, the application is queued up. However, the application stops responding
	because it is not notified that the connection cannot be established.
	
	By using the fix that is described in the "More Information" section, you can add
	a counter, so that you can stop this XID negotiation after a set number of
	tries.
	
	MORE INFORMATION
	================
	
	A supported feature that modifies the product's default behavior is now
	available from Microsoft, but it is only intended to modify the behavior that is
	described in this article. Apply it only to systems that specifically need it.
	This feature may receive additional testing. Therefore, if your system is not
	severely affected by the lack of this feature, Microsoft recommends that you
	wait for the next Product Name service pack that contains this feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date           Time    Version      Size     File name
	  ----------------------------------------------------------
	  16-May-2002    21:49   5.0.0.860    98,576   Snadlc.dll
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	After you apply this fix, you can manually add a registry entry to turn on this
	functionality. To do this, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and then click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaDlcx\Parameters\ExtraParameter
	
	  where x stands for the appropriate instance of the Link Service, (for example,
	  SnaDlc1).
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	Value name: XIDAbortCounter
	Data type: REG_DWORD
	DWORD: 1 - 20 (Decimal)
	
	4. Quit Registry Editor.
	
	When you set this DWORD, XID negotiation stops after the specified number of
	completed XID negotiation attempts if the link connection cannot be established.
	When negotiation stops, an Event 23 that has Outage code 0x29 is logged in the
	Application Event log.
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Additional query words: XID NULL hang abort
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
