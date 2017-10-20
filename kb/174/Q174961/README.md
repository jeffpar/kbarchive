---
layout: page
title: "Q174961: SMS: Client Services Do Not Upgrade Automatically"
permalink: /kb/174/Q174961/
---

## Q174961: SMS: Client Services Do Not Upgrade Automatically

{% raw %}

	Article: Q174961
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying a Systems Management Server service pack or initiating a
	site-wide change to one or more of the Systems Management Server client
	services, the Windows NT client is not automatically updated. The update only
	occurs when the client has completed running the client setup program,
	Cli_nt.exe. This program is normally called when either Smsls.bat or Runsms.bat
	is run.
	
	WORKAROUND
	==========
	
	To work around this problem, ensure that users run the Systems Management Server
	script and log off their Windows NT systems after applying a Systems Management
	Server service pack or making a site-wide change to the client services.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This can be a problem for users that rarely log off their Windows NT systems.
	This may result in a situation where an older version of the Systems Management
	Server Client Inventory service is creating invalid inventory (.raw) files. For
	more information on this problem, see the following article in the Microsoft
	Knowledge Base:
	
	  Q169038 SMS: Event ID 132 Occurs After Applying SMS 1.2 Service Pack 2
	
	With the release of Systems Management Server 1.2 Service Pack 3, new
	functionality has been introduced. For users who are logged on and have
	Climonnt.exe running, Systems Management Server will check the CopyListVersion
	line in the Cl_nt.txt file when a .raw file is created. If a difference is
	detected between the local CopyListVersion store in the local Sms.ini file, a
	.ccr file will be created to have the services updated on the client computer
	running Windows NT.
	
	For servers running the SMS_INVENTORY_AGENT_NT service, Systems Management Server
	will also generate a .ccr file to have the client services updated when a
	difference in the CopyListVersion value is detected.
	
	When a value for CopyListVersion is detected, the service (CLIMONNT or INVWIN32)
	calls Cli_nt.exe. Then client setup actually creates the .ccr file. If the
	Client Configuration Manager service finds no need to update any of the client
	services, the client will not be prompted to restart.
	
	Additional query words: prodsms clisetup
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
