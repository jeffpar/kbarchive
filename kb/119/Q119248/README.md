---
layout: page
title: "Q119248: FIX: &quot;Error During Compression&quot; Splitting a File a Second Time"
permalink: /kb/119/Q119248/
---

## Q119248: FIX: &quot;Error During Compression&quot; Splitting a File a Second Time

{% raw %}

	Article: Q119248
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0; :2.5x,2.6
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp500fix kbvfp250bug KBQ
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows Distribution Kit, versions 2.5x, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the FoxPro for Windows Setup Wizard, the error message
	"Error During Compression" appears when the wizard is splitting a large file a
	second time.
	
	
	CAUSE
	=====
	
	The disk images directory path is too long. The path, with the filename, is
	limited to 50 characters including "\COMPRESS\FILENAME.XXX", which is added on
	to the disk image path given in the Disk Images Directory box in the Setup
	Wizard. This is a limitation of the compression utility used by the Setup
	Wizard.
	
	For example, if the disk images directory is
	
	  C:\FOXAPPS.WIN\DISTRIB\VER_300
	
	the entire path to the location of the compressed files is:
	
	  C:\FOXAPPS.WIN\DISTRIB\VER_300\COMPRESS\FILENAME.XXX
	
	NOTE: The Setup Wizard cannot create a directory that is three levels deep;
	instead, it will generate the error message "Could not create directory
	c:\level1\level2\level3." Therefore, the directory must already exist on the
	hard disk drive in order for the above problem to occur.
	
	You can also get this error if the destination directory for the disk images is a
	diskette drive (A or B diskette drive)
	
	RESOLUTION
	==========
	
	Change the disk images directory to a shorter path (for example, C:\IMAGES).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	Additional query words: 2.50 2.50a 2.50b 2.60 SetupWizard dk cpsrname interrupted
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp500fix kbvfp250bug KBQ 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxProDK250xSearch kbFoxProDKSearch kbVFP300
	Version           : WINDOWS:3.0; :2.5x,2.6
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
