---
layout: page
title: "Q106427: MS-DOS 6.2x ScanDisk Fails to Correct MDBPB Problem"
permalink: kb/106/Q106427/
---

## Q106427: MS-DOS 6.2x ScanDisk Fails to Correct MDBPB Problem

	Article: Q106427
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	ScanDisk may repeatedly detect corruption in the Microsoft DoubleSpace BIOS
	parameter block (MDBPB) and report it has corrected the problem even though it
	has not.
	
	CAUSE
	=====
	
	This problem is caused by a ScanDisk rounding problem that occurs during the
	calculation of the minimum estimated compression ratio (ECR).
	
	WORKAROUND
	==========
	
	To work around this problem, reset the DoubleSpace compression ratio and then
	run ScanDisk. For example:
	
	1. Set the DoubleSpace compression ratio to any fixed value (that is, don't
	  allow DoubleSpace to set it to the default). For example, type "dblspace
	  /ratio=2" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER. If your compression ratio is already 2:1, set it to 3:1.
	
	2. Run ScanDisk to correct the MDBPB problem.
	
	3. Run DoubleSpace to reset the compression ratio. For example, type "dblspace
	  /ratio" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS ScanDisk version 6.2. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
