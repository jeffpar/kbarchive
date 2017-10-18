---
layout: page
title: "Q164848: XCLN: Transmitting Over SPX via Dialup Connection"
permalink: kb/164/Q164848/
---

## Q164848: XCLN: Transmitting Over SPX via Dialup Connection

	Article: Q164848
	Product(s): Microsoft Exchange
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are two known problems with Exchange 95 clients transmitting messages
	using SPX over dialup connections. The second problem will not be seen until the
	first is resolved.
	
	The first problem encountered appears as the following error in Windows 95:
	
	  An exception 0E has occurred at 0028:c00175e6 in VxD NWLINK(01) + 0000438A.
	  This was called from 0028:c0017014 in VxD NWLINK(01) + 00003db8. It may
	  be possible to continue normally.
	
	Nwlink.vxd is accepting packets larger than max frame size. The exception causes
	the machine to hang. For more information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q164474 OE Exception in NWLINK Sending Message from Microsoft Exchange
	
	The second problem:
	
	The real problem is exposed once the Nwlink.vxd problem is remedied. The
	Microsoft Exchange Windows 95 client will hang when attempting to transmit a
	packet greater than 1160 bytes over a dialup connection using SPX.
	
	This occurs because Wsipx.vxd submits a larger frame than is supported. SPX
	checks the max NDIS packet frame size against the max frame size for the
	connection and fails. NDIS packet frame size is 1497 bytes and max frame is
	1160. For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q163378 Microsoft Exchange Hangs Sending Message Using SPX
	
	WORKAROUND
	==========
	
	Connect to the Microsoft Exchange Server before launching the Microsoft Exchange
	client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. A supported fix is
	now available, but has not been fully regression-tested and should be applied
	only to systems experiencing this specific problem. Unless you are severely
	impacted by this specific problem, Microsoft recommends that you wait for the
	next Service Pack that contains this fix. Contact Microsoft Product Support
	Services for more information.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : 1.00
	
	=============================================================================
	
