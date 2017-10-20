---
layout: page
title: "Q173067: Print Session Stops Responding When Printing to File"
permalink: /kb/173/Q173067/
---

## Q173067: Print Session Stops Responding When Printing to File

{% raw %}

	Article: Q173067
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a print session is configured to print to a file and you have selected the
	Monitor Job option, the print session stops responding. The only way to end the
	session is to deactivate the Print Server associated with the print session.
	This does not occur when printing to a locally attached or network printer.
	
	CAUSE
	=====
	
	When the Monitor Job option is selected, the print session waits for
	notification from the printer before continuing the print job; printing to a
	file does not provide notification.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, when you select both Print To File and Monitor Job, a
	message appears stating that Print To File and Monitor Job cannot both be set
	appears when you exit the Printing tab. This pop-up message also appears when
	you exit the Transparency/GDI page.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
