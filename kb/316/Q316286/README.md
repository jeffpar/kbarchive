---
layout: page
title: "Q316286: APPC Print Jobs Use 6 LPI Even if Session Configured for 8 LPI"
permalink: /kb/316/Q316286/
---

## Q316286: APPC Print Jobs Use 6 LPI Even if Session Configured for 8 LPI

	Article: Q316286
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced Program-to-Program Communications (APPC) print jobs default to a
	setting of 6 lines per inch (LPI), even though the APPC print session is
	configured to use a setting of 8 LPI.
	
	NOTE: This behavior does not occur if the APPC print session is configured to use
	a Printer Definition Table (PDT).
	
	CAUSE
	=====
	
	This behavior occurs because the APPC print provider (Ppd5250.dll) does not
	honor the LPI setting configured in SNA Manager for APPC print sessions. The LPI
	value is always overwritten with the default value of 6 LPI.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
