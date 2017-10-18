---
layout: page
title: "Q243384: SNA LU3 Printing Does Not Support 3270 Some Data Stream Orders"
permalink: kb/243/Q243384/
---

## Q243384: SNA LU3 Printing Does Not Support 3270 Some Data Stream Orders

	Article: Q243384
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 (all versions), 3.0 (all SP), 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA LU3 printing does not support the following 3270 data stream orders:
	
	   - Start Field Extended (SFE, X'29')
	
	- Set Attribute (SA, X'28")
	
	- Modify Field (MF, X'2C')
	
	The Start Field (SF, X'1D') order is converted to a blank (X'40').
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
