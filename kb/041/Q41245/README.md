---
layout: page
title: "Q41245: Change in Functionality of FORMAT Command"
permalink: /kb/041/Q41245/
---

## Q41245: Change in Functionality of FORMAT Command

{% raw %}

	Article: Q41245
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you FORMAT a floppy disk using the Microsoft MS-DOS Packaged Product
	version 4.0 or later, the FORMAT utility command issues the following prompt for
	a volume label if no parameters are specified:
	
	  Volume label (11 characters, ENTER for none)?
	
	This procedure is a change in functionality from previous versions, which
	required the /V switch for a volume label.
	
	If you don't need a volume label for the disk, press the ENTER key when the above
	prompt is issued by the FORMAT command.
	
	MORE INFORMATION
	================
	
	The following information about the /V switch for the FORMAT utility command
	appears on page 78 of the "Microsoft MS-DOS User's Reference" manual:
	
	  /v:label   Specifies the volume label to use. A volume label
	             identifies the disk and can be up to 11 characters in
	             length (no tabs allowed). If you do not specify the /v
	             switch, or specify it without giving the volume label,
	             you are automatically prompted for the volume label
	             after the format operation completes.
	
	
	Additional query words: 6.22 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
