---
layout: page
title: "Q275669: ODBC Driver for DB2 Truncates Binary Data Flow That Includes NUL"
permalink: /kb/275/Q275669/
---

## Q275669: ODBC Driver for DB2 Truncates Binary Data Flow That Includes NUL

{% raw %}

	Article: Q275669
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbGrpDSVCDB kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Open Database Connectivity (ODBC) Driver for DB2 is used to
	retrieve data from a DB2 table that contains a binary field that has NULLs
	(0x00), then the data is truncated at the first NULL.
	
	For example, if a DB2 table is created and populated with data as follows
	
	  CREATE TABLE OWNER.TABLE (COL1 CHAR (5), COL2 VARCHAR (40))
	  INSERT INTO OWNER.TABLE ('00001', '00x100x200x000x3')
	
	then when you select the COL2, just '00x100x2' is returned.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2 (SP2) and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: MSDB2OLE AS/400 OS/400 OS/390 Mainframe DB2/MVS DB2/NT sp2 sp3 null's
	
	======================================================================
	Keywords          : kbGrpDSVCDB kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCDB2400SP2 kbODBCDB2400SP3
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
