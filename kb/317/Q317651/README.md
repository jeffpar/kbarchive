---
layout: page
title: "Q317651: FIX: TN3287 Print Jobs May Fail to Print with Some Emulators"
permalink: /kb/317/Q317651/
---

## Q317651: FIX: TN3287 Print Jobs May Fail to Print with Some Emulators

	Article: Q317651
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TN3287 print jobs may fail to print when a host application sends multiple print
	jobs that are delimited by a Begin Bracket (BB) and End Bracket (EB) sequence.
	The first print job may print successfully, but subsequent print jobs may fail
	to print.
	
	This problem occurs with some third-party emulators that provide support for
	TN3287 print sessions.
	
	
	MORE INFORMATION
	================
	
	TN3287 printing support was added to the TN3270 specification in RFC 1646. The
	TN3287 specification indicates that a TN3270 server must use an End-Of-Record
	(EOR) command as a delimiter for TN3287 data streams. TN3287 emulators are
	required to respond to each EOR command that is received with a Printer Status
	message.
	
	When the TN3270 server receives from the host system a zero-length Request Unit
	(RU) with the EB bit set to indicate the end of a print job, the TN3270 server
	sends an EOR command to the TN3287 emulator.
	
	If the TN3287 emulator does not respond to the EOR command with a Printer Status
	message, then the TN3270 server cannot send a response to the host system to
	indicate that the print data has been acknowledged by the printer. Because the
	host system does not receive a response, the host system queues subsequent print
	jobs, which fail to print.
	
	The TN3270 service has been changed to enable the TN3270 server to send an
	acknowledgement (+RSP) to the host system when the TN3270 server receives a
	zero-length RU with the EB bit set. This change does not require a Printer
	Status message from the TN3287 emulator.
	
	After the TN3270 server sends the acknowledgement to the host system, the TN3270
	server sends the Abort Output (AO) command, which indicates the end of a print
	job, to the TN3287 emulator. The TN3287 server sends this AO command even if the
	TN3287 emulator does not send a Printer Status message.
	
	The new behavior resolves the described problem for those TN3287 emulators that
	are not fully compliant with RFC 1646.
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	This feature was first included in SNA Server version 4.0 Service Pack 3.
	
	
	Please refer to the following Internet Enginering Task Force (IETF) document for
	more details about the TN3287 specifications:
	
	RFC 1646: TN3270 Extensions for LUname and Printer Selection
	(http://www.ietf.org/rfc/rfc1646.txt?number=1646)
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : :4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
