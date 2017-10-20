---
layout: page
title: "Q92774: WFWG: SMARTDrive Command Line Cannot Contain Backslash"
permalink: /kb/092/Q92774/
---

## Q92774: WFWG: SMARTDrive Command Line Cannot Contain Backslash

{% raw %}

	Article: Q92774
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following passage from section 12.7 of the README.WRI file that is shipped
	with Windows for Workgroups incorrectly references a SMARTDrive command line
	option:
	
	  In addition, you must have SMARTDrive installed and you must NOT disable
	  double-buffering by removing or remarking out the \D option in the CONFIG.SYS
	  file.
	
	This information is incorrect. The double buffer option of SMARTDrive is NOT
	valid if it contains a backslash character. The correct syntax is a forwardslash
	character, such as /D or /Double_Buffer.
	
	The Windows version 3.1 README.WRI file contains the same incorrect syntax for
	SMARTDrive in section 11.8.
	
	This error does not occur in later versions of Windows or Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	The README.WRI file also indicates that SMARTDrive must be installed for small
	computer system interface (SCSI) hard drive controllers that use direct memory
	access (DMA). This refers only to the double buffering device driver installed
	with SMARTDrive in the CONFIG.SYS file. Loading SMARTDrive in the AUTOEXEC.BAT
	file provides disk caching and is not necessary to load Windows in enhanced mode
	with devices that need double buffering.
	
	REFERENCES
	==========
	
	For more information about SMARTDrive, Virtual DMA Services, and double
	buffering, see pages 252-256 of the "Microsoft Windows Resource Kit" manual for
	version 3.1.
	
	Additional query words: 3.10 3.1 plus eisa docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
