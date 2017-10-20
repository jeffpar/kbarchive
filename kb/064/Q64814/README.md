---
layout: page
title: "Q64814: Minimize and Maximize Buttons Appear Blacked Out"
permalink: /kb/064/Q64814/
---

## Q64814: Minimize and Maximize Buttons Appear Blacked Out

{% raw %}

	Article: Q64814
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The minimize and maximize buttons may appear as black boxes and buttons in
	dialog boxes (OK and Cancel, for example) may also be blackened out when you use
	an earlier version of the MS-DOS mouse driver with Microsoft Windows in enhanced
	mode. Although the Program Manager comes up, the display may have a slightly
	yellowish or greenish tint. This does not occur in real or standard mode.
	
	This problem may occur on an IBM PS/2 using the PS/2 mouse with an earlier
	version of MOUSE.COM in the AUTOEXEC.BAT file.
	
	This earlier driver can also cause the IBM PS/2 model 70 to appear as a CGA
	display.
	
	WORKAROUND
	==========
	
	To correct the problem, remove the MOUSE.COM line from the AUTOEXEC.BAT file.
	Install the MS-DOS mouse driver from the Windows disks into your CONFIG.SYS if
	you want to use a mouse for MS-DOS applications.
	
	REFERENCES
	==========
	
	Refer to the README.TXT file for more information on expanding files from the
	Windows disks.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 green yellow color
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
