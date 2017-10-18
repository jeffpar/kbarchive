---
layout: page
title: "Q81988: MCA Network Cards that Need to Be Manually Excluded"
permalink: kb/081/Q81988/
---

## Q81988: MCA Network Cards that Need to Be Manually Excluded

	Article: Q81988
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Micro Channel Architecture (MCA) EtherCard network adapters are
	not detected by the Microsoft Windows version 3.1. These cards all have shared
	RAM areas that should be manually excluded to prevent Windows from using the
	same address range.
	
	Western Digital         EtherCard PLUS/A      WD8003E/A or WD800ET/A
	Western Digital         StarCard PLUS/A       WD8003ST/A
	Western Digital         EtherCard PLUS 10T/A  WD8003W/A
	Standard MicroSystems   EtherCard PLUS/A      SMC8013EP/A
	Standard MicroSystems   EtherCard PLUS/A      SMC8013WP/A
	
	MORE INFORMATION
	================
	
	To exclude the memory address range that any of these cards are using, load the
	SYSTEM.INI file into a text editor (for example, Notepad or MS-DOS 5.0 EDIT.COM)
	and add the following line to the [386Enh] section
	
	  EMMEXCLUDE=<xxxx-yyyy>
	
	where <xxxx-yyyy> is the address range in hexadecimal used by the network
	card. The total valid range is A000-FFFF.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
