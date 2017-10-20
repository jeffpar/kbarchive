---
layout: page
title: "Q180705: APPC DISPLAY Call May Return AP_COMM_SUBSYSTEM_ABENDED."
permalink: /kb/180/Q180705/
---

## Q180705: APPC DISPLAY Call May Return AP_COMM_SUBSYSTEM_ABENDED.

{% raw %}

	Article: Q180705
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Win32 APPC application calls the SNA Server DISPLAY function to retrieve a
	list of all configured remote APPC LU's (in other words, sets the plu_def_info
	option), the following symptoms may occur:
	
	- the DISPLAY call may return with the following error:
	
	  primary_rc = 0xF003 (AP_COMM_SUBSYSTEM_ABENDED)
	
	- The following event may appear in the Windows NT application event log:
	
	  Event ID: 706
	  Source: SNA Server
	  Description:
	  Connection to client <client>has been aborted due to too many (100)
	  pending writes.
	
	This problem has been observed when configuring IBM Personal Communications for
	the AS/400 (version 4.1) while using the SNA Server Windows NT or Windows 95
	client software. This problem occurs when the SNA Server is configured with a
	large number of local APPC LU/remote APPC LU/mode partnerships. In the
	customer's failure scenario, there were over 2300 local APPC LU's configured,
	each partnered with up to 4 remote APPC LU's.
	
	CAUSE
	=====
	
	The SNA Server was incorrectly reporting information on all the local APPC LU's
	defined, even though the application was only requesting remote APPC LUs (via
	the plu_def_info option). When attempting to send this large response to the
	client's DISPLAY request, the SNA Server exceeded 100 consecutive pending write
	requests to the client, causing the default "MaxPendingWrites" counter to be
	exceeded. For more information about Event 706 and MaxPendingWrites, see the
	following article in the Microsoft Knowledge Base:
	
	  Q142037 SNA Server Fails to Release Memory in SNA TCP/IP Interface DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2 and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
