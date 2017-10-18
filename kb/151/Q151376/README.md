---
layout: page
title: "Q151376: How to Disable Autochk if It Stops Responding During Reboot"
permalink: kb/151/Q151376/
---

## Q151376: How to Disable Autochk if It Stops Responding During Reboot

	Article: Q151376
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.50,3.51
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
	
	When a Windows NT system is shut down improperly or stops responding, Autochk
	runs against any volumes that are marked as being dirty. If the operating system
	partition is marked dirty and Autochk tries to repair the volume, and if the
	damaged volume causes Autochk to stop responding, it is not possible to get back
	into Windows NT to perform recovery procedures. Additionally, if an extremely
	large volume becomes corrupt it could take many hours for Autochk to repair the
	volume (the time required depends on the size of the partition and the number
	and size of the affected files).
	
	In order to get back into Windows NT, you can disable the drive whose
	partition/volume is causing Autochk to stop responding, then boot into Windows
	NT and rename Autochk.exe, which is located in the %systemroot%\system32
	directory. Once Autochk.exe is renamed so it can't run, you can perform a normal
	shutdown, re-enable the problem drive whose volume caused Autochk to hang, then
	reboot the server. Once back in Windows NT, you can perform data recovery
	procedures by running a manual Chkdsk /F /R or by re-creating the partition and
	restoring data from a current backup.
	
	If the volume/drive causing Autochk to hang cannot be disabled because it is the
	operating system drive or part of a hardware RAID 5 configuration, it will be
	necessary to perform the following procedure to replace the Autochk.exe file
	with a nonexecutable file also called Autochk.exe in order to bypass the Autochk
	process.
	
	MORE INFORMATION
	================
	
	WARNING: This procedure should not be performed unless it is impossible to get
	back into Windows NT any other way in order to perform data recovery procedures.
	Bypassing the Autochk process simply to save time could cause additional
	corruption of the partition if you continue to use it without having it repaired
	by Autochk.
	
	To replace the Autochk.exe with a nonexecutable file, perform the following
	procedure:
	
	1. Modify the contents of the emergency repair disk (ERD) by performing the
	  following steps:
	
	  a. Find the hidden file called Setup.log on the ERD.
	
	  b. In Setup.log, find the entry that references autochk.exe in the
	     [files.WinNt] section (Where %systemroot% is your NT installation
	     directory IE: WINNT35). Change the line to the following:
	     \%SystemRoot%\System32\autochk.exe="autochk.exe","99999","\", "ERD
	     disk","autochk.exe"
	
	  c. While using a text editor such as Notepad, create a file called
	     Autochk.exe, enter any text in the file, then save the file as Autochk.exe
	     in the root directory of the ERD.
	
	NOTE: If Running Windows NT V4.0, you must replace the file Setupdd.sys on setup
	disk #2 with that from Windows NT Service Pack 2 or later.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q168015Files Not Replaced When Running Emergency Repair on X86 Intel
	
	Q158423WinNT 4.0 ERD Won't Allow Repair w/out Compact Disc Installed
	
	1. Restart your computer with the three Windows NT setup disks.
	
	  NOTE: If you are running Windows NT 4.0, be sure to copy the Service Pack 3
	  version of the Setupdd.sys file to the second disk of the three disk
	  installation set. The Setupdd.sys file ensures that the necessary files are
	  actually copied during the ERD process.
	
	2. Choose "R" to repair your Windows NT installation.
	
	3. Select only "Verify Windows NT System Files," then choose Continue.
	
	4. If prompted for "Windows NT Workstation or Server setup disk #4," press the
	  ESC key to allow you to continue with the repair process.
	
	5. DO NOT SELECT TO REPLACE ALL FILES; ONLY REPLACE AUTOCHK.EXE.
	
	6. After Autochk.exe is replaced with the file copied from the repair disk,
	  press F3 to exit the repair process and reboot the computer. Autochk.exe will
	  not run because it was replaced with the text file you created in step 1C
	  above.
	
	7. After performing this process, you will need to make another Emergency Repair
	  Disk by running the RDISK utility. Choose Run from the Start menu, type RDISK
	  and select UPDATE.
	
	8. Replace the Autochk.exe file that is on the system with the one from the
	  Windows NT Installation CD or from the media of the Service Pack currently
	  installed on your system.
	
	For additional information about disabling Autochk, see to the following article
	in the Microsoft Knowledge Base:
	
	Q173322How to Disable Autochk During a Windows NT Reboot
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.50,3.51
	
	=============================================================================
	
