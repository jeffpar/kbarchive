---
layout: page
title: "Q135172: CableTron T2015 Token Ring Adapter Fails on 4 Mbps Ring Speed"
permalink: kb/135/Q135172/
---

## Q135172: CableTron T2015 Token Ring Adapter Fails on 4 Mbps Ring Speed

	Article: Q135172
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install and configure a CableTron T2015 Token Ring network adapter in
	a Windows 95-based computer to work with a 4 Mbps Token Ring network using the
	T2015.dos NDIS 2 driver, you find that you cannot access the network after you
	restart the computer.
	
	CAUSE
	=====
	
	Setup places a parameter for ring speed in both the registry and the
	Protocol.ini file. The NDIS 2 driver does not read the Protocol.ini file for
	this parameter correctly and remains set at the factory-default speed of 16
	Mbps.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the Protocol.ini file. Change the
	line that reads
	
	  BANDWIDTH=1
	
	to read:
	
	  " BANDWIDTH=4 " (without the quotation marks)
	
	After you make this change, save and close the Protocol.ini file, and then
	restart your computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
