---
layout: page
title: "Q66077: Windows Err Msg: Icon Extraction Error/Group File Error"
permalink: /kb/066/Q66077/
---

## Q66077: Windows Err Msg: Icon Extraction Error/Group File Error

{% raw %}

	Article: Q66077
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Setup program to change the system settings in Microsoft
	Windows, you may receive the following error message when you restart Windows:
	
	  Program group file "filename" is write protected. Its icons cannot be updated
	  for the new display device
	
	In Windows 3.0, the message is preceded by
	
	  Icon Extraction Error
	
	In Windows 3.1, the message is preceded by
	
	  Group File Error
	
	This set of error messages indicates that the read-only attribute has been set
	for the group file mentioned.
	
	MORE INFORMATION
	================
	
	Windows groups files contain display-specific information about program icons.
	If you change your display device through Windows Setup, Windows needs to update
	this information to correctly display the program icons in Program Manager. This
	is not possible if the group file has the read-only attribute set.
	
	To remove the read-only attribute from a file, use the MS-DOS ATTRIB command. For
	example, to remove the read-only attribute from the MAIN.GRP file, type the
	following at the MS-DOS command prompt:
	
	  attrib main.grp -r
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
