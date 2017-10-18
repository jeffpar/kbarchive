---
layout: page
title: "Q141839: How to Set Up a Network Printer Using Point and Print"
permalink: kb/141/Q141839/
---

## Q141839: How to Set Up a Network Printer Using Point and Print

	Article: Q141839
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up a shared network printer and how to connect
	to the shared printer using Point and Print.
	
	NOTE: This article assumes that the Microsoft Client for Microsoft Networks and
	the file and printer sharing service are installed on all computers on which you
	want to use Point and Print.
	
	MORE INFORMATION
	================
	
	Setting Up the Shared Printer
	-----------------------------
	
	1. Connect the new printer to the computer.
	
	2. Click the Start button, point to Settings, click Printers, and then
	  double-click Add Printer.
	
	3. Follow the instructions in the Add Printer Wizard to set the printer up as a
	  local printer. Specify the printer as the default printer for this computer.
	  Note that this affects only local print jobs from this computer.
	
	4. When you are done setting up the printer, use the right mouse button to click
	  the new printer icon in the Printers window, and then click Sharing on the
	  menu that appears.
	
	5. On the Sharing tab, click the Shared As option.
	
	6. In the Share Name box, type a name for the shared printer. In the Comments
	  box, type any comments about the shared printer.
	
	7. Click OK.
	
	Connecting to the Shared Printer
	--------------------------------
	
	1. Click the Start button, point to Settings, and then click Printers. Move the
	  Printers window to one side of the screen and leave it there.
	
	2. Double-click Network Neighborhood on the desktop. Find the computer that is
	  sharing the network printer, and then double-click that computer's icon.
	
	3. Drag the shared printer icon from the Windows Explorer window to the Printers
	  window you opened in step 1. The Add Printer Wizard gathers as much
	  information as it can from the remote computer and prompts you for any
	  additional information. The printer drivers for the printer are copied from
	  the remote computer to your computer. Be sure to print a test page.
	
	Note that there are three alternate methods for connecting to the shared
	printer:
	
	- After step 2, use the right mouse button to click the shared printer icon,
	  and then click Install on the menu that appears.
	
	- Double-click the shared printer icon. Windows 95 prompts you to install the
	  printer.
	
	- In Network Neighborhood, drag a document file to the shared printer icon.
	  This installs the printer and prints the document.
	
	The local computer inherits printer settings (such as paper size, memory amount,
	page orientation, and so on) from the remote computer. These settings can be
	changed and are retained on the local computer.
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
