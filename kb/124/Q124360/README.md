---
layout: page
title: "Q124360: Non Critical Error with IR32_32.DLL and Mitsumi IDE CD-ROM"
permalink: /kb/124/Q124360/
---

## Q124360: Non Critical Error with IR32_32.DLL and Mitsumi IDE CD-ROM

{% raw %}

	Article: Q124360
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT version 3.5 from a Mitsumi IDE CD-ROM the following
	error message appears:
	
	  Non Critical Error
	  Error unable to open file IR32_32.DLL
	
	If you choose Continue Setup, Setup completes normally.
	
	CAUSE
	=====
	
	This error message appears due to an incompatibility between the Mitsumi IDE
	CD-ROM and the Windows NT version 3.5 ATAPI.SYS driver.
	
	WORKAROUND
	==========
	
	To work around this problem, copy IR32_32.DLL (an Indeo codec
	[compression/decompression] file used with multi-media video) from the \I386
	directory of the Windows NT version 3.5 CD to the \%SYSTEMROOT%\SYSTEM32
	directory after Windows NT version 3.5 is installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt cdrom CRMC FX-4004X atapi 1.2
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
