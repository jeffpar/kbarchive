---
layout: page
title: "Q165439: Parsing LMHOSTS with Invalid Entries Can Cause Stop 0x1E"
permalink: /kb/165/Q165439/
---

## Q165439: Parsing LMHOSTS with Invalid Entries Can Cause Stop 0x1E

	Article: Q165439
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT computer that is configured to use an LMHOSTS file may get a blue
	screen error during the use of the NBTSTAT -R command, and the subsequent
	restart of the system. The blue screen error message for this condition is:
	
	  STOP: 0x0000001E (0xC0000028, 0x801327E1, 0x00000000, 0x00000000)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	NOTE: The first and fourth parameters will be identical on a single processor
	x86-based system.
	
	-or-
	
	  STOP: 0x0000007F (0x00000008, 0x00000000, 0x00000000, 0x00000000)
	  UNEXPECTED_KERNEL_MODE_TRAP
	
	NOTE: The first parameter will be identical on a single processor x86- based
	system.
	
	CAUSE
	=====
	
	Improperly formatted syntax in the LMHOSTS file can produce this STOP error.
	Below is an example of the specific syntax error that causes the STOP error:
	
	     #include //severname/share/file
	
	The problem with the above line is that the slash (/) is used instead of the
	backslash (\).
	
	
	RESOLUTION
	==========
	
	To work around this problem, correctly format the LMHOSTS file.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	MORE INFORMATION
	================
	
	The LMHOSTS file may be deleted by the system during the Stop error. If the file
	is not deleted, the system may become caught in a loop, producing the STOP error
	each time the file is read while the computer is starting. To correct this
	problem, the LMHOSTS will need to be deleted or have the incorrect entries
	edited out. The method used for this will depend on the file system being used
	on the computer running Windows NT.
	
	Windows NT Installed on FAT Drive
	---------------------------------
	
	If your computer running Windows NT is FAT-formatted, perform the following
	steps:
	
	1. Start the computer to another operating system (such as MS-DOS, Microsoft
	  Windows 95, or Microsoft Windows 3.x).
	
	2. Delete or edit the incorrect entry from the LMHOSTS file in the
	  Winnt\System32\Drivers\Etc folder.
	
	If you do not have MS-DOS or Windows 95 installed on the Windows NT computer
	(there is no menu option for MS-DOS or Windows 95 on the Start menu), but
	Windows NT is installed on a FAT partition, you can boot from an MS-DOS floppy
	disk or Windows 95 Startup disk and edit or delete the LMHOSTS file on the FAT
	partition.
	
	Windows NT Installed on NTFS Drive
	----------------------------------
	
	If your computer running Windows NT is NTFS-formatted, perform the following
	steps:
	
	1. Install a parallel copy of Windows NT into a new directory.
	
	2. Delete or edit the incorrect entry from the LMHOSTS file.
	
	3. Restart into the original Windows NT installation and delete the parallel
	  installation of Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
