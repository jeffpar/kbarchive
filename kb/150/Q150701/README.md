---
layout: page
title: "Q150701: BUG: VB 4.0 Professional Edition Does Not Reinstall Help Files"
permalink: kb/150/Q150701/
---

## Q150701: BUG: VB 4.0 Professional Edition Does Not Reinstall Help Files

	Article: Q150701
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Visual Basic is installed without the Help files, it is not possible to
	install the Help files of the Professional Edition of Visual Basic by running
	Setup.
	
	RESOLUTION
	==========
	
	Uninstall and then reinstall Visual Basic with the Help files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the 16-bit or 32-bit Professional Edition of Visual Basic 4.0, using
	  the Custom Install option. Click No when prompted to copy the Help files to
	  your hard disk.
	
	2. Run Setup again to install a component of Visual Basic, and click Yes when
	  prompted to copy the Help files to your hard disk.
	
	3. After installation, note that the Help files are not copied to your hard
	  disk.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
