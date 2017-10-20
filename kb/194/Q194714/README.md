---
layout: page
title: "Q194714: Noise Signals Interpreted As Keystroke During Boot Display"
permalink: /kb/194/Q194714/
---

## Q194714: Noise Signals Interpreted As Keystroke During Boot Display

{% raw %}

	Article: Q194714
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	Windows NT's boot option display has a feature whereby one can stop the
	countdown timer by pressing a key on the keyboard other than the enter key. The
	result of this action is that Windows NT will then wait indefinitely until the
	user makes the preferred selection and presses the enter key to continue loading
	an operating system.
	
	Some keyboards, switch boxes, and BIOSs can mistakenly send random electronic
	noise signals that NTLDR interprets as a keystroke and, thereby, determines that
	the user has instructed it to not display or process the time-out countdown.
	
	SYMPTOMS
	========
	
	When Windows NT boots, it displays the boot options available in the boot.ini.
	
	Normal function of this display is to offer options to the user while counting
	down a preset number of seconds before loading a default operating system.
	
	Occasionally, the display will not indicate a countdown in progress and will not
	load an operating system by default but will wait indefinitely until a user
	selects an operating system option and presses the enter key.
	
	RESOLUTION
	==========
	
	To work around this problem, upgrade the offending BIOS or attach different
	keyboards or switch boxes and test for symptom recurrence.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
