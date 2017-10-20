---
layout: page
title: "Q191003: How to Use an Emergency Repair Disk with an Alpha-Based Computer"
permalink: /kb/191/Q191003/
---

## Q191003: How to Use an Emergency Repair Disk with an Alpha-Based Computer

{% raw %}

	Article: Q191003
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the process to recover a damaged Windows NT installation
	using an Emergency Repair Disk (ERD) on an Alpha-based computer.
	
	You can create an ERD during the installation of Windows NT or by running the
	Repair Disk utility (RDISK) after installation. The ERD includes the following
	files:
	
	- System._ (system configuration)
	
	- Software._ (software information)
	
	- Default._ (default user profile)
	
	- Ntuser.DA_ (new user profile)
	
	- Security._ (security policy)
	
	- Sam._ (user accounts dDatabase)
	
	- Setup.log
	
	- Autoexec.nt
	
	- Config.nt
	
	In the event that a Windows NT system file or the registry becomes damaged, you
	may be able to use the ERD to restore the affected files.
	
	MORE INFORMATION
	================
	
	To perform the repair process, follow these steps:
	
	1. Start your computer, and press F2 when you are prompted to enter the Alpha
	  Basic Input/Output System (AlphaBIOS) Setup utility.
	
	2. Select Install Windows NT, and then press ENTER.
	
	3. Specify the computer type and mass storage devices. You may need to provide
	  an Original Equipment Manufacturer (OEM) disk if your device is not listed.
	
	4. When the Welcome To Setup screen appears, press R.
	
	5. Move the selector bar with the arrow keys to the tasks that you want Windows
	  NT Setup to perform. Press ENTER to select or clear the options. To restore
	  the system completely, select all options.
	
	6. Select Continue (Perform Selected Tasks), and then press ENTER.
	
	7. Windows NT Setup displays the detected mass storage devices. You may not need
	  to specify any additional mass storage devices. However if any mass storage
	  devices that are installed are not listed, press S to specify additional
	  devices. You may need to provide an OEM disk if your device is not listed.
	  Press ENTER to continue.
	
	8. Press ENTER if you have the ERD, or press ESC if you do not have the ERD.
	
	  If you press ENTER, insert the ERD into the floppy disk drive, and then press
	  ENTER.
	
	  If you press ESC, Windows NT Setup searches for a Windows NT installation.
	
	9. Move the selector bar with the arrow keys to the registry files that you want
	  Windows NT Setup to restore. Press ENTER to select or clear the options. To
	  restore the system completely, select all options.
	
	10. Select Continue (Perform Selected Tasks), and then press ENTER. Windows NT
	  Setup examines files.
	
	11. Press ENTER to restart your computer.
	
	NOTE: These steps were tested with a Digital Personal Workstation 500a. The
	initial boot process may differ slightly for other Alpha-based computers.
	
	REFERENCES
	==========
	
	For additional information about the Repair Disk utility, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q122857
	  TITLE : RDISK /S and RDISK /S- Options in Windows NT
	
	Additional query words: ntsetup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
