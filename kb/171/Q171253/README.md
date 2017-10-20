---
layout: page
title: "Q171253: Twinax Connections Fail"
permalink: /kb/171/Q171253/
---

## Q171253: Twinax Connections Fail

{% raw %}

	Article: Q171253
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A twinaxial connection goes to an Active state in SNA Server Manager after the
	connection is started, but users are unable to get active APPC sessions on an
	AS/400 through the twinaxial connection.
	
	The System Operator Log (QSYSOPR) on the AS/400 may contain a message similar to
	the following after the twinaxial connection on the SNA Server is activated:
	
	  Message ID: CPI6002
	  Message: Error detected during TDLC automatic configuration.
	  Cause: Your session has ended because of an error found during the
	  automatic configuration by twinaxial data link control (TDLC) for device
	  <device name>. The device has been varied off.
	
	NOTE: The System Operator Log on the AS/400 can be accessed by entering the
	following command on an AS/400 command prompt:
	
	  "DSPMSG QSYSOPR" (without the quotation marks)
	
	The following event may also be logged in the Windows NT Application Event Log on
	the SNA Server computer:
	
	  Event ID: 96
	  Description: Local APPC TP start failed:
	
	  Primary_rc = F004
	  Secondary_rc = 010000F0
	  TP name = <name of TP>
	
	This problem does not occur when you upgrade SNA Server 2.11 to SNA Server 3.0.
	
	CAUSE
	=====
	
	The problem is caused by the way SNA Server 3.0 saves the twinaxial connection
	properties in the SNA Server configuration. The twinaxial connection is saved as
	a Peer connection, as are all other connections to AS/400s. The problem is that
	twinaxial connections are not saved with all of the connection properties that
	other Peer connections include, such as Peer DLC Role and XID Type.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Install SNA Server 2.11 and then upgrade to SNA Server 3.0 after getting the
	  twinaxial connection to work under SNA Server 2.11.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	After you apply the updated binary file, do the following so the twinaxial
	connection will successfully connect to the AS/400:
	
	1. Stop and restart the SnaBase service.
	
	2. Save the SNA Server configuration. If the Save option is greyed out in
	
	SNA Server Manager, some kind of change will need to be made in the configuration
	before the configuration can be saved.
	
	MORE INFORMATION
	================
	
	The problem is that twinaxial connections are not saved with all of the
	connection properties that other Peer connections include, such as Peer DLC Role
	and XID Type. This results in an incorrect sequence when activating a twinaxial
	connection, as shown below:
	
	  SNA Server                Twinax Link Service
	  ----------                -------------------
	  Open Link Request   -->
	                     <--    Open Link RSP OK
	  Open Stat Request   -->
	                     <--    Open Stat RSP OK
	                     <--    DLCST STCD
	                     <--    DLCST RQOS
	  DLCST SXID          -->
	                     <--    DLCST RQOS
	
	In this sequence, the XID negotiation, shown as SXID and RQOS messages, is done
	after the Station Contacted (DLCST STCD) message.
	
	The correct sequence when activating a Peer connection is shown below:
	
	  SNA Server                Twinax Link Service
	  ----------                -------------------
	  Open Link Request   -->
	                     <--    Open Link RSP OK
	                     <--    DLCST RQOS
	  DLCST SXID          -->
	                     <--    DLCST RQOS
	  DLCST SXID          -->
	                     <--    DLCST RQOS
	 Open Stat Request    -->
	                     <--    Open Stat RSP OK
	                     <--    DLCST STCD
	
	In the correct sequence, the XID negotiation occurs before the Open Station (Open
	Stat) and Station Contacted messages.
	
	SNA Server has been updated to correctly save the twinaxial connection with all
	of the Peer connection properties and to do the XID negotiation before it does
	the Open Station sequence.
	
	In addition, the Twinaxial connection properties page will be updated to include
	a System Identification page. This page will include configuration options for
	the Local Node Name, Remote Node Name, XID Type, and Peer DLC Role.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
