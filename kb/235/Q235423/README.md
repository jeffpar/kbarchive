---
layout: page
title: "Q235423: Cannot Open Config File if CPI-C Symbolic Name Has Invalid LU"
permalink: kb/235/Q235423/
---

## Q235423: Cannot Open Config File if CPI-C Symbolic Name Has Invalid LU

	Article: Q235423
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 3.0SP4, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening an SNA Server configuration file (for example Com.cfg) results in the
	following error message:
	
	  SnaOle
	
	  The Partner LU specified for the CPI-C Symbolic Destination Name does not
	  exist.
	
	If you click the OK button in the error dialog box, a blank screen is displayed
	in the SNA Server Manager.
	
	Attempting to dump the contents of the same SNA Server configuration file using
	SNA Server's offline configuration tool (Snacfg.exe.EXE) results in the
	following error:
	
	  Config file is: <path>\<configuration file name>
	  The Partner LU specified for the CPI-C Symbolic Destination Name does not
	  exist.
	
	CAUSE
	=====
	
	An SNA Server Manage component incorrectly handles a non-fatal error, which
	results in the failure to open a configuration file that contains a CPI-C
	Symbolic Destination Name that refers to a Partner LU that no longer exists in
	the configuration file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This problem can occur if an SNA Server configuration file contains a CPI-C
	Symbolic Destination Name that is configured with a Partner LU Name that no
	longer exists in the configuration. When you delete Remote APPC LUs from an SNA
	Server configuration, existing CPI-C Symbolic Destination Names should be
	checked to make sure that they do not refer to these deleted APPC LUs.
	
	CPI-C Symbolic Destination Names are global to the SNA Server subdomain, so this
	problem may also occur when you remove an SNA Server computer from the
	configuration, as removing the SNA Server computer will also remove all APPC LUs
	defined for that SNA Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
