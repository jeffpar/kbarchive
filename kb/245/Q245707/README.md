---
layout: page
title: "Q245707: AFTP Binary File Transfer Does Not Covert Data to ASCII"
permalink: /kb/245/Q245707/
---

## Q245707: AFTP Binary File Transfer Does Not Covert Data to ASCII

	Article: Q245707
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you transfer a file from a host running an AFTP server, and the data is in
	binary format, the file may be in an unreadable format when it appears on the
	AFTP client.
	
	MORE INFORMATION
	================
	
	Host data is always in EBCDIC format. When you transfer binary data using the
	AFTP client, or another transfer method that emulators use (such as IND$FILE),
	the data is not converted from EBCDIC to ASCII. When the file is received on the
	client, it is still in EBCDIC format, which is not readable on PCs. To receive
	the file in a useable format on the client, the file should be transferred in
	ASCII. From the AFTP prompt, "TYPE ASCII" should be added to the "GET" command.
	
	NOTE: The AFTP server (host) and the AFTP client should use the same code page.
	
	REFERENCES
	==========
	
	Refer to the SNA Server Reference Manual or SNA Server online Help, or type
	"help" from an AFTP prompt for the AFTP command syntax.
	
	Additional query words: AFTP
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
