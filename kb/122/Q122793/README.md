---
layout: page
title: "Q122793: Err Msg: OS Loader V3.5 Windows NT Could Not Start..."
permalink: /kb/122/Q122793/
---

## Q122793: Err Msg: OS Loader V3.5 Windows NT Could Not Start...

{% raw %}

	Article: Q122793
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have more than 3,000 shares on Windows NT version 3.1, the following
	message may appear when you upgrade to Windows NT version 3.5 and reboot your
	computer:
	
	  OS Loader V3.5 ....
	
	  Windows NT could not start because the following file is missing or corrupt:
	  \<WinRoot>\SYSTEM32\CONFIG\SYSTEM
	
	You can attempt to repair this file by starting Windows NT Setup using the
	original Setup floppy disk or CD-ROM. Select 'r' at the first screen to start
	repair. The following has been reported concerning NT 3.51 and 4.0 via comment:
	
	A customer called and on a machine with 250+ megs of RAM and 3800 shares they are
	unable to copy Win95 profiles properly to the server. There are no errors and no
	events being logged on the server.
	
	CAUSE
	=====
	
	Due to several technical issues, OS Loader V3.5 (NTLDR) only has access to about
	16 megabytes (MB) of RAM at boot time. It must load the SYSTEM configuration
	file within this range. If that file exceeds the 16 MB limit, the above error
	message appears.
	
	The SYSTEM file which among other things contains share information, achieved
	this size due to a problem in the Windows NT 3.5 kernel (NTOSKRNL.EXE,
	NTKRNLMP.EXE) code which caused excessive fragmentation of this file with this
	number of shares.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	A fix was made to the kernel code which corrects the fragmentation problem and
	thus the SYSTEM file growth. Development is investigating moving the share
	information from the SYSTEM hive to the SOFTWARE hive. Share information is not
	needed at boot time and the SOFTWARE hive is not restricted to a 16 MB limit.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
