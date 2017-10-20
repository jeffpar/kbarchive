---
layout: page
title: "Q127806: Setup Remarks Out Lines in AUTOEXEC.BAT File"
permalink: /kb/127/Q127806/
---

## Q127806: Setup Remarks Out Lines in AUTOEXEC.BAT File

{% raw %}

	Article: Q127806
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95, Setup remarks out some of the commands in the
	AUTOEXEC.BAT file. These commands are the REN, COPY, MOVE, and DEL commands.
	
	CAUSE
	=====
	
	This behavior is by design. Setup disables these lines to prevent files that may
	be required for Setup to finish successfully from changing.
	
	RESOLUTION
	==========
	
	After Windows 95 is installed and working correctly, use any text editor (such
	as Notepad) to edit the AUTOEXEC.BAT file and remove the REM command from the
	beginning of lines that you want to re-enable.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
