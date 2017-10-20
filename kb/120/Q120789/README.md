---
layout: page
title: "Q120789: Banyan Vines Utility PCCONFIG.EXE"
permalink: /kb/120/Q120789/
---

## Q120789: Banyan Vines Utility PCCONFIG.EXE

{% raw %}

	Article: Q120789
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a utility in the \NETWORK directory on a Banyan Vines workstation
	called PCCONFIG.EXE. It is used to set certain things such as "Number of open
	files," which would correspond to the "filehandles=" statement in the SHELL.CFG
	on a Novell network.
	
	MORE INFORMATION
	================
	
	Microsoft does not support the use of this utility but errors such as "Too many
	files open" or "Transgressed File Handle" occurring on Banyan Vines network can
	be caused by the "Number of open files" parameter in the PCCONFIG.EXE file.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: VFoxWin FoxWin FoxDos 2.50 2.50a 2.50b 2.60 2.60a novel Banyan Vines
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
