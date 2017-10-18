---
layout: page
title: "Q103026: RAS Frame Format Diagram"
permalink: kb/103/Q103026/
---

## Q103026: RAS Frame Format Diagram

	Article: Q103026
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Below is a diagram indicating the format of Remote Access Service
	(RAS) frames:
	
	                 +---+---+---+---+------  --------+---+---+---+
	
	  RAS 1.0 frame  |SYN|SOH| LENGTH| <--> Data <--> |03h|  CRC  |
	  asybeui frame  +---+---+---+---+------  --------+---+---+---+
	
	                      ^
	                      |--SOH_BCAST or SOH_DEST
	
	                 +---+---+---+---+---+------  --------+---+---+---+
	
	  RAS 2.0 frame  |SYN|SOH| LENGTH|COH| <--> Data <--> |ETX|  CRC  |
	  asybeui frame  +---+---+---+---+---+------  --------+---+---+---+
	  with compress       ^
	
	                      |--(SOH_BCAST|SOH_COMPRESS)
	                         or (SOH_DEST|SOH_COMPRESS)
	
	                 +---+---+---+---+---+------  --------+---+---+---+
	
	  RAS 2.0 frame  |SYN|SOH| LENGTH|COH| <--> Data <--> |ETX|  CRC  |
	  asybeui frame  +---+---+---+---+---+------  --------+---+---+---+
	  with compress   ^   ^
	  with XON/XOFF   |   |--(SOH_BCAST|SOH_COMPRESS)
	
	                  |      or (SOH_DEST|SOH_COMPRESS)
	                  |
	                  +-------(SYN | SYN_XONXOFF)
	
	                 +---+---+---+---+---+---+-----  -------+---+--+--+
	
	  RAS 2.0 frame  |SYN|SOH| LENGTH| E-TYPE|<--> Data <-->|ETX| CRC |
	  with TCP/IP    +---+---+---+---+---+---+-----  -------+---+--+--+
	  no compress         ^
	
	                      |--(SOH_BCAST|SOH_TYPE) or (SOH_DEST|SOH_TYPE)
	
	                 +---+---+---+---+---+---+---+----  ------+---+--+--+
	
	  RAS 2.0 frame  |SYN|SOH| LENGTH| E-TYPE|COH|<-> Data <->|ETX| CRC |
	  with TCP/IP    +---+---+---+---+---+---+---+----  ------+---+--+--+
	  and compress        ^
	
	                      |--(SOH_BCAST|SOH_TYPE|SOH_COMPRESS)
	                         or (SOH_DEST|SOH_TYPE|SOH_COMPRESS)
	
	  NOTE: Compression is performed after COH and before ETX. This does
	  mean that E-TYPE is not compressed. Also, when CRC is performed,
	  SOH through ETX (inclusive) is checked. ETX is included because RAS
	  1.0 also checked ETX.
	
	  SYN          = 0x16
	  SOH_BCAST    = 0x01
	  SOH_DEST     = 0x02
	  SOH_TYPE     = 0x80
	  SOH_COMPRESS = 0x40
	  SYN_XONXOF   = 0x20
	  CRC          = 16 bit CRC polynomial (Big-Endian format)
	  LENGTH       = length of Data part of frame (two-byte Big-Endian)
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
