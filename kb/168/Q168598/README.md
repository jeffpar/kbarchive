---
layout: page
title: "Q168598: SMS: NetWare Clients Are Always Verifying Installation"
permalink: /kb/168/Q168598/
---

## Q168598: SMS: NetWare Clients Are Always Verifying Installation

{% raw %}

	Article: Q168598
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running the Systems Management Server logon script and the operating
	system finishes loading, a NetWare client will get the message "Verifying
	Microsoft Systems Management Server client installation...". This indicates that
	the client software has not been completely installed.
	
	CAUSE
	=====
	
	The Nwnetapi.dll file is missing. This file is a NetWare file, and is not
	distributed with Systems Management Server.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the file from your NetWare installation or
	directly from Novell. The file is available for download from Novell's Internet
	Web site,
	
	  http://www.novell.com/.
	
	Place a copy of the file on your Systems Management Server site server in the
	Sms\Site.srv\Maincfg.box\Client.src\X86.bin directory. The Maintenance Manager
	service will copy the file to each of the NetWare logon servers. When this is
	done, the clients will download it the next time the Systems Management Server
	script is run and will then complete the client installation.
	
	MORE INFORMATION
	================
	
	When the Systems Management Server logon script is run on the client, it shows
	the message "Verifying Microsoft Systems Management Server client installation"
	and then continues with the inventory collection. The operating system finishes
	loading. If the message "Verifying Microsoft Systems Management Server client
	installation" appears again, the Systems Management Server client software is
	not completely installed.
	
	If you examine the [WorkstationStatus] section of the Sms.ini file, you will see
	the following line:
	
	     FilesNotDownloaded=NWNETAPI.DLL
	
	Also, the [Local] section of the Sms.ini will have the following line:
	
	     SetupPhase=verify_files
	
	
	Additional query words: prodsms win95 win16 wfw
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
