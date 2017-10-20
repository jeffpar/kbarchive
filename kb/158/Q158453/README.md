---
layout: page
title: "Q158453: How to Enable Remoteboot on a Client's Hard Disk"
permalink: /kb/158/Q158453/
---

## Q158453: How to Enable Remoteboot on a Client's Hard Disk

{% raw %}

	Article: Q158453
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Remote Initial Program Load (RPL) ROMS will not take control of the system
	if a hard drive is installed. This article outlines what steps to take if you
	have a remoteboot system with an installed hard drive, and the RPL fails to take
	control when the system starts.
	
	MORE INFORMATION
	================
	
	Remoteboot Client with Floppy Drive and Hard Drive
	--------------------------------------------------
	
	1. Make an MS-DOS bootable floppy disk.
	
	2. From the Windows NT remoteboot server, copy Rplenabl.exe and Rpldsabl.exe to
	  the floppy disk. From a command prompt:
	
	  copy c:\systemroot\rpl\rplfiles\binfiles\binr\rpl??abl.exe a:
	
	  where systemroot is the Windows NT directory and a: is the floppy drive.
	
	3. Boot the client with a bootable floppy disk.
	
	4. At the command prompt, type "Rplenable.exe" (without the quotation marks).
	
	  This will allow the RPL ROM to work properly with the hard drive installed,
	  and users will still be able to access the hard drive once the client boots.
	
	5. Press CTRL+ALT+DEL to reboot the client.
	
	  NOTE: To restore the hard drive to normal use, perform steps 3-5 above, except
	  replace the Rplenabl.exe command with the Rpldsabl.exe command.
	
	Remoteboot Client Without Floppy Drive but with a Hard Drive
	------------------------------------------------------------
	
	To resolve your problem with this configuration, you will need to either:
	
	- Install a floppy disk and follow the procedure outlined above
	
	  - or-
	
	- Gain administrative network connectivity with the hard drive installed.
	
	Once network connectivity is gained, complete the following steps:
	
	1. Connect to the Windows NT remoteboot server RPLFILES share and change to the
	  BINFILES\BINR directory.
	
	2. At the command prompt, type "Rplenable.exe" (without the quotation marks).
	  This will allow the RPL ROM to work properly with the hard drive installed;
	  users will still be able to access the hard drive once the client boots.
	
	3. Reboot the client by pressing CTRL+ALT+DEL.
	
	  NOTE: To restore the hard drive to normal use, perform steps 1-3 above except
	  replace the Rplenabl.exe with the Rpldsabl.exe command.
	
	Additional query words: nt rpl remote boot remoteboot
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
