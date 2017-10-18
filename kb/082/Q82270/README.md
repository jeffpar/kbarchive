---
layout: page
title: "Q82270: ATTRIB Command May Inadvertently Remove File Attributes"
permalink: kb/082/Q82270/
---

## Q82270: ATTRIB Command May Inadvertently Remove File Attributes

	Article: Q82270
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following MS-DOS command removes ALL attributes (read-only, hidden, system,
	archive) from ALL files in the current directory:
	
	  c:\dos\attrib , (ATTRIB comma)
	
	As a consequence, if issued from the root directory, the following command:
	
	  c:\dos\attrib , /s
	
	removes ALL attributes from ALL files in ALL directories on the current drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.0, 5.0a, 6.0,
	6.2, 6.21, and 6.22. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Both of the following commands remove all file attributes in the current
	directory:
	
	  c:\dos\attrib ,
	
	  c:\dos\attrib *.* -r -s -h -a
	
	Additional query words: 6.22 5.00 6.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
