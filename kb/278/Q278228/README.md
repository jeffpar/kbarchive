---
layout: page
title: "Q278228: INSERTS and DELETES from ACCESS to a DB2 Linked Table May Fail"
permalink: /kb/278/Q278228/
---

## Q278228: INSERTS and DELETES from ACCESS to a DB2 Linked Table May Fail

{% raw %}

	Article: Q278228
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Access is linked to DB2 tables by using the Microsoft ODBC Driver
	for DB2 and a new record is inserted, you may receive the following error
	message:
	
	  [Microsoft][ODBC Driver for DB2][Microsoft DB2 OLE DB Provider] Extended
	  Error information was unavailable (#-2147217900)
	
	In some cases, the INSERT may be successful but if it is followed up by a DELETE,
	you may receive the following error message:
	
	  DIAG [26501] [Microsoft][ODBC Driver for DB2][Microsoft DB2 OLE DB Provider]
	  A SQL error has occurred. Please consult the documentation for your specific
	  DB2 version for a description of the associated Native Error and SQL State.
	  SQLSTATE: 26501, SQLCODE: -514 (-514)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: MSDB2OLE DB2OLEDB Provider DB2/400 AS/400 OS/400 OS/390 MVS MAINFRAME OLE DB sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCDB2400SP2 kbODBCDB2400SP3
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
