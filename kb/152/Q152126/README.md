---
layout: page
title: "Q152126: Windows NT Setup Stops on Compaq Prosignia 486/66 with Netflex-L"
permalink: kb/152/Q152126/
---

## Q152126: Windows NT Setup Stops on Compaq Prosignia 486/66 with Netflex-L

	Article: Q152126
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Windows NT 3.51 Server or Workstation on a Compaq Prosignia
	486/66 with the embedded Netflex-L adapter using Pcntn3.sys, Setup may stop
	responding at the "Starting Network" portion of the GUI setup.
	
	RESOLUTION
	==========
	
	- Install the MSLOOPBACK adapter during Setup. After setup is complete, you can
	  add the Pcntn3.sys driver successfully.
	
	  -OR-
	
	- Use the latest Compaq SSD and install the Compaq Standard EISA HAL during
	  setup. Also, make sure to load the Netflex-L driver that is included with the
	  latest SSD.
	
	STATUS
	======
	
	The Prosignia 486/66 is manufactured by Compaq Computer Corpoaration, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: hang
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
