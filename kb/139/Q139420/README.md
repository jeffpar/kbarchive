---
layout: page
title: "Q139420: HP DesignJet 600 Not Recognized by JetDirect Card"
permalink: /kb/139/Q139420/
---

## Q139420: HP DesignJet 600 Not Recognized by JetDirect Card

	Article: Q139420
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Hewlett-Packard (HP) DesignJet 600 plotter connected to any
	model HP JetDirect card in Windows 95, the HP JetDirect software incorrectly
	identifies the plotter as an HP LaserJet IIIsi printer.
	
	RESOLUTION
	==========
	
	To print to a DesignJet plotter connected to a JetDirect card, install the HP
	DraftMaster II printer driver and redirect the printing to the JetDirect object
	on the network.
	
	To install the DraftMaster II printer driver, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Double-click the Add Printer icon.
	
	3. Click Next, click Local Printer, and then click Next.
	
	4. In the Manufacturers box, click HP. In the Printers box, click DraftMaster
	  II, and then click Next.
	
	5. In the Available Ports box, click LPT1 and then click Next.
	
	6. In the Printer Name box, type a name for the printer. If you print from
	  MS-DOS-based programs, click the Yes option, and then click Next.
	
	7. When you are prompted "Would you like to print a test page?" click No, and
	  then click Finish.
	
	To connect to the JetDirect object on the network, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the DraftMaster II printer, and then
	  click Properties on the menu that appears.
	
	3. On the Details tab, click Add Port.
	
	4. Enter the network path for the JetDirect object in the "Specify the network
	  path to the printer" box, and then click OK.
	
	5. Click OK.
	
	STATUS
	======
	
	Hewlett-Packard is aware of this problem with the JetDirect cards.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
