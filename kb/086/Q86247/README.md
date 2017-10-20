---
layout: page
title: "Q86247: Future Trend's EZ FX May Require OPL3= Switch"
permalink: /kb/086/Q86247/
---

## Q86247: Future Trend's EZ FX May Require OPL3= Switch

{% raw %}

	Article: Q86247
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Future Trend's EZSound FX version 2.0 with Microsoft Windows you
	are able to play some, but not all, of the sample sounds if you are using a PRO
	Audio Spectrum 16 or PDPC sound card.
	
	WORKAROUND
	==========
	
	1. Edit the SFSOUND.INI files with a standard ASCII text editor, such as
	  Notepad.
	
	2. Add the following line to the [FM] section:
	
	  OPL3=Yes
	
	EZSound FX is an application that adds additional sound functionality to
	Microsoft Windows. This includes playing WAV, MID, VOC, ROL, and several other
	sound formats.
	
	MORE INFORMATION
	================
	
	The PRO Audio Spectrum 16 and PDPC sound cards use the Yamaha OPL3 sound chip
	instead of the Yamaha YN1812. This chip may not identify itself as an OPL3
	because it is backwards compatible with the YN1812. The OPL3=Yes switch forces
	the software to override this problem.
	
	The EZSound included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
