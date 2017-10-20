---
layout: page
title: "Q255820: SMS: SMS_NT_Logon_Server_Manager Component Is Now Multithreaded"
permalink: /kb/255/Q255820/
---

## Q255820: SMS: SMS_NT_Logon_Server_Manager Component Is Now Multithreaded

{% raw %}

	Article: Q255820
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In large Microsoft Windows NT and Microsoft Windows 2000 domains that contain
	many domain controllers and multiple sites with Windows NT Logon Discovery or
	Windows NT Logon Installation enabled, there may be competition for control of
	the domain during logon point updates. This can cause sites to be marked as
	inactive (dead), which results in the uninstallation of the logon point
	components for that site on all domain controllers. An indication of this
	condition is the absence of a folder corresponding with the site code for the
	site in the Smslogon\Sites folder on the domain controllers.
	
	SMS_NT_Logon_Server_Manager (LSM) is a thread of SMS_Executive that handles the
	creation and management of logon points for the site. Before Service Pack 2, LSM
	was a single-threaded program so it could only update one domain controller at a
	time.
	
	In Systems Management Server (SMS) 2.0 Service Pack 2 and later, LSM is a
	multithreaded program. Because of this change, the time it takes to complete a
	logon server management cycle is reduced significantly. There is also a change
	to the behavior of LSM as it relates to LSM marking the sites as inactive
	(dead).
	
	For additional information about this change, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q259816 SMS: Changes to the Way SMS Logon Server Manager Handles Inactive
	  Sites
	
	For additional information on how to obtain the latest Systems Management Server
	2.0 service pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the number of threads assigned to LSM, use the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Max Concurrent Threads for Updating BDCs value in the following
	  registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components\SMS_NT_Logon_Server_Manager
	
	3. On the Edit menu, click DWORD.
	
	4. Type the appropriate number of threads, and then click OK.
	
	5. Quit Registry Editor.
	
	Additional query words: prodsms multi-thread multi-threaded
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
