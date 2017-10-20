---
layout: page
title: "Q51737: Expanded Memory under Windows 3.0"
permalink: /kb/051/Q51737/
---

## Q51737: Expanded Memory under Windows 3.0

{% raw %}

	Article: Q51737
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows versions 3.0 and 3.0a, Windows no longer uses expanded memory for the
	advantage of Windows applications except in real mode.
	
	MORE INFORMATION
	================
	
	Expanded memory management under Windows 3.0 or 3.0a is handled as follows.
	
	Real Mode
	---------
	
	Real mode Windows 3.0/3.0a uses expanded memory in the same manner as Windows/286
	versions 2.1x.
	
	When Windows runs in real mode, expanded memory may be provided by the
	following:
	
	- On 8088/80286 machines, an expanded memory board's driver, which is the only
	  genuine method to obtain LIM standard expanded memory on these processors.
	  However, of course, we recommend reconfiguring the board as extended memory
	  if it is being used on a 286 machine and expanded memory is not absolutely
	  required by an MS-DOS application.
	
	- On 386 machines, the Microsoft EMM386.SYS driver, included with the Windows
	  3.0/3.0a package, which converts 386 extended memory to expanded via the
	  special capabilities of the 386 processor.
	
	286 Protected Mode
	------------------
	
	When Windows runs in 286 protected mode, expanded memory may be provided by the
	following:
	
	- On 286 machines, an expanded memory board's driver, as above. In this case,
	  Windows doesn't use the supplied expanded memory because Windows is running
	  in protected mode. However, expanded memory may be used by MS-DOS
	  applications running before, during, or after Windows.
	
	- On 386 machines, the Microsoft EMM386.SYS driver. Here, any extended memory
	  converted to expanded by EMM386.SYS prior to running 286 protected mode is
	  unavailable to Windows. Additionally, expanded memory may be allocated by an
	  application or driver via EMM386.SYS prior to running Windows and not cause
	  problems.
	
	386 Enhanced Mode
	-----------------
	
	In 386 enhanced mode, expanded memory may be provided by the following:
	
	- Windows, which provides expanded meory emulation for MS-DOS applications
	  running under Windows in 386 enhanced mode virtual machines.
	
	- If expanded memory is also required outside of Windows/386 enhanced mode, it
	  may be supplied in one of two forms depending on the requirements of the
	  application/driver that needs expanded memory:
	
	   - By the Microsoft EMM386.SYS driver (in a manner similar to that noted
	     above)
	
	     - or -
	
	   - By the Windows/386 enhanced mode WINSTART.BAT feature. If Windows enhanced
	     mode detects that a WINSTART.BAT batch file is present in the path when
	     Windows is executed, the following procedure is performed:
	
	     1. Loads the Windows/386 enhanced mode memory management, including
	        expanded memory emulation.
	
	     2. Runs WINSTART.BAT, allowing any programs or drivers executing therein
	        to use the emulated expanded memory loaded in Step 1. This may include
	        starting a network that loads network drivers in expanded memory.
	
	     3. Loads the Windows interface.
	
	     NOTE: WINSTART.BAT is simply a means of loading some programs in Windows
	     that can use expanded memory. It doesn't provide expanded memory, it just
	     allows you to run programs that want to use it.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
