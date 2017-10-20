---
layout: page
title: "Q130861: IBM SNA Formats Bit Ordering is Opposite of Intel Convention"
permalink: /kb/130/Q130861/
---

## Q130861: IBM SNA Formats Bit Ordering is Opposite of Intel Convention

{% raw %}

	Article: Q130861
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In conventional Intel bit ordering, the most significant bit (MSB) is numbered 7
	and the least significant bit (LSB) is numbered 0:
	
	MSB                         LSB
	7   6   5   4   3   2   1   0
	
	In Systems Network Architecture (SNA), IBM defined the LSB and MSB to be the
	opposite of the Intel convention. The MSB is numbered 0 and the LSB is numbered
	7:
	
	MSB                         LSB
	 0   1   2   3   4   5   6   7
	
	You need to consider the difference in the Intel and IBM conventions when
	interpreting SNA Server traces using the IBM SNA Formats Guide (part number:
	GA27-3136-10).
	
	MORE INFORMATION
	================
	
	The following is a sample message in an SNA Server SNA Formats trace:
	
	---------------------------------------------- 13:51:52.71
	                     >>SEND>> EXCHANGE ID
	
	TH: 0d0000000600
	
	---- Data ----
	                   Byte 10
	                     |
	                     V
	326605DF FFFF0000 B0041000 00000000     <2f..............>
	00010B40 00100900 00000007 00103700     <...@..........7.>
	27110C08 04F0F2F0 F0F0F00F 06D4E240     <'....020000..MS@>
	E2D5C140 E2C5D9E5 C5D90908 F0F0F0F0     <SNA@SERVER..0000>
	F0F0F013 11031000 10F0F0F0 F0F0F0F0     <000......0000000>
	F0F0F0F0 F0F00E0E F4C1D7D5 C5E34BC3     <000000..4APNETKC>
	D7D6C9D5 E3C3                           <POINTC          >
	
	Byte 10 (=0x10) above in binary is: 0001 0000. It is read from left to right.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
