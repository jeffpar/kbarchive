---
layout: page
title: "Q63279: Using the Clipper Program with Windows"
permalink: /kb/063/Q63279/
---

## Q63279: Using the Clipper Program with Windows

{% raw %}

	Article: Q63279
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run a program compiled by dBASE, such as Remote Control's Telemagic, with
	Microsoft Windows, the following line must be entered in the AUTOEXEC.BAT file:
	
	  Set Clipper = V12; E000
	
	MORE INFORMATION
	================
	
	The dBASE compiler requires identifiers to write to the screen. The program
	Clipper is run by dBASE to reserve expanded memory for these identifiers. When a
	dBASE-compiled program is run by a Windows program information file (PIF), a
	memory conflict between Windows and Clipper develops.
	
	By entering the above line in the AUTOEXEC.BAT file, Clipper is told to reserve
	conventional memory rather than expanded memory for the identifiers. The V12;
	section reserves 12K of conventional memory. The E000 section stops Clipper from
	seeing any memory above this address. As a result, it does not see expanded
	memory and uses conventional memory instead.
	
	NOTE: Microsoft does not recommend running program compilers under the Windows
	environment.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	

{% endraw %}
