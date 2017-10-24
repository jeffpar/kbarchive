---
layout: page
title: "Q154452: ADT2: ADT Application's Setup Cannot Find MSSetup.dll"
permalink: /kb/154/Q154452/
---

## Q154452: ADT2: ADT Application's Setup Cannot Find MSSetup.dll

{% raw %}

	Article: Q154452
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	After you run the Microsoft Access Setup Wizard and copy the contents of your
	disk image folders to diskettes using a computer running Windows 95, you may
	receive the following error message when you run Setup.exe from Disk 1:
	
	  Setup cannot access required initialization file: 'A:\MSSETUP.DLL'.
	
	CAUSE
	=====
	
	By default, Windows 95 hides .dll files in Explorer; therefore, MSSetup.dll did
	not get copied to the diskette.
	
	RESOLUTION
	==========
	
	In Windows 95 Explorer, click Options on the View menu, and click the "Show all
	files" option on the View tab. Then, copy the Disk 1 folder's contents to the
	diskette again.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Microsoft Access Setup Wizard in Windows 95 to create 1.2 megabyte
	  (MB) or 1.44 MB disk images for a run-time application.
	
	2. In the Windows 95 Explorer, click Options on the View menu, and click the
	  "Hide files of these types:" option on the View tab. (This is the default
	  selection when you install Windows 95.)
	
	3. Copy the files in your Disk 1 image folder to a diskette.
	
	4. Run Setup.exe from the diskette.
	
	For information about additional issues with creating disk images for Microsoft
	Access 2.0 run-time applications while running in Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q130399 ADT2: ADT Apps Created in Windows 95 Cause Error in Windows 3.1
	
	REFERENCES
	==========
	
	Microsoft Access "Advanced Topics," version 2.0, pages 19-37
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
