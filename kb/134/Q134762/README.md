---
layout: page
title: "Q134762: STOP Msg: 0x0000007B Upgrading Compaq w/ Integrated SCSI-2"
permalink: kb/134/Q134762/
---

## Q134762: STOP Msg: 0x0000007B Upgrading Compaq w/ Integrated SCSI-2

	Article: Q134762
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you upgrade any Compaq computer that contains an integrated SCSI-2
	controller from Windows NT version 3.5 to 3.51, using the "WINNT32 /B" command
	or the floppy disk set, this STOP Message appears when you reboot:
	
	  STOP 0x0000007B 'Inaccessible Boot Device'
	
	Compaq computers containing this controller include:
	
	Compaq Proliant 1000 ,1500, 2000, 4000, and 4500R
	Compaq Prosignia VS, 300, and 500
	
	CAUSE
	=====
	
	This occur because the upgrade process disables the SCSI-2 Controller Miniport
	Driver (CPQ32FS2.SYS).
	
	WORKAROUND
	==========
	
	To restore the deleted key and to continue with the original Windows NT 3.51
	upgrade:
	
	1. Re-install Windows NT 3.51 with a "new installation" versus an "upgrade
	  installation." Into a separate directory (for example, NTV351)
	
	2. Use Regedt32 to modify the failed NT upgrade registry as follows:
	
	  WARNING: Using the Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of the
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  a. Run Regedt32 from the new NT V3.51 installation.
	
	  b. Open the HKEY_LOCAL_MACHINE window
	
	  c. Highlight the HKEY_LOCAL_MACHINE Key
	
	  d. Select Registry - load hive - from the menu.
	
	  e. In the load hive dialog box, find your original NT installation directory
	     %systemroot%\system32\config and select the SYSTEM file.
	
	  f. Enter WORK for the key name. This will load the SYSTEM hive as WORK
	
	  g. Double click the existing SYSTEM\CurrentControlSet\Services keys and
	     locate the CPQ32FS2 key
	
	  h. Highlight this key then select "registry - save key" from the menu bar and
	     call it CPQ32FS2.KEY
	
	  i. Double click the WORK - select - key and read the entry for
	     current:REG_DWORD:0x1
	
	  j. Use the value in this key to determine which controlset# to modify.
	
	  k. Double click that controlset# - services - and select EDIT - ADD KEY from
	     the menu bar.
	
	  l. Enter cpq32fs2 for the key name, leave the class blank and select OK to
	     save.
	
	  m. Highlight this newly created cpq32fs2 key and select REGISTRY - RESTORE
	     from the menu bar and select the CPQ32FS2.KEY saved earlier. Say yes to
	     restore on top of selected key.
	
	  n. Double click the WORK key to collapse the key. Then choose registry -
	     unload hive to save.
	
	  o. exit regedt32 and reboot the machine
	
	  p. select the proper boot menu entry to continue with the original NT V3.51
	     upgrade.
	
	To prevent disabling of the CPQ32FS2.SYS driver for future upgrades:
	
	1. Make a backup copy of the first Windows NT 3.51 installation disk.
	
	2. Remove the read-only attribute from the TXTSETUP.SIF file on this disk.
	
	3. Open TXTSETUP.SIF with a text editor. Removing the following line under the
	  [KeysToDelete] section:
	
	  ControlSet, "Services\CPQ32FS2"
	
	4. Save the edited TXTSETUP.SIF file.
	
	5. Use the modified disk to upgrade Windows NT 3.5 to 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
