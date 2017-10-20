---
layout: page
title: "Q155626: SMS: Invwin32 Fails After Restarting on Windows NT Servers"
permalink: /kb/155/Q155626/
---

## Q155626: SMS: Invwin32 Fails After Restarting on Windows NT Servers

{% raw %}

	Article: Q155626
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a Windows NT Server that is not an SMS Logon Server, if the Inventory Agent
	Service (Invwin32.exe) is restarted, it fails to do inventory. The Invwin32.log
	file will show the following errors:
	
	  
	
	  SMS 1.2
	  -------
	  Sleeping 1440 minutes.
	  SMS root directory: c:\sms\logon.srv.
	  DOMAIN.INI path: c:\sms\logon.srv\DOMAIN.INI.
	  SMS.INI reports version 786, DOMAIN.INI reports version 0.
	  Looking for c:\sms\logon.srv\x86.bin\cli_nt.exe and
	  c:\sms\logon.srv\DOMAIN.INI.
	  c:\sms\logon.srv\x86.bin\cli_nt.exe does not exist.  Waiting 1 minute...
	
	  SMS 1.1
	  -------
	  Root directory =C:\sms\logon.srv
	  Domain.ini Path path = C:\sms\logon.srv\domain.ini
	  SMS.ini and domain.ini have different .ini file versions, call client
	  setup
	  (692 vs. 0)
	  Looking for C:\SMS\logon.srv\x86.bin\cli_nt.exe
	  C:\sms\logon.srv\domain.ini
	  C:\sms\logon.srv\x86.bin
	  \CLI_NT.exe does not exist, waiting
	
	CAUSE
	=====
	
	Invwin32 attempts to find the path to the Logon.srv directory when it starts its
	cycle. If it is not given a path explicitly with the use of the /L parameter, it
	attempts to get one by using the location where it was executed from. If
	Invwin32 was executed from a Helper.srv directory on the local hard disk drive,
	SMS assumes that a Logon.srv directory also exists on that local drive.
	
	However, the Logon.srv directory does not exist locally on Windows NT servers
	that are not SMS Logon servers. When the SMS Site Configuration Manager service
	originally installed and started the Inventory Agent on the Server, it started
	it with the following parameter:
	
	      /L:\\<site server>\SMS_SHR
	
	As a result, you see the following entries in the log file:
	
	     SMS root directory: \\ALADRIEL\SMS_SHR.
	     DOMAIN.INI path: \\ALADRIEL\SMS_SHR\DOMAIN.INI.
	     Copy list file: \\ALADRIEL\SMS_SHR\cl_nt.txt
	
	However, Site Config Manager does not place the /L parameter in the registry key
	for the Inventory Agent Service. Therefore, if the Invwin32 service is restarted
	it starts without the /L parameter and defaults to looking for the Logon.srv
	directory on the local hard disk drive.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the ImagePath parameter in the Registry
	Editor, as follows:
	
	WARNING: Using Registry Editor can cause serious, system-wide errors that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start the Registry Editor.
	
	2. In the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\SMS_INVENTORY_AGENT_NT
	
	3. Manually add
	
	  /L:\\<siteserver>\SMS_SHR
	
	  after the executable file for the ImagePath parameter.
	
	NOTE: If Site Config Manager has to reinstall the Inventory Agent service, it may
	reset the registry settings and the ImagePath parameter will have to be modified
	again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms member standalone domain controller
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
