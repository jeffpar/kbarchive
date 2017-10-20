---
layout: page
title: "Q263206: VTAM V4R2 PTF May Cause APPC Conversation to Stop Responding"
permalink: /kb/263/Q263206/
---

## Q263206: VTAM V4R2 PTF May Cause APPC Conversation to Stop Responding

{% raw %}

	Article: Q263206
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC or CPI-C application may intermittently stop responding while it waits
	for a host response. The application stops responding after the Allocate,
	Send_Data, and Receive_and_Wait (or a CMALLC, CMSEND, and CMRCV for a CPI-C
	application) commands are issued. A trace shows SNA Server has sent the FMH-5
	ATTACH request to the host along with the data, and is waiting for a response.
	The message that is sent to the host has the change direction indicator (CDI)
	set.
	
	CAUSE
	=====
	
	The FMH-5 ATTACH request and APPC data are sent to the host in two messages
	(begin-chain and end-chain). A problem in Virtual Telecommunications Access
	Method (VTAM) V4R2 with IBM PTF #UV60018 prevents the end-chain message from
	being received by the APPC application on the host.
	
	RESOLUTION
	==========
	
	IBM PTF #UV60101 fixes the VTAM problem when it is applied to VTAM V4R2. Contact
	IBM to request this update.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	An SNA Server Node Message shows the following. The first two messages are the
	begin-chain and end-chain messages that are sent to the host by SNA Server. The
	third message is the Isolated Pacing Response sent by the host.:
	
	  
	
	  DLC   ----------------------------------------------- 10:51:00.0208
	  DLC   01020101->04160000 DLC DATA
	  DLC                      DAF:03 OAF:02 ODAI:on  Normal
	  DLC                      RQE FMD FI BC DR1 PI BB
	  DLC
	  DLC   ---- Header  at address 0131444C, 1 elements ----
	  DLC   0B080000 1D002E00 03020007 01008A01     <................>
	  DLC
	  DLC   ---- Element at address 01D02240, start 10, end 77 ----
	  DLC   0A918041 0502FF00 03D00000 07E2D8D3     <.j.A.........SQL>
	  DLC   D7D9D6C4 130802C4 C2F2D3D4 E2C40901     <PROD...DB2LMSD..>
	  DLC   C4C2F2D9 E4D3C5E2 1A11E4E2 D4C4D5D9     <DB2RULES..USMDNR>
	  DLC   F0F14BC4 D5D9C4C2 F2F0F107 D045C173     <01KDNRDB201..EAs>
	  DLC   E5000100                                <V...            >
	
	  DLC   ----------------------------------------------- 10:51:00.0208
	  DLC   01020101->04160000 DLC DATA
	  DLC                      DAF:03 OAF:02 ODAI:on  Normal
	  DLC                      RQE FMD EC DR1 CD
	  DLC
	  DLC   ---- Header  at address 0131403C, 1 elements ----
	  DLC   07050000 1D002E00 03020008 01008A01     <................>
	  DLC
	  DLC   ---- Element at address 01D02A3C, start 10, end 249 ----
	  DLC   01902000 68D04100 01006210 41002011     <.. .h.A...b.A. .>
	  DLC   5E8482F2 82974B85 A7854040 40404040     <^db2bpKexe@@@@@@>
	  DLC   40404040 40F0F1F8 C1F0F0C6 F8000C11     <@@@@@018A00F8...>
	  DLC   6D404040 40404040 40001311 5AC4C2F2     <m@@@@@@@@...ZDB2>
	  DLC   40C39695 958583A3 40F54BF2 00141404     <@Connect@5K2....>
	  DLC   14030004 14440003 24070006 240F0003     <.....D..$...$...>
	  DLC   000B1147 D8C4C2F2 61D5E300 85D00100     <...GQDB2aNT.e...>
	  DLC   02007F20 01001621 10E2D8D3 D7D9D6C4     <..<A6> ...!.SQLPROD>
	  DLC   40404040 40404040 40404000 06210F24     <@@@@@@@@@@@..!.$>
	  DLC   07000D00 2FD8E3C4 E2D8D3E7 F8F6000C     <..../QTDSQLX86..>
	  DLC   112EE2D8 D3F0F5F0 F2F0003C 210437E2     <..SQL05020.<!.7S>
	  DLC   D8D3F0F5 F0F2F0D5 E3404040 40404040     <QL05020NT@@@@@@@>
	  DLC   40404040 40404040 408482F2 82974B85     <@@@@@@@@@db2bpKe>
	  DLC   A7854040 40404040 40404040 40C4C2F2     <xe@@@@@@@@@@@DB2>
	  DLC   D3D4E2C4 4000000A 00350006 119C04E4     <LMSD@....5.....U>
	
	  ----------------------------------------------- 10:51:00.0224
	  04160000->01020101 DLC DATA
	                  DAF:02 OAF:03 ODAI:on  Normal
	                  +RSP FMD BC EC PI
	
	  ---- Header  at address 01314070, 1 elements ----
	  04080004 1D002E00 02030000 0100C401     <..............D.>
	
	  ---- Element at address 01D02A3C, start 10, end 12 ----
	  830100                                  <c..             >
	
	Neither the end-chain message or the Isolated Pacing Response appear in a VTAM
	trace. Note that because this session is using two-stage pacing, the Isolated
	Pacing Response is generated by a boundary function, which is why it does not
	appear in the VTAM trace.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
