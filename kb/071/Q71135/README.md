---
layout: page
title: "Q71135: DCA Irmatrak Network Card and Windows 3.0"
permalink: /kb/071/Q71135/
---

## Q71135: DCA Irmatrak Network Card and Windows 3.0

{% raw %}

	Article: Q71135
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Windows version 3.0 in enhanced mode on a Novell network
	with a DCA Irmatrak Token ring board, you may not be able to see files on a
	network drive within File Manager, and the print servers may not show up when
	you select the network printers in Control Panel.
	
	This information applies to Microsoft Windows version 3.0, and 3.0a. This
	information does not apply to later versions of Windows.
	
	CAUSE
	=====
	
	This is a known problem with the DCA Network drivers supplied with the card.
	
	WORKAROUND
	==========
	
	There are two methods you can use to work around these problems:
	
	- Run Windows in standard or real mode.
	
	  -or-
	
	- Disable the DMA for the Network card.
	
	  To disable the DMA, you need to run the JUMPERS utility. JUMPERS is a Novell
	  shareware utility that allows you to change the IPX.COM without rerunning
	  SHELLGEN. (SHELLGEN is a Novell utility for generating IPX.COM. It allows you
	  to specify the type of network card and its configuration.) JUMPERS is
	  located on the Installation and Configuration disk that comes with the DCA
	  board. To run the JUMPERS utility, type "jumpers ipx.com" (without the
	  quotation marks) from the MS-DOS prompt and then select none for DMA.
	
	MORE INFORMATION
	================
	
	To resolve the problem on a more permanent basis, you need to update your driver
	files. Check if the following Novell files are earlier than version 3.02 or have
	dates earlier than the following:
	
	  IPX.OBJ             12/18/90
	  NETx.COM            02/06/91
	  VNETWARE.386        03/11/91
	  NETWARE.DRV         04/01/91
	
	These files can be downloaded via NETWIRE on COMPUSERV. To get them, type "GO
	NOVLIB" and then download the WINUP2.ZIP file.
	
	Version 1.10 is the minimum required to correct the problem. If you have version
	1.10 or later, you do not need the updated Novell files above. You can obtain a
	current version of the DCA network drivers from the DCA Update Department.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 3.00 win30 3rdparty 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
