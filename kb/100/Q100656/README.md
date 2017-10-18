---
layout: page
title: "Q100656: &quot;Error Writing to LPT1:&quot; with Lexmark 4037/4039 Under WFWG"
permalink: kb/100/Q100656/
---

## Q100656: &quot;Error Writing to LPT1:&quot; with Lexmark 4037/4039 Under WFWG

	Article: Q100656
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not been
	tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information.
	
	SYMPTOMS
	========
	
	When you print to a remote Lexmark IBM 4037 or 4039 printer from a Windows for
	Workgroups machine using the PCL 5 language driver that comes with the printer,
	you receive one of the following error messages:
	
	- Error writing to LPT1
	
	  -or-
	
	- Printer port is offline or disconnected
	
	WORKAROUND
	==========
	
	To eliminate either of these error messages, change the driver settings.
	
	NOTE: The 4039 PostScript printer drivers do not require any changes.
	
	The Lexmark IBM 4039 line of printers ship with an accelerated printer driver (a
	PCL 5 driver specific to the 4039 printers) and a PostScript driver. To use the
	accelerated driver to print to a Lexmark IBM 4039 printer over a Windows for
	Workgroups network, you must disable the Fast Printing Direct To Port option on
	the client machine. To do this, use the following steps:
	
	1. In Control Panel, choose the Printers icon.
	
	2. Select the IBM 4039 Print Accelerator Driver. (This is the PCL 5 language
	  driver that comes with the printer.)
	
	3. Choose the Setup button and then the Options button.
	
	4. Clear the Fast Printing Direct To Port check box.
	
	
	NOTES:
	
	- This change does not need to be made on the system that is sharing the
	  Lexmark 4039 printer.
	
	- According to the "Software Application Driver Information Manual" from IBM,
	  the 4019 and 4029 printer drivers do not work with the 4039 printer.
	
	MORE INFORMATION
	================
	
	For more information, call Lexmark Customer Support.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this products' performance
	or reliability.
	
	Additional query words: 3rdparty err msg 3.10 IBM LEXMARK POSTSCRIPT HPPCL5 10R 12R 16R
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
