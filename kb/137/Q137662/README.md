---
layout: page
title: "Q137662: UNCONF: Unable to Process Msjt2032.dll Running Setup Wizard"
permalink: kb/137/Q137662/
---

## Q137662: UNCONF: Unable to Process Msjt2032.dll Running Setup Wizard

	Article: Q137662
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	WARNING: The information in this article has not been confirmed or tested
	by Microsoft. Some or all of the information in this article has been taken
	from unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION
	PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK. Microsoft provides this
	information "as is" without warranty of any kind, either expressed or
	implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	
	SYMPTOMS
	========
	
	When running the Setup Wizard, the disk image directories are not created and
	the error message, 'Unable to process MSJT2032.DLL' is displayed.
	
	CAUSE
	=====
	
	The Msjt2032.dll file was corrupted.
	
	RESOLUTION
	==========
	
	Manually extract the Msjt2032.dll from the Visual FoxPro floppy disks to allow
	the Setup Wizard to complete the building of the disk images.
	
	Additional query words: VFoxWin unconfirmed error contents
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
