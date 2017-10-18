---
layout: page
title: "Q175341: Multipage LU3 Print Jobs Don't Form Feed Correctly"
permalink: kb/175/Q175341/
---

## Q175341: Multipage LU3 Print Jobs Don't Form Feed Correctly

	Article: Q175341
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply SNA Server 3.0 Service Pack 2 (SP2), Form Feeds between pages of
	a multipage LU3 host print job may not be honored. When this problem occurs, the
	beginning of a page is printed at the end of the previous page. This also occurs
	when the host sends multiple one-page LU3 print jobs in succession.
	
	The same LU3 host print job printed correctly before you applied SP2.
	
	CAUSE
	=====
	
	This problem occurs if the LU3 print job contains the following sequence at the
	end of a page of data
	
	  0C 0D 19      *or*      0C 19
	
	where
	
	  0C = form feed (FF)
	  0D = carriage return (CR)
	  19 = end of medium/end of message (EM)
	
	The 3270 print provider for the host print service is not correctly handling
	sequences that contained an FF followed by an EM for multipage LU3 host print
	jobs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 3.0
	Service Pack 2 (SP2).
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	With the fix applied, the 3270 print provider correctly handles multipage LU3
	host print jobs that include FFs followed by an EM control code. The updated
	module is <snaroot>\system\ppd3270.dll.
	
	MORE INFORMATION
	================
	
	If extra form feeds occur at the end of a single one-page LU3 host print job or
	at the end of a multipage LU3 host print job, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q172799 Extra Form Feed Printed With LU3 Print Job
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
