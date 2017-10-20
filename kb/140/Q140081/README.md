---
layout: page
title: "Q140081: Purpose of the Wmconfig.exe and Wavemix.inf Files"
permalink: /kb/140/Q140081/
---

## Q140081: Purpose of the Wmconfig.exe and Wavemix.inf Files

{% raw %}

	Article: Q140081
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Plus!, Setup installs the Sound Mixing Configuration
	tool (Wmconfig.exe) if a sound card is detected.
	
	Wmconfig.exe is a tool that sends setup information obtained from the Wavemix.inf
	file to supported sound cards for the 3D Pinball game. In some cases, you may be
	able to use Wmconfig.exe to eliminate static or popping sounds.
	
	NOTE: Microsoft does not provide support or technical information concerning the
	use of Wmconfig.exe or modification of the Wavemix.inf file.
	
	MORE INFORMATION
	================
	
	To run Wmconfig.exe, follow these steps:
	
	1. Click the Start button, and then click Run.
	
	2. Type the following line in the Open box, and then click OK:
	
	  " c:\progra~1\plus!\pinball\wmconfig.exe " (without the quotation marks)
	
	3. In the sound card box, click your sound card.
	
	4. Click Test.
	
	5. Repeat steps 3-4, trying different sound cards, to find a setting that
	  eliminates the static and popping sounds.
	
	6. Click OK.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
