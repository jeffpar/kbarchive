---
layout: page
title: "Q246457: PRB: Cannot find location of main media view file"
permalink: /kb/246/Q246457/
---

## Q246457: PRB: Cannot find location of main media view file

{% raw %}

	Article: Q246457
	Product(s): Microsoft Mastering Series
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Products, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing a Mastering Series title and starting the application, the
	following message appears:
	
	  Can not find the location of the main media view file.
	
	CAUSE
	=====
	
	The media view files are on the Mastering CD.
	
	RESOLUTION
	==========
	
	Insert the Mastering CD into the CD-ROM drive and try again.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To not be prompted for a CD when viewing media files you can do the following:
	
	1. Create a new folder on a drive with over 650 MB of available hard disk space
	  and label it "Mastering".
	
	2. Copy the entire contents of the Mastering CD to the folder "Mastering".
	
	3. In the Control Panel select Add/Remove Programs and choose to uninstall the
	  Mastering Series.
	
	4. Run Setup.exe from the folder "Mastering".
	
	The Registry entries will now point to the files on the hard disk rather than the
	CD for the media view files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
