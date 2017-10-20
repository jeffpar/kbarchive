---
layout: page
title: "Q88158: Certus NoVi TSR Hangs in Windows 386 Enhanced Mode"
permalink: /kb/088/Q88158/
---

## Q88158: Certus NoVi TSR Hangs in Windows 386 Enhanced Mode

{% raw %}

	Article: Q88158
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certus NoVi is an anti-virus terminate-and-stay-resident (TSR) program. Certus
	NoVi version 1.01 causes the system to hang when you exit Windows 3.1. This
	occurs only when running Windows 3.1 in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	When you perform a standard installation of NoVi version 1.01, NoVi adds the
	following lines to your AUTOEXEC.BAT file:
	
	     c:\novi\noviboot.exe
	     c:\novi\novitsr.exe
	
	According to Certus technical support, there are updated drivers available
	(version 1.1) that correct this problem. The updated files can be obtained by
	contacting Certus technical support.
	
	(Note that NoVi version 1.1 adds NOVIWIN.EXE to the load= line in the WIN.INI
	file, and creates a group called NOVI.)
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
