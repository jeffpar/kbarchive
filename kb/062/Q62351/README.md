---
layout: page
title: "Q62351: Hard Disk Compatibility in Windows 3.0"
permalink: /kb/062/Q62351/
---

## Q62351: Hard Disk Compatibility in Windows 3.0

{% raw %}

	Article: Q62351
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.00 3.00a
	
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the hard disk controller and drive configurations that are
	supported under Microsoft Windows version 3.0, and the steps that may be taken
	to maximize Windows version 3.0 hard disk compatibility.
	
	Windows version 3.0 supports the hard disk controller and drive combinations that
	were available as standard configurations in the supported computers at the time
	Windows version 3.0 was initially shipped (May 22, 1990). Supported computers
	are machines specifically listed in the "Windows 3.0 Hardware Compatibility
	List." A copy of the compatibility list is included in the Windows version 3.0
	retail package.
	
	Additionally, a supported controller and drive combination should be partitioned
	exclusively with the FDISK utility included with the DOS supplied with the
	supported computer. Third-party partitioning utilities may cause problems.
	
	MS-DOS and PC-DOS versions up to 4.00 do not support hard disks with more than
	1024 cylinders. Windows version 3.0 requires MS-DOS to be compatible with your
	hardware, so it shares this limitation. Some nonstandard hard disk controllers
	attempt to translate a hard disk with more than 1024 cylinders into an apparent
	1024-cylinder hard disk. Many such controllers do not provide 100-percent
	compatibility.
	
	MORE INFORMATION
	================
	
	Real or Standard Mode Compatibility
	-----------------------------------
	
	Windows version 3.00 real and standard modes should not experience problems with
	any type of hard disk controller and drive combination. If you experience hard
	disk problems under real or standard modes, this points to a bad controller, one
	that is not compatible with your other hardware, or some other cause. Contact
	your hardware manufacturer for further assistance in this case.
	
	Enhanced Mode Compatibility
	---------------------------
	
	Windows version 3.00 enhanced mode without SMARTDrive loaded supports only
	standard ST506 and ESDI controllers. To use enhanced mode with SCSI or other
	nonstandard devices, it is necessary to load SMARTDrive for proper operation.
	
	When enhanced mode detects the presence of SMARTDrive, it directs all disk access
	requests from itself and all applications through SMARTDrive. This enables
	SMARTDrive to function effectively as a double-buffering hard disk device
	driver, and eliminates most compatibility problems.
	
	Even if SMARTDrive is loaded, in some configurations you may experience hard disk
	access errors such as the following:
	
	  Cannot Read from Drive C:
	
	  Cannot Write to Drive C:
	
	  Drive C: Not Ready Error
	
	In this case, you should insert the following line under the [386ENH] section of
	the SYSTEM.INI configuration text file:
	
	  [386Enh]
	
	  VirtualHDIRQ=off
	
	This line is not case-sensitive. Synonyms for "off" include "no", "0", and
	"false".
	
	If you are still experiencing hard disk problems under Windows version 3.0 with
	SMARTDrive loaded and virtualHDIRQ=off, contact your manufacturer for further
	assistance. This is the highest level of hard disk compatibility that may be
	achieved with Windows version 3.0.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
