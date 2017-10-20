---
layout: page
title: "Q311899: Shared Folders Service Doesn't Start After Reinstalling HIS 2000"
permalink: /kb/311/Q311899/
---

## Q311899: Shared Folders Service Doesn't Start After Reinstalling HIS 2000

{% raw %}

	Article: Q311899
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 04-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Shared Folders Gateway Service (Sfgw.exe) fails to start if Host Integration
	Server (HIS) 2000 is removed and reinstalled. This occurs on HIS 2000 systems
	that were configured to use the Shared Folders Gateway Service prior to the
	removal of HIS 2000.
	
	CAUSE
	=====
	
	The Shared Folders file system driver (Sffsd.sys) is not unloaded from memory
	when HIS 2000 is removed.
	
	RESOLUTION
	==========
	
	Reboot the Windows NT or Windows 2000 server that HIS 2000 is installed on.
	
	MORE INFORMATION
	================
	
	If the system is rebooted after you remove HIS 2000 and before you reinstall it,
	the problem will not occur.
	
	The following steps illustrate how this problem can be reproduced:
	
	1. Install HIS 2000 Server.
	
	2. Configure an AS/400 shared folder in SNA Manager.
	
	3. Remove HIS 2000 Server.
	
	4. Reinstall HIS 2000 Server.
	
	5. Configure an AS/400 shared folder as was done in step 2.
	
	6. Attempt to start the Shared Folders Gateway Service in SNA Manager.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
