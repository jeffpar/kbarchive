---
layout: page
title: "Q177735: XADM: Unable To Access Exchange Administrator Program"
permalink: /kb/177/Q177735/
---

## Q177735: XADM: Unable To Access Exchange Administrator Program

{% raw %}

	Article: Q177735
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft Windows NT Server version 4.0 Service Pack 3
	(SP3) from Microsoft Windows NT Server version 4.0 Service Pack 2 (SP2), you are
	unable to access the Microsoft Exchange Administrator program either locally or
	remotely. You may experience the following symptoms:
	
	- When you attempt to access the Exchange Administrator program, and you Select
	  Browse, you receive the following message:
	
	  Microsoft Exchange Administrator
	
	  The list of Microsoft Exchange Server computers is not available
	  because no Microsoft Exchange Server computer could be located.
	
	  Microsoft Exchange Administrator
	  ID no c10312c8
	
	  When you manually type the name of the Exchange Server, you receive the error
	  message:
	
	  DS_E_COMMUNICATIONS_PROBLEM, connection to the Microsoft Exchange
	  Server Computer could not be made
	
	  -or-
	
	- When you use the Compaq NetFlex-3 network card, network connectivity to a
	  computer is intermittently lost and then restored every few minutes without
	  having to restart the system.
	
	  -or-
	
	- Depending on the application, the client or application may have to be
	  restarted to restore the connection. If the application has open files on the
	  server during this problem, data may be lost.
	
	  -or-
	
	- Some applications report the lost connections. Others applications may seem
	  to stop responding (hang) for several minutes before continuing.
	
	CAUSE
	=====
	
	This occurs because Windows NT Server does not detect the newest Compaq
	NetFlex-3 adapter card during setup. The drivers for the newer cards have the
	same name as the drivers for the old NetFlex-3 cards, and also work with the old
	NetFlex-3 cards. Replacing the old NetFlex-3 drivers with the new NetFlex-3
	drivers in the I386\Drvlib.nic folder does not allow the new drivers to be
	loaded for the old cards.
	
	RESOLUTION
	==========
	
	Compaq has supplied a new Ntoemdh.inf file that allows Windows NT to detect and
	load the drivers for these new cards, and allows the new drivers to be loaded
	for the older NetFlex-3 cards as well.
	
	NOTE: For information on the latest versions of the adapter card drivers, contact
	the manufacturer.
	
	For information about how to contact Compaq Computer Corporation, query in the
	Knowledge Base for the following article:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170950 Intermittent Loss of Connectivity While Using Compaq NetFlex-3
	
	  Q153589 Compaq NetFlex-3/E Controller not Upgraded During WinNT 4.0 Setup
	
	
	If problems persist after the new drivers have been installed, use Network
	Monitor to evaluate the affected Exchange Server computer. For additional
	support in this area, contact the Windows NT Server support group.
	
	NetFlex-3 is manufactured by Compaq Computer Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: netflex3 c10312c8
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
