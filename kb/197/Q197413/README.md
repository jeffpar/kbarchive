---
layout: page
title: "Q197413: WD97: Error Message: &quot;There Are Too Many Edits in the Document&quot;"
permalink: /kb/197/Q197413/
---

## Q197413: WD97: Error Message: &quot;There Are Too Many Edits in the Document&quot;

{% raw %}

	Article: Q197413
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Word document that contains an object and then attempt to move
	the object, the following error message may appear:
	
	  There are too many edits in the document. This operation will be incomplete.
	  Save your work.
	
	This error message may appear even if you did no other editing prior to moving
	the object.
	
	CAUSE
	=====
	
	Word cannot move the object if you have insufficient disk space.
	
	In Windows, this amount of space is determined by the available space in your
	temporary (TEMP) directory (you designate this directory using the SET TEMP
	statement).
	
	RESOLUTION
	==========
	
	Free some disk space (in Windows, free space on the drive that contains the TEMP
	directory).
	
	
	Additional query words: errmsg err msg
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
