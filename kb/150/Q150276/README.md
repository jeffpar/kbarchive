---
layout: page
title: "Q150276: ActiveX Developers Kit CD-ROM SP Hangs Windows NT"
permalink: /kb/150/Q150276/
---

## Q150276: ActiveX Developers Kit CD-ROM SP Hangs Windows NT

{% raw %}

	Article: Q150276
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.51 Service Pack (SP) 4 from the Microsoft ActiveX
	Developers Kit compact disc, the files NTbackup.dll and NTdll.dll are not copied
	correctly and the system stops responding.
	
	When you run Update.exe for SP4, the following file copy errors are returned:
	
	  An error has occurred.
	
	  The file %systemroot%\system32\NTBACKUP.EXE was not copied correctly or is not
	  a valid Windows NT Image.
	
	and,
	
	  An error has occurred.
	
	  The file %systemroot%\system32\NTDLL.DLL was not copied correctly or is not a
	  valid Windows NT Image.
	
	Depending on what Hardware Abstraction Layer your system uses, you may also get a
	message such as the following:
	
	  HAL: MPS MP structure not found HAL: No MPS Table Found
	
	  HAL: This HAL.DLL requires an MPS 1.1 system Replace HAL.DLL with the correct
	  hal for this system
	
	CAUSE
	=====
	
	The file NTdll.dll, which is necessary to start Microsoft Windows NT, is
	corrupt. It is likely that both NTbackup.exe and NTdll.dll were not updated, and
	that both show the original Windows NT 3.51 dates.
	
	RESOLUTION
	==========
	
	Run the emergency repair process as documented in Chapter 2 of the Microsoft
	Windows NT Installation Guide. You will need to run the "Verify Windows NT
	system files" option to recreate the proper operating system file configuration.
	This process is also documented in the on-line help files on the NT 3.51
	Workstation and Server compact discs under the \support\books subdirectory. You
	can also perform an upgrade install of Microsoft Windows NT to recreate a
	working operating system configuration. After you have a working installation of
	NT 3.51, run Windows NT 3.51 SP4. If your NT installation is on a FAT partition
	you can try to manually copy NTdll.dll from a working SP3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt sp4
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
