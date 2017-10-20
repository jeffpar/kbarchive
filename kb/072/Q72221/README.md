---
layout: page
title: "Q72221: Windows Resource Kit Setup Target Directory"
permalink: /kb/072/Q72221/
---

## Q72221: Windows Resource Kit Setup Target Directory

{% raw %}

	Article: Q72221
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing the Windows Resource Kit (WRK), the Setup program requires three
	parameters. The target directory parameter of the Windows Resource Kit setup
	procedure is used only by the Productivity Pack portion of the Setup program.
	
	
	MORE INFORMATION
	================
	
	The Resource Kit setup procedure requires three parameters:
	
	- Windows Setup location
	
	- Source drive
	
	- Target drive
	
	If you specify a target drive other than the drive in which Windows resides, the
	setup procedure adds a WRKIT and a PPTMP subdirectory to the Windows directory.
	
	The Productivity Pack files are then installed into a PRODPACK directory on the
	specified target drive.
	
	If you want to install the Productivity Pack in a location other than the
	location specified in the Resource Kit setup procedure, you will be prompted at
	the beginning of the Productivity Pack portion of the setup and given the
	opportunity to change the target location.
	
	Additional query words: 3.0 3.00 3.1 3.10 wrk rk 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
