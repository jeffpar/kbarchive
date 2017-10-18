---
layout: page
title: "Q254091: XADM: Folder Names Become Question Marks in MBClean Message"
permalink: kb/254/Q254091/
---

## Q254091: XADM: Folder Names Become Question Marks in MBClean Message

	Article: Q254091
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): kbtool kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you use the Mailbox Management tool included with Exchange Server 5.5 Service
	Pack 3 (SP3) to clear a mailbox that has a folder with its name in double-byte
	character set (DBCS), the folder name may become question marks in the report
	message from MBClean, as shown in the following example:
	
	  1 items were moved from the \?????? folder to the System Cleanup folder.
	
	This behavior occurs only when the Exchange Server computer is running an
	English-language version of Microsoft Windows NT Server.
	
	CAUSE
	=====
	
	MBClean logs on to each mailbox and searches each subfolder for the overdue
	messages. To generate a report message, it calls the GetProps() function to
	retrieve the display name of each subfolder. The GetProps() function converts
	the folder name from Unicode to the native code page of MBClean, which
	correlates to the version of Windows NT Server. In this case, it is converted to
	English but not DBCS.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The new version of MBClean introduces the following new registry key for the
	code page of the folder name:
	
	  DWORD:
	  "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMCA\Parameters\SecondCodePage"
	
	NOTE: For example, the value is 936 for Chinese Simplified (CHS).
	
	MBClean uses this key instead of the native code page of MBClean itself.
	
	If there are several kinds of DBCS clients in a site, you need to group them on
	different servers and add this registry key with a corresponding value on each
	server.
	
	Additional query words: codepage
	
	======================================================================
	Keywords          : kbtool kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
