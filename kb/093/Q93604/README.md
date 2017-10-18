---
layout: page
title: "Q93604: ISO 9660 Support for CD-ROM"
permalink: kb/093/Q93604/
---

## Q93604: ISO 9660 Support for CD-ROM

	Article: Q93604
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.1,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT supports ISO 9660 CD-ROM format, but does not support any of the
	RockRidge CD-ROM format extensions. ISO 9660 is an international standard that
	defines a file system for compact discs. Almost all systems support ISO 9660.
	
	MORE INFORMATION
	================
	
	Level one ISO 9660 is similar to the MS-DOS file system. Filenames are limited
	to eight single-case characters, a period, and a three-character extension.
	Filenames cannot contain special or extended characters, (no hyphens, tildes,
	equal or plus signs), only single-case letters, numbers, and underscores.
	Directory names cannot contain three-digit extensions, just eight single-case
	characters.
	
	All alphabetic characters are in uppercase letters; some software maps these to
	lowercase letters. Either the filename or the extension may be empty, but not
	both ("F." and ".E" are both legal filenames).
	
	There is a "file version number" that can range from 1 to 32,767 and is separated
	from the extension by a semicolon. The file version number is ignored on many
	systems.
	
	Subdirectories are allowed to nest up to eight levels deep.
	
	Level two ISO 9660 allows longer filenames, up to 32 characters; however, most of
	the other restrictions still apply. Level two discs cannot be used on some
	systems, such as MS-DOS.
	
	Windows NT 4.0 and Windows 2000 supports Level 3 and allows for for Fragmented
	files which is needed to support finalised Packet written disk. CDFS also
	support Joliet extensions which allows for longer files names and unicode
	names.
	
	Rock Ridge is not supported in Windows NT or Windows 2000.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.1,4.0
	
	=============================================================================
	
