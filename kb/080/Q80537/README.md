---
layout: page
title: "Q80537: PC Kwik Cache Causes Error in Formatting DD Disk in HD Drive"
permalink: /kb/080/Q80537/
---

## Q80537: PC Kwik Cache Causes Error in Formatting DD Disk in HD Drive

{% raw %}

	Article: Q80537
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.209
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.209 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using PC Kwik you may be unable to format a double density disk in a high
	density drive due to a timing problem. If this is the case, you may be able to
	reconfigure PC Kwik to allow formatting.
	
	MORE INFORMATION
	================
	
	This information primarily applies to TEAC drives, but other brands have been
	known to have this problem as well.
	
	Multisoft, the maker of PC Kwik, instructs its users of "Superon" or "Poweron"
	disk caching programs to alter the batch files that are used to load the disk
	cache. They are generally loaded in the AUTOEXEC.BAT file as "Call Superon" or
	"Call Poweron". In the appropriate batch file, you need to add a switch to the
	end of the "Superpck" command.
	
	PC Kwik instructs the user to try a variety of switches starting with the switch
	"/D#". If this fails to allow formatting of the double density disk, change the
	flag to "/D-" and try again. If this fails, use "/-x *" where "x" is the drive
	letter. DO NOT USE A COLON after the drive letter. These switches express
	progressively longer delays in the timing function, which is where the problem
	lies.
	
	The following are examples:
	
	Note: Use only ONE of these lines.
	
	  Superpck /D#
	  Superpck /D-
	  Superpck /-a *    (For the drive B, substitute "b" for "a".)
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	Additional query words: 5.00 5.00a 6.00 6.209 pckwik pcquick pc quick 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.209
	
	=============================================================================
	

{% endraw %}
