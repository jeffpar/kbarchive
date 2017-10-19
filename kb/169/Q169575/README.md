---
layout: page
title: "Q169575: Interpreting an FMH-5 Attach for Independent LU 6.2"
permalink: /kb/169/Q169575/
---

## Q169575: Interpreting an FMH-5 Attach for Independent LU 6.2

	Article: Q169575
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An FMH-5 Attach is used to carry a request for conversation to be established
	between two transaction programs. The following is an example Attach message in
	a PVI (Peer Verb Interface) trace. This is the first SNA message that flows to
	the remote system for conversation startup:
	
	  PVI    ---------------------------------------------- 12:05:05.65
	  PVI    751F0001->0302E453 LU 6.2   
	  PVI                       MSGID:SWAT   MSGTYP:PRFLS  Sense1:0004
	  PVI                       Sense2:0000 
	  PVI    
	  PVI    ---- Header  at address 8297B0F8, 1 elements ----
	  PVI    0B050004 00000800 E1000000 0100C500     <..............E.>
	  PVI    
	  PVI    ---- Element at address 829935BC, start 13, end 237 ----
	  PVI    430502FF 1803D000 400430F0 F0F50F04     <C.......@.0005..>
	  PVI    02C1D4C9 09017B30 09E53983 81E71A11     <.AMI..{0.V9caX..>
	  PVI    C2C9D6D5 C5E3C6D9 4BE2D5C1 C4E5F0F2     <BIONETFRKSNADV02>
	  PVI    F124280E 0D1E0500 01000800 00000000     <1$(.............>
	  PVI    0002FF00 9E12F500 9A12E200 9612A020     <......5...S.o.. >
	  PVI    00051001 00000023 D7C3F2F3 F9F9E2F1     <.......#PC2399S1>
	  PVI    4040F3F1 F7F9F0F0 F0F24040 40404080     <@@31790002@@@@@.>
	  PVI    00000000 00000000 00000026 C4C6C1C2     <...........&DFAB>
	  PVI    40F6F9F7 40F2F9F7 40404040 40404040     <@697@297@@@@@@@@>
	  PVI    40404040 40404040 4040C140 00000000     <@@@@@@@@@@A@....>
	  PVI    00000000 00000000 00000000 00000000     <................>
	  PVI    00000000 00000000 00000000 00000000     <................>
	  PVI    00000000 00000000 00000000 00000000     <................>
	  PVI    00000000 00000000 00000000 00000000     <................>
	        PVI    00                                      <.               >
	
	The following is the above FMH-5 Attach broken out using the IBM SNA Format
	Guide:
	
	  43 - Length
	
	  05 - FMH type
	
	  02FF - Command code: ATTACH
	
	  18 - Security indicators:  Password substitute present, PIP data present
	
	  03 - Length of fixed length parameters (always 3)
	
	  D00040 - Half duplex basic conversation, confirm sync level
	
	  Transaction Program Name field:
	     04 - Length
	     30F0F0F5 - TP Name
	  
	  Access Security Information field:
	  0F - Length
	     0402C1D4C9 - User ID field "AMI"
	     09017B3009E5398381E7 - Password field
	
	  Logical-Unit-of-Work Identifier Field:
	  1A11 C2C9D6D5 C5E3C6D9 4BE2D5C1 C4E5F0F2
	  F124  280E0D1E  050001
	
	Conversation Correlator Field:
	  00 - length field
	  0800 00000000 0002FF - Attach sequence number
	
	Pip Data (Pip data format can be found in IBM's "AS/400 5250 Display Station
	Pass-Through: Interface Specification" document. There is no order number for
	this manual. Byte 18 determines whether Pip Data is present.):
	
	  009E12F5 - GDS header for PIP data
	  009A12E2 - GDS Header for PIP subfield
	  009612A0  - GDS Header for pass-through data
	     2000 - Pass through operation flags (start-up record - no diagnostics included)
	  Start-up record:
	  0510 - Reported System ID  - ??? (AS/400 is 0560)
	  0100 - Reported Release Level
	     0000 - Fixed portion flags field
	     Source Device information:
	        23 length field
	        D7C3F2F3 F9F9E2F1 4040  <Reserved>#PC2399S1
	        F3F1 F7F9 Source device type "3179"
	        F0F0 F0F2 Source device model "0002"
	        4040 4040 Keyboard type
	        408000000000 00000000 0000 Reserved
	     Dynamic configuration data:
	        0026 C4
	        C6C1C240 Subfield flags  
	        F6F9F7 Keyboard ID
	        40F2F9F740 Reserved
	        40404040  Char set / code page
	        4040404040404040 WSC type /model
	        4040404040C14000 Actual device type / model
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
