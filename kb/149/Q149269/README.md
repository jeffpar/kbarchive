---
layout: page
title: "Q149269: Printing Using LPR to QMS Printer with a CrownNet Network Card"
permalink: /kb/149/Q149269/
---

## Q149269: Printing Using LPR to QMS Printer with a CrownNet Network Card

	Article: Q149269
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a printer queue using Line Printer Remote (LPR) printing to a
	QMS printer that is connected directly to the network with a QMS CrownNet
	Ethernet network card, you must enter the IP address in both the Host and
	Printer Name fields of the Add LPR Compatible Printer dialog box. If the IP
	address is only listed in the first field, the print job will not print. This
	does not affect QMS printers with the QMS Classic network cards with Firmware
	version 5.097 or above.
	
	WORKAROUND
	==========
	
	To configure QMS printers with CrownNet network cards, do the following:
	
	1. Select the printer in Print Manager and select Properties on the File menu.
	
	2. In the Printer Properties window, select Other in the Print To box.
	
	3. In the Printer Destinations dialog box, highlight LPR Port and click OK.
	
	4. In the Add LPR Compatible Printer window, type the IP address of the printer
	  in the "Name or address of Host providing lpd" and "Name of printer on that
	  machine" fields. Click OK.
	
	MORE INFORMATION
	================
	
	The information in this article was obtained from QMS technical support. Any
	questions concerning this procedure should be directed to QMS. The technical
	support number is (334) 633-4300 or reference Q60782 for current phone number.
	
	The QMS product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt 1725
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
