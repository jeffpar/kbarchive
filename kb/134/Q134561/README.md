---
layout: page
title: "Q134561: Problems with Novell/Eagle NE200T PCMCIA Network Adapter"
permalink: kb/134/Q134561/
---

## Q134561: Problems with Novell/Eagle NE200T PCMCIA Network Adapter

	Article: Q134561
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an NDIS2 MAC driver for a Novell/Eagle NE200T PCMCIA network
	adapter card in Windows 95, your computer may stop responding (hang) or have no
	network functionality.
	
	CAUSE
	=====
	
	This network adapter may require the real-mode enabler for the PCMCIA card
	services, or may require a different MAC driver to work properly.
	
	RESOLUTION
	==========
	
	- You may need to load the real-mode card and socket services drivers. Although
	  the exact names of these drivers varies from one system to another, they
	  typically appear as follows in the Config.sys file:
	
	  device=c:\<path>\cs.exe device=c:\<path>\sscirrus.exe
	  device=c:\<path>\csalloc.exe
	
	  NOTE: You may be able to find references to the original real-mode drivers in
	  the Config.dos file.
	
	- These systems also typically require that the Novell ODI/NETX or VLM driver
	  be installed for the network adapter. To change the driver type, follow these
	  steps:
	
	  1. Click the Start button, point to Settings, and then click Control Panel.
	
	  2. Double-click the Network icon.
	
	  3. Click the Novell/Eagle NE200T PCMCIA network adapter, and then click
	     Properties.
	
	  4. On the Driver Type tab, click the Real Mode (16-bit) ODI Driver option
	     button, and then click OK.
	
	  5. Click OK. When you are prompted to do so, enter the location for the
	     Novell files.
	
	     NOTE: The necessary files should be on a drivers disk included with the
	     network adapter, or you can obtain them from Novell.
	
	  6. When you are prompted to restart the computer, do so.
	
	Additional query words: nic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
