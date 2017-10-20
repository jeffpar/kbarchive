---
layout: page
title: "Q152235: Monitor Service Stops Immediately After Being Started"
permalink: /kb/152/Q152235/
---

## Q152235: Monitor Service Stops Immediately After Being Started

{% raw %}

	Article: Q152235
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Monitor.exe and Datalog.exe utilities from the "Windows NT
	Resource Kit," the Monitor Service starts, then immediately stops.
	
	The Application Event log will show that the service was started and stopped at
	the exact same time:
	
	  502 - Service started with configuration file: <filename.pmw>
	  501 - Service started logging data to file <log file path>
	  500 - Service was stopped.
	
	You may also receive the following error message in the System Event log:
	
	  Event ID: 7005   Source: Service Control Manager
	  Description:     The RpcImpersonateClient call failed with the
	                   following error: No security context is available to
	                   allow impersonation.
	
	CAUSE
	=====
	
	In Windows NT 3.51, the Language setting in the International Control Panel tool
	is set to one of the following:
	
	  English (Canadian)
	  English (Irish)
	  English (New Zealand)
	
	In Windows NT 4.0, the Language setting in the Regional Settings Control Panel
	tool is set to one of the following:
	
	  English (Belize)
	  English (Canadian)
	  English (Caribbean)
	  English (Ireland)
	  English (Jamaica)
	  English (New Zealand)
	  English (South Africa)
	  English (Trinidad)
	
	NOTE: This behavior does not occur with any other English language settings.
	
	RESOLUTION
	==========
	
	Use one of the following Language settings:
	
	  English (Australian)
	  English (United Kingdom)
	  English (United States)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT versions listed
	at the beginning of this article. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
