---
layout: page
title: "Q169748: SMS: Packages Not Copied to NetWare Distribution Servers"
permalink: /kb/169/Q169748/
---

## Q169748: SMS: Packages Not Copied to NetWare Distribution Servers

{% raw %}

	Article: Q169748
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler kbPCM smsdespooler smspcm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When distributing Systems Management Server packages to a NetWare distribution
	server, you may receive an Event ID 108 error:
	
	  108 Failed to install package to X. Verify the package server is up and
	  running and has sufficient disk space. The SMS service account must exist on
	  the package server and has the same password as the site server, and the
	  service account must have admin privilege. If the package server is a NetWare
	  server, verify the volume exists.
	
	This event is also generated when the Everyone group does not exist on that
	NetWare server.
	
	MORE INFORMATION
	================
	
	The Systems Management Server Despooler fails to set permissions on the package
	directory on the NetWare server because it cannot find the Everyone group.
	
	The Despooler Log shows the following message:
	
	  NWScanObject for user or group EVERYONE; return: ffff
	  6/01/97 3:25:15 PM
	  NWScanObject for user or group EVERYONE; return: ffff
	  6/01/97 3:25:15 PM
	  Failed to set permission on
	  \\Jamal\APPL\SMS\logon.srv\pcmpkg.src\CS100005
	  6/01/97 3:25:15 PM
	
	Additional query words: prodsms id Novell
	
	======================================================================
	Keywords          : kbnetwork kbDespooler kbPCM smsdespooler smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
