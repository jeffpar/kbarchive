---
layout: page
title: "Q153196: XCLN: Error: Next Print Band Could Not Be Retrieved"
permalink: /kb/153/Q153196/
---

## Q153196: XCLN: Error: Next Print Band Could Not Be Retrieved

	Article: Q153196
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from the Microsoft Exchange Windows 3.1 client to a
	Hewlett-Packard (HP) Laserjet printer using the Hppcl5a driver, the following
	error message may appear:
	
	  The items(s) could not be printed. Next print band could not be retrieved.
	
	CAUSE
	=====
	
	Some 16-bit printer drivers send graphics and text in separate bands. Others
	simply support text bands. As printing occurs, the driver waits for the
	application to tell it what kind of band to use. This is not compatible with the
	printing method that the Microsoft Exchange Windows 3.1 client uses, which is to
	send the entire page to the printer with no instruction, allowing the printer
	driver to determine how and where to print on the page.
	
	WORKAROUND
	==========
	
	Do one of the following:
	
	- Upgrade the printer driver to Hppcl5e.drv. This driver may not handle banding
	  better, but the client will look for this particular driver name and not use
	  banding at all. However, this driver may not work for all affected printers,
	  which include HP Laserjets III and 4 and some HP Deskjets.
	
	  -or-
	
	- Add the following setting
	
	     UsePrintBanding=0
	
	  to the options section of the Exchng.ini file. With this setting the client
	  does not use the banding feature of the driver.
	
	
	Additional query words: Print Band Error Laserjet
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
