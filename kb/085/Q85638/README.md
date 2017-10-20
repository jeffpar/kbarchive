---
layout: page
title: "Q85638: WRK Flowchart Incorrectly States SMARTDrive Cache"
permalink: /kb/085/Q85638/
---

## Q85638: WRK Flowchart Incorrectly States SMARTDrive Cache

{% raw %}

	Article: Q85638
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 17, chart 1.8, of the "Microsoft Windows Resource Kit" (WRK) guide for
	Windows 3.1 states the following in the fifth flowchart step:
	
	  Note: The SMARTDrive command line can be edited to allow caching of "stacked"
	  volumes by adding a +<drive> (where <drive> is a "stacked"
	  volume). If caching...
	
	The +<drive> parameter is incorrect. The correct command line syntax to
	turn on the SMARTDrive disk cache is as follows:
	
	  C:\WINDOWS\SMARTDRV.EXE <drive>+
	
	MORE INFORMATION
	================
	
	SMARTDrive will automatically detect the existence of Stacker and cache the
	underlying Stacker drive. SMARTDrive should not be used to cache a Stacker
	volume. Typing SMARTDRV /? at the MS-DOS prompt lists the command line
	parameters for SMARTDrive with their meaning.
	
	Additional query words: 3.10 wrk docerr smartdrv smartdrive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
