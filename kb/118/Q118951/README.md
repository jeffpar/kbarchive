---
layout: page
title: "Q118951: Maintain Drive Letters for SFMCONV Clone Upgrade"
permalink: /kb/118/Q118951/
---

## Q118951: Maintain Drive Letters for SFMCONV Clone Upgrade

{% raw %}

	Article: Q118951
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	When you use the SFMCONV.EXE utility for a clone conversion to migrate
	Services For Macintosh (SFM) volumes from LAN Manager to a new Windows NT
	Advanced Server, make sure the volumes to be converted reside on NTFS
	drives and that the same structure that was on the LAN Manager server is on
	the new Windows NT Advanced Server.
	
	Use Disk Administrator on the Windows NT Advanced Server to assign drive
	letters to the Windows NT partitions to suit the LAN Manager system before
	you proceed with the upgrade.
	
	Example
	-------
	
	You are doing a clone upgrade from LAN Manager to Windows NT Advanced
	Server on a MIPS-based computer. You have MAC volumes on drive C and drive
	D on the LAN Manager system, but your MIPS-based computer doesn't have a
	large enough partition for drive C. A larger partition on drive C won't
	help because the boot partition needs to be a FAT file system for MIPS and
	the boot partition for Windows NT MAC volumes needs to be NTFS.
	
	Because SFMCONV.EXE requires the same structure on both systems for a clone
	upgrade, this could appear to be a problem. To work around this
	restriction, rename the small first partition to something like drive J on
	the MIPS-based computer, then create the second and third partitions and
	name them drive C and drive D.
	
	The workaround in this example also applies to x86-based and Alpha-based
	computers.
	
	Additional query words: prodnt 3.10 Services for Macintosh
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.10
	
	=============================================================================
	

{% endraw %}
