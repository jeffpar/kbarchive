---
layout: page
title: "Q104993: MS-DOS Includes MSD.COM and MSD.EXE"
permalink: kb/104/Q104993/
---

## Q104993: MS-DOS Includes MSD.COM and MSD.EXE

	Article: Q104993
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS includes two files to run Microsoft Diagnostics (MSD): MSD.COM and
	MSD.EXE.
	
	MORE INFORMATION
	================
	
	MSD versions 2.0, 2.0a, and 2.01 do not interact correctly with expanded memory
	services (EMS) memory. MSD makes an INT 67h EMS call and passes an incorrect
	buffer pointer. The result is corrupted memory when INT 67h writes information
	to this invalid buffer.
	
	To work around this problem, MSD.COM loads before MSD.EXE, hooks INT 67h, and
	then monitors for the MSD.EXE INT 67h call. MSD.COM patches the buffer pointer
	to point to the correct MSD.EXE data segment. This prevents the data
	corruption.
	
	MSD.COM is used rather than making the change in MSD.EXE because MSD.COM can be
	used with any 2.x version of MSD.EXE. You can protect against memory corruption
	simply by placing the MSD.COM file in the directory where MSD.EXE is located.
	
	Microsoft has confirmed this to be a problem in MSD versions 2.0, 2.0a, and 2.01.
	This problem was corrected in MSD version 2.1 (provided with Windows for
	Workgroups version 3.11).
	
	Additional query words: 6.22 6.20 now
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
