---
layout: page
title: "Q194935: Printing from S/36 or AS/36 Fails when Using Host Print Server"
permalink: /kb/194/Q194935/
---

## Q194935: Printing from S/36 or AS/36 Fails when Using Host Print Server

{% raw %}

	Article: Q194935
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Host Print Server introduced with SNA Server 3.0 is unable to successfully
	print data from System/36 (S/36) or Advanced System/36 (AS/36) systems. If an
	Advanced Program-to-Program Communications (APPC) print session is defined for
	use with an S/36 or AS/36 system, the APPC print session will usually stay in an
	Inactive or Pending state in SNA Server Manager when it attempts to activate.
	
	CAUSE
	=====
	
	The Host Print Server was not originally designed to differentiate between
	AS/400 and S/36 (or AS/36) printing. Therefore, it does not send the correct
	Program Initialization Parameter (PIP) data to S/36 or AS/36 systems to allow
	for successful initialization of a print device on these systems.
	
	SNA Server 3.0 Service Pack 2 added an update that allowed the System Type for
	APPC print sessions to be specified as either AS/400 or System/36. This option
	was exposed under the APPC tab for an APPC print session in SNA Server Manager.
	When this option is set to System/36, S/36- and AS/36- specific PIP data is set
	to the remote system.
	
	In addition to this change, additional testing revealed that additional
	modifications were needed to allow for additional S/36- and AS/36-specific PIP
	data, and to allow the print sessions to be properly de-allocated and closed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 4.0.
	This problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After applying the update, the APPC print session needs to be configured with
	the System Type set to System/36 in SNA Server Manager under the APPC tab of the
	Print Session Properties dialog box. This causes the Host Print Server to send
	the correct PIP data to the S/36 or AS/36 system to initiate the print session.
	In addition, the AS/400 Device Name parameter under the APPC tab of the Print
	Session Properties dialog box must be set to a two- digit value that specifies
	the Target-ID of the S/36 or AS/36 system.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
