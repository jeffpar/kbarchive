---
layout: page
title: "Q142022: Logon Server Files Not Downloaded on OS/2 and LAN Server"
permalink: /kb/142/Q142022/
---

## Q142022: Logon Server Files Not Downloaded on OS/2 and LAN Server

{% raw %}

	Article: Q142022
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run a Systems Management Server site in Windows NT Server 3.51 Service
	Pack 3 and set up an OS/2 server or an IBM LAN Server as a logon server, files
	for logon servers are not downloaded. However, SMS Admin reports that the logon
	servers are functioning properly.
	
	In addition, Event ID 116 and 117 are logged in the Application log of Event
	Viewer, and an Error 183 (cannot create file when file already exists) appears
	in MAINTMAN.LOG when attempting to create SMS_SHR.
	
	CAUSE
	=====
	
	This problem occurs when Systems Management Server Maintenance Manager is not
	able to verify the file and directory attributes of the OS/2 server or LAN
	Server share. Therefore, Site_Config_Manager fails to copy files to the
	LOGON.SRV directory and create the X86.BIN or SMSID sub-directories.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 3. This problem has been corrected in Windows NT version 3.51 Service Pack
	4.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbSMSSearch kbSMS110
	Version           : winnt:1.1,3.51
	
	=============================================================================
	

{% endraw %}
