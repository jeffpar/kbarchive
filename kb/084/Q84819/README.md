---
layout: page
title: "Q84819: GP Fault in Solitaire with SizeIt Application"
permalink: /kb/084/Q84819/
---

## Q84819: GP Fault in Solitaire with SizeIt Application

{% raw %}

	Article: Q84819
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A general protection (GP) fault may occur in the Microsoft Windows when
	Solitaire is loaded if the application SizeIt is being used to control
	Solitaire's window size.
	
	RESOLUTION
	==========
	
	Disabling SizeIt will prevent the GP fault from occurring. To disable SizeIt,
	remove the reference to SizeIt from the Load= line of the WIN.INI file and
	restart Windows.
	
	MORE INFORMATION
	================
	
	SizeIt is a utility from OaisSoft Inc., written by Sonam G. Gyato, that stores
	the size and location of the window that an application opens up in.
	
	For more information, contact OaisSoft.
	
	Additional query words: gpf 3.10 3.11 size it Oais Soft 3rdparty game
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
