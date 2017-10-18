---
layout: page
title: "Q189537: Digi SDLC Connection Fails With Event 23, Outage Code=002C"
permalink: kb/189/Q189537/
---

## Q189537: Digi SDLC Connection Fails With Event 23, Outage Code=002C

	Article: Q189537
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A connection configured to connect to a host with the Digi Sync/570I goes
	active, but then fails. The following error is logged in the Application Event
	Log:
	
	  Event ID: 23
	  Connection Failure
	  Connection =<connection>
	  Link Service =<link service>
	  Outage Code =002C
	
	  Invalid SDLC command received. The SDLC driver has reported that an invalid
	  SDLC command has been received. Either an SDLC I-frame was received out of
	  sequence, an unrecognized command was received, or the SDLC frame exceeded
	  the maximum frame size that the SDLC link service can support.
	
	CAUSE
	=====
	
	The old driver needed modification to protect critical regions of code.
	
	RESOLUTION
	==========
	
	This problem can be resolved by installing the latest driver for the Digi
	Sync/570I SDLC card. The current driver is version 3.3.0, and it is available
	for downloading from Digi's FTP site. The driver fixes problems with data
	corruption as well as line outages. Follow the steps below to download the new
	driver:
	
	1. Go to the following URL on the Digi Web site:
	
	  ftp://ftp.dgii.com/drivers/innt/released/sync
	
	2. Download the following file:
	
	  510128D.exe
	
	  510128D.exe is a self extracting zip of the installation disk.
	
	MORE INFORMATION
	================
	
	The following DLC trace has been edited to show the data flowing to and from LU
	09 up to the Event 23 outage.
	
	NOTE: The same frame (018A) is sent twice, causing a sequencing problem.
	
	Sequence 018A came in as BBIU, MBIU, and EBIU at 15:33:46.312
	
	DLC   01161000->03020101 DLC DATA
	DLC                      DAF:09 OAF:01 ODAI:off Normal BBIU
	DLC                      RQE FMD FI BC DR2 PI EB
	DLC
	DLC   ---- Header  at address 010D6290, 1 elements ----
	DLC   02010100 00002800 0901018A 0100E900     <......(.......Z.>
	DLC
	DLC   ---- Element at address 01ACB9F4, start 10, end 221 ----
	DLC   0A314005 42040001 E3E7C2C3 F8404040     <.1@.B...TXBC8@@@>
	DLC   40E3F0F0 F6F1F0F0 F0F0E3F5 C2D70000     <@T00610000T5BP..>
	DLC   03130000 00000000 00C2C3F8 F1F1F000     <.........BC8110.>
	DLC   02027080 8081C040 404010FF 80000000     <..p..a.@@@......>
	DLC   000C3404 0134001E 5C400ED2 41B6A5B6     <..4..4..\@.KA.v.>
	DLC   A5B877B9 A1D2410F 405C3404 03340001     <v.w..KA.@\4..4..>
	DLC   40400ED1 65C46197 614040A4 E5D1A140     <@@.JeDapa@@uVJ.@>
	DLC   40404040 40AFA58B 41B7A940 404040A4     <@@@@@.v.A.z@@@@u>
	DLC   698B73B7 A9404040 40C869D2 41B7A940     <i.s.z@@@@HiKA.z@>
	DLC   4040408B A1B7A940 40B941D3 41427B40     <@@@...z@@.ALAB{@>
	DLC   40C46197 61AC77C8 810F4040 4040340C     <@Dapa.wHa.@@@@4.>
	DLC   01340001 0E424DA5 658977D2 81C46197     <.4...BMveiwKaDap>
	DLC   61A4E5D1 A1425D40 40424DB9 B79F4142     <auVJ.B]@@BM...AB>
	DLC   5D424DAC                                <]BM.            >
	SDLC    -------------------------------------------------------------------
	-------------
	SDLC    ******** 4  messages suppressed ********
	SDLC    -------------------------------------------------------------------
	-------------
	SDLC    RX FRAME   STATUS OK
	SDLC    SDLC   C1 42  INFORMATION  P/F:0  Nr:2  Ns:1
	SDLC    SNA     TH 28 00 09 01 01 8A
	SDLC            RH 0A 31 40
	SDLC    -------------- DATA --------------
	SDLC  05420400 01E3E7C2 C3F84040 4040E3F0     <.B...TXBC8@@@@T0>
	SDLC  F0F6F1F0 F0F0F0E3 F5C2D700 00031300     <0610000T5BP.....>
	SDLC  00000000 0000C2C3 F8F1F1F0 00020270     <......BC8110...p>
	SDLC  808081C0 40404010 FF800000 00000C34     <..a.@@@........4>
	SDLC  04013400 1E5C400E D241B6A5 B6A5B877     <..4..\@.KA.v.v.w>
	SDLC  B9A1D241 0F405C34 04033400 0140400E     <..KA.@\4..4..@@.>
	SDLC  D165C461 97614040 A4E5D1A1 40404040     <JeDapa@@uVJ.@@@@>
	SDLC  4040AFA5 8B41B7A9 40404040 A4698B73     <@@.v.A.z@@@@ui.s>
	SDLC  B7A94040 4040C869 D241B7A9 40404040     <.z@@@@HiKA.z@@@@>
	SDLC  8BA1B7A9 4040B941 D341427B 4040C461     <...z@@.ALAB{@@Da>
	SDLC  9761AC77 C8810F40 40404034 0C013400     <pa.wHa.@@@@4..4.>
	SDLC  010E424D A5658977 D281C461 9761A4E5     <..BMveiwKaDapauV>
	SDLC  D1A1425D 4040424D B9B79F41 425D424D     <J.B]@@BM...AB]BM>
	SDLC  AC                                      <.               >
	SDLC    -------------------------------------------------------------------
	-------------
	SDLC    RX FRAME   STATUS OK
	SDLC    SDLC   C1 46  INFORMATION  P/F:0  Nr:2  Ns:3
	SDLC    SNA     TH 24 00 09 01 01 8A
	SDLC    -------------- DATA --------------
	SDLC  61F0F440 F3F3F1F0 F1F2400E D1C995B7     <a04@331012@.JIn.>
	SDLC  0F404040 40404040 4040340C 01340001     <.@@@@@@@@@4..4..>
	SDLC  40404040 40404040 40404040 404040       <@@@@@@@@@@@@@@@ >
	SDLC    -------------------------------------------------------------------
	-------------
	
	Then at 15:34:33.421, frame 018A starts to come again -- INVALID SEQUENCE
	NUMBER
	
	SDLC    -------------------------------------------------------------------
	-------------
	SDLC    RX FRAME   STATUS OK
	SDLC    SDLC   C1 46  INFORMATION  P/F:0  Nr:2  Ns:3
	SDLC    SNA     TH 24 00 09 01 01 8A
	SDLC    -------------- DATA --------------
	SDLC  61F0F440 F3F3F1F0 F1F2400E D1C995B7     <a04@331012@.JIn.>
	SDLC  0F404040 40404040 4040340C 01340001     <.@@@@@@@@@4..4..>
	SDLC  40404040 40404040 40404040 404040       <@@@@@@@@@@@@@@@ >
	DLC   ---------------------------------------------------------------------
	-----------
	DLC   01161000->03020101 DLCST OUTG
	DLC                      Outage: 0x2C UPTYPE:3 UPCNTR:9 COUNT:0
	DLC
	DLC   ---- Header  at address 010D5F50, 0 elements ----
	DLC   182C0309 00030000 030A00F4 0100E900     <.,.........4..Z.>
	
	The Digi Sync/570I adapter discussed here is manufactured by Digi International,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
