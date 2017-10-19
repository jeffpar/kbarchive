---
layout: page
title: "Q240676: Cannot Use ODO As a Return Value for Method's Recordset"
permalink: /kb/240/Q240676/
---

## Q240676: Cannot Use ODO As a Return Value for Method's Recordset

	Article: Q240676
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna400sp2 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the COM Transaction Integrator for CICS and IMS Component Builder,
	you can specify an ADO Recordset as the return value of a method. However, in
	the following programming models, it is NOT possible to use the Occurs depending
	on (ODO) option in the method's Recordsets properties:
	
	- CICS LINK Using LU6.2
	
	- CICS and IMS Using TCP/IP, MSLINK
	
	Therefore, the recordset must always contain a fixed number of rows initialized
	with data. (The purpose of the ODO option is to allow the number of rows to vary
	at runtime.)
	
	CAUSE
	=====
	
	The ODO option is disabled (grayed out) in the Component Builder Recordsets
	property dialog.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Use the recordset as an [output] parameter instead of the return value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in SNA
	Server version 4.0 Service Pack 3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After the fix is applied, a return value, which is a recordset may be used with
	the ODO option for all Remote Environments. To manually indicate that a
	parameter of a method will contain a value representing the number of rows in
	the recordset (length specifier), you must first define this parameter and its
	direction must be [out] or [in/out]. Then, on the Recordsets tab of the method
	properties, click the Occurs depending on: button in the Options group and
	select the parameter that is the length specifier from the drop-down list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna400sp2 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
