---
layout: page
title: "Q194324: Data not Compressed from SNA Server to Host"
permalink: kb/194/Q194324/
---

## Q194324: Data not Compressed from SNA Server to Host

	Article: Q194324
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Data sent to the host by SNA Server may not be compressed, even though the
	compression parameters for SNA Server have been configured. Data received from
	the host by SNA Server is compressed. An SNA node message trace shows the bind
	sent by SNA Server with the Length-Checked Compression Control Vector (0x66)
	included, but the bind response does not contain this vector. A VTAM trace taken
	simultaneously shows that the compression vector was included when the bind
	response was sent by VTAM.
	
	CAUSE
	=====
	
	The compression vector is used to define compression in extended binds. An
	extended bind is one that also includes a Fully Qualified PCID control vector
	(0x60). The bind being sent by SNA Server did not include a Fully Qualified PCID
	Vector, so the compression vector was being stripped out by VTAM.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Sample bind request and response from a trace in which compression was
	negotiated successfully. Start of PCID (0x60) and Compression (0x66) vectors are
	indicated by ^^:
	
	   DLC   ----------------------------------------------- 13:17:45.0557
	   DLC   01020101->05160000 DLC DATA
	   DLC                      DAF:01 OAF:02 ODAI:on  Exp.
	   DLC                      BIND   RQD SC  FI BC EC DR1
	   DLC
	   DLC   ---- Header  at address 01304550, 1 elements ----
	   DLC   00000000 00002F00 01020000 0100A801     <....../.......y.>
	   DLC
	   DLC   ---- Element at address 01CF2C84, start 10, end 154 ----
	   DLC   6B800031 001307B0 B050B300 008B8B80     <k..1.....P......>
	   DLC   00060200 00000000 00001643 00000FE2     <...........C...S>
	   DLC   C7D7C8D3 F14BD3F1 F1F6F0F5 F0F03100     <GPHL1KL11605001.>
	   DLC   0902D7C1 F6F2E3D2 D5E40903 00000000     <..PA62TKNU......>
	   DLC   00000016 1004E2C7 D7C8D3F1 4BD3F1F1     <......SGPHL1KL11>
	   DLC   F6F0F5F0 F00A1300 A0634006 2B37394B     <60500....c@.+79K>
	   DLC   000FE2C7 D7C8D3F1 4BE6D5E6 C3C9F5F1     <..SGPHL1KWNWCI51>
	   DLC   C4601707 CE08030D 112D370E E2C7D7C8     <D`.......-7.SGPH>
	           ^^
	   DLC   D3F14BD5 C5E3C3D6 D4F16605 0581C022     <L1KNETCOM1f..a.">
	   DLC   22                    ^^                <"               >
	   DLC   ----------------------------------------------- 13:17:46.0639
	   DLC   05160000->01020101 DLC DATA
	   DLC                      DAF:02 OAF:01 ODAI:on  Exp.
	   DLC                      BIND   +RSP SC  FI BC EC DR1
	   DLC
	   DLC   ---- Header  at address 01304278, 1 elements ----
	   DLC   00000000 00002F00 02010000 01009501     <....../.......n.>
	   DLC
	   DLC   ---- Element at address 01CF459C, start 10, end 112 ----
	   DLC   EB800031 001307B0 B050B300 00868680     <...1.....P...ff.>
	   DLC   00060200 00000000 00000043 00000026     <...........C...&>
	   DLC   000902D7 C1F6F2E3 D2D5E409 03000000     <...PA62TKNU.....>
	   DLC   00000000 161005E2 C7D7C8D3 F14BE6D5     <.......SGPHL1KWN>
	   DLC   E6C3C9F5 F1C40000 601707CE 08030D11     <WCI51D..`.......>
	                           ^^
	   DLC   2D370EE2 C7D7C8D3 F14BD5C5 E3C3D6D4     <-7.SGPHL1KNETCOM>
	   DLC   F1660404 828022                         <1f..b."         >
	           ^^
	
	Sample bind request & response from a trace in which compression negotiation
	failed. Note that there is no PCID vector in the bind request, and no
	Compression vector in the bind response. Compression vector (0x66) indicated by
	^^:
	
	   DLC   ----------------------------------------------- 13:57:17.0613
	   DLC   01020101->05160000 DLC DATA
	   DLC                      DAF:02 OAF:02 ODAI:on  Exp.
	   DLC                      BIND   RQD SC  FI BC EC DR1
	   DLC
	   DLC   ---- Header  at address 0131437C, 1 elements ----
	   DLC   00000000 00002F00 02020000 0100A800     <....../.......y.>
	   DLC
	   DLC   ---- Element at address 01D04354, start 10, end 123 ----
	   DLC   6B800031 001307B0 B050B307 07878787     <k..1.....P...ggg>
	   DLC   07060200 00000000 00001643 00000DD6     <...........C...O>
	   DLC   C8E2E34B E3F0F3F9 F7C9F0F1 2F000902     <HSTKT0397I01/...>
	   DLC   C1D7D7C3 D4D6C4F3 0903F000 00000000     <APPCMOD3..0.....>
	   DLC   00030E04 D6C8E2E3 4BE3F0F3 F9F7C9F0     <....OHSTKT0397I0>
	   DLC   F10A1300 35678221 293A7E2F 000DD6C8     <1...5gb!):~/..OH>
	   DLC   E2E34BC4 C5E5D7C3 C9C3E266 050581C0     <STKDEVPCICSf..a.>
	   DLC   2222                    ^^ ^^^^^^^^     <""              >
	         ^^^^
	   DLC   ----------------------------------------------- 13:57:18.0294
	   DLC   05160000->01020101 DLC DATA
	   DLC                      DAF:02 OAF:02 ODAI:on  Exp.
	   DLC                      BIND   +RSP SC  FI BC EC DR1
	   DLC
	   DLC   ---- Header  at address 0131437C, 1 elements ----
	   DLC   00000000 00002F00 02020000 01009701     <....../.......p.>
	   DLC
	   DLC   ---- Element at address 01D04354, start 10, end 79 ----
	   DLC   EB800031 001307B0 B050B107 07878787     <...1.....P...ggg>
	   DLC   07060200 00000000 00000043 00000024     <...........C...$>
	   DLC   000902C1 D7D7C3D4 D6C4F309 03F00000     <...APPCMOD3..0..>
	   DLC   00000000 030E05D6 C8E2E34B C4C5E5D7     <.......OHSTKDEVP>
	   DLC   C3C9C3E2 0000                           <CICS..          >
	
	Compression works fine both to and from an AS/400, even though the PCID vector is
	not in the bind.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
