---
layout: page
title: "Q92363: Problems Printing Graphs from Quattro Pro for Windows"
permalink: /kb/092/Q92363/
---

## Q92363: Problems Printing Graphs from Quattro Pro for Windows

{% raw %}

	Article: Q92363
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a .TTF or .FOT file becomes corrupt, Quattro Pro for Windows does not print
	graphs correctly. This problem mainly affects the Hewlett-Packard (HP) LaserJet
	II printers, although it may also affect the LaserJet III and Canon printers in
	HP emulation mode.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Delete the .TTF and .FOT files from the WINDOWS\SYSTEM directory.
	
	2. Delete the corresponding entries from the [Fonts] section of the WIN.INI
	  file.
	
	3. Run Control Panel.
	
	4. Choose the Font icon.
	
	5. Reinstall the TrueType fonts.
	
	Once the Quattro graph is corrupt, the corruption cannot be reversed. You must
	re-create the graph.
	
	
	Additional query words: 3.10 quattropro
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
