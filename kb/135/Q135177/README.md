---
layout: page
title: "Q135177: Text-Screen Enhancement Programs May Not Work"
permalink: /kb/135/Q135177/
---

## Q135177: Text-Screen Enhancement Programs May Not Work

{% raw %}

	Article: Q135177
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
	
	Some text-screen enhancement drivers and terminate-and-stay-resident programs
	(TSRs) may run erratically or not at all in Windows 95. Results may include
	garbled text output or incorrect screen colors.
	
	Examples of such programs include shareware or third-party Ansi.sys replacements,
	and the High Screen (Affiche.com) TSR from PC-Soft.
	
	CAUSE
	=====
	
	Some older text-screen enhancement drivers and TSRs may not be completely
	compatible with the improved text display performance in Windows 95.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Use any text editor (such as Notepad) to edit the Config.sys file.
	
	2. Add the following line to the Config.sys file:
	
	  switches=/C
	
	  If there is already a "switches=" line, add "/C" (without the quotation marks)
	  to the end of the line.
	
	3. Save and then close the Config.sys file.
	
	4. Restart your computer.
	
	The /C switch disables the Windows 95 text display optimization, allowing older
	drivers and TSRs to work correctly.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
