---
layout: page
title: "Q216212: How to Configure Printing to PPA Printers Through Jet Direct"
permalink: /kb/216/Q216212/
---

## Q216212: How to Configure Printing to PPA Printers Through Jet Direct

	Article: Q216212
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Printing to Print Performance Architecture (PPA) printers through Jet Direct
	boxes is fully supported, as long as the Jet Direct box is properly configured.
	
	MORE INFORMATION
	================
	
	There are numerous error messages that can be generated from the an incorrectly
	configured Jet Direct box. A couple of common errors for an already defined
	printer, where the configuration was reset for a Jet Direct device, would be
	either of the following:
	
	  The parameter is incorrect for [Printer name].
	
	  unable to connect
	
	Problems can be as simple as a printout that is not formatted correctly to an
	inability to set up a remote port for the Jet Direct printer device. Common
	practice in trouble shooting printer problems should include a check on the Jet
	Direct's configuration.
	
	Each Jet Direct card will have its own method for verifying and changing the
	configuration of the Jet Direct devices. The steps are generally found in the
	owner's manual and most vendors now have Web sites where this information and
	any updates may be found at. For example Hewlett Packard's Web site has
	important information on configuration of its devices.
	
	Properly configured means the following:
	
	- Configure the HP Jet Direct device for Centronics, and verify that the box
	  has been power cycled if the configuration was changed from either Bitronics
	  or MLC mode.
	
	- For Windows NT 4.0, the the driver must be a unidirectional driver. This is
	  generally the case for Windows NT with PPA printers.
	
	Windows NT 4.0 will not support connecting a PPA device directly to the Windows
	NT computer. Using third-party OEM drivers that print to an external Jet Direct
	box and following the directions above will allow Windows NT to print to a PPA
	device.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q153958 No Support for Print Performance Architecture under Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
