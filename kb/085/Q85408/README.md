---
layout: page
title: "Q85408: Envelope Orientation Incorrect in PostScript Driver"
permalink: /kb/085/Q85408/
---

## Q85408: Envelope Orientation Incorrect in PostScript Driver

{% raw %}

	Article: Q85408
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print envelopes to a PostScript printer from Microsoft Windows version
	3.1, the output is reversed compared to output from the Windows 3.0 PostScript
	driver.
	
	WORKAROUND
	==========
	
	To work around this problem, try one of the following:
	
	- Edit the WIN.INI file with a standard text editor (such as Notepad) and add
	  LANDSCAPEORIENT=270 to the [ModelName, Port] section.
	
	-or-
	
	- If your printer supports rotating the envelope in the feeder, then rotate the
	  envelopes 180 degrees.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PSCRIPT.DRV versions 3.5 and
	3.51. This problem was corrected in versions 3.52 and later of the PSCRIPT.DRV
	file, which now supports the [ModelName, Port] switch, EnvelopeOrient=. When
	this switch is set to 270, Windows 3.1 will handle envelopes as Windows 3.0
	does.
	
	Additional query words: 3.10 PSCRIP.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
