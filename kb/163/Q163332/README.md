---
layout: page
title: "Q163332: SLI Application Stops Responding When Issuing SLI_SEND"
permalink: kb/163/Q163332/
---

## Q163332: SLI Application Stops Responding When Issuing SLI_SEND

	Article: Q163332
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An LUA SLI application may stop responding when issuing SLI_SEND. This can occur
	when the underlying RUI interface returns a primary return code of
	PARAMETER_CHECK and secondary return code of REQUIRED_FIELD_MISSING to the SLI
	interface.
	
	CAUSE
	=====
	
	When an asynchronous RUI_WRITE completes synchronously, the resulting completion
	processing is being handled in two places in error.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 Service Pack 1 and SNA Server 3.0 corrects this
	problem.
	
	The updated modules are:
	
	  Windows NT: <snaroot>\System\Winsli32.dll
	  Windows 95: <winroot>\System\Winsli32.dll
	  Windows 3.x: <winroot>\System\Winsli.dll
	  OS/2: <snaroot>\Acssli.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 Service
	Pack 1 (SP1) and 3.0. This problem was corrected in the latest Microsoft SNA
	Server 2.11 and 3.0 U.S. Service Packs. For information on obtaining the service
	packs, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	An asynchronous LUA ACK call completed synchronously and the control block for
	the verb was put on a queue for completion processing. However, the
	(synchronous) completion processing was also being handled directly after the
	verb call.
	
	When the next SLI_SEND takes place, which (due to the maximum size of the request
	unit needs to be done as two RUI_WRITEs, the first Request Unit (RU) of the
	chain of data is sent, and the next is prepared. In the mean- time the
	completion-processing thread notice, that there is a message on the queue from
	the previously completed LUA ACK response, and begins to set up a control block
	to send the response. Sending the response has already been handled by the
	synchronous completion code and so this is redundant and results in corruption
	of the verb control block (VCB) being prepared for the pending RUI_WRITE.
	
	With the SNA Application, LUA API trace enabled you might see the following:
	
	  RUI_WRITE request
	  ---- Verb Parameter Block at address 0019A2E4 ----
	  52004400 00000000 00000000 04800000     <R.D.............>
	  02000000 53584956 4C553731 00000000     <....SXIVLU71....>
	  07000600 00003000 20A65400 803F0010     <......0. wT..?..>
	  00000000 00000100 20000000 00000000     <........ .......>
	  00000000                                <....            >
	  ---- Data at address 0054A620 ----
	  D940C4C5 D4D6D5E2 E3D9C1E3 C9D6D540     <R@DEMONSTRATION@>
	  C6D6D940 D6D5E240 E2D5C140 4040F0F0     <FOR@ONS@SNA@@@00>
	  F5F740C4 C1E3C140 E3D9C1D5 E2C6C5D9     <57@DATA@TRANSFER>
	  ---------------------------------------------- 08:40:18.89
	  RUI_WRITE response
	  PARAMETER_CHECK - REQUIRED_FIELD_MISSING
	  ---- Verb Parameter Block at address 0019A2E4 ----
	  52004400 00010000 00000019 04800000     <R.D.............>
	  02000000 53584956 4C553731 00000000     <....SXIVLU71....>
	  07000600 00003000 20A65400 803F0010     <......0. wT..?..>
	  00000000 00000100 20000000 00000000     <........ .......>
	  00000000                                <....            >
	  ---- Data at address 0054A620 ----
	  D940C4C5 D4D6D5E2 E3D9C1E3 C9D6D540     <R@DEMONSTRATION@>
	  C6D6D940 D6D5E240 E2D5C140 4040F0F0     <FOR@ONS@SNA@@@00>
	  F5F740C4 C1E3C140 E3D9C1D5 E2C6C5D9     <57@DATA@TRANSFER>
	
	Additional query words: prodsna SP1 LUA RUI_WRITE SLI_SEND
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1,3.0
	
	=============================================================================
	
