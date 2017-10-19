---
layout: page
title: "Q130983: Removing Faxes from the Microsoft Fax Queue"
permalink: /kb/130/Q130983/
---

## Q130983: Removing Faxes from the Microsoft Fax Queue

	Article: Q130983
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to manually remove faxes from the queue in Microsoft
	Exchange in Windows 95.
	
	MORE INFORMATION
	================
	
	You may want to clear the fax queue by manually removing the temporary files
	that compose the faxes in the queue. To do so, follow these steps:
	
	1. Quit and log out of Microsoft Exchange.
	
	2. Open an MS-DOS command prompt session.
	
	3. Type the following command to move to the fax queue directory
	
	  " cd\<windir>\spool\fax " (without the quotation marks)
	
	  where <windir> is the Windows 95 directory.
	
	4. Type the following commands to remove the temporary spool files:
	
	  " del *.mg3
	  del *.efx " (without the quotation marks)
	
	5. Type "exit" (without the quotation marks) to close the MS-DOS command prompt
	  session.
	
	6. Restart Microsoft Exchange.
	
	NOTE: A fax sitting in the outbox will start the faxing process and put the fax
	or faxes back into the queue.
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Issue type        : kbinfo
	
	=============================================================================
	
