---
layout: page
title: "Q95635: Using Unique Labels with Multi-Config"
permalink: /kb/095/Q95635/
---

## Q95635: Using Unique Labels with Multi-Config

{% raw %}

	Article: Q95635
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a Multi-Config startup menu with MS-DOS 6.x, the label names you use
	in your AUTOEXEC.BAT file must be unique within the first eight characters. This
	is true for all MS-DOS labels.
	
	MORE INFORMATION
	================
	
	For example, if your startup menu has two labels, (Emp_John_Smith and
	Emp_John_Smyth) and your AUTOEXEC.BAT file has a GOTO %CONFIG% command, MS-DOS
	always jumps to the :Emp_John_Smith label if it appears before the
	:Emp_John_Smyth label in the AUTOEXEC.BAT file.
	
	To workaround or avoid this problem, make sure all menu items in your CONFIG.SYS
	and their corresponding labels in your AUTOEXEC.BAT file are unique within the
	first eight characters.
	
	Additional query words: 6.22 6.0 multiconfig multi config F5 F8 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
