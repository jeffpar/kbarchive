---
layout: page
title: "Q84363: Explanation of Omit Picture Format Command in Paintbrush"
permalink: /kb/084/Q84363/
---

## Q84363: Explanation of Omit Picture Format Command in Paintbrush

{% raw %}

	Article: Q84363
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The Omit Picture Format command in the Options menu in Paintbrush is used
	to choose which format is used when an image is placed in the Clipboard.
	With Omit Picture Format turned off (the default), when an image is cut or
	copied to the Clipboard, it is placed in the Clipboard as both a metafile
	and device independent bitmap (DIB). If Omit Picture Format is selected,
	the image is placed in the Clipboard in the form of a DIB when a Cut or
	Copy function is performed.
	
	Some applications such a PageMaker 4.0 may not be able to correctly paste
	metafiles. If an application is not able to paste an image that was copied
	to the Clipboard from Paintbrush, try selecting Omit Picture Format from
	the Options menu in Paintbrush before copying the image to the Clipboard.
	
	If a third-party application requires that Omit Picture Format be selected
	in Paintbrush, you may want to contact your software vendor for an update
	to correctly paste an image that was copied to the Clipboard from
	Paintbrush.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
