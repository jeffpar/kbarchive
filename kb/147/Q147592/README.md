---
layout: page
title: "Q147592: Setting Up Network Client 3.0 On Cogent EM960/964 PCI Adapter"
permalink: /kb/147/Q147592/
---

## Q147592: Setting Up Network Client 3.0 On Cogent EM960/964 PCI Adapter

	Article: Q147592
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.0,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Cogent eMASTER+ EM960 or EM964 10/100 Mbps PCI
	network adapter in Network Client 3.0 for MS-DOS, the following error message
	appears:
	
	  No driver was found in the specified location (path).
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Run Network Client 3.0 for MS-DOS Setup.
	
	2. Select Change Network Configuration and press Enter.
	
	3. Select Add Adapter and press Enter.
	
	4. Select "*Network adapter not shown on list below..." and press Enter.
	
	5. Insert the floppy disk provided by Cogent that contains the network adapter
	  drivers.
	
	6. In Network Client 3.0 for MS-DOS Setup, enter the following:
	
	  " <drive>:\WINDOWS " (without the quotation marks)
	
	  where <drive> is the drive letter for the floppy disk drive.
	
	7. Select the correct Cogent network adapter driver.
	
	The third-party product discussed here is manufactured by Cogent Data
	Technologies, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : winnt:3.0,3.5,3.51
	
	=============================================================================
	
