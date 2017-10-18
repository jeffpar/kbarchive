---
layout: page
title: "Q125709: /RATIO Switch Not Valid with DRVSPACE /CREATE Command"
permalink: kb/125/Q125709/
---

## Q125709: /RATIO Switch Not Valid with DRVSPACE /CREATE Command

	Article: Q125709
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the /RATIO switch to set the estimated compression ratio (ECR) when
	you are creating a new, empty compressed drive with the DRVSPACE /CREATE
	command, the ratio value that you specify is ignored. The ECR for the new
	compressed drive defaults to 2.0:1.
	
	CAUSE
	=====
	
	The /RATIO switch is not valid when used with the DRVSPACE /CREATE command.
	
	
	WORKAROUND
	==========
	
	Set the ECR for the new compressed drive after the drive has been created. To
	set the ECR for the drive, use the DRVSPACE /RATIO command, or run DriveSpace
	from inside Windows 95.
	
	The syntax for the DRVSPACE /RATIO command is
	
	  DRVSPACE /RATIO=n.n <drive>
	
	where n.n is the new ratio you want to use and <drive> is the drive letter
	of the compressed drive.
	
	To change the ECR from inside Windows 95 DriveSpace, perform the following
	steps:
	
	1. Click the compressed drive whose ratio you want to change
	
	2. On the Advanced menu, click Change Ratio
	
	3. Drag the slider to the desired value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	When you create or resize a compressed drive, DriveSpace defaults to a ratio of
	2.0:1. The default ECR is always used by DriveSpace when you use the DRVSPACE
	/CREATE command.
	
	REFERENCES
	==========
	
	For a complete description of the command-line parameters for DriveSpace, see
	the Microsoft Windows 95 "Resource Kit," Appendix A, "Command-Line Command
	Summary," or run the MS-DOS 6.22 Help by typing
	
	  " help drvspace " (without the quotation marks)
	
	from the DOS directory at an MS-DOS prompt.
	
	Additional query words:
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
