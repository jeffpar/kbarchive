---
layout: page
title: "Q78009: Troubleshooting When TSRs Are Loaded"
permalink: /kb/078/Q78009/
---

## Q78009: Troubleshooting When TSRs Are Loaded

	Article: Q78009
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A terminate-and-stay-resident (TSR) program is a utility that resides in memory
	while other applications are executing.
	
	In general, TSRs work around MS-DOS (that is, shortcuts are used). TSRs also make
	assumptions in the way MS-DOS acts. However, the assumptions that TSRs make with
	one version of MS-DOS may not apply in other versions.
	
	For these reasons, it is a good general troubleshooting technique to not load TSR
	programs. TSRs can interfere with normal troubleshooting and testing.
	
	MORE INFORMATION
	================
	
	Examples of TSRs are mouse drivers, some menu programs, Sidekick, Append, and
	Mirror. Note that batch files are never TSRs. To troubleshoot TSRs, do the
	following:
	
	1. Do not load any TSRs. Remark (rem) out all TSRs in the CONFIG.SYS and
	  AUTOEXEC.BAT files. For example:
	
	  rem c:\dos\doskey
	
	2. If the problem is resolved and MS-DOS 5.0 is being used, load all TSRs low.
	  Some TSRs expand and contract. When loaded into high or upper memory, TSRs
	  can cause conflicts with other devices or utilities.
	
	3. If a TSR is causing the problem, do the following:
	
	   - Consult this knowledge base for information on the software.
	
	   - Contact the TSR manufacturer for help and information.
	
	
	
	Additional query words: tshoot 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.0
	
	=============================================================================
	
