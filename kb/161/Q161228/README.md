---
layout: page
title: "Q161228: INIT-SELF Retry Functionality for SNA Server"
permalink: /kb/161/Q161228/
---

## Q161228: INIT-SELF Retry Functionality for SNA Server

{% raw %}

	Article: Q161228
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When automatically activating a dependent LU6.2 session, SNA Server sends an
	INIT-SELF command to the host, to request that the host send a BIND command to
	start the LU6.2 session. If the host sends a negative response to the INIT-SELF
	request, SNA Server does not resend the INIT-SELF command unless an APPC or CPIC
	application attempts to allocate a new conversation on this dependent LU6.2
	session (using [MC_]ALLOCATE or CMINIT). Automatic activation for a dependent
	LU6.2 session is configured on the APPC mode definition by setting the Automatic
	Activation Limit to "1."
	
	Retry logic for INIT-SELF has been added to SNA Server. This allows SNA Server to
	retry an INIT-SELF for a dependent LU 6.2 after it has been rejected by the
	host.
	
	NOTE: SNA Server 3.0 does not support the automatic activation of LU6.2 sessions,
	so session activation only occurs after an SNA Server APPC or CPIC application
	attempts to allocate a conversation over the dependent LU 6.2 LU's, or if
	initiated by the host.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The following two new registry parameters are now supported:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaServer\Parameters
	
	INITSLFRETRIES: REG_SZ: (default 0) This parameter specifies the number of times
	an INITSELF is retried.
	
	INITSLFTICKS: REG_SZ: (default 2) This parameter specifies the number of tick
	periods (about 5 seconds) between each retry.
	
	The SNA Server Service must be restarted after making these changes.
	
	Even though this functionality was not included with SNA Server 2.11, a fix that
	provides this functionality is available for SNA Server 2.11 Service Pack 1.
	
	
	Additional query words: dependent lu 6.2 bind prodsna
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : WINDOWS:2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
