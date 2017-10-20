---
layout: page
title: "Q160783: Err: Users Cannot Log On to a Workstation"
permalink: /kb/160/Q160783/
---

## Q160783: Err: Users Cannot Log On to a Workstation

{% raw %}

	Article: Q160783
	Product(s): Microsoft Windows NT
	Version(s): 2.2c,2000,3.0,3.11,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message is displayed when logging on to a domain using a
	non-Administrative account from a workstation.
	
	Windows NT
	----------
	
	  Your account is configured to prevent you from logging on and using this
	  workstation. Please try another workstation.
	
	Other clients
	-------------
	
	  The user is not allowed to log on from this workstation.
	
	Depending on the client, the associated network message number, 2240, may also be
	included with the above message.
	
	CAUSE
	=====
	
	This message will be displayed if the user account is configured to log on from
	specific workstations. To set this option, select User Properties and click the
	"Logon To" button.
	
	This message will also be displayed if the Windows NT Resource Kit utility, C2
	Configuration Manager (C2Config.exe) has been run on the validating server and
	the "Halt on Audit Failure" security feature is enabled.
	
	When the Security Log size reaches capacity, only Administrators will be able to
	access the server.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, an Administrator should clear the Security Log and run
	C2CONFIG to reset the CrashOnAuditFail value.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q140058
	  TITLE : How To Prevent Auditable Activities When Security Log Is Full
	
	  ARTICLE-ID: Q149393
	  TITLE : CrashOnAuditFail Activates on Shutdown with ProcessTracking
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: permit access policy registry
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbZNotKeyword kbLanManSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbWFW311 kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2c,2000,3.0,3.11,3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
