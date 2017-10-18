---
layout: page
title: "Q229636: NvRunCmd Terminates if SNA Application Internal Trace Is Enabled"
permalink: kb/229/Q229636/
---

## Q229636: NvRunCmd Terminates if SNA Application Internal Trace Is Enabled

	Article: Q229636
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NvRunCmd service may terminate unexpectedly when SNA Application internal
	tracing is enabled. Control Panel Services shows the NvRunCmd service with the
	status as "Stopped."
	
	CAUSE
	=====
	
	NvRunCmd writes a trace line after a particular function call, but before the
	corresponding GetLastError() function call. Therefore, the value returned by
	this function call is incorrect and causes the NvRunCmd to terminate. As a
	result, the NvRunCmd Service receives a shutdown request and the service is
	stopped.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2.. This problem was first
	corrected in SNA Server version 3.0 Service Pack 4 and SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	The above symptoms can be seen only when the Trace Flag "Debug Conditions" is
	selected in the SNA Application internal trace property sheet.
	
	If this flag is not enabled, NvRunCmd does not encounter this error, even if all
	other available flags are selected.
	
	Additional query words: NetView NvrunCmd
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
