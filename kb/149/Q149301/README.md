---
layout: page
title: "Q149301: Barr X.25 Setup Cancel Button Terminates Setup"
permalink: /kb/149/Q149301/
---

## Q149301: Barr X.25 Setup Cancel Button Terminates Setup

	Article: Q149301
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The BARR x.25 link driver incorrectly terminates the setup of the link service.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Install the Barr x.25 link driver.
	
	2. In the X.25 Link Service Setup dialog box, select the Details button.
	
	3. In the Barr X.25 Device Driver Setup dialog box, select the Cancel button.
	
	This will cancel the Setup of the Barr X2.5 link service, not the details of the
	Barr X2.5 adapter. The link service setup screen will not clean itself up until
	the SNA Server setup is finished.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11. This problem was corrected in the latest Service Pack for SNA Server. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.11 sp1 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
