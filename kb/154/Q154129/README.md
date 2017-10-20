---
layout: page
title: "Q154129: Changing the Root Directory for Windows NT"
permalink: /kb/154/Q154129/
---

## Q154129: Changing the Root Directory for Windows NT

{% raw %}

	Article: Q154129
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This is an informational article on how to change the directory name of
	Microsoft Windows NT after it is installed. This could be desirable when, for
	example, users who have upgraded from Windows NT 3.1 to Windows NT 3.5 wish to
	change the directory name to reflect the current Microsoft Windows NT version.
	
	NOTE: Microsoft does not support the method described in this article. The
	supported method is to reinstall Microsoft Windows NT into the appropriate
	directory. Also note that third-party applications that do not use the Microsoft
	Windows NT System_Root Flag may also have to be reinstalled.
	
	MORE INFORMATION
	================
	
	There are two methods, one for systems in which the Windows NT system root is on
	a hard disk drive partitioned with Windows NT File System (NTFS) and one for
	those where the system root is on a FAT partition.
	
	Here is the method for systems with NTFS:
	
	1. Install a parallel copy of Windows NT in a temporary directory.
	
	2. When you start the computer, select the new install of Microsoft Windows NT.
	
	3. Log on and open File Manager, then select the Windows NT directory you wish
	  to rename.
	
	4. From the Options menu at the top of File Manager, click File, and then click
	  Rename.
	
	5. From File Manager, select the Boot drive.
	
	6. From the Options menu, click View, then click By File Type and select the
	  Show Hidden/System Files check box.
	
	7. Highlight the Boot.ini file in the root directory and click File from the
	  Options tool bar.
	
	8. Select Properties then click to clear the Read Only and System attributes
	  check boxes. Click OK.
	
	9. Open Boot.ini with Notepad.exe for editing.
	
	  NOTE: Changing the directory name should automatically change the directory
	  name in the Boot.ini file unless it is the default entry. Check the Boot.ini
	  file to make sure the correct directory names are being used.
	
	10. Change the Winnt_Root directory pointer in the following places:
	
	***This is an example of Boot.ini***
	
	[boot loader]
	default=multi(0)disk(0)rdisk(0)partition(2)\winnt_temp
	(*Ensure disk and partition information is correct*)
	
	[operating systems]
	multi(0)disk(0)rdisk(0)partition(2)\winnt_temp="Windows NT
	Server Version 3.51"
	multi(0)disk(0)rdisk(0)partition(2)\winnt_temp="Windows NT
	Server Version 3.51" /basevideo /sos
	multi(0)disk(0)rdisk(0)partition(2)\WINNT_351="Windows NT
	Server Version 3.51"
	multi(0)disk(0)rdisk(0)partition(2)\WINNT_351="Windows NT
	Server Version 3.51" /basevideo /sos
	
	  In this example, WINNT_TEMP is the directory into which the
	  parallel copy of Windows NT was installed. WINNT_351 is the
	  renamed directory.
	
	  You can delete the lines that point to the temporary directory
	  of Windows NT you just installed, except in the Default line.
	  The directory at the end of this line must reflect the new Windows NT
	  directory name.
	
	  To conclude the process, open the Options menu, click File, then click
	  Save. Now click Yes to replace the file Boot.ini. Restart your computer.
	
	Here is the method to use for systems with FAT:
	
	  NOTE: You will not need to install a second copy of Windows NT
	  to make this directory change.
	
	1. From File Manager, change only the attributes for Boot.ini from the
	  Properties window as in the directions above. Do not edit Boot.ini at this
	  point.
	
	2. Ensure that you have a bootable DOS floppy disk with a DOS editor and the
	  Move or Xcopy commands. (If you have a third-party utility that will allow
	  you to change directory names, this can be substituted for the Move and/or
	  Xcopy commands.)
	
	3. Boot your computer from the bootable DOS disk.
	
	4. From the prompt, create the new directory you wish to use (for example, MD
	  WINNT351).
	
	5. Use the Move or Xcopy command to move the Windows NT directory, its files,
	  and its subdirectories to the new directory.
	
	6. Edit the Boot.ini file with an editor following the instructions from above.
	  (NOTE: Since you did not have to install a second copy of Microsoft Windows
	  NT as was true on the NTFS volume, you will not have any entries for a
	  temporary directory.)
	
	7. After saving the new Boot.ini file, remove the system disk and restart the
	  computer.
	
	In addition to the preceeding steps all references to the Windows NT directory in
	the setup.log file in the repair directory and on the emergency repair disk must
	also be modified in order for repair to work. For example:
	
	[Paths]
	TargetDirectory = "\WINNT35"
	
	[Files.WinNt]
	\WINNT35\System32\EEPRO.HLP = "EEPRO.HLP","c56a","\epro","Intel EtherExpress PRO
	Driver Disk","(null)"
	
	NOTE: After performing the procedure outlined in the article, some programs or
	services may not function properly because their registry entries are hard-coded
	to the Windows NT directory name that was in place during the installation of
	the components. To resolve this with Windows NT 3.51, run Regedt32.exe and on
	the Registry menu click Save Subtree As and save it as a .txt file. Then run
	Notepad to search for the old directory path (such as c:\winnt). Take note of
	the registry entries that need to be modified and change them with Regedt32.exe.
	To resolve this issue with Windows NT 4.0, you can run Regedit.exe and search
	for the old Windows NT directory name and replace it with the new directory
	path.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
