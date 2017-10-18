---
layout: page
title: "Q90123: Artisoft NE3 Network Card Compatibility"
permalink: kb/090/Q90123/
---

## Q90123: Artisoft NE3 Network Card Compatibility

	Article: Q90123
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	Windows for Workgroups does not include an adapter choice for the Artisoft NE3
	8-bit Network card. However, the card can emulate a Western Digital (SMC) 8003,
	8-bit network card. There are no physical changes to the card (jumpers)
	necessary for emulation.
	
	MORE INFORMATION
	================
	
	The Artisoft NE3 network card is an earlier model and has been out of production
	for several years. The configuring software (NE3.EXE) can provide useful
	information about the card settings. This information can be seen by typing "NE3
	?" (without the quotation marks) from the MS-DOS command line in the NE3
	directory.
	
	Important settings for the card include:
	
	- Interrupt (labeled J10)
	  Available interrupts=2/3/4/5/6/7
	  Default interrupt=3
	
	- RamBase (Software configurable)
	  Default=D000
	
	- I/O Base (Labeled J1)
	  Default=280
	
	For more information regarding the Artisoft NE3 network card, please contact
	Artisoft technical support.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
