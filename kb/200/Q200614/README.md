---
layout: page
title: "Q200614: SMS: Setup Uninstall Fails to Clean Up Network Monitor Registry"
permalink: /kb/200/Q200614/
---

## Q200614: SMS: Setup Uninstall Fails to Clean Up Network Monitor Registry

{% raw %}

	Article: Q200614
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When uninstalling Systems Management Server (SMS), Network Monitor registry
	entries are not removed. The location of the registry entries for Network
	Monitor was not created by the SMS Setup program; and therefore are not removed
	during an uninstall.
	
	MORE INFORMATION
	================
	
	The Network Monitor registry entries were created by the operating system.
	
	See the following entries below:
	
	HKEY_CURRENT_USER\Software\Microsoft\Network Monitor
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography\MachineKeys\NetMon
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\bh
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\nm
	HKEY_USERS\S-1-5-21-1175585662-1823761869-378935785-500\Software\Microsoft\Network Monitor
	
	By design, only the System Management Server components that were installed by
	the Setup program are removed during a uninstall.
	
	Additional query words: prodsms de-install
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
