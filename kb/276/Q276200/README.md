---
layout: page
title: "Q276200: BUG: ADO Application May Hang When Using OLE DB Provider for DB2"
permalink: /kb/276/Q276200/
---

## Q276200: BUG: ADO Application May Hang When Using OLE DB Provider for DB2

{% raw %}

	Article: Q276200
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Active Data Object (ADO) application that leverages the OLE DB Provider for
	DB2 may intermittently stop responding (hang) when the data source is configured
	to use the Transfer Control Protocol/Internet Protocol (TCP/IP) transport to the
	remote system.
	
	The following Visual Basic sample code shows a typical code-loop scenario in
	which this problem may occur:
	
	   ...
	   ...
	     If (rsChrgs.State And adStateOpen) = adStateOpen Then
	
	          While Not bDone
	          
	              vaRows = rsChrgs.GetRows(100)  
	              nTotalRows = UBound(vaRows, 2)
	              For nRow = 0 To nTotalRows
	                  DoEvents
	                  If bCancel Then Exit Function
	              Next
	              bDone = (nTotalRows < 99)
	          Wend
	      
	      End If
	   ...
	   ...
	
	A call to the GetRows function may block indefinitely so that control is not
	returned to the calling function. The application hangs at this point.
	
	CAUSE
	=====
	
	When the OLE DB Provider for DB2 receives a Distributed Data Management (DDM)
	General Data Stream (GDS) header that is split across multiple TCP/IP packets,
	the provider does not work correctly (fails). No errors are reported to the
	Microsoft Windows NT Application Event Log when the provider fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words: Ddmtcp sp3 sp2
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
