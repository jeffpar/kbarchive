---
layout: page
title: "Q140846: PPT7: &quot;Could Not Find Pngsetup.ex_&quot; Using Pack And Go Wizard"
permalink: kb/140/Q140846/
---

## Q140846: PPT7: &quot;Could Not Find Pngsetup.ex_&quot; Using Pack And Go Wizard

	Article: Q140846
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbpng
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the PowerPoint Pack And Go Wizard, you may receive the following
	error message:
	
	  There may not be enough free space on A:\ to allow storage of the
	  presentation. Do you want to continue?
	
	If you click Yes and continue, you may receive the following error message:
	
	  Could not find Pngsetup.ex_. You may need to run Setup and reinstall.
	
	CAUSE
	=====
	
	These error messages occur when there is not enough available disk space to
	create the Pngsetup.ex_ file on the floppy disk or there are bad sectors on the
	disk causing the writable disk space to be less than 53.3K.
	
	RESOLUTION
	==========
	
	Test the floppy disk to make sure the disk has enough available space by trying
	to copy a file larger than 53.3K to it.
	
	MORE INFORMATION
	================
	
	You must have enough disk space for the files Pngsetup.exe and Pres0.png. If
	there is not enough disk space, you may not be able to unpack the presentation
	successfully.
	
	Additional query words: 7.00 ppt7 ppt95 png Pack and Go PowerPoint Powerpt pngsetup.ex_
	
	======================================================================
	Keywords          : kbpng 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
