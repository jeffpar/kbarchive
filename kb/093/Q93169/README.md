---
layout: page
title: "Q93169: Using Custom IRQ and I/O Settings with Windows for Workgroups"
permalink: kb/093/Q93169/
---

## Q93169: Using Custom IRQ and I/O Settings with Windows for Workgroups

	Article: Q93169
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows for Workgroups Setup detects certain networks and allows
	for specific IRQ and I/O address settings for individual network interface cards
	(NICs). Setup does not accept any settings other than those it provides. This
	behavior can be a problem if you are using a network card that allows an IRQ or
	I/O address setting other than those provided by Windows for Workgroups. This
	article includes procedures that may help you work around such problems.
	
	MORE INFORMATION
	================
	
	To change the IRQ or I/O address for a single installation:
	
	1. During Windows for Workgroups Setup, install the appropriate network card and
	  select any of the available settings.
	
	2. Open the PROTOCOL.INI file in an ASCII text editor, such as Microsoft Windows
	  Notepad.
	
	3. Locate the network card section for your card. Section headings appear as
	  follows:
	
	  [netcardname]
	
	  where "netcardname" is a unique identifier for your network card. (For
	  example, the heading for an Intel EtherExpress 16 is [ms$ee16], and the
	  heading for an NE 1000 compatible card is [ms$ne1clone].) If you are not sure
	  what the identifier for your card is, check the [netcard] section of the
	  NETWORK.INF file. This section contains a list of supported network cards and
	  their corresponding identifiers.
	
	4. Once you locate the [netcard] section, find two lines similar to the
	  following:
	
	  IRQ=
	  IOADDRESS=
	
	  Note: The exact wording of these lines varies from card to card.
	
	5. Change these lines to reflect the settings that your network card is actually
	  using. The IRQ value must be a valid number between 0 and 15. The IOADDRESS
	  value must be a valid hexadecimal I/O address or must take the form 0xNNN,
	  where "NNN" is the address, (for example, IOADDRESS=0x300).
	
	6. Save these changes, then reboot your computer.
	
	  Note: If you regenerate the PROTOCOL.INI file by reinstalling Windows or by
	  removing and then reinstalling the network card in the Network dialog box of
	  Control Panel, these changes are lost.
	
	To change the IRQ or I/O address for multiple installations:
	
	Note: The changes below affect all subsequent installations of Windows for
	Workgroups that have the specified network card. Be sure to make a backup of the
	NETWORK.INF file before you make any changes to it.
	
	1. Open the NETWORK.INF file in a ASCII text editor, such as Microsoft Windows
	  Notepad.
	
	2. Locate the [netcard_protocol] section for your network card. These sections
	  generally have the following form:
	
	  [netcardname_nif] or [netcardname_xif]
	
	  where "netcardname" is a unique identifier for your network card.
	
	3. Once you locate the [netcard_protocol] section for your card, find the
	  following two lines:
	
	        io=<description,type,range,default,flags>
	        irq=<description,type,range,default,flags>
	
	  where "type" is the parameter type, "range" is the range of values for the
	  parameter, and "default" is the default value or the parameter.
	
	  Note: Some fields may be missing in the actual statements. The following is an
	  example:
	
	  irq=IRQ,,text,"3,4,5,9",3
	  io=IOADDRESS,,hex,"0x280,0x3f0,0x10","0x300"
	
	  The following table describes the common type, range, and default values:
	
	     Type    Range                Default   Definition
	     -------------------------------------------------------------------
	
	     Static  Default              N/A       The value cannot be changed
	     Text    "Value, value,..."   Yes       List of text values
	     Int     "First, last, step"  Yes       Integer range
	     Hex     "First, last, step"  Yes       Integer range in hexadecimal
	
	4. The values for the I/O address or the IRQ can then be modified by changing
	  the values inside a text list or the first, last, or step values of an
	  integer or hexadecimal range. For example
	
	  irq=IRQ,,text,"3,4,5,9",3 can be changed to include irq 7.
	  irq=IRQ,,text,"3,4,5,7,9",3
	
	  io=IOADDRESS,,hex,"0x280,0x3f0,0x10","0x300" can be changed to include I/O
	  address 200h by lowering the first value as follows:
	
	  io=IOADDRESS,,hex,"0x200,0x3f0,0x10","0x300"
	
	  Note: The default value following the range MUST be a value in the range.
	
	5. Save the changes to the NETWORK.INF file. The Setup program then displays the
	  setting that you added as a selection in the appropriate box.
	
	For more information, refer to Chapters 5 and 6 of the "Windows for Workgroups
	Resource Kit" manual.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
