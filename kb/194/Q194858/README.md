---
layout: page
title: "Q194858: SNA Server Manager Shows Incorrect Status For Print Sessions"
permalink: /kb/194/Q194858/
---

## Q194858: SNA Server Manager Shows Incorrect Status For Print Sessions

{% raw %}

	Article: Q194858
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Manager may not show the correct status for its configured print
	sessions. Some of the print sessions may show an Inactive state when they are
	actually in an Active or In Session state.
	
	NOTE: This same problem may result in SNA Server Manager reflecting inaccurate
	status for objects other than print sessions.
	
	In addition, there may be other issues that cause SNA Server Manager to show
	inaccurate status for configured objects. For a description of one of these
	other issues, please refer to the following Microsoft Knowledge Base article:
	
	  Q185690 SNA Server Manager Not Reflecting Correct Status
	
	CAUSE
	=====
	
	If an instance of SNA Server Manager is running and an instance of the SNA
	Manage Agent service is restarted, then notification of object creation is
	sometimes passed from the Manage client (Mngcli.exe) to the SNA Manage Agent.
	This results in other instances of SNA Server Manager not getting informed of
	all the objects that exist. These other instances of SNA Server Manager would
	then show an incorrect status for some of its objects (that is, Print Sessions).
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, and 3.0 Service Pack 3.
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	
	
	For information on a related issue in SNA Server 4.0, please refer to the
	following Knowledge Base article:
	
	  Q194931 Incorrect Number of Active Users Displayed in SNA Manager
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
