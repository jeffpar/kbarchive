---
layout: page
title: "Q75779: File Manager Error Deleting Directory with Hidden Files"
permalink: /kb/075/Q75779/
---

## Q75779: File Manager Error Deleting Directory with Hidden Files

{% raw %}

	Article: Q75779
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete a directory in Microsoft Windows 3.0 File Manager,
	the following error message is displayed:
	
	  ERROR DELETING FILE
	  Cannot remove directory (DIR_name):Access Denied.
	
	CAUSE
	=====
	
	The directory contains a hidden file.
	
	RESOLUTION
	==========
	
	To view the file(s), do the following:
	
	1. From the View menu in File Manager, choose Include.
	
	2. Select the Show Hidden/System Files check box.
	
	3. Choose the OK button.
	
	The hidden file(s) now appear in the directory. Delete these files, then you can
	successfully delete the directory.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
