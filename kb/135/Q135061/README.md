---
layout: page
title: "Q135061: Regeneration of a Stripe Set With Parity Disk Fails"
permalink: /kb/135/Q135061/
---

## Q135061: Regeneration of a Stripe Set With Parity Disk Fails

{% raw %}

	Article: Q135061
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to regenerate an orphaned drive (stripe set with parity), the
	following error message appears:
	
	  The drive cannot be locked for exclusive use. Please check to see if some
	  applications are currently accessing the drive. If so, close them and try
	  again.
	
	CAUSE
	=====
	
	This problem occurs if Disk Administrator is not allowed exclusive access to the
	stripe set volume. This is usually caused by having an open file on the volume
	you are trying to regenerate.
	
	A file is open when:
	
	- A paging file is located on the volume.
	
	- An application that was started from the volume is still running.
	
	- An application that is running has loaded a .DLL file from the volume.
	
	- An application has a file open on the volume.
	
	- An application's current directory is on the volume.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	If the error continues to appear after you have stopped all applications and
	services that could be accessing the volume:
	
	1. Remove the Page File.
	
	  If there is a page file on the volume, define a page file of sufficient size
	  on another volume and reboot the computer.
	
	2. If you were running Microsoft Mail and or Schedule+, start Mail and choose
	  Exit and Sign Out from the file menu.
	
	  Microsoft Mail and or Schedule+ have hidden processes that run in the
	  background.
	
	3. If you run a Systems Management Server client, close the two hidden Systems
	  Management Server processes: APPCTL32 and PCMWIN32.
	
	  Use KILL.EXE from the PSSTOOLS directory on the Systems Management Server CD,
	  or Process Viewer from the Windows NT Resource Kit to terminate the
	  processes.
	
	4. If you log on to the machine with any logon script containing any Systems
	  Management Server batch file, then remove the batch file from the logon
	  script and log on again before starting the regeneration.
	
	5. To make the volume inaccessible to any processes and to ensure disk
	  administrator can lock the volume, go into Disk Administrator, select Tools,
	  Assign Drive Letter, click the "Do not assign a drive letter" radio button,
	  click OK, select Partition from the menu and then select Commit Changes Now,
	  exit Disk Administrator, reboot the system and then try to regenerate the
	  stripe set with parity.
	
	Additional query words: prodnt 3.5 4.0 ft
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
