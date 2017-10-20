---
layout: page
title: "Q152304: Random Blue Screens Caused by Bad Packet and DLC.SYS"
permalink: /kb/152/Q152304/
---

## Q152304: Random Blue Screens Caused by Bad Packet and DLC.SYS

{% raw %}

	Article: Q152304
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT STOP Message (Blue Screen), frequently a BugCheck 0x0000000A, is
	displayed due to a corrupt Ethernet 802.3 packet received by DLC.SYS.
	
	CAUSE
	=====
	
	An assumption was made by DLC.SYS that a Length Field (LPDU Length) in the 802.3
	Ethernet header was valid. This length field should always be 3 or greater.
	
	An IEEE 802.3 Frame has the following format.
	
	|<------------------ Maximum Length 1532 Bytes ------------------>|
	V                                                                 V
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//--+-+-+-+-+-+-+-+
	|  PREAMBLE   |S| DEST ADDR | SRC ADDR  |LP | LPDU  |Pad  |  FCS  |
	|  7 Bytes    |D|  6 Bytes  |  6 Bytes  |DU | Bytes |     |4 Bytes|
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//--+-+-+-+-+-+-+-+
	                                               |
	                                               |
	                                /--------------/ 
	     |                          |                        |
	     V                          V                        V
	   <-+--------+--------+--------+--------+-------//------+>
	     |  DSAP  |  SSAP  |  Control Field  | Information   |
	     | 1 Byte | 1 Byte |  1 or 2 Bytes   |  Field        |
	   <-+--------+--------+--------+--------+-------//------+>
	
	                    IEEE 802.3 Frame Format
	
	The field lengths are as follows:
	
	    * Preamble - 7 bytes
	    * Start Delimiter (SD) - 1 byte
	    * Destination Address (DEST ADDR)- 6 bytes
	    * Source Address (SRC ADDR) - 6 bytes
	    * LPDU Length (Length of the LLC Protocol Data Unit) - 2 bytes
	      (This field should always have a value of 3-1500)
	    * LPDU (LLC Protocol Data Unit) - variable length (3-1500 bytes)
	      - Destination SAP Address (DSAP) - 1 byte
	      - Source SAP Address (SSAP) - 1 byte
	      - Control Field - 1 or 2 bytes
	      - Informational Field - variable length (0-1497)
	    * Pad - 0 to 43 bytes
	    * Frame Check Sequence (FCS) - 4 bytes
	
	In the case that caused the Windows NT STOP Message, a corrupt IEEE 802.3 frame
	was received by DLC.SYS with a LPDU Length field of 0 (which is invalid).
	Because every LLC Protocol Data Unit (LPDU) consists of a 1 byte DSAP, 1 byte
	SSAP, and at least a 1 byte Control Field, the LPDU Length should always be at
	least 3.
	
	
	RESOLUTION
	==========
	
	A change was made to DLC.SYS to inspect the LPDU Length field and to discard all
	IEEE 802.3 packets whose length fields are invalid (less than 3).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Instability Pool Memory Corruption
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
