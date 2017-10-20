---
layout: page
title: "Q143171: HOWTO: Unattended Setup Does Not Offer Option for ERD"
permalink: /kb/143/Q143171/
---

## Q143171: HOWTO: Unattended Setup Does Not Offer Option for ERD

{% raw %}

	Article: Q143171
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you perform an Unattended Setup of Windows NT 4.0, you are not given the
	option either during or after Setup, to create an Emergency Repair Disk (ERD).
	Use one of the following methods to create an Emergency Repair Disk:
	
	Method 1: Have an ERD Created After Setup
	-----------------------------------------
	
	To have an Emergency Repair Disk created after Setup is complete, use these
	steps:
	
	1. Set up the following files in $oem$\d\temp:
	
	        Rdisk.ini:
	           \Registry\Machine\Software\Microsoft\Windows\CurrentVersion
	           \RunOnce
	           Run-Rdisk = rdisk.exe /s
	
	        R-rdisk.bat:
	           D:\Temp\Regini D:\Temp\Rdisk.ini
	           del D:\Temp\Regini.exe
	           del D:\Temp\Rdisk.ini
	           del D:\Temp\R-Rdisk.bat
	
	  The Regini.exe file is from the Resource Kit.
	
	2. Add the following line to Cmdlines.txt:
	
	  cmd /c d:\temp\r-rdisk.bat
	
	  Substitute drive D: with the drive where you install Windows NT.
	
	NOTE: This option causes a console window to appear during the GUI-mode of Setup
	when the batch file is run. After your computer reboots, another Saving
	Configuration message appears.
	
	Method 2: Create a Shortcut
	---------------------------
	
	Add a shortcut to the desktop of the default user which starts "rdisk /s"
	(without the quotation marks.)
	
	Method 3: Create a Login Script
	-------------------------------
	
	Create a login script for your users that runs "rdisk /s" (without the quotation
	marks) on a regular basis. This reminds users to keep their Emergency Repair
	Disk current.
	
	NOTE: An Emergency Repair Disk becomes increasingly more important as you make
	changes to the system. The ERD created can, in most cases, be duplicated by
	repeating Setup. Microsoft has confirmed this to be a problem in the Microsoft
	products listed at the beginning of this article. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: prodnt Unattended Setup Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
