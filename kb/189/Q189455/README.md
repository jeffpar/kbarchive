---
layout: page
title: "Q189455: PRB: &quot;Cannot Find Title Data&quot; Error in Mastering Series Programs"
permalink: /kb/189/Q189455/
---

## Q189455: PRB: &quot;Cannot Find Title Data&quot; Error in Mastering Series Programs

	Article: Q189455
	Product(s): Microsoft Mastering Series
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Products, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a Mastering Series product, the following error occurs:
	
	  Warning : Cannot find the title data file, Please check the Titles CD ROM is
	  in place or its network location available. If the location has changed,
	  please type the new location below, This path should contain the file
	  <File Name>
	
	CAUSE
	=====
	
	When you install the Mastering Series product, not all of the multimedia files
	are copied to your local computer because of the size constraint. When the
	software looks at the CD-ROM drive to play the multimedia files, the CD is not
	present in the drive and the error occurs.
	
	RESOLUTION
	==========
	
	Keep the Mastering Series CD in the CD-ROM Drive while running the program.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Install any Mastering Series product from the CD, not from a network location.
	Remove the CD from the CD-ROM Drive and try to run the program.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
