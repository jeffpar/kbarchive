---
layout: page
title: "Q301363: Registry Changes in Host Integration Server 2000 End User Client"
permalink: /kb/301/Q301363/
---

## Q301363: Registry Changes in Host Integration Server 2000 End User Client

{% raw %}

	Article: Q301363
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are running Host Integration Server (HIS) 2000 End User Client and
	making a configuration modification, (either through the SNA resource location
	or by manually editing the registry, for example, adding Keepalive), the changes
	do not exist when another user logs on to the same computer.
	
	For additional information about adding Keepalive, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q150511 Preventing SNA Server Keepalives on Idle LAN Connections
	
	MORE INFORMATION
	================
	
	During the installation of HIS 2000 End User Client, all registry information is
	added to the HKEY_LOCAL_MACHINE registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNABase\Parameters
	
	When the HIS 2000 End User Client is started for the first time, the SNABase
	program copies the SNABase registry entries from HKEY_LOCAL_MACHINE to
	HKEY_CURRENT_USER:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\SNABase\Parameters
	
	If a user logs on and the registry data (the SNABase key) has already been copied
	to HKEY_CURRENT_USER, any subsequent changes to the SNABase key under
	HKEY_LOCAL_MACHINE will not be copied over to HKEY_CURRENT_USER for that user.
	
	If entries to the SNABase key have been changed under HKEY_LOCAL_MACHINE since
	the HIS 2000 End User Client was first installed, any new user that has never
	run the HIS 2000 End User Client before on this computer, gets the updated
	SNABase key under HKEY_LOCAL_MACHINE as it is copied over to HKEY_CURRENT_USER.
	
	This behavior does not occur with the SNA Server 3.0 or 4.0 Microsoft Windows 95
	Client because registry entries are written only to HKEY_LOCAL_MACHINE.
	
	These changes were made to accommodate better support for customers running the
	HIS 2000 End User Client on Windows Terminal Server.
	
	
	Additional query words: HIS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
