---
layout: page
title: "Q237896: Enhanced GET_LU_STATUS Incorrectly Indicates SyncPoint Support"
permalink: /kb/237/Q237896/
---

## Q237896: Enhanced GET_LU_STATUS Incorrectly Indicates SyncPoint Support

{% raw %}

	Article: Q237896
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server version 4.0 Service Pack 3 (SP3) includes an enhanced APPC
	GET_LU_STATUS function where it is possible to determine whether a Local APPC LU
	is configured with SyncPoint support. However, this new GET_LU_STATUS function
	may incorrectly return syncpoint = AP_YES, causing TP_STARTED (with
	syncpoint_rqd = AP_YES) to fail with the following error message:
	
	  primary_rc = X'0001' (AP_PARAMETER_CHECK)
	  secondary_rc = X'00000003' (AP_BAD_LU_ALIAS)
	
	For more information on this function, see the following Knowledge Base article:
	
	  Q235406 SNA Server Support for External Attach Managers
	
	CAUSE
	=====
	
	GET_LU_STATUS returns syncpoint = AP_YES if the SyncPoint Support check box is
	enabled for a Local APPC LU, even if the client computer name field is not
	filled in properly, or contains a computer name that is not the same as the
	computer where the TP_STARTED is issued. SNA Server Manager or the MMC (and the
	SNACFG command line tool) should require the configuration of the client
	computer name field when the SyncPoint Support check box is checked for a Local
	APPC LU.
	
	WORKAROUND
	==========
	
	If a Local APPC LU is to be used with SyncPoint-enabled applications. Both the
	SyncPoint Support check box and the client computer name field must be
	configured.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	
	=============================================================================
	

{% endraw %}
