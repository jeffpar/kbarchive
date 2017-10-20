---
layout: page
title: "Q127929: Systems Management Server: Error 5016 When Running INVMac"
permalink: /kb/127/Q127929/
---

## Q127929: Systems Management Server: Error 5016 When Running INVMac

{% raw %}

	Article: Q127929
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
	
	When you run INVMac (Inventory Agent program for Macintosh client computers) for
	Microsoft Systems Management Server, the following error message appears:
	
	  Error 5016 in file shicsetting.cp
	
	CAUSE
	=====
	
	This error occurs when INVMac on the Macintosh client computer is not able to
	find the server.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Ensure the information in the [AppleServers] section of the SMS.INI file on
	  the Macintosh client computer is correct as follows:
	
	     [AppleServers]
	     CurrentLogonServer=<zone>@<server name>
	     Server1=<zone>@<server name>
	
	2. Ensure that the DOMAIN.INI file contains the correct server information.
	
	  If the SMS.INI file does not exist and the DOMAIN.INI file is located in
	  Microsoft SMS system folder, then the Macintosh client computer was installed
	  before the server updated the DOMAIN.INI file.
	
	3. If a Macintosh client computer is not using Microsoft authentication, ensure
	  that the properties of the SMS_SHR Macintosh volume allows Guest access. To
	  do this, select "View/Modify Volumes" from the MacFile menu of the Windows NT
	  File Manager. Select SMS_SHR and choose Properties. Ensure that the "Guest
	  can use this volume" option is selected.
	
	4. Ensure that the SMS Server is operational.
	
	5. Ensure the network is operational.
	
	6. Reset the Macintosh network connection in the Network Control Panel of the
	  Macintosh client computer.
	
	7. Ensure that the SMS Logon Server is running Services for Macintosh.
	
	Additional query words: prodsms sfm mac SMS "No Server" System
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
