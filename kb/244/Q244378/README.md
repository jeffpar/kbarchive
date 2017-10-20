---
layout: page
title: "Q244378: System Cleanup After a Parallel Installation of Windows NT 4.0"
permalink: /kb/244/Q244378/
---

## Q244378: System Cleanup After a Parallel Installation of Windows NT 4.0

{% raw %}

	Article: Q244378
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install a parallel installation of Windows NT, a folder is left that
	contains an installation of Windows NT that may be no longer needed. This
	article describes how to clean up the system safely after you install a parallel
	installation of Windows NT.
	
	MORE INFORMATION
	================
	
	The default installation of Windows NT names the %SystemRoot% folder "Winnt."
	The %SystemRoot% folder contains the operating system files for Windows NT. A
	parallel installation names the %SystemRoot% folder to something other than the
	original %SystemRoot% folder (for example, "Winnt_TS"). To determine the current
	folder name, click Start, click Run, type "winmsd" (without the quotation
	marks), and then click OK. Click the Environment tab, and check the value for
	the WINDIR variable. This is the current installation's folder.
	
	If the parallel installation of Windows NT (possibly created for troubleshooting
	purposes) is no longer needed, locate the troubleshooting folder in Windows NT
	Explorer while you are booted into the installation of Windows NT that you want
	to keep. You can safely delete the troubleshooting folder and all of its
	subfolders.
	
	Next, locate the Boot.ini file, which is normally located in the root folder on
	drive C. Right-click the Boot.ini file, and then click Properties. Click to
	clear the Read-Only check box, and then click OK. Double-click the Boot.ini file
	to open it, and then delete the two lines that refer to the parallel
	installation of Windows NT. The top two lines in the [Operating Systems] section
	refer to the most current or recent installation of Windows NT:
	
	  multi(0)disk(0)rdisk(0)partition(1)\WINNT_TS="Windows NT Workstation Version
	  4.00"
	  multi(0)disk(0)rdisk(0)partition(1)\WINNT_TS="Windows NT Workstation Version
	  4.00 [VGA mode]" /basevideo /sos
	
	Note that in this example, the folder name is listed just before the name of the
	operating system, which is enclosed in quotation marks. Deleting these two lines
	removes the entries from the Boot menu that appears when you start the computer.
	In addition to removing the two lines in the Boot.ini file that refer to the
	parallel installation, also change the ARC path under the "Default" heading.
	
	When you make changes to the Boot.ini file, it is a good idea to make a copy of
	the file for backup purposes. You should also update the repair information and
	your Emergency Recover Disk (ERD).
	
	For additional information about the Boot.ini file, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q102873 Boot.ini and ARC Path Naming Conventions and Usage
	
	For additional information about the ERD, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q156328 Description of Windows NT Emergency Repair Disk
	
	You do not need to delete the Windows NT paging file, unless the troubleshooting
	installation of Windows NT was installed on a partition other than the location
	of the current installation. If you set up the installation on a different drive
	or volume, you can safely delete the Pagefile.sys file.
	
	You do not need to delete the Recycled folder on any drive.
	
	Do not delete the Program Files folder unless all the following conditions are
	true:
	
	- The computer has more than one physical driver or more than one disk
	  partition.
	
	- You set up the troubleshooting installation on a partition or drive other
	  than the current installation.
	
	- No programs that should be saved were installed in the Program Files folder.
	
	If all of these conditions are true, you can safely delete the Program Files
	folder. You may want to copy this folder to another location for backup
	purposes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
