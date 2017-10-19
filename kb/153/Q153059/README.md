---
layout: page
title: "Q153059: BUG: Incorrect Edition Starts in Different Operating Systems"
permalink: /kb/153/Q153059/
---

## Q153059: BUG: Incorrect Edition Starts in Different Operating Systems

	Article: Q153059
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A dual-boot system with Windows for Workgroups and Windows NT has the Enterprise
	Edition installed while the system is running Windows NT. The system is rebooted
	under Windows for Workgroups and the Enterprise Edition is installed in the same
	Visual Basic directory using the Reinstall option. Upon starting Visual Basic
	under Windows for Workgroups, the Startup windows indicate that the Standard
	edition is starting. The Standard Edition of Visual Basic is 32-bit only.
	
	CAUSE
	=====
	
	The Reinstall option of the Setup program does not reregister files if the files
	are on the system.
	
	RESOLUTION
	==========
	
	Rename or delete the file vb4stp16.stf and reinstall the Enterprise Edition
	under both operating systems. This file is located in the default Visual Basic
	directory. Deleting or renaming this file will cause the files to be correctly
	registered during the reinstallation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the computer under Windows NT and install the Enterprise Edition of
	  Visual Basic.
	
	2. Reboot the computer under Windows for Workgroups and install the Enterprise
	  Edition using the Reinstall option of the Setup program in the same Visual
	  Basic directory.
	
	3. Start Visual Basic under Windows for Workgroups. Note that the Startup screen
	  indicates the Standard Edition is starting.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
