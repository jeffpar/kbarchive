---
layout: page
title: "Q117258: SFM Converts Macintosh HFS Filenames to NTFS Unicode"
permalink: kb/117/Q117258/
---

## Q117258: SFM Converts Macintosh HFS Filenames to NTFS Unicode

	Article: Q117258
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Services for Macintosh (SFM) makes it possible for
	Macintosh clients to create filenames on SFM server volumes that appear to
	contain characters that are illegal in NTFS filenames, but are legal characters
	in Macintosh HFS filenames. These include the (ANSI) characters 0x01-0x1F and "
	* / \ < > ? | .
	
	MORE INFORMATION
	================
	
	Because NTFS is Unicode-based, when a Macintosh client creates a filename on an
	SFM volume, it must be converted from Macintosh ANSI to Unicode by SFM before
	being passed to NTFS. Because SFM does the conversion, it can define Unicode
	values that invalid NTFS characters will map to. It does so by using the Private
	Use Area range of the Unicode standard.
	
	The following list describes the Unicode character values that can be used in
	NTFS filenames created by Windows NT applications that, when viewed by Macintosh
	clients, will appear as the equivalent Macintosh ANSI "invalid" NTFS filename
	characters:
	
	  Macintosh ANSI  Unicode
	  -----------------------------
	  0x01-0x1F       0xF001-0xF01F
	  "               0xF020
	  *               0xF021
	  /               0xF022
	  <               0xF023
	  >               0xF024
	  ?               0xF025
	  \               0xF026
	  |               0xF027
	
	In addition, the following three characters are also mapped to the Unicode
	Private Use Area:
	
	  Macintosh ANSI                                                  Unicode
	  -----------------------------------------------------------------------
	  Space (0x20)                                                     0xF028
	  only if occurring as the last character of the name
	
	  Period (0x2E)                                                    0xF029
	  only if occurring as the last character of the name
	
	  Apple's apple logo character (0xF0)                              0xF02A
	
	A space or a period at the end of a filename is not legal in the Win32 name
	space, but is common in Macintosh file naming practice. Hence, these are mapped
	to alternate Unicode characters by SFM so that they are accessible by File
	Manager and other Win32 applications. There is no Unicode equivalent of Apple's
	apple logo character, therefore it too is mapped to the Private Use Area.
	
	Note: Remember that any unicode mapping done on a filename will make that file
	inaccessible to windows 95 on other windows clients since only NT supports
	unicode
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
