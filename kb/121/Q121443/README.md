---
layout: page
title: "Q121443: Err Msg with Novell NetWare: Windows Cannot Write to This File"
permalink: kb/121/Q121443/
---

## Q121443: Err Msg with Novell NetWare: Windows Cannot Write to This File

	Article: Q121443
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a workstation on a Novell NetWare network, you receive the
	following error message:
	
	  LPTx: Windows cannot write to this file. The disk may be full.
	  Delete any unwanted files and try again.
	
	CAUSE
	=====
	
	Microsoft has received reports that this behavior occurs when the workstation is
	running PSPRINT.
	
	PSPRINT does not support the "Fast Printing Direct to Port" option. PSPRINT is
	functionally similar to RPRINTER, which allows a print queue to be set up for a
	printer attached to a workstation instead of a dedicated print server.
	
	
	WORKAROUND
	==========
	
	Disabling the "Fast Printing Direct to Port" option appears to correct this
	problem. To change this option, perform the following steps:
	
	1. Open Control Panel and choose the Printers icon.
	
	2. Choose the Connect button.
	
	3. Clear the "Fast Printing Direct to Port" option and then choose the OK
	  button.
	
	4. Choose the Close button.
	
	
	MORE INFORMATION
	================
	
	Novell NetWare is manufactured by Novell Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
