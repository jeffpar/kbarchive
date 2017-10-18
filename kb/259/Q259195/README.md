---
layout: page
title: "Q259195: Cannot Control COMMIT or ROLLBACK Commands Using ADO with DB2 an"
permalink: kb/259/Q259195/
---

## Q259195: Cannot Control COMMIT or ROLLBACK Commands Using ADO with DB2 an

	Article: Q259195
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ADO with the OLE/DB Provider for DB2 and stored procedures, it is
	not possible to control the COMMIT or ROLLBACK commands in a transaction. For
	example, the following code does not work to commit or rollback a transaction:
	
	  Set objConn = New ADODB.Connection
	  objConn.BeginTrans
	  ; Call stored procedures here
	  If OK then
	  	objConn.CommitTrans
	  ELSE
	  	objConn.RollbackTrans
	  End IF
	  Set objConn = Nothing
	
	NOTE: The OLE/DB for DB2 Provider support for stored procedures was added in
	Microsoft SNA Server 4.0 Service Pack 3.
	
	CAUSE
	=====
	
	The OLE/DB Provider for DB2 is incorrectly performing the commitment of the
	transaction.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
