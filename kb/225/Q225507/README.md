---
layout: page
title: "Q225507: SMS: Windows Management Service Keeps High Processor Utilization"
permalink: /kb/225/Q225507/
---

## Q225507: SMS: Windows Management Service Keeps High Processor Utilization

	Article: Q225507
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After enabling Hardware Inventory on Systems Management Server with clients that
	have multiple network providers, the Windows Management Instrumentation (WMI)
	service may exhibit high processor usage, which can substantially affect
	performance of the client system.
	
	You may also see large temporary inventory files in the \Ms\Sms\Clicomp\Hinv
	folder on the client computer.
	
	Upon examining the hardware inventory agent log (%windir%\Ms\Sms\Logs\Hinv32.log)
	it is observed that the agent times out while attempting to enumerate the
	Win32_NetworkClient class:
	
	  ...
	
	  CLASS - Process Class: Win32_NetworkAdapterConfiguration  	Hardware Inventory Agent	4/2/99 12:01:35 AM	182 (0xB6)	
	  CLASS - Process Class: Win32_NetworkClient  	Hardware Inventory Agent	4/2/99 12:01:36 AM	182 (0xB6)	
	  INSTANCE WARNING - Enumeration Timeout  	Hardware Inventory Agent	4/2/99 1:01:37 AM	182 (0xB6)	
	  CLASS - Process Class: Win32_OperatingSystem  	Hardware Inventory Agent	4/2/99 1:01:37 AM	182 (0xB6)	
	  ...
	
	When the Systems Management Server 2.0 client runs hardware inventory and uses
	the CPU for a long period of time, the computer will appear to have stopped
	responding and/or will send up a huge badmif. The enumeration of the
	Win32_NetworkClient class can be disabled by modifying the Sms_def.mof file. To
	prevent this problem, set reporting for the Win32_NetworkClient class to false
	in the site's Sms_def.mof file. For more information on the procedure to do
	this, please refer to Chapter 10 of the Systems Management Server
	Administrator's Guide.
	
	
	CAUSE
	=====
	
	The hardware inventory agent uses the Sms_def.mof file to determine which
	classes it will attempt to enumerate from WMI. When enumerating the
	Win32_NetworkClient class from WMI, the Windows Management service processor
	usage raises substantially and continues to maintain high usage. WMI never
	returns the requested values for the Win32_NetworkClient class back to the
	hardware inventory agent, which then will time out one hour after making the
	request to WMI and logs the error indicated above. This problem is typically
	caused because the hinv process gets hung up trying to detect a third-party
	network redirector, such as Novell Intranetware client, IBM Client Access
	client, or Hummingbird client and Lanworks client.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	You can use the following registry key to determine which providers and how many
	providers are installed on a given computer:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Lanmanworkstation\Networkprovider
	
	NOTE: Client computers running Windows 95 or Windows 98 continually run WinMgmt
	to be accessible remotely. This is not the case with Windows NT clients, where
	the WinMgmt service is set to Manual and is started on demand (for example, when
	hardware inventory is started or when WMI is accessed remotely).
	
	Additional query words: prodsms winmgmt hang hung hangs freeze lock up win9x win95 win98 winnt hinv
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
