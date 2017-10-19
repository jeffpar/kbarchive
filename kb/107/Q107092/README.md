---
layout: page
title: "Q107092: PROFS: Manually Regenerating the PRX Files for Host Access"
permalink: /kb/107/Q107092/
---

## Q107092: PROFS: Manually Regenerating the PRX Files for Host Access

	Article: Q107092
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.3,3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.2, 3.3, 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the host access component of Microsoft Mail Gateway to IBM
	PROFS and OfficeVision, several of the modules and files generated are
	associated with the PROREXX software from the System Center libraries. During
	some installations, the PRX files are not correctly generated, so here is a
	method for manually regenerating them:
	
	  At the CMS prompt, type:
	
	  " PRXNLS " (without the quotation marks)
	
	  These files are generated:
	
	  PRXUME
	  PRXUPA
	  PRXUSY
	  PRXUME
	
	NOTE: File type of the files depends on the version of CMS being used.
	
	
	Additional query words: 3.20 3.30 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS330 kbMailGateIBMPROFS340
	Version           : :3.2,3.3,3.4
	
	=============================================================================
	
