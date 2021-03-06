---
layout: page
title: "Q74678: Changing Default Margins in Write"
permalink: /kb/074/Q74678/
---

## Q74678: Changing Default Margins in Write

{% raw %}

	Article: Q74678
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default margin settings in Microsoft Write are:
	
	  Left:   1.25"   Right:  1.25"
	  Top:    1"      Bottom: 1"
	
	This article explains how to change these settings.
	
	MORE INFORMATION
	================
	
	To change the Write margins, follow these steps:
	
	1. In Write, choose Page Layout from the Document menu to get the margins dialog
	  box.
	
	2. Change the margin settings to your preference and choose OK.
	
	3. Save the file as <filename>.WRI and close Write (it is not necessary to
	  insert any dummy text in the file).
	
	4. Highlight the Write icon and choose Properties from the File menu under
	  Program Manager.
	
	5. In the command line, replace WRITE.EXE with <filename>.WRI and choose
	  OK to save the change.
	
	6. When the Write icon is executed, it will choose <filename>.WRI as the
	  default document. Enter the desired text and choose Save As from the File
	  menu to save the document to a different filename so that the default
	  <filename>.WRI is not changed.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
