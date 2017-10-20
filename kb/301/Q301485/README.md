---
layout: page
title: "Q301485: INFO: Services Feature Missing from SAK Unattended Install"
permalink: /kb/301/Q301485/
---

## Q301485: INFO: Services Feature Missing from SAK Unattended Install

{% raw %}

	Article: Q301485
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Server Appliance Kit (SAK), version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The unattended install command for the Server Appliance Kit leaves out the
	Services feature, which is a hidden subfeature of the FoldersAndShares feature.
	This article describes the command to include this feature.
	
	MORE INFORMATION
	================
	
	The following command line performs a network attached storage (NAS)
	installation that includes the hidden Services feature:
	
	  SASetup.exe /v"ADDLOCAL=BackEndFramework,WebUI,WebCore,SetDateAndTime,
	  Set_Language,UsersAndGroups,NetworkSetup,Logs,SystemBackup,AlertEmail,
	  Shutdown,RemoteDesktop,SWUpdate,SysInfo,FoldersAndShares,Services,
	  DisksAndVols /qn"
	
	  NOTE: This is a single command; line breaks were added here for readability.
	
	Additional query words: sak services sasetup
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbSAK200 kbAudDeveloper kbSAKSearch
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
