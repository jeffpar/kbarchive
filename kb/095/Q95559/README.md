---
layout: page
title: "Q95559: MemMaker Does Not Preserve Redirection or Trailing Spaces"
permalink: /kb/095/Q95559/
---

## Q95559: MemMaker Does Not Preserve Redirection or Trailing Spaces

{% raw %}

	Article: Q95559
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MemMaker does not preserve redirection syntax and trailing spaces in the
	AUTOEXEC.BAT file. For example, if you have C:\DOS\DOSKEY >NUL in the
	AUTOEXEC.BAT file, MemMaker changes it to LH /L:x,nnnn C:\DOS\DOSKEY. If you
	have "set prompt=[$p] " (without the quotation marks) in your AUTOEXEC.BAT file,
	MemMaker removes the trailing space and changes it to "set prompt=[$p]".
	
	WORKAROUND
	==========
	
	To work around this problem, edit your AUTOEXEC.BAT file and put the >NUL
	statement and/or trailing spaces back in after you run MemMaker.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
