---
layout: page
title: "Q172522: PRB: Unattended Install Does Not Stop After Text Mode"
permalink: /kb/172/Q172522/
---

## Q172522: PRB: Unattended Install Does Not Stop After Text Mode

{% raw %}

	Article: Q172522
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NoWaitAfterTextMode = 0 in the [Unattend] section of your
	Unattend.txt file to stop the installation after text mode, the installation may
	not stop. Create a 500 MB partition and place the entry ExtendOEMPartition = 1
	in the Unattend.txt file.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q143473 Unattended Setup Stops Unexpectedly
	
	
	CAUSE
	=====
	
	This happens when the Unattend.txt file contains the entry:
	
	  [unattend]
	  FileSystem = ConvertNTFS
	
	This entry causes the computer to restart in order to complete the conversion of
	the file system to NTFS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information on Windows NT 4.0 deployment/unattended installation
	consult the Microsoft Knowledge Base at:
	
	  http://www.microsoft.com/kb
	
	Download the Windows NT 4.0 Deployment Guide from:
	
	  http://www.microsoft.com/ntworkstation.
	
	NOTE: The Deployment Guide is valid for both Windows NT Server and Windows NT
	Workstation.
	
	Additional query words: reboot unattend installation Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
