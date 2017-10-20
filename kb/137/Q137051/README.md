---
layout: page
title: "Q137051: Cannot Play .avi Files with Number 9 Video Card"
permalink: /kb/137/Q137051/
---

## Q137051: Cannot Play .avi Files with Number 9 Video Card

{% raw %}

	Article: Q137051
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbmm win95 kbHardwarekbfaq
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows 3.x to Windows 95 on a computer with a Number 9
	video card, you may receive any of the following error messages when you try to
	play .avi files or run a program that plays .avi files:
	
	- Invalid dynamic link call to a .dll
	
	- Page fault in mmsystem.dll
	
	- This program has called an invalid dll
	
	- Your program is making an invalid dynamic link call to a .dll file
	
	CAUSE
	=====
	
	Some Number 9 video card drivers for Windows 3.x add support for DCI functions
	that can conflict with the DCI support in Windows 95. When you upgrade to
	Windows 95, the previous Number 9 DCI support is not removed.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the System.ini file in the
	  Windows folder.
	
	2. In the [Drivers] section of the System.ini file, change the line that reads
	
	  DCI=RFMDCI
	
	  to read:
	
	  ;DCI=RFMDCI
	
	3. In the [Display] section of the file, change the line that reads
	
	  DCI-Support=On
	
	  to read:
	
	  ;DCI-Support=On
	
	4. Save and then close the System.ini file.
	
	5. Shut down Windows 95 and restart your computer.
	
	NOTE: Most Number 9 video cards also change the "DCI=" line in the [Display]
	section of the System.ini file. Changing this to read:
	
	  DCI=Display
	
	This solves invalid dynalink problems when you run .avi files.
	
	MORE INFORMATION
	================
	
	Number 9 has developed updated video drivers for Windows 95 that include support
	for specific features of their cards. These drivers do not correct the problem
	described in this article.
	
	The behavior described in this article can also occur with a MIRO 12SD video
	card. To resolve this issue, follow the steps in the "Resolution" section, but
	in step 2, comment out the line that reads:
	
	  dci=mirodci
	
	The behavior described in this article can also occur with the following video
	cards:
	
	- Cirrus Logic 5434 PCI
	
	- Creative Labs 3D Video Blaster
	
	- Diamond Stealth 3D 2000
	
	- Matrox Millennium
	
	- Matrox MGA
	
	- S3 Vision 968
	
	- Siig Aurora 4000 PCI
	
	- STB PowerGraph 64
	
	- Venus 1 MB
	
	To resolve this issue, follow the steps in the "Resolution" section.
	
	Additional query words: #9 nine
	
	======================================================================
	Keywords          : kberrmsg kbhw kbmm win95 kbHardware kbfaq
	Technology        : kbWin95search kbWin95
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
