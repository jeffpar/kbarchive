---
layout: page
title: "Q311764: SMS: Problems with Offline Log Upload if Client Time Is Wrong"
permalink: kb/311/Q311764/
---

## Q311764: SMS: Problems with Offline Log Upload if Client Time Is Wrong

	Article: Q311764
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If a Systems Management Server (SMS) 2.0 Software Metering client uploads an
	offline log file while the computer clock is temporarily set with a future date
	and the computer clock is then restored to current time and date, this prevents
	any further log uploads until the temporary date is reached. If the client had
	used a time that was a number of years in advance, that is how long the client
	goes without uploading an offline log. Further client logs, despite having the
	correct current date/time stamps, are held on the client.
	
	CAUSE
	=====
	
	This issue occurs because the time of the next offline log upload is calculated
	at the time of a successful upload, and is a combination of the current date and
	time obtained from the computer clock plus the Configuration Polling interval.
	This value is stored in the following registry key on the client:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Client Components\LICENSE
	  METERING\Properties\NextOfflineSyncTime
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, clean the client by using a utility such as
	20clicln.bat from the SMS 2.0 Support Tools, and then reinstall the client after
	you verify that the NextOfflineSyncTime registry key has been removed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
