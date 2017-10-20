---
layout: page
title: "Q26295: Valid Characters for a Volume Label"
permalink: /kb/026/Q26295/
---

## Q26295: Valid Characters for a Volume Label

{% raw %}

	Article: Q26295
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following characters are not allowed to be in a volume label when you use
	the MS-DOS LABEL command (LABEL.COM):
	
	  *
	  ?
	  [
	  ]
	  :
	  <
	  >
	  |
	  +
	  =
	  :
	  ,
	  / 
	  \ 
	  / 
	  "
	
	In addition, control codes, such as CTRL+A, CTRL+D, and so forth, are not
	allowed. All other ASCII characters, including the extended ASCII, are valid.
	
	LABEL.COM maps lowercase characters to uppercase.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30A 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
