---
layout: page
title: "Q136832: Editing Address Book in MS Word 7.0 Renders File Unusable"
permalink: /kb/136/Q136832/
---

## Q136832: Editing Address Book in MS Word 7.0 Renders File Unusable

{% raw %}

	Article: Q136832
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use Word 7.0 to modify your Personal Address Book (PAB), you may
	receive the following error message when you start Microsoft Exchange:
	
	  Your Personal Address Book could not be opened. The file is not a Personal
	  Address Book. Would you like to use a different Personal Address Book?
	
	CAUSE
	=====
	
	Word 7.0 can open and modify a PAB, but cannot save the file in the correct
	format. When you save a PAB in Word, the file is saved in Word document (.doc)
	format, and cannot be used by Microsoft Exchange.
	
	RESOLUTION
	==========
	
	If you save a PAB in Word, there is no method for converting the file back to
	PAB format. You can open and view the PAB in Word, but you must start a new PAB
	to run Microsoft Exchange.
	
	MORE INFORMATION
	================
	
	If you open a PAB in Word but do not save it, the format is not changed and the
	PAB can still be used by Microsoft Exchange.
	
	Note that the problem described in this article also applies to Schedule+ (.scd)
	files.
	
	
	Additional query words: excel xl5 xl7
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWordSearch kbWin95search kbWord95Search kbZNotKeyword3 kbWord95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
