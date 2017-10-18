---
layout: page
title: "Q180664: SNACFG Fails To Create Print Session When a PDT Is Specified"
permalink: kb/180/Q180664/
---

## Q180664: SNACFG Fails To Create Print Session When a PDT Is Specified

	Article: Q180664
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the SNACFG command line utility to create an SNA Server printer
	session, it may fail with the following error message if a PDT file is specified
	and includes spaces in the name (for example, Active Setup Log.PDT):
	
	  Line No. 1: Error - Bad option specified
	
	CAUSE
	=====
	
	The SNACFG utility does not correctly parse the PDT file name when spaces are
	included in the file name itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 4.0 is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	Additional query words: snacfg printsession pdt pdf
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
