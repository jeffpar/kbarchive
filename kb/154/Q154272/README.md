---
layout: page
title: "Q154272: Non-System Disk or Disk Error on Remote Boot Client"
permalink: /kb/154/Q154272/
---

## Q154272: Non-System Disk or Disk Error on Remote Boot Client

	Article: Q154272
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a remote boot workstation attempts to boot using the boot block from the
	remote boot server, the following error may occur on the workstation:
	
	  Non-System Disk or Disk Error.
	
	CAUSE
	=====
	
	When a remote boot server prepares the boot block for the workstation, it
	gathers the component files needed for the workstation to boot and have
	connectivity with the network. If some of the required MS-DOS boot files are
	missing or inaccessible, the "non-system disk or disk error" message may occur.
	The same message may be observed when you attempt to boot from an MS-DOS
	formatted floppy disk that does not contain the Msdos.sys or Io.sys files.
	
	RESOLUTION
	==========
	
	Make sure of the following:
	
	1. Make sure that the share \\<Server>\Rplfiles exists and contains the
	  Msdos.sys and Io.sys files.
	
	2. Make sure that the Msdos.sys and Io.sys files do not have any access
	  restrictions on them. On an MS-DOS disk, these files would normally have the
	  read-only, system, and hidden attributes. The procedure for copying these
	  files, as stated in the Microsoft Windows NT Installation Guide, removes
	  these attributes before copying and does not restore them to the files that
	  exist in the \\<Server>\Rplfiles share. Any restrictions on these files
	  will prevent their inclusion in the boot block.
	
	3. If you copied MS-DOS files from an operating system other than MS-DOS, you
	  may need to rename them to Msdos.sys and Io.sys respectively.
	
	MORE INFORMATION
	================
	
	For more information on remote boot, please consult the Microsoft Windows NT
	Installation Guide.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
