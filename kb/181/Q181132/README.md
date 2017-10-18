---
layout: page
title: "Q181132: Configuring Host Print Transform May Cause an Extra Form Feed"
permalink: kb/181/Q181132/
---

## Q181132: Configuring Host Print Transform May Cause an Extra Form Feed

	Article: Q181132
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	AS/400 print jobs that had been printing properly with SNA Server 3.0 and 3.0
	Service Pack 1, may produce an extra Form Feed after applying SNA Server 3.0
	Service Pack 2 and configuring AS/400 print sessions to use Host Print Transform
	(HPT). This problem is not easily reproduced and rarely occurs.
	
	CAUSE
	=====
	
	Print jobs printed over sessions configured with HPT enabled are printed as
	transparent print jobs since the job is rendered by print drivers on the AS/400.
	Print Server does not know that it is receiving a transparent job until it
	receives the x'03' byte at the start of the HPT data. Before receiving this
	byte, Print Server had made a call to StartDoc() to begin GDI printing.
	Transparent jobs are not printed through the GDI. When the print service
	realizes this is a transparent job, it calls CancelDoc() to end the previous
	StartDoc() call. The GDI always produces a a Form Feed when CancelDoc() is
	called and it is this Form Feed that causes the problem.
	
	WORKAROUND
	==========
	
	Configure the print sessions to use a PDF file since this indicates that the job
	will be transparent, therefore the Print Server will not call StartDoc().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2 and
	4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Print Server now recognizes when HPT has been configured in the printer session
	properties, and will internally generate a blank PDT file to use. This has the
	effect of informing Print Server to use the transparent printer interface and,
	will not result in any unwanted PCL sequences being sent to the printer.
	
	NOTE: For this fix to work, you must configure HPT in your print session
	properties.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
