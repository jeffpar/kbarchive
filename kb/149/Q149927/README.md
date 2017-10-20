---
layout: page
title: "Q149927: FTedit.exe: What You Can and Can't Use It For"
permalink: /kb/149/Q149927/
---

## Q149927: FTedit.exe: What You Can and Can't Use It For

{% raw %}

	Article: Q149927
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ftedit.exe is a Windows NT tool developed by Microsoft Product Support and
	included with the recent release of the Windows NT resource kit; it can also be
	obtained directly from Microsoft Product Support. The tool was designed to aid
	in the recovery of software RAID sets under Windows NT in certain circumstances.
	This article discusses how Ftedit.exe works and how it can help you solve
	certain kinds of Fault Tolerant (FT) problems.
	
	MORE INFORMATION
	================
	
	Windows NT stores information pertaining to disks, drive-letter assignments, and
	RAID sets in the registry. The information is located in the following registry
	key:
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\DISKS
	
	In this key are one or more \Device\CdRomX values which hold information on
	CD-ROM drive-letter assignments, as well as an Information value, which is a
	REG_BINARY value, meaning it is data stored in a binary (rather than ASCII)
	format. The information stored in this registry value can be divided into data
	pertaining to hard drives and data pertaining to FT sets.
	
	For each hard drive on the system, Windows NT stores the following information in
	the registry value mentioned earlier:
	
	- The disk signature (a 32-bit value found in the MBR)
	
	- A description of each partition on the drive, including:
	
	   - Starting sector of the partition
	
	   - Length of the partition (in sectors)
	
	   - Drive letter assigned to the partition
	
	   - Whether the partition is a member of an FT set
	
	For each FT set on the system, Windows NT stores:
	
	- The type of FT set (mirror, stripe, volume set, etc.)
	
	- How many members the set has
	
	- A pointer showing the location of each partition in the set
	
	All of the information in the registry is put there by Disk Administrator. All
	the information pertaining to drives and partitions is based upon drive
	information that Disk Administrator obtained by making system calls; this
	information is updated each time Disk Administrator is executed, so when new
	drives are added, the DISK key will be updated. All information pertaining to FT
	sets is put in when the FT set is created in Disk Administrator or when the FT
	set is updated.
	
	What Ftedit.exe does is load the Information value from the DISK key, interpret
	it, and then allow you to manipulate that value and write it back to the
	registry. This is the ONLY thing that Ftedit does; the tool never touches or
	affects drive configuration. This fact puts limitations on what Ftedit.exe can
	do, including the following:
	
	- Ftedit cannot create FT sets. Ftedit can manipulate the FT set definition in
	  the registry, but this is only part of what is involved in creating a new FT
	  set.
	
	- Ftedit cannot add definitions for real drives. The tool will allow you to add
	  dummy definitions that map to nonexistent drives, but only Disk Administrator
	  can add the definition of a real drive (this task requires hardware
	  information that Ftedit does not have).
	
	- Ftedit has no effect on hardware RAID. This is because hardware RAID sets are
	  configured by a RAID controller and are perceived by Windows NT as a single
	  physical drive.
	
	However, Ftedit can help you in the following situations:
	
	- Disk Administrator no longer recognizes your FT sets (perhaps because you
	  reinstalled Windows NT or ran emergency repair). Ftedit can be used to
	  rebuild the FT set definition and allow the operating system to access the
	  already existing FT set.
	
	- When you run Disk Administrator, you get error messages stating that your
	  disk configuration has changed (for example, as a result of removing or
	  swapping out drives on an existing system). Ftedit can be used to remove the
	  descriptions of the nonexistent drives from the registry, thus stopping the
	  error message.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131658Use FTedit.EXE to Recover Lost Fault Tolerant Disk Configuration
	
	Additional query words: 3.50 3.51 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
