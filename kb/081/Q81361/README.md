---
layout: page
title: "Q81361: MS-DOS Err Msg: Not Resetting System&#124;Hidden File"
permalink: /kb/081/Q81361/
---

## Q81361: MS-DOS Err Msg: Not Resetting System&#124;Hidden File

{% raw %}

	Article: Q81361
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a file is marked with both the hidden (h) and system (s) attributes, and you
	attempt to remove one of the attributes with the MS-DOS ATTRIB command, the
	command fails and an error message similar to following is displayed:
	
	  Not resetting <type> file [drive:][path][filename]
	
	where <type> is "system" or "hidden."
	
	Similarly, if the file is marked read-only (r) and has the hidden(h) and system
	(s) attribute(s) set, you must remove the hidden and system attribute(s) before
	you can change the read-only attribute.
	
	RESOLUTION
	==========
	
	Use the MS-DOS ATTRIB command to remove BOTH the hidden and system attributes at
	the same time. If the file is marked hidden, system, AND read- only, either
	remove all attributes simultaneously, or remove hidden and system attributes
	first, then the read-only attribute.
	
	MORE INFORMATION
	================
	
	If a file has both the hidden and system attributes set, an attempt to remove
	only one of the attributes failS with one of the above error messages. For
	example, if the file C:\ONE.TWO is marked as both system and hidden, the
	command(s)
	
	  c:\dos\attrib c:\one.two -h
	
	  c:\dos\attrib c:\one.two -s
	
	produce the respective error messages:
	
	  Not resetting system file C:\ONE.TWO
	
	  Not resetting hidden file C:\ONE.TWO
	
	To remove either attribute, use the following command to remove BOTH attributes
	at the same time:
	
	  c:\dos\attrib c:\one.two -s -h
	
	If necessary, you can use the following command to remove the read-only, system,
	and hidden attributes simultaneously:
	
	  c:\dos\attrib c:\one.two -s -h -r
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.22 attrib.exe
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
