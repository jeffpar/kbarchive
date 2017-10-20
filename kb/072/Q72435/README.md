---
layout: page
title: "Q72435: Wildcard File Copy in File Manager"
permalink: /kb/072/Q72435/
---

## Q72435: Wildcard File Copy in File Manager

{% raw %}

	Article: Q72435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a file in File Manager using the wildcard ".*" to copy the file
	and maintain the current extension, the file created does not have an extension
	if the new filename has more characters than the original filename.
	
	NOTE: This problem does not occur in later versions of Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. From File Manager, open the Windows directory.
	
	2. Select 3270.TXT.
	
	3. From the File menu, choose Copy.
	
	4. In the To: box, type:
	
	  32701.*
	
	The filename does not have an extension (32701. ). The MS-DOS Copy command
	creates the filename 32701.TXT.
	
	If you copy 3270.TXT to 3272.*, or to 32.*, the filename has the extension ".TXT"
	as expected.
	
	REFERENCES
	==========
	
	"Running MS-DOS," by Van Wolverton, Page 68. Microsoft Press, 1989.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
