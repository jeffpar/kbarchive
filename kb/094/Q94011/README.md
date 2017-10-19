---
layout: page
title: "Q94011: Zenith MasterSport SL/SLE BIOS Update Required"
permalink: /kb/094/Q94011/
---

## Q94011: Zenith MasterSport SL/SLE BIOS Update Required

	Article: Q94011
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows for Workgroups with a Xircom Pocket Ethernet I adapter on a
	Zenith Mastersport SL/SLE using MFM-300 Monitor BIOS versions earlier than 4.1c,
	you may receive the following error:
	
	  Pocket Ethernet Adapter missing, not powered or malfunctioned.
	  Press any key to continue...
	
	CAUSE
	=====
	
	According to Xircom technical support, you may encounter problems initializing
	the Pocket Ethernet I on Zenith Mastersport SL and SLE computers with Windows
	for Workgroups if the BIOS version is earlier than 4.1c and NDIS driver version
	1.27 (PENDIS.DOS) is being used.
	
	Other drivers (such as Artisoft's Lantastic AI drivers) initialize the adapter
	without error using this BIOS revision, but the NDIS driver version 1.27 fails
	to recognize the card.
	
	RESOLUTION
	==========
	
	To obtain an update to version 4.1c of the Zenith MFM-300 Monitor BIOS, contact
	Zenith technical support. This BIOS update may also be downloaded from the
	Zenith forum on CompuServe.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
