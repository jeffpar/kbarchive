---
layout: page
title: "Q196707: PRB: Windows NT 4.0 CHKDSK Refuses to Check NTFS 3.0/3.1 Volumes"
permalink: /kb/196/Q196707/
---

## Q196707: PRB: Windows NT 4.0 CHKDSK Refuses to Check NTFS 3.0/3.1 Volumes

{% raw %}

	Article: Q196707
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Windows NT 4.0 with Service Pack 4 or later installed,
	Chkdsk.exe may not attempt to process NTFS 3.0/3.1 partitions. The user receives
	the following message that indicates that this version of Chkdsk.exe cannot be
	used to check a volume:
	
	  The type of file system is NTFS:
	  This NTFS volume was created or modified by a later version of Windows NT.
	  This version of chkdsk cannot be run on this volume. You must boot the
	  version of NT that created/modified this volume and run chkdsk from that
	  installation.
	
	CAUSE
	=====
	
	New features of the NTFS 5.0 file system, which include disk quotas, encryption,
	reparse points, sparse files, and the Update Sequence Number (USN) journal would
	not be recognized by the Windows NT 4.0 version of Chkdsk.exe. Enabling the
	Windows NT 4.0 version of chkdsk.exe to process the NTFS 3.0/3.1 volume could
	result in volume corruption. Therefore, the version of Chkdsk.exe supplied with
	Service Pack 4 has been modified to prevent the processing of NTFS volumes.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbDSupport SP4 prodnt checkdisk chkdsk exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
