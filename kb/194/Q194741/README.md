---
layout: page
title: "Q194741: StarQuest ODBC Sessions Through SNA Server Fail When Using IIS"
permalink: /kb/194/Q194741/
---

## Q194741: StarQuest ODBC Sessions Through SNA Server Fail When Using IIS

{% raw %}

	Article: Q194741
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	ODBC sessions using the StarQuest ODBC driver bundled with SNA Server 4.0
	Service Pack 1 (SP1) fail to start when connecting through IIS. The following
	error is returned by SNA Server's APPC library when this problem occurs:
	
	  Primary Return Code: F004 (AP_COMM_SUBSYSTEM_NOT_LOADED)
	
	ODBC connections through applications (that is, MSQuery) other than Internet
	Information Server (IIS) do not exhibit this problem. In addition, this problem
	did not occur when using SNA Server 4.0 and earlier.
	
	Also, Event ID 705 may get logged when the session fails to connect. The
	following error is logged with APPC Application Event ID 705:
	
	  Logon Failed.
	
	  EXPLANATION
	  Connection request failed due to data security.
	  Access denied --- Error Code : 44
	
	CAUSE
	=====
	
	When an ODBC connection through IIS is started, SNA Server's DMOD initialization
	fails because the initialization is started by a thread that is impersonating
	another user. In this case, the impersonated user is likely to be
	IUSR_<computername> or whatever the IIS account has been changed to. This
	occurs because the impersonating thread does not have the rights needed to
	modify any of the process security settings.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 SP1. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After applying the hotfix, the DMOD initialization will be done in a thread that
	has the necessary rights to modify the process security settings.
	
	
	By default, when IIS is installed, it creates a user account called
	IUSR_<computername>, where <computername> is the name of the
	computer on which IIS is running. When a request is received by IIS from an
	application, IIS will impersonate the IUSR_<computername> account in order
	to execute any code or access any files that are involved in the request.
	
	For more information on IIS security, please see the following Microsoft
	Knowledge Base article:
	
	  ARTICLE-ID: <LINK TYPE="ARTICLE" VALUE="Q158229">Q158229</LINK>
	
	  TITLE     : Security Ramifications for IIS Applications
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : :4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
