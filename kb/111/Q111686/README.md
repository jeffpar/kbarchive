---
layout: page
title: "Q111686: Incorrect Detection of Artisoft's NodeRunner Network Card"
permalink: kb/111/Q111686/
---

## Q111686: Incorrect Detection of Artisoft's NodeRunner Network Card

	Article: Q111686
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups 3.11 automatic detection incorrectly identifies the
	Artisoft NodeRunner network adapter.
	
	CAUSE
	=====
	
	The NodeRunner network card works correctly with Microsoft Windows for
	Workgroups when it is configured as an NE2000-compatible card. The Artisoft
	NodeRunner network adapter card is self-configuring. Sometimes Windows for
	Workgroups detection does not properly recognize the card as being NE2000
	compatible.
	
	WORKAROUND
	==========
	
	If this occurs, manually select the NE2000-compatible network card when you are
	setting up the network. This should allow the card to switch to NE2000-
	compatibility mode. If problems still exists, use the NodeRunner 2000
	NRCONFIG.EXE or NRSETUP.EXE program to reconfigure the card.
	
	For Windows 95, use the NRCONFIG.EXE tool to set the adapter to NE2000 or NE1000
	mode.
	
	MORE INFORMATION
	================
	
	The Artisoft NodeRunner network card is manufactured by Artisoft, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.11 node runer runner hang nic ne software configurable
	
	======================================================================
	Keywords          : win95 
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	
