---
layout: page
title: "Q173258: Can't Open Setup.exe on Learn VB Now CD-ROM"
permalink: /kb/173/Q173258/
---

## Q173258: Can't Open Setup.exe on Learn VB Now CD-ROM

{% raw %}

	Article: Q173258
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Learn Visual Basic Now program included with the
	Microsoft Visual Basic Deluxe Learning Edition, you will receive the following
	error message:
	
	  File Not Found.
	
	CAUSE
	=====
	
	The Learn Visual Basic Now CD-ROM contains mixed-case filenames, including
	Setup.exe. These filenames cannot be read by Microsoft Windows NT 3.5x, or by
	Windows 95 computers that use MS-DOS CD-ROM drivers.
	
	RESOLUTION
	==========
	
	Contact your CD-ROM drive manufacturer to obtain an updated driver for your
	CD-ROM drive. For Windows NT 3.5x, the only resolution is to upgrade to
	Microsoft Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT 3.5x, Windows 3.1, and MS-DOS cannot read CD-ROM filenames
	that contain spaces or lowercase letters. However, later versions of Microsoft
	Windows, including Microsoft Windows 95 and Windows NT 4.0, use updated CD-ROM
	drivers to allow spaces, lowercase letters, and long filenames.
	
	Because Windows 95 permits extended CD-ROM filenames, it does not have problems
	reading the CD-ROM for this book. However, Windows 95 configurations that use
	MS-DOS CD-ROM drivers will not be able to access the extended CD-ROM filenames
	on this CD-ROM.
	
	
	Additional query words: mspress ms_press press bookbug vbwin 5.0 1-57231- 551-2
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
