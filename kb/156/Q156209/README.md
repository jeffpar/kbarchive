---
layout: page
title: "Q156209: Updated HP Printer Drivers for Windows NT 3.51 SP5"
permalink: kb/156/Q156209/
---

## Q156209: Updated HP Printer Drivers for Windows NT 3.51 SP5

	Article: Q156209
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5,4.0
	Operating System(s): 
	Keyword(s): kbfile kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 SP5 
	- Microsoft Windows NT Workstation versions 3.51 SP5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released new printer drivers for the following Hewlett- Packard
	(HP) printers:
	
	  HP LaserJet 6P
	  HP LaserJet 6MP
	  HP DeskJet 680C
	  HP DeskJet 682C
	  HP DeskJet 690C
	  HP DeskJet 692C
	  HP DeskJet 693C
	  HP DeskJet 694C
	  HP DeskJet 870C
	  HP DeskJet 870Cse
	  HP DeskJet 870Cxi
	
	MORE INFORMATION
	================
	
	Perform the following steps to extract the printer drivers:
	
	1. Download Nt351pre.exe from the following location to an empty folder:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/drivers/3.51/HP
	
	2. Go to this folder and type the following command at a Command Prompt:
	
	  nt351pre -d
	
	Once the files have been extracted, perform the following steps to install a
	printer driver:
	
	NOTE: These drivers require Windows NT 3.51 with Service Pack 5.
	
	1. Go to the Main group, double-click Control Panel, and then double-click Print
	  Manager.
	
	2. Click Create Printer on the Printer menu.
	
	3. Click Driver, click Other, type the path where you extracted the new drivers,
	  and then click OK.
	
	4. Click the appropriate driver in the Printer Driver list and then click OK.
	
	5. Enter the correct information and then click OK.
	
	  NOTE: For more information on how to configure your printer, see the Print
	  Manager section in the Microsoft Windows NT System Guide.
	
	For more information on obtaining printer drivers for Windows NT, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q142643
	  TITLE : Windows NT 4.0 Driver Library
	
	  ARTICLE-ID: Q156082
	  TITLE : Windows NT Printer Driver Support
	
	Perform the following steps to submit a formal request for a new printer driver
	or for a printer driver enhancement:
	
	1. Include the following information in an email message:
	
	   - Requester's Name
	
	   - Business Name
	
	   - Requester's Contact Information (phone number and/or email address)
	
	   - Printer Manufacturer
	
	   - Printer Model
	
	   - Windows NT Version (including Service Pack)
	
	   - Nature of Request (Feature Request or Driver Request)
	
	2. Send the mail to NTWISH@MICROSOFT.COM
	
	  Sending mail to NTWish in no way guarantees Microsoft will write a driver for
	  your printer. Additionally, you will not receive a reply to any email sent to
	  NTwish.
	
	Additional query words: 3.51
	
	======================================================================
	Keywords          : kbfile kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5,4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
