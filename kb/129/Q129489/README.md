---
layout: page
title: "Q129489: DEC 101 Card Does Not Function After Server-Based Setup"
permalink: /kb/129/Q129489/
---

## Q129489: DEC 101 Card Does Not Function After Server-Based Setup

	Article: Q129489
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a DEC 101 network interface card, you are unable to connect
	to the network after performing a server-based installation of Windows 95.
	
	CAUSE
	=====
	
	The NDIS 2 or NDIS 3 network interface card drivers that Windows 95 is using are
	not configuring the DEC 101 network interface card properly. Some settings for
	the DEC 101 network interface card allow the card to function properly when ODI
	drivers are used, but not when NDIS 2 or NDIS 3 drivers are used. In such cases,
	if the Windows 95 NDIS drivers are using the same settings as the ODI drivers
	you were using before installing Windows 95, the network interface card is not
	configured properly and does not function.
	
	RESOLUTION
	==========
	
	Make sure that the NDIS drivers are configuring the DEC 101 network interface
	card properly. For information about how to do so, please contact DEC.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The DEC 101 network interface card is an 8-bit card. This problem does not occur
	with similar 16-bit DEC cards.
	
	Additional query words:
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
