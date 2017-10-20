---
layout: page
title: "Q275630: INSERTS from DTS to DB2 Through OLE DB Provider for DB2 May Fail"
permalink: /kb/275/Q275630/
---

## Q275630: INSERTS from DTS to DB2 Through OLE DB Provider for DB2 May Fail

{% raw %}

	Article: Q275630
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a DTS package is built to export a SQL Server table to DB2/MVS (version 5.1)
	by using the Microsoft OLE DB Provider for DB2 (DB2OLEDB) and the AUTOCOMMIT
	property of the provider is set to FALSE, the following error may be reported:
	
	  [OLE/DB provider returned message: A SQL error has occurred. Please consult
	  the documentation for your specific DB2 version for a description of the
	  associated Native Error and SQL State. SQLSTATE: 24501, SQLCODE: -501]
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	Set the AUTOCOMMIT property of the provider to TRUE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	You can apply the hotfix to resolve the error message that is shown in the
	"Symptoms" section, however, for the DTS export or import to work correctly, the
	AUTOCOMMIT property of DB2OLEDB must be set to TRUE.
	
	If you set the AUTOCOMMIT property of the provider to FALSE, a COMMIT may never
	be issued, and therefore the inserts are rolled back. Users can still work
	around this behavior by writing their own transformation script for use with
	DTS, to issue a commit after every few inserts.
	
	Additional query words: DB2 Mainframe OS/390 MVS Distributed Transformation Services Db2oledb sp3 sp4
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
