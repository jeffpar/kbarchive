---
layout: page
title: "Q164793: Processor Reaches 100 Percent CPU Use When Printing"
permalink: kb/164/Q164793/
---

## Q164793: Processor Reaches 100 Percent CPU Use When Printing

	Article: Q164793
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing using the SNA Server 3.0 Print Service, the processor may reach
	100 percent (or close to 100 percent) CPU use when viewed in Performance
	Monitor. This level of use lasts until you stop the SNA Server 3.0 Print
	Service.
	
	NOTE: It may be normal, under certain circumstances, to see spikes in Performance
	Monitor.
	
	CAUSE
	=====
	
	You will the see the following section of traces repeated infinitely in the
	Print Service internal trace:
	
	00d5:00eb 13:32:48.0472 winvprtp.c(1167)   PCLOS Terminate job D93ECBC on
	printer D93ECA8
	00d5:00eb 13:32:48.0472 winvprtj.c(1747)   ENDJB Enter, idJob=0xD93ECBC
	00d5:00eb 13:32:48.0472 winvprtp.c(187)    VLJOB Enter, id=0xD93ECBC
	00d5:00eb 13:32:48.0472 winvprtp.c(232)    VLJOB Leave, pJob=0D93ECBC
	00d5:00eb 13:32:48.0472 winvprtj.c(1677)   JTERM Enter, pJob = 0xD93ECBC,
	fCancel=0
	00d5:00eb 13:32:48.0472 winvprtj.c(1706)   JTERM ERROR EndDoc, rc=0x6
	00d5:00eb 13:32:48.0472 winvprtj.c(1713)   JTERM Leave, rc=1
	00d5:00eb 13:32:48.0472 winvprtj.c(1809)   ENDJB ERROR Invalid job
	id=0xD93ECBC
	00d5:00eb 13:32:48.0472 winvprtj.c(1842)   ENDJB Leave, rc=2
	00d5:00eb 13:32:48.0472 winvprtp.c(1167)   PCLOS Terminate job D93ECBC on
	printer D93ECA8
	00d5:00eb 13:32:48.0472 winvprtj.c(1747)   ENDJB Enter, idJob=0xD93ECBC
	
	PCLOS is the trace name for the WinVPRTClosePrinter function contained in
	Printsrv\Winvprt\Winvprtp.c. This function first attempts to end all active
	print jobs owned by the print session, and then end the print session itself.
	PCLOS contains the following code:
	
	     /*********************************************************************/ 
	     /* Search for active jobs on this print session                      */ 
	     /*********************************************************************/ 
	     while (pPrt->pJob)
	     {
	        TRACE4()"Terminate job %X on printer %X",pJob,pPrt));
	        pJob = pPrt->pJob;
	        WinVPRTEndJob(pJob->id, TRUE);
	     }
	
	This is the code that is looping because the "Terminate job xx on printer yy" is
	constantly repeated in the trace. Further, the job and printer control blocks
	traced (D93ECBC and D93ECA8) are the same every time.
	
	The only way that this code can loop indefinitely is if pPrt->pJob is always a
	non-zero value. If you look into the WinVPRTEndJob function, you will see a call
	to another function called JobCleanup. The last thing that this code does is
	remove the terminating job control block (pPrt->pJob) from the 'linked list'
	of job control blocks owned by the printer control block (pPrt). The result
	should be one less job control block owned by the printer. The code shown above
	should then attempt to end the next job owned by the print session and so on,
	until there are no jobs left (when the last one is removed pPrt->pJob will go
	to zero).
	
	However, this does not happen and the code loops indefinitely, trying (and
	failing) to end the same job every time.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
