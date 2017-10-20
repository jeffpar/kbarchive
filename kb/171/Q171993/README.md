---
layout: page
title: "Q171993: GET_LU_STATUS May Return PARAMETER_CHECK/BAD_REMOTE_LU_ALIAS"
permalink: /kb/171/Q171993/
---

## Q171993: GET_LU_STATUS May Return PARAMETER_CHECK/BAD_REMOTE_LU_ALIAS

{% raw %}

	Article: Q171993
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When calling GET_LU_STATUS to retrieve the status of a particular APPC LU's Sync
	Point conversation state, the following error may be returned:
	
	  primary_rc = 0x0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 0x02000003 (AP_BAD_REMOTE_LU_ALIAS)
	
	This error can be returned by SNA Server 3.0 if the Local APPC LU has never had a
	session with a Remote APPC LU since the SNA Server service has been started.
	
	This error should be treated with the same meaning as if GET_LU_STATUS had
	returned active_sess = 0.
	
	MORE INFORMATION
	================
	
	When using SNA Server 3.0, it is not necessary to configure explicit APPC LU
	partnerships (partnering Local APPC LU, Remote APPC LU, and an APPC Mode). If a
	Local APPC LU is not partnered with a remote LU and mode, the above
	GET_LU_STATUS error will be returned after the SNA Server service is initially
	started.
	
	However, if partnerships are defined in SNA Server 3.0, using the SNACFG.EXE
	command, then the above error would not occur.
	
	
	To define a partnership using SNACFG.EXE, use the following command:
	
	SNACFG APPCLLU servername:locallu /ADDPARTNER:remotelu,mode,connection
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
