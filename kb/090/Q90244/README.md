---
layout: page
title: "Q90244: The Network Card Is Unable to Access the Network"
permalink: /kb/090/Q90244/
---

## Q90244: The Network Card Is Unable to Access the Network

{% raw %}

	Article: Q90244
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Windows for Workgroups network card device drivers load correctly when
	you start your computer, but you cannot see the network when you start Windows
	for Workgroups or Workgroup Connections, your network card is probably
	improperly configured.
	
	MORE INFORMATION
	================
	
	Most network cards have multiple transceiver options. These correspond to the
	connectors on the back of the card (BNC, AUI, TP, or twisted pair, and so on).
	Make sure the network card is configured to use the connector on the back of the
	card to which the network cable is attached.
	
	There are several common ways to configure the connector for a net card. Your
	connector probably uses ONE of the following:
	
	- Jumpers on the card itself. You will need the documentation that came with
	  the network card in order to set the jumper to the correct position.
	
	- Software configurable. These network cards can be configured by running a
	  program, that comes with the card and will allow you to change the settings.
	
	- Set by Parameters in the PROTOCOL.INI file. This is similar to software
	  configurable. These settings can be changed with the Windows for Workgroups
	  or Workgroup Connections Setup programs.
	
	For a more detailed description of connector types (BNC, AUI, TP, and so on),
	please see the Windows for Workgroups installation documentation.
	
	Some other possible causes for this problem:
	
	- There is an interrupt conflict. Try putting the net card on a different
	  interrupt.
	
	- The network cable is not plugged in to the net card or is loose.
	
	- The network cable is faulty.
	
	- The network card is not functioning properly. This can be caused by a
	  conflict between the net card and some other device in the system.
	
	- The network card driver is not functioning properly. Make sure you are using
	  the correct version of the network card driver (the one that comes with
	  Windows for Workgroups or Workgroup Connections). Some network cards come
	  with a disk containing NDIS Network drivers; these may not work correctly.
	
	Additional query words: 3.10 1.00 wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
