---
layout: page
title: "Q108393: MAXMEM Option in Windows NT BOOT.INI File"
permalink: kb/108/Q108393/
---

## Q108393: MAXMEM Option in Windows NT BOOT.INI File

	Article: Q108393
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2002
	
	3.10 3.50 3.51 4.00
	WINDOWS
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is an undocumented /maxmem switch mentioned on page 160 in Volume 3 of the
	"Microsoft Windows NT Resource Kit" that enables you to specify the maximum
	amount of random access memory (RAM) memory that Windows NT may use.
	
	This switch is undocumented because it only works on very specific
	configurations, the memory specified must be contiguous, and Microsoft has not
	committed to keep the switch in any future releases of Windows NT.
	
	MORE INFORMATION
	================
	
	This switch is placed at the end of the ARC path specified in the [operating
	systems] section of the Boot.ini file, as in this example:
	
	  multi(0)disk(0)rdisk(0)partition(1)\winnt="Windows NT" /MAXMEM=12
	
	This forces Windows NT to only use 12 MB of RAM, ignoring everything else above
	this. This switch may be valuable in troubleshooting parity errors, mismatched
	SIMM speeds, and other memory related problems.
	
	Please note that you should never specify the value of /maxmem to be less than 8,
	or Windows NT may not boot reliably. Also, this switch is only valid on the x86
	architectures, and is not available on the MIPS or Alpha platforms.
	
	For Windows 2000 Professional do not set /maxmem lower than 64 megs and for
	Windows 2000 Server and Advanced Server do not set lower than 128 megs. For
	future Oprerating Systems check the minimum system requirements before you set
	the /maxmem switch.
	
	Additional query words: prodnt 3.10, NMI error 3.5 4.0 boot.ini
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT351search kbWinNTW350 kbWinNTW351 kbwin2000AdvServ kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Pro kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch kbWinNTW400 kbWinNT350search kbWinNT400search kbWinNTW350search kbWinNTW351search kbwin2000AdvServSearch kbWinNTS400 kbWinNTS350 kbwin2000Search kbwin2000ProSearch kbWinNTS350search
	Version           : :2000,3.1,3.5,3.51,4.0
	
	=============================================================================
	
