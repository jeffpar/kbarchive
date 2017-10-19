---
layout: page
title: "Q153742: STOP 0x0000006F During System Initialization"
permalink: /kb/153/Q153742/
---

## Q153742: STOP 0x0000006F During System Initialization

	Article: Q153742
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The following STOP message may appear when you boot Windows NT:
	
	  STOP: 0x0000006F (0xC0000034,0x00000000,0x00000000,0x00000000)
	  Session3_Initialization_Failed
	
	CAUSE
	=====
	
	A file critical to system initialization, such as Smss.exe, may be missing or
	corrupted.
	
	
	RESOLUTION
	==========
	
	Use one of the following methods to restore a missing or corrupted file:
	
	   - If the Windows Operating System is installed on a FAT partition, copy the
	  initialization file to the %SystemRoot%\System32 directory.
	
	- If Windows NT 3.51 or 4.0 is installed on an NTFS partition, reinstall
	  Windows NT to a separate directory. Log on as the same user with the same
	  permissions and copy the initialization file to the %SystemRoot%\System32
	  directory.
	
	- If Windows 2000 is installed on an NTFS partition use the Recovery Console to
	  replace system files. For instructions on relacing system files using the
	  recovery console see:
	
	  Q229716 Description of WIndows 2000 Recovery Console
	
	Additional query words: err msg errmsg
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,3.51
	
	=============================================================================
	
