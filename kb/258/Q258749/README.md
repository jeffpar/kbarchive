---
layout: page
title: "Q258749: Terminal Server May Hang with &quot;STOP 0X0000001E in Cdm.sys&quot;"
permalink: /kb/258/Q258749/
---

## Q258749: Terminal Server May Hang with &quot;STOP 0X0000001E in Cdm.sys&quot;

{% raw %}

	Article: Q258749
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbTermServ
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Terminal Server that is running Citrix MetaFrame 1.0, you may
	receive a "STOP: 0x0000001e in Cdm.sys" error message and the Terminal Server
	may stop responding (hang). Independent Computing Architecture (ICA) client
	sessions may hang and not reconnect.
	
	The following event may be logged in the System event log before the Save Dump
	entry:
	
	  Event ID: 3025
	  Source: CDM
	  Description: \Device\CdmRedirector X (where X is the client session number)
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Citrix to obtain the Me100068.exe hotfix:
	
	  http://www.citrix.com
	
	Additional query words: stop 0x1e winntstop winnt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbTermServ 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
