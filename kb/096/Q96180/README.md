---
layout: page
title: "Q96180: VSafe Err Msg: Program Is Trying to Write to Hard Disk"
permalink: /kb/096/Q96180/
---

## Q96180: VSafe Err Msg: Program Is Trying to Write to Hard Disk

	Article: Q96180
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following pop-up dialog box may be displayed when you perform a disk
	operation that writes to the disk:
	
	  VSAFE Warning
	
	  Program is trying to write to hard disk
	  Do you wish to continue?
	
	You can then choose one of three options: Stop, Continue, or Boot. If you choose
	Stop, the following error message is displayed:
	
	  ATTENTION: A serious disk error has occurred while writing to drive C.
	
	NOTE: If you are running MS-DOS Prompt from Windows, this error message is
	displayed in a blue screen with the heading "Serious Disk Error."
	
	You can now choose to retry the operation. This causes the first VSAFE error to
	be displayed again. Until you choose Continue or Boot, you are not able to
	escape these recurring warning messages. If you choose Continue, the write
	operation is performed. If you choose Boot, the write operation aborts, your
	system restarts, and any information you were trying to save is lost.
	
	CAUSE
	=====
	
	This problem occurs when VSafe is installed with the write-protect option
	enabled and SMARTDrive is installed with write caching enabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, do not simultaneously use SMARTDrive configured for
	write caching and VSafe configured for write protection.
	
	
	Additional query words: 6.22 6.00 6.20 write protect protected virus smartdrv.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
