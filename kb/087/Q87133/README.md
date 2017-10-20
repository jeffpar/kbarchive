---
layout: page
title: "Q87133: LAN Manager 2.1 Upgrade Instructions Incorrect"
permalink: /kb/087/Q87133/
---

## Q87133: LAN Manager 2.1 Upgrade Instructions Incorrect

{% raw %}

	Article: Q87133
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	The upgrade instructions provided in the LAN Manager manuals are incorrect.
	Attempting to upgrade your operating system before detaching your LAN Manager
	installation may result in data corruption and you may need to format your hard
	drive to get the system to run again.
	
	RESOLUTION
	==========
	
	The following are the full instructions for upgrading to either Microsoft OS/2
	version 1.3 or LAN Manager version 2.1. Forgetting steps 1 and 2 may lead to the
	problems described above.
	
	1. Run the 20CLEAN utility provided on the LAN Manager OS/2 Setup disk if you
	  are upgrading from LAN Manager 2.0 to LAN Manager 2.1.
	
	2. Detach the current version of LAN Manager from within the LAN Manager Setup
	  program (from the Actions menu, choose Detach). The network software must be
	  stopped first. This will remove HPFS386 and ACLs.
	
	3. Boot the system with an OS/2 1.3 Install disk and follow the instructions.
	
	4. After the OS/2 1.3 upgrade has completed, you will be prompted to continue
	  upgrading to LAN Manager 2.1, using the LAN Manager 2.1 OS/2 Setup disk.
	
	MORE INFORMATION
	================
	
	If the above steps are not followed, or the upgrade fails with an incomplete
	installation, you may observe the following symptoms. The solution(s) to these
	symptoms immediately follows each symptom.
	
	- The operating system upgrade appears to complete successfully; however, you
	  are left with a mixture of the previous OS/2 version and Microsoft OS/2 1.3.
	
	  To revive the server, perform the following steps:
	
	  1. Copy the following files from the installation disks to your hard disk
	     (over the existing ones): BASEDD01.SYS, I0S1X.SYS, DISK01.SYS, and the
	     appropriate .BID(s) for your hardware. These files must be decompressed
	     using the DECOMP utility found in the \NETPROG directory on the LAN
	     Manager for OS/2 Setup disk.
	
	  2. Copy the OS/2 hidden files (OS2KRNL and OS2LDR) to your hard disk. To do
	     this, you must use a utility such as CHMODE.EXE, which removes the hidden,
	     system, and read-only attributes, so the copy command will copy the files.
	     The attributes must be replaced following the file copy. Once the server
	     is up and running, you should properly detach LAN Manager and reinstall
	     the operating system to ensure that OS/2 is correctly installed.
	
	- Microsoft OS/2 version 1.3 is running; however, the OS/2 1.21 (or earlier
	  version) Print Manager is still installed. (This problem is common when
	  upgrading from LAN Manager version 2.0c.)
	
	  The 2.0c upgrade placed PMSPOOL.EXE in the \LANMAN\NETPROG directory and
	  PMSPL.DLL in the \LANMAN\NETLIB directory. These files are used instead of
	  the ones installed by Microsoft OS/2 1.3. Delete these two files, properly
	  shut down the system, and reboot. The correct version of Print Manager (OS/2
	  1.3) will then be used.
	
	Additional query words: 1.30 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
