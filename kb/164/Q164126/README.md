---
layout: page
title: "Q164126: XFOR: How to Enable Diagnostic Logging for NNTP"
permalink: /kb/164/Q164126/
---

## Q164126: XFOR: How to Enable Diagnostic Logging for NNTP

	Article: Q164126
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article explains how to enable Protocol Logging for the Internet News
	Service in Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	There is no Diagnostic Logging tab in the Internet News Service property pages.
	Diagnostic logging can be enabled by editing the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To enable logging for pull newsfeeds and all outbound newfeeds, follow these
	steps:
	
	1. Start the Windows NT Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeINS
	  \Parameters
	
	3. Change the value of ProtocolLoggingLevel to one of the following values:
	
	  0 = Default
	  1 = No Logging
	  4 = Maximum Logging
	  5 = Logs conversation, including the text of each posted message
	
	4. The Microsoft Exchange Information Store service needs to be restarted before
	  the changes are reflected.
	
	NOTE: Logging at level 5 can fill up disk space very quickly. This should only be
	used when absolutely necessary.
	
	The log file is located in the Exchsrvr\Insdata\Log directory. Log files will
	have a name similar to L0000000.log To change to the path for the log files,
	follow these steps:
	
	1. Start the Windows NT Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeINS
	  \Parameters
	
	3. On the Edit menu, select AddValue, and add the following value:
	
	  Value Name: NNTP Protocol Log Path Data Type: REG_SZ
	
	4. Click OK.
	
	5. Enter a string value that will be the new path for the NNTP log file. For
	  example:
	
	  c:\Logs\Nntp\Nntppull.log
	
	6. Click OK.
	
	To enable logging for incoming push newsfeeds and all NNTP client activity,
	follow these steps:
	
	1. Start the Windows NT Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. Change the value of ProtocolLoggingLevel to one of the following values:
	
	  0 = Default
	  1 = No Logging
	  4 = Maximum Logging
	  5 = Logs conversation, including the text of each posted message
	
	NOTE: Logging at level 5 can fill up disk space very quickly. This should only be
	used when absolutely necessary. The location of the log files is determined by
	the following registry key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \Parameters \System\NNTP Protocol Log Path
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
