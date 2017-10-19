---
layout: page
title: "Q164471: Replacing System Files Using a Modified Emergency Repair Disk"
permalink: /kb/164/Q164471/
---

## Q164471: Replacing System Files Using a Modified Emergency Repair Disk

	Article: Q164471
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Setup program and Emergency Repair Disk (ERD) can be used to
	replace operating system files that cannot be copied by simpler means. This
	procedure is most useful if an installation of Windows NT is on an NTFS
	partition that has been rendered unbootable. This procedure can also be used to
	replace files on a mirrored partition without first breaking the mirror.
	
	MORE INFORMATION
	================
	
	This procedure can be used to replace any Windows NT system file. In this
	example we replace the file \WINNT\system32\drivers\beep.sys. Note that the file
	Beep.sys is just an example. Any other Windows NT system file can be replaced if
	the correct path and filename is used. An Emergency Repair Disk from the
	installation of Windows NT that we are replacing the file on is required for
	this operation. It is possible to use an ERD from an identical installation of
	Windows NT on another computer, but this invites unforeseen problems if there is
	even a minor difference between installations.
	
	NOTE: To use the NT V4.0 Emergency Repair Disk utility, you must have the updated
	version of Setupdd.sys. The updated version is contained in NT v4.0 Service Pack
	2 or later. To update your version of Setupdd.sys, you must copy Setupdd.sys
	from the Service Pack to your NT v4.0 Setup disk 2. This replaces the previous
	version of Setupdd.sys with the updated version.
	
	For more information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q168015
	  TITLE : Files Not Replaced When Running Emergency Repair.
	
	1. The Emergency Repair Disk is created during the initial Setup of Windows NT,
	  or by running the Windows NT RDISK.EXE program. Copy the contents of the
	  original ERD onto another diskette or subdirectory on another machine as a
	  backup. The original ERD information saved should be restored unmodified to
	  the original ERD in case this procedure is unsuccessful or there is ever a
	  need to return to the configuration that was originally saved.
	
	2. Remove the read only attribute on the Setup.log file. This is a hidden,
	  system file on the ERD that can be edited with a text editor. Alter the
	  Setup.log file as in the sample below, replacing the entire [Files.WinNt]
	  section with an entry like the last line in the example. Additional lines can
	  be included if more than one file needs to be copied. The [Files.WinNt]
	  section of Setup.log contains an entry for every Windows NT operating system
	  file. When creating or modifying the entry make sure the target folder for
	  the file is the same as the TargetDirectory value in line one of the [Paths]
	  section. The target folder corresponds to the Windows NT systemroot.
	
	  This can easily be done by finding and modifying the original line for the
	  target file in the [Files.WinNT] section.
	
	  The original line in the Setup.log will be similar to:
	
	  \WINNT\system32\drivers\beep.sys = "beep.sys","f7fb"
	
	  Modified to replace the file from the ERD instead of the CD it looks like
	  (this line is wrapped for appearances only):
	
	  \WINNT\system32\drivers\beep.sys = "beep.sys","99999","\","ERD
	  disk","beep.sys"
	
	  The entry 99999 replaces the checksum f7fb that the original ERD used. This
	  insures that the repair process will prompt you to replace this file. The "\"
	  indicates that the repair process should look to the Root of the disk to copy
	  the file from. "ERD disk" is used to prompt the user for the ERD if it is not
	  in the drive when Setup needs to copy it. The last entry in the line is the
	  file name as it appears on the ERD and is used as a tag file to ensure the
	  proper disk is inserted to copy the files from.
	
	  Here is an example of the entire contents of a Setup.log file after it has
	  been modified:
	
	     [Paths]
	     TargetDirectory = "\WINNT"
	     TargetDevice = "\Device\Harddisk1\partition1"
	     SystemPartitionDirectory = "\"
	     SystemPartition = "\Device\Harddisk0\partition1"
	     [Signature]
	     Version = "WinNt4.0"
	     [Files.SystemPartition]
	     NTBOOTDD.SYS = "sparrow.sys","b4a3"
	     ntldr = "ntldr","2a36b"
	     NTDETECT.COM = "NTDETECT.COM","b69e"
	     [Files.WinNt]
	     \WINNT\system32\drivers\tcpip.sys = "beep.sys","99999","\","ERD
	        disk","beep.sys"
	
	3. Copy the file (in this case Beep.sys) to the root of the ERD. If there is not
	  enough room on the ERD for the file you are replacing, any files other than
	  Setup.log can be deleted from the ERD to make room. This makes the ERD
	  unusable for other repair functions, so keep the original ERD in a safe
	  place. You can also use a second disk containing the file to be replaced and
	  insert it when prompted for "ERD disk."
	
	  NOTE: The above line will replace Tcpip.sys with the file Beep.sys thus
	  overwriting the original Tcpip.sys file. This example demonstrates the added
	  capability of the ERD to replace any file with any other file.
	
	4. Run Windows NT Setup and select the repair option to replace the file. This
	  is standard procedure from here; the rest of the steps are a review of the
	  repair process.
	
	5. Run Windows NT setup. Most likely this will be done from the boot disks.
	  Select R for repair in the first "Welcome to Setup" screen. Deselect all but
	  "Verify Windows NT system files" in the next screen and then select continue.
	  Note that the repair process in Windows NT 4.0 requires a CD-ROM drive on the
	  target computer and a copy of the Windows NT 4.0 CD. If these are not
	  available, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q158423
	  TITLE : WinNT 4.0 ERD Won't Allow Repair w/out Compact Disc Installed
	
	6. When prompted for the Emergency Repair Disk, put the modified copy of the ERD
	  in drive A: and press Enter.
	
	7. Setup reports that the file you are replacing is not from the original
	  Windows NT installation. Press Enter to replace the file. Setup reports that
	  it has completed repairs. Press Enter to restart the computer.
	
	If the procedure fails check for these common errors:
	
	- Is the full path of the file correct? This will happen if you change the
	  filename in the example but not its path.
	
	- Does the target directory of the file match the TargetDirectory Value at the
	  top of Setup.log?
	
	- Are all the items in the correct order on the modified Setup.log entry?
	
	- Are there any typographical errors? Are all items in quotes as they are in
	  the example?
	
	- Are all commas entered as in the example?
	
	- Did you exit Setup (f3) after replacing the desired files from floppy. If not
	  it may have been replaced again further down the files list if you did not
	  remove them as described in step 2.
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
