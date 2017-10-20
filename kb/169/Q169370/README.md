---
layout: page
title: "Q169370: SNA Server Print Stuck in InSession Status"
permalink: /kb/169/Q169370/
---

## Q169370: SNA Server Print Stuck in InSession Status

{% raw %}

	Article: Q169370
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print through the SNA Server Print Service, a print session may get
	stuck in InSession status and never print. This usually happens after many print
	jobs have printed to this logical SNA Server Printer.
	
	The following trace excerpt from the Sprtintx.trc file shows where this problem
	occurs. The Windows NT api call, CreateFontIndirect(), returns a null pointer,
	thus giving the following error message:
	
	  winvprtj.c(762) FONTM ERROR CreateFontIndirect failed, rc=0x20000017
	
	When this error occurs, the SNA Server Print service attempts to cycle through
	initializing the Windows NT print again, but continues to fail with the same
	error. The administrator must stop the SNA Server Print service and restart to
	temporarily correct this problem.
	
	NOTE: If the print session is configured for a PDT file, the result is that the
	printer prints some errors at the top of the page.
	
	CAUSE
	=====
	
	There are two font handle leaks:
	
	- When fonts are created and then rejected as the wrong width, they are not
	  subsequently deleted. The Sprtintx.trc shows the rejection as:
	
	  winvprtj.c(807) FONTM WARNING selected font is too wide at 61
	
	- The fonts created and stored in an array to use in a document are not
	  properly freed when the document is finished printing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 sp1. This
	problem was corrected in the latest SNA Server version 3.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
