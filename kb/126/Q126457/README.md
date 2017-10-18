---
layout: page
title: "Q126457: VERIFY ON, COPY /V, XCOPY /V Commands Do Not Compare Data"
permalink: kb/126/Q126457/
---

## Q126457: VERIFY ON, COPY /V, XCOPY /V Commands Do Not Compare Data

	Article: Q126457
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some versions of the MS-DOS "User's Guide" and online Help indicate that the /V
	(verify) switch for the COPY and XCOPY commands actually compares the source and
	destination files to determine whether they are identical. This is not correct.
	The /V switch verifies that the destination file, once written, can be read. No
	comparison of the files occurs.
	
	This information also applies to the VERIFY ON command.
	
	MORE INFORMATION
	================
	
	When you use the VERIFY ON command, or the /V switch with the COPY or XCOPY
	command, the MS-DOS file system uses the block device driver command code
	function 09H, Write with Verify. This verification process consists of
	confirming that the data just written can be read (for example, that the data
	was not written to a bad sector on the disk). No comparison of the source and
	destination data occurs.
	
	To compare the source and destination files, use the MS-DOS FC (file compare)
	command after you use the COPY or XCOPY command.
	
	REFERENCES
	==========
	
	For more information about the VERIFY, COPY, XCOPY, or FC command, see your
	MS-DOS "User's Guide," or use the online Help in MS-DOS versions 5.0 and later.
	
	"Advanced MS-DOS Programming," Ray Duncan, Microsoft Press, Chapter 14, pages
	267-276
	
	Additional query words: 3.x 4.x 5.x 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
