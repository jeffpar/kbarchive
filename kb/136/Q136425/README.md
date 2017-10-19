---
layout: page
title: "Q136425: Err Msg: Drive Cannot Be Locked for Exclusive Use"
permalink: /kb/136/Q136425/
---

## Q136425: Err Msg: Drive Cannot Be Locked for Exclusive Use

	Article: Q136425
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform an operation that requires exclusive access to a volume, the
	following error message appears:
	
	  The drive cannot be locked for exclusive use. Please check to see if some
	  application are currently accessing the drive. If so, close them and try
	  again.
	
	For example, this error may appear when you:
	
	- Run CHKDSK /F from the command line
	
	  -or-
	
	- Run Disk Manager and attempt to change a driver letter
	
	  -or-
	
	- Run Disk Manager and start regeneration of a fault tolerance (FT) set
	
	MORE INFORMATION
	================
	
	You can work around the first two situations by postponing the action until
	after you have rebooted the computer. However, regeneration of an FT set must
	start immediately.
	
	A file is open when:
	
	- An application that was started from the volume is still running.
	
	- An application that is running has loaded a DLL file from the volume.
	
	- An application has a file open on the volume.
	
	- An application's current directory is on the volume.
	
	If the error continues to appear after you have stopped all applications and
	services that could be accessing the volume:
	
	1. Remove the Page File.
	
	  If there is a page file on the volume, define a page file of sufficient size
	  on another volume and reboot the computer.
	
	2. If you were running Microsoft Mail and or Schedule+, start Mail and click
	  Exit and Sign Out on the File menu.
	
	  Microsoft Mail and/or Schedule+ have hidden processes that run in the
	  background.
	
	3. If you run a Systems Management Server client, close the two hidden Systems
	  Management Server processes: Appctl32 and Pcmwin32.
	
	  Use Kill.exe from the Psstools directory on the Systems Management Server CD,
	  or Process Viewer from the Windows NT Resource Kit to terminate the
	  processes.
	
	4. If you log on to the machine with any logon script containing any Systems
	  Management Server batch file, then remove the batch file from the logon
	  script and log on again before starting the regeneration.
	
	5. If the error occurs when you try to delete a partition or regenerate a stripe
	  set with parity, do the following:
	
	  a. Start the Disk Administrator.
	
	  b. On the Tools menu, click Assign Drive Letter, and then click "Do not
	     assign a drive letter".
	
	  c. Click OK. Click Partition on the menu and then select Commit Changes Now.
	
	  d. Exit Disk Administrator, reboot the system, and then try to delete the
	     partition or regenerate the stripe set with parity.
	
	Additional query words: prodnt prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbSMSSearch kbWinNT310Search kbWinNTW310Search kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2,3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
