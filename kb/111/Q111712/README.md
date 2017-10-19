---
layout: page
title: "Q111712: WFWG 3.11: 3C509 MLID May Cause Lost Connections and Hangs"
permalink: /kb/111/Q111712/
---

## Q111712: WFWG 3.11: 3C509 MLID May Cause Lost Connections and Hangs

	Article: Q111712
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the 3COM EtherLink III (3C509) network interface card (NIC) and the
	3COM ODI MLID (3C509.COM or 3C5x9.COM) with Windows for Workgroups version 3.11
	and Novell NetWare is installed as your secondary network, you may encounter the
	following problems:
	
	- Copying large blocks of data across the network cause the computer to stop
	  responding (hang).
	
	- The computer inadvertently loses network connections.
	
	CAUSE
	=====
	
	The 3C509 NIC has a 4-kilobyte (K) FIFO buffer. This allows 2K to receive and 2K
	to transmit. If more information than this is passed through the card at one
	time, that information is lost.
	
	
	In addition, the 3C509 uses approximately 88 percent of the CPU's resources when
	it is transmitting.
	
	RESOLUTION
	==========
	
	As a temporary workaround for this problem, try one of the following:
	
	- Use the IPX Monolithic driver.
	
	  -or-
	
	- Use only the NDIS 3 drivers that ship with Windows for Workgroups 3.11.
	
	  -or-
	
	- Use NetBEUI as your only protocol.
	
	  -or-
	
	- With the "IPX/SPX Compatible Transport with NetBIOS" set as the default
	  protocol, place the following setting in the [Networks] section of the
	  SYSTEM.INI file:
	
	        [Networks]
	        SlowLANAs=0
	
	  -or-
	
	- If you installed Windows for Workgroups 3.11 over Windows for Workgroups
	  version 3.1, use the MSIPX protocol from Windows for Workgroups 3.1.
	
	Additional query words: appnote 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
