---
layout: page
title: "Q190739: Print Session Does Not Prompt for Filter DLL"
permalink: /kb/190/Q190739/
---

## Q190739: Print Session Does Not Prompt for Filter DLL

{% raw %}

	Article: Q190739
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Filter check box is selected in the Print Session properties, and no DLL
	file is specified by the user, there is no error indicating that the DLL needs
	to be entered when the user clicks OK to apply the configuration.
	
	CAUSE
	=====
	
	The print session does not verify that a filter DLL is specified if the user
	selects the Filter check box.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. We are researching this problem in the SNA Server versions 2.X and 3.0,
	and will post more information here in the Microsoft Knowledge Base as it
	becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The problem is corrected by having the print session validate that the filter
	DLL name is not empty. The following error message is displayed if the DLL is
	not specified:
	
	  "Print filtering is selected, but the filter DLL name is blank."
	
	The following files have been updated:
	
	  <snaroot>\system\snacfg.dll
	  <snaroot>\system\snaadmin.dll
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
