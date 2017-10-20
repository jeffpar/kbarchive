---
layout: page
title: "Q186478: Error Writing to LPT1:"
permalink: /kb/186/Q186478/
---

## Q186478: Error Writing to LPT1:

{% raw %}

	Article: Q186478
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print to a local printer attached to the parallel port, the
	following STOP blue screen error message is reported by the Win32 spooler:
	
	  Error Writing to LPT1: for document <application name>
	
	  <path \ file name>: the system cannot find the file specified.
	
	For example, if you try to print the file, Probrep.txt, from Notepad, following
	blue screen STOP error message appears:
	
	  Error Writing to LPT1: for document notepad
	
	  C:\winnt35\system32\probrep.txt: the system cannot find the file specified.
	
	NOTE: The address above is one path; it has been wrapped for readability.
	
	This error is generated any time the Parallel.sys driver is not started. This can
	happen if NTDETECT does not find a valid parallel port on your computer, or if
	the parallel device is disabled or stopped with the Devices tool in Control
	Panel.
	
	Furthermore, if the parallel device driver is not started, and you attempt to
	start it manually, error 20 (hardware not detected) appears.
	
	RESOLUTION
	==========
	
	Newer motherboards have the capability to support enhanced parallel port (EPP),
	enhanced communication port (ECP), and standard parallel port settings. This is
	usually a jumper on the motherboard or a system BIOS option.
	
	Windows NT versions 4.0 and earlier do not support EPP or ECP bi- directional
	communication ports, and will cause the parallel port detection to fail if set
	to use either one of these standards.
	
	Use the jumper on the motherboard or modify the BIOS settings to use the standard
	parallel port to ensure Windows NT can detect the parallel port for printing.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
