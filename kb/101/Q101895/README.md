---
layout: page
title: "Q101895: Macintosh Files on MS-DOS Disks May Not Work"
permalink: /kb/101/Q101895/
---

## Q101895: Macintosh Files on MS-DOS Disks May Not Work

{% raw %}

	Article: Q101895
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	Copying a Macintosh file from a Windows NT Advanced Server computer
	onto an MS-DOS floppy disk may render that Macintosh file unusable.
	
	Macintosh files have two pieces, referred to as the data fork and the
	resource fork. NTFS keeps track of both of these forks, thus allowing
	Macintosh files to reside undamaged on an NTFS volume.
	
	The standard method for putting Macintosh files on FAT disks is to
	split the Macintosh file into its two pieces when the file is copied
	to the FAT disk. The two pieces are then put back together when copied
	back onto a Macintosh. Because Windows NT Advanced Server Services for
	the Macintosh requires an NTFS partition, Windows NT Advanced Server
	does not need to split the two forks.
	
	When a Macintosh file is copied from a Windows NT Advanced Server
	computer to a FAT disk, the copied file loses the extended attribute
	that consisted of the resource fork. When this Macintosh file is used,
	it may not work if the Macintosh file needed the resource fork. (As is
	the case with an application.)
	
	Additional query words: prodnt 3.10 ntmac pc exchange access
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
