---
layout: page
title: "Q151428: Cannot Rename Disk in DBCS Windows 95"
permalink: /kb/151/Q151428/
---

## Q151428: Cannot Rename Disk in DBCS Windows 95

{% raw %}

	Article: Q151428
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the volume label on a disk using a double-byte
	character set (DBCS) version of Windows 95 using a mix of DBCS characters and
	single-byte character set (SBCS) characters, the disk's label may not change.
	
	This occurs in any version of Windows 95 that uses DBCS.
	
	CAUSE
	=====
	
	There is an odd number of SBCS characters before the period in the volume label,
	causing a DBCS character to be split across the name and extension of the volume
	label.
	
	RESOLUTION
	==========
	
	To work around this behavior, use any one of the following methods:
	
	- Use an even number of SBCS characters.
	
	- Place a space before the DBCS characters.
	
	- Do not mix SBCS and DBCS characters in volume labels.
	
	MORE INFORMATION
	================
	
	Although Windows 95 long file names are limited to 255 characters, the volume
	label, because of the way long file names are stored, is limited to the
	11-character 8.3 standard. When a DBCS character appears in character positions
	8 and 9, the rename operation does not work.
	
	"DBCS" refers to language versions of Windows 95 that cannot use the standard
	256-character character set because there are more than 256- characters in that
	written language. Examples of DBCS versions of Windows 95 include, but are not
	limited to, Japanese and Hangeul.
	
	"SBCS" refers to versions of Windows 95 that use the 256-character ANSI character
	set. Examples of SBCS language versions include, but are not limited to,
	English, French, and Spanish.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
