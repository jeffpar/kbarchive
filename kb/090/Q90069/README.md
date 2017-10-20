---
layout: page
title: "Q90069: GENLIB.DLL May Cause GP Faults in Windows 3.1"
permalink: /kb/090/Q90069/
---

## Q90069: GENLIB.DLL May Cause GP Faults in Windows 3.1

{% raw %}

	Article: Q90069
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you use a Microsoft Windows 3.0 printer driver that uses the GENLIB.DLL file,
	general protection (GP) faults or Divide Overflow messages may occur in Windows
	3.1 when you print from a Windows-based application.
	
	The default number of copies for printing may intermittently change to as high as
	several thousand.
	
	RESOLUTION
	==========
	
	To correct the problem, delete the old GENLIB.DLL file and the corresponding
	driver (.DRV) file and install a Windows 3.1 printer driver by using the Control
	Panel, Printers option.
	
	MORE INFORMATION
	================
	
	The GENLIB.DLL file was only included in the Supplemental Driver Library for
	Windows 3.0 and was used with the following printers:
	
	  Brother 9 Pin           7152    9/20/90
	  Brother 24 Pin          12528   9/20/90
	  Canon BJ-10e            4976    9/20/90
	  Canon BJ-130 series     6496    9/20/90
	  Star Micronics 9 Pin    10752   9/20/90
	  Star Micronics 24 Pin   26656   9/20/90
	
	The GENLIB.DLL file is dated 9/20/90 and has a size of 65792 bytes. GENLIB.DLL is
	not used with any printers in Windows 3.1.
	
	New printer drivers are included with Windows 3.1 for these printers.
	
	
	Additional query words: gpf 3.10 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
