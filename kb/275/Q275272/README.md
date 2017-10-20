---
layout: page
title: "Q275272: XFOR: Event 56106 Occurs When Using SNADS or PROFS Connectors"
permalink: /kb/275/Q275272/
---

## Q275272: XFOR: Event 56106 Occurs When Using SNADS or PROFS Connectors

{% raw %}

	Article: Q275272
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Connector for SNADS or the Microsoft
	Exchange Connector for IBM OfficeVision/VM (PROFS), mail may stop flowing
	between host-based systems and Exchange 5.5. The following entries may be
	reported in the Microsoft Exchange Connectivity Administrator:
	
	  qm(1700) LME-PROFS-DIAMEX(01d8) 1 56106:{Invalid state}: Could not read next
	  queue item from vm2mex.in
	
	  dia2mex(1584) LME-PROFS-VMDIA(0222) 4 04103:Queue vm2mex.in depth threshold
	  has reached the maximum number specified. Current 10, Maximum 10
	
	CAUSE
	=====
	
	This issue can occur if one or more of the index files which holds pointers to
	the message objects has been corrupted. This condition may be caused by file
	locks from file-based antivirus software or a bad disk write operation to the
	index file.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Stop the affected Exchange connector from the Services Control Panel. For the
	  SNADS, stop the Exchange SNADS Connector service. For OV/VM, stop the
	  Exchange PROFS Connector service.
	
	2. Delete all index files with .qcr extensions in the following directories
	  related to where message flow has stopped:
	
	   - If mail flow from SNADS to Exchange has stopped, delete
	     \Exchsrve\Connect\Xchconn\Q\Dia2mex.in\<xxx>.qcr
	
	   - If mail flow from Exchange to SNADS has stopped, delete
	     \Exchsrve\Connect\Xchconn\Q\Snads.in\<xxx>.qcr
	
	   - If mail flow from OV/VM to Exchange has stopped, then delete
	     \Exchsrve\Connect\Xchconn\Q\Vm2mex.in\<xxx>.qcr
	
	   - If mail flow from Exchange to OV/VM has stopped, delete
	     \Exchsrve\Connect\Xchconn\Q\Via2vm.in\<xxx>.qcr
	
	3. Restart the Exchange connector.
	
	MORE INFORMATION
	================
	
	The indexes are rebuilt when the Exchange connectors are restarted.
	
	Additional query words: 56106 exch2kp2w
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
