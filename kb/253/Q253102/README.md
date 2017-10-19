---
layout: page
title: "Q253102: COMTI Returns ADO Recordset That Cannot Be Sorted"
permalink: /kb/253/Q253102/
---

## Q253102: COMTI Returns ADO Recordset That Cannot Be Sorted

	Article: Q253102
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A recordset that contains strings cannot be sorted when it is returned by COM
	Transaction Integrator (COMTI). When you attempt to sort the recordset, the
	client application displays the following error message:
	
	  Execution error '-2147217824 (80040e60)': Unable to open requested order
	
	CAUSE
	=====
	
	In SNA Server versions 4.0 Service Pack 2 (SP2) and later, the string's data
	type is coerced to adLongVarWChar, which makes the recordset unsortable.
	Previous to SP2, the data type is coerced to adVarWChar.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	4.0 SP2, 4.0 SP3, Microsoft COM Transaction Integrator for CICS and IMS,
	versions 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
