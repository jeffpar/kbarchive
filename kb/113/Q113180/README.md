---
layout: page
title: "Q113180: Bookshelf: Does Not Adopt New Default Printer Settings"
permalink: kb/113/Q113180/
---

## Q113180: Bookshelf: Does Not Adopt New Default Printer Settings

	Article: Q113180
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the default printer in the Windows Control Panel, Bookshelf may
	retain the printer setting it had initially.
	
	This occurs because Bookshelf incorrectly stores the Default Printer information
	internally as Specific Printer information. Bookshelf ignores the Default
	Printer Driver and therefore follows no change made to it.
	
	For example, if the Hewlett-Packard (HP) LaserJet II is your default printer,
	Bookshelf sets itself to print to the HP LaserJet II as Specific Printer. Then,
	if you later designate a different printer as your default printer, Bookshelf
	remains set to print to the HP LaserJet II and does not adopt your new printer
	settings.
	
	This problem was resolved in Microsoft Bookshelf 96-97 for Windows.
	
	Additional query words: msn_bookshelf 1994 multi media multimedia multi- laser jet
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1994
	Version           : :1994 edition
	
	=============================================================================
	
