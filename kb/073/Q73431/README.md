---
layout: page
title: "Q73431: Setup Hangs When Creating Windows Directory"
permalink: kb/073/Q73431/
---

## Q73431: Setup Hangs When Creating Windows Directory

	Article: Q73431
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows Setup program may return you to an MS-DOS prompt or stop responding
	(hang) immediately after the Windows directory has been specified.
	
	This problem occurs before the System Information screen appears in Windows
	Setup.
	
	CAUSE
	=====
	
	This may be caused by installing Windows to a hard drive with an excessive
	number of lost clusters. In such a situation, when the Setup program tries to
	create the Windows directory, it fails.
	
	WORKAROUND
	==========
	
	Use the steps below to troubleshoot the problem.
	
	CAUTION: The following troubleshooting steps advise the use of the MS-DOS utility
	CHKDSK with the /F parameter. Running CHKDSK/F on a hard drive with a large
	number of lost clusters may result in damaged files, loss of data, and the loss
	of directory integrity. For more information regarding CHKDSK, please read the
	"Microsoft MS-DOS User's Guide and User's Reference" (pages 44-45 for version
	4.01 and pages 381-383 for version 5.0).
	
	Troubleshooting Steps
	---------------------
	
	NOTE: Read the entire procedure before beginning, then either do steps 1-5 or
	skip steps 1-2 and begin with step 1b.
	
	1. At the MS-DOS prompt, type:
	
	  chkdsk/f
	
	  If the CHKDSK reveals lost clusters, convert those lost clusters to files by
	  typing Y when prompted to do so.
	
	2. Delete all files with the CHK extension in the root directory by typing:
	
	  del *.chk
	
	  -or-
	
	  Step 1 b. At the MS-DOS prompt, type:
	
	  chkdsk/f
	
	  If the CHKDSK utility reveals lost clusters, and you type N, MS-DOS corrects
	  the disk, but does not save the contents of the lost allocation units.
	
	  NOTE: If the number of lost clusters is excessive, there may be a hardware
	  problem. It is difficult to provide a specific definition for excessive
	  because some situations are more likely to produce lost clusters than others.
	  For instance, it is far more likely that there would be lost clusters on a
	  machine running software that creates large temporary files because an
	  improper exit from such a program can result in many lost clusters. In any
	  event, running CHKDSK/F in such a situation may result in the loss of data.
	  When the CHKDSK reveals anything more than 100-200K of lost clusters, you may
	  want to contact your service technician to have your hardware checked.
	
	3. After following steps 1-2 or step 1b above, continue with step 3.
	
	  If CHKDSK/F reveals no lost clusters, try to create a directory named WINDOWS
	  by typing:
	
	  md windows
	
	4. If the command is not successful (and you are not able to create the
	  directory from MS-DOS), there may be a hardware problem. Contact your service
	  technician.
	
	5. If the command is successful, try running the Windows Setup program with the
	  Windows directory already on the hard drive.
	
	If these steps are not successful, query on the word "tshoot" (without the
	quotation marks) to find more troubleshooting steps to resolve an improper
	installation of Windows.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
