---
layout: page
title: "Q137684: Attachments in Microsoft Exchange Printed to Default Printer"
permalink: /kb/137/Q137684/
---

## Q137684: Attachments in Microsoft Exchange Printed to Default Printer

	Article: Q137684
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
	
	When you print a Microsoft Exchange message with an attachment, the message is
	printed to the specified printer, but the attachment may be printed to the
	Windows 95 default printer.
	
	CAUSE
	=====
	
	This behavior occurs only if the following conditions are met:
	
	- You have two printer drivers installed on the same computer, and each driver
	  is configured to print to a different location.
	
	- You print the message with the attachment in the following manner:
	
	  1. You click the mail message containing the attachment, and then click Print
	     on the File menu.
	
	  2. You click the Print Attachments check box to select it.
	
	  3. In the Printer Name box, you click a printer other than the default
	     printer.
	
	  4. You click OK.
	
	Microsoft Exchange prints the message to the printer you specified, but the
	program associated with the attachment is responsible for printing the
	attachment. In this case, the program associated with the attachment prints the
	attachment to the default printer.
	
	RESOLUTION
	==========
	
	To resolve this situation, use either of the following methods:
	
	- Before you print the message, set the printer to which you want to print the
	  message as the default printer. To do so, follow these steps:
	
	  1. Click the Start button, point to Settings, and then click Printers.
	
	  2. Use the right mouse button to click the printer you want to set as the
	     default printer, and then click Set As Default on the menu that appears.
	
	- Open the mail message, double-click the attachment to start its associated
	  program, and then print the attachment to the printer you specify in the
	  associated program.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
