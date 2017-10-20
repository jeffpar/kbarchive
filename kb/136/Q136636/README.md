---
layout: page
title: "Q136636: Automating NTFS Conversion"
permalink: /kb/136/Q136636/
---

## Q136636: Automating NTFS Conversion

{% raw %}

	Article: Q136636
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Windows NT Setup preserves the existing file system. Moreover, it is
	not possible to convert an existing partition from the Windows NT file system
	(NTFS) to a file allocation table (FAT) file system. However, it is possible to
	automate the process of converting a FAT partition to NTFS during an unattended
	installation or by using Computer Profile Setup.
	
	MORE INFORMATION
	================
	
	Unattended Setup
	----------------
	
	This method uses WINNT.EXE or WINNT32.EXE with the /U switch and an answer file.
	To make the necessary modifications:
	
	WARNING: Modification of INF files can cause serious, system-wide problems before
	and after Setup and may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the modification of
	INF files can be solved. Make INF modifications at your own risk.
	
	1. Copy the I386 directory from the Windows NT compact disc to your hard drive.
	
	2. Expand I386\INITIAL.IN_ to I386\INITIAL.INF
	
	3. Rename I386\INITIAL.IN_ to I386\INITIAL.BK_
	
	4. In the SetAcls section of INITIAL.INF, change the line "set Convert_Winnt =
	  $($1)" to "set Convert_Winnt = YES" as is shown in the following excerpt:
	
	     [SetAcls]
	         set Status = STATUS_FAILED
	         set Convert_C     = $($0)
	     ;;; Setting the below variable to YES forces NTFS Conversion
	         set Convert_Winnt = YES
	 
	
	5. Save INITIAL.INF and close the file.
	
	6. Run Unattended Setup.
	
	Computer Profile Setup
	----------------------
	
	Include "-f:n" on the UPLODPRF.EXE command line.
	
	For complete syntax, type UPLODPRF.EXE /?.
	
	Additional query words: prodnt filesystem cps
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
