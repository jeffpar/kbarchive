---
layout: page
title: "Q151396: IBM PS/2 Computer Hangs When Start SNA Server SDLC Connection"
permalink: /kb/151/Q151396/
---

## Q151396: IBM PS/2 Computer Hangs When Start SNA Server SDLC Connection

	Article: Q151396
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,2.11 SP1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In certain instances, when you activate an SNA Server SDLC or X.25 connection on
	an IBM PS/2 computer configured with an IBM MPA/A (or the Microgate equivalent),
	the computer freezes and fails to respond to keyboard or mouse input.
	
	CAUSE
	=====
	
	There are two problems which cause this problem to occur:
	
	- The IBM PS/2 abios disk controller tries to allocate all available map
	  registers for large data transfers. The standard SDLC device driver allocates
	  2 when the SDLC connection is activated and never releases them. The disk
	  controller hangs while waiting for the map registers. Slowly the whole system
	  hangs as paging and disk access are stopped.
	
	
	- The IBM PS/2 abios disk controller performs DMA data transfers at interrupt
	  processor level. Microsoft Windows NT defines this as illegal (this may work
	  on a single processor architecture, but in a multiprocessor environment it is
	  dangerous, so Windows NT disallows it). The SDLC driver allocates a DMA
	  resource, the disk controller generates an interrupt, and tries to acquire
	  this DMA resource, and cannot, and never will be able to (the disk controller
	  has just locked out the driver that owns it permanently). This causes the
	  system to lock solid.
	
	WORKAROUND
	==========
	
	Both problems are solved by applying the alternate Ibmsync.sys driver (intended
	for PS/2 computers using the IBM MPA/A adapter or Microgate Microchannel
	equivalent), described below. If the default Ibmsync.sys driver is used, the
	first problem is solved through the support of a special DontUseMappedRegisters
	registry setting for the IBMSYNC driver.
	
	As documented in the SNA Server 2.11 Release Notes (Readme.wri), a special
	version of the Ibmsync.sys driver supplied on the SNA Server 2.11 compact disc
	can also be used to solve hang problems that may occur on IBM PS/2 computers. To
	replace the existing driver, start the Windows NT Command Prompt and enter the
	following commands:
	
	    cd <snaroot>\system
	    rename ibmsync.sys ibmsync.211
	    copy <sna_cdrom>:\i386\system\hwsetup\ibmsdlc\ibmsync._sy  ibmsync.sys
	    cd hwsetup\ibmsdlc
	    rename ibmsync.sys ibmsync.211
	    copy <sna_cdrom>:\i386\system\hwsetup\ibmsdlc\ibmsync._sy ibmsync.sys
	
	NOTE: The Release Notes document the driver name as ibmsync._ys, though the
	actual file name shipped on the SNA Server CD-ROM is ibmsync._sy.
	
	Using the default Ibmsync.sys driver, the following registry setting causes the
	driver to not request the use of mapped registers (though this version of the
	driver does not correct the other hang problem observed with PS/2 computers).
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Open Regedt32.exe and locate the following key in the system registry:
	
	HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/IBMSYNC/Parameters
	
	DontUseMapRegisters: REG_DWORD: 1
	
	Once this option is configured, the SNA Server service must be restarted.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	If problems persist with the SDLC connection, a special traced version of
	Ibmsync.sys is included on the SNA Server 2.11 compact disc that logs additional
	failure conditions to the Windows NT system event log.
	
	To apply the traced driver, start the Windows NT Command Prompt and enter the
	following commands:
	
	    cd <snaroot>\system
	    rename ibmsync.sys ibmsync.211
	    copy <sna_cdrom>:\i386\system\hwsetup\ibmsdlc\debug\ibmsync.sys
	  ibmsync.sys
	
	This special version of the driver logs internal driver errors when
	sending/receiving information to/from the IBM SDLC/MPAA or Microgate adapter.
	These new errors are logged in the Windows NT system event log as event 33 or
	34.
	
	Additional query words: 2.00 2.10 3.51 prodsna mg96 mg144 dsa usa
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch kbAudDeveloper kbSNAServSearch
	Version           : :2.0,2.1,2.11,2.11 SP1,3.5,3.51
	Issue type        : kbbug
	
	=============================================================================
	
