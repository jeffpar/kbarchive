---
layout: page
title: "Q84863: PIF Option: Allow Fast Paste Option Explained"
permalink: /kb/084/Q84863/
---

## Q84863: PIF Option: Allow Fast Paste Option Explained

{% raw %}

	Article: Q84863
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows operating system versions 3.0 and 3.1, the PIF Editor has
	an Allow Fast Paste check box. This setting tells Windows how to paste text into
	an MS-DOS-based application.
	
	Some applications may not receive text properly if Allow Fast Paste is selected.
	
	WORKAROUND
	==========
	
	To change this setting:
	
	1. Run PIF Editor.
	
	2. Choose the Advanced button.
	
	3. Under Other Options, select or clear the Allow Fast Paste check box.
	
	MORE INFORMATION
	================
	
	If the Allow Fast Paste check box is selected, Windows will paste the
	information into the MS-DOS-based application using an Interrupt 16h call, which
	pushes characters and scan codes into the BIOS keyboard buffer. This allows
	Windows to send more than one character at a time from the Clipboard to the
	MS-DOS-based application.
	
	If the Allow Fast Paste check box is not selected, Windows will paste the
	information into the MS-DOS-based application using an Interrupt 9h call to
	emulate actual keyboard input. Information will be pasted into the MS-DOS- based
	application character by character.
	
	Additional query words: 3.00 3.00a 3.10 3.11 non-Windows program information file
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
