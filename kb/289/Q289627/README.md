---
layout: page
title: "Q289627: How to Enable File Name Character Translation"
permalink: kb/289/Q289627/
---

## Q289627: How to Enable File Name Character Translation

	Article: Q289627
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1 OEM Only,2.2 OEM Only
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 2.1 OEM Only, 2.2 OEM Only 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article discusses how to enable file name character translation for Windows
	and UNIX operating systems.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Windows and UNIX operating systems have restrictions on valid characters that can
	be used in a file name. The list of illegal characters for each operating
	system, however, is different. For example, a UNIX file name can use a colon
	(:), but a Windows file name cannot use a colon (:). If a UNIX user attempts to
	create a file with a Windows illegal character on a Windows Services for UNIX
	network file system (NFS) share, the attempt is unsuccessful and the UNIX client
	computer receives an input or output error.
	
	To work around this issue, use file name character mapping to replace characters
	that are not legal.
	
	To enable file name character mapping, create a character translation file and
	add a registry entry.
	
	A file name character translation file is a text file with a list of mapped
	characters in the following format where nn is the hexadecimal value of a
	single-byte character or one byte of a double-byte character, and comment is an
	optional comment:
	
	0xnn[ 0xnn] : 0xnn[ 0xnn] [ ; comment]
	
	A single-byte character can be mapped to another single-byte character or to a
	double-byte character. A double-byte character can be mapped to another
	double-byte character or to a single-byte character. A semicolon (;) in the map
	file indicates a comment. Everything from the semicolon (;) to the end of the
	line is ignored. The first character in the entry is the character on the (UNIX)
	client and the second is the character used on the Windows-based Server for NFS
	computer.
	
	For example, the following maps the UNIX colon (:) to a Windows dash (-):
	
	0x3a : 0x2d ; replace client : with - on server
	
	Hexadecimal values can be easily obtained by using the Character Map utility that
	comes with Windows. Open Character Map and select a character. In the bottom
	left corner of the program, the character code displays the hexadecimal value of
	the character.
	
	If the preceding entry is displayed in the file name character translation file
	on a Server for NFS computer and a UNIX client creates a file named
	re:salesquotas on a Server for NFS share, Server for NFS names the file
	re-salesquotas. This name is displayed in Windows Explorer when local or remote
	Windows users display the contents of the shared folder. However, NFS clients
	that list the contents of the shared folder observe the file name as
	re:salesquotas. Character translation occurs for all the files that are shared
	by the server, regardless of whether they had been created by a UNIX client.
	
	The following entry maps a double-byte character to a single-byte character (the
	values that represent a single byte in a double-byte character must be separated
	by a space):
	
	0x23 0x40 : 0x2b
	
	Because all values are assumed to be represented by hexadecimal numbers, the 0x
	prefix can be omitted:
	
	23 40 : 2b
	
	A given character must be mapped only to one character; that is, mapping a
	character to two or more different characters must be avoided. For example, the
	following entry can produce unexpected results:
	
	0x11 : 0x22
	0x11 : 0x33
	
	In addition, you cannot map a multibyte character if a single-byte character with
	the same value as the first byte of the multibyte character is mapped elsewhere.
	The following example can produce unexpected results:
	
	0x11 0x22 : 0x44
	0x11 : 0x55
	
	Do not map a period (.) because it is used in the file name syntax of both
	Windows and UNIX file systems.
	
	When you have created the file name character translation file, you must specify
	its name location in the system registry. To register the path and name of the
	file:
	
	1. Use Registry Editor to locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Server For NFS\CurrentVersion\Mapping
	
	2. Edit the CharacterTranslation (REG_SZ) value.
	
	3. Enter the fully qualified path name of the file name character translation
	  file. For example, C:\Sfu\CTrans.txt.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX210OEM kbWinServiceUNIX220OEM
	Version           : :2.0,2.1 OEM Only,2.2 OEM Only
	Issue type        : kbhowto
	
	=============================================================================
	
