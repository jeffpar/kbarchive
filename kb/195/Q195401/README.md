---
layout: page
title: "Q195401: ACTPU(ERP)/ACTLU(ERP) Requests Not Sent To Downstream Systems"
permalink: /kb/195/Q195401/
---

## Q195401: ACTPU(ERP)/ACTLU(ERP) Requests Not Sent To Downstream Systems

{% raw %}

	Article: Q195401
	Product(s): Microsoft SNA Server
	Version(s): 2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	SNA Server fails to send ACTPU(ERP) and ACTLU(ERP) requests to devices connected
	to SNA Server as DSPUs (Downstream PUs) even when it receives ACTPU(ERP) and
	ACTLU(ERP) requests from its upstream connection to a mainframe. In these cases,
	SNA Server sends ACTPU(COLD) and ACTLU(COLD) requests to the DSPUs.
	
	If the DSPU doesn't support ACTPU(COLD) or ACTLU(COLD) requests, the DSPU may
	reject the request with an error response with an IBM Sense Code of 0x'0835'.
	This sense code is defined as Invalid Parameters.
	
	In one reported case, the DSPU was an IBM AIX system running IBM's Communications
	Server for AIX. In this case, the AIX system rejected the ACTLU(COLD) request
	from the SNA Server with a IBM Sense Code of 0x'08350001', where 0x'0001' is the
	offset of the rejected request that caused the problem. Offset 0x'0001' of an
	ACTLU Request contains the setting for the activation type requested, which is
	either COLD or ERP.
	
	Please refer to the IBM SNA Formats Guide (GA27-3136) for more details on the
	ACTPU and ACTLU RUs (Request Units). This manual also includes information on
	IBM Sense Codes.
	
	In addition, the SNA Server may log an event similar to the following in the
	Windows NT Application Event Log when this occurs:
	
	  Event ID: 20
	  Source: SNA Server
	  Description: Negative Response Received on Connection 
	               <connection name>
	  (SENSE = 0835)
	
	CAUSE
	=====
	
	SNA Server was not correctly sending ACTPU(ERP) and ACTLU(ERP) requests to DSPUs
	because it was ignoring the registry entries used to control how ACTPU(ERP) and
	ACTLU(ERP) requests are to be handled.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, 3.0, 3.0 Service Pack 1, 3.0 Service Pack
	2, 3.0 Service Pack 3, 4.0, and 4.0 Service Pack 1. This problem was first
	corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Please refer to the following Knowledge Base articles for more information on
	SNA Server's support of ACTPU(ERP) and ACTLU(ERP) requests:
	
	  ARTICLE-ID: Q138469
	  TITLE     : SNA Server Support for ACTPU (ERP) and ACTLU (ERP)
	
	  ARTICLE-ID: Q153253
	  TITLE     : SNA Server 3270 Sessions Not Recovered with Eicon WAN Server
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In cases where ACTLU(COLD) requests need to be sent to DSPU systems, the
	following registry entry needs to be configured:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaServr\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: ACTLUCOLD
	     Data Type:  REG_SZ
	     Value:      YES
	
	  NOTE: Value can be set to anything. As long as the ACTLUCOLD entry is listed
	  with any value, SNA Server will send ACTLU(COLD) requests to DSPUs.
	
	4. Quit Registry Editor.
	
	
	After applying the update:
	
	- SNA Server always sends ACTPU(ERP) requests to DSPUs unless the ACTPUERP
	  registry entry is set to NO or OFF or 0 as described in the following
	  Knowledge Base Article:
	
	  ARTICLE-ID: Q138469
	  TITLE     : SNA Server Support for ACTPU (ERP) and ACTLU (ERP)
	
	- SNA Server always sends ACTLU(ERP) requests to DSPUs unless the ACTLUCOLD
	  registry is defined as described previously.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
