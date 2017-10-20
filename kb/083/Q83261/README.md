---
layout: page
title: "Q83261: Beethoven Err Msg: Cannot Clear or Save Game Setting"
permalink: /kb/083/Q83261/
---

## Q83261: Beethoven Err Msg: Cannot Clear or Save Game Setting

{% raw %}

	Article: Q83261
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Multimedia Beethoven, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Microsoft Multimedia Beethoven generates the error message
	
	  Multimedia Beethoven cannot clear or save game settings. Please rerun setup
	  from the CD to correct the problem.
	
	the WIN.INI is marked as read only or the Beethoven product is having problems
	writing to the WIN.INI file.
	
	MORE INFORMATION
	================
	
	Microsoft Multimedia Beethoven reads and writes settings to the WIN.INI file. If
	there is a problem reading or writing to this file, the above error message is
	received. If the file has a read-only attribute, use the MS-DOS Attrib command
	to make the file read/write:
	
	  "attrib -r c:\windows\win.ini" (without the quotation marks)
	
	Additional query words: Tbook Usage
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMBeethoven100 kbMMBeethoven100a
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
