---
layout: page
title: "Q193621: XCLN: Err Msg: Microsoft_OLE2--ProgIDFromCLSID not found"
permalink: kb/193/Q193621/
---

## Q193621: XCLN: Err Msg: Microsoft_OLE2--ProgIDFromCLSID not found

	Article: Q193621
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Outlook for the Macintosh, the following error message
	appears:
	
	  The application "Microsoft Outlook" could not be opened because
	  "Microsoft_OLE2--ProgIDFromCLSID" could not be found.
	
	CAUSE
	=====
	
	This problem occurs when you use Microsoft Outlook for Macintosh, Exchange
	Server Edition, version 8.0, and EPSON Digital Photolab.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the file Oless.ppc from the Extensions
	folder by doing the following steps.
	
	NOTE: These steps assume that your view settings for folders are as icons.
	
	1. On the desktop, double-click to open your hard disk drive.
	
	2. Double-click to open the System folder.
	
	3. Double-click to open the Extensions folder.
	
	4. Resize and move the Extensions folder so you can see the Extensions(Disabled)
	  folder in the System folder behind the Extensions folder.
	
	5. Drag the Oless.ppc file from the Extensions folder to the
	  Extensions(Disabled) folder.
	
	6. Close all windows. Outlook will now open without the error message.
	
	STATUS
	======
	
	EPSON Photo Sheet Installer is manufactured by EPSON Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	MORE INFORMATION
	================
	
	Some EPSON printers include a CD that bundles several printing-related programs.
	The program EPSON Photo Sheet Installer installs an extension called Oless.ppc
	into the Extensions folder. This program comes bundled with the EPSON Stylus
	Photo 700, Stylus Photo EX, and possibly other printers.
	
	NOTE: Removal of the Oless.ppc extension may render the EPSON Photo Sheet
	Installer inoperable. Contact EPSON for more information about this program.
	
	For information about how to contact EPSON, query in the Knowledge Base for one
	of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook800Mac
	Version           : MACINTOSH:8.0
	Issue type        : kbprb
	
	=============================================================================
	
