---
layout: page
title: "Q141185: Using the Adaptec 2940/2940 OU SCSI Controller with Windows NT"
permalink: /kb/141/Q141185/
---

## Q141185: Using the Adaptec 2940/2940 OU SCSI Controller with Windows NT

{% raw %}

	Article: Q141185
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 3.50 and 3.51 are shipped with a driver for the Adaptec 2940 SCSI
	controller. The newer Adaptec 2940/2940 OU controller will not function with the
	shipped driver. This card is identified with the description Adaptec 2940/2940
	OU on the component side of the board.
	
	MORE INFORMATION
	================
	
	The correct driver for this controller is available from the Adaptec BBS at
	(408) 945-7727.
	
	The file name is 7800WNT.EXE. It is a self-extracting zip file dated 6/12/96 and
	is 39,918 bytes. The driver file included is AIC78XX.SYS dated 4/12/96 and is
	38,320 bytes. A README.TXT file is included with instructions for installing the
	driver. To install the driver during installation of Windows NT, bypass SCSI
	detection and use the driver provided by Adaptec.
	
	You can reach Adaptec Technical Support at (800) 959-7274.
	
	
	Additional query words: prodnt 2940ou
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
