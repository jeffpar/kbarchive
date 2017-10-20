---
layout: page
title: "Q89430: Problems Exiting Windows with Bitstream FaceLift 2.0 Running"
permalink: /kb/089/Q89430/
---

## Q89430: Problems Exiting Windows with Bitstream FaceLift 2.0 Running

{% raw %}

	Article: Q89430
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you exit Microsoft Windows while Bitstream FaceLift version 2.0 is running,
	your system may stop responding (hang).
	
	CAUSE
	=====
	
	Bitstream FaceLift 2.0 uses a cache to store characters it creates. Depending on
	the option you specify, FaceLift may be saving this cache to a file on your hard
	disk. FaceLift sends a message to inform you that it is writing characters to
	the cache. It is this message that conflicts with Windows when you exit to the
	MS-DOS command prompt.
	
	WORKAROUND
	==========
	
	Use the following steps to disable the message that conflicts with Windows when
	you exit:
	
	1. Load the FACELIFT.INI file in a text editor (for example, Microsoft Windows
	  Notepad).
	
	  NOTE: FACELIFT.INI is in the WINDOWS directory.
	
	2. Under the [Settings] section, change "NoDumpMsg=0" to "NoDumpMsg=1" (without
	  the quotation marks).
	
	  NOTE: This line is not case sensitive.
	
	3. Exit and restart Windows so that the changes can take affect.
	
	MORE INFORMATION
	================
	
	For more information, contact Bitstream Technical Support.
	
	FaceLift is manufactured by Bitstream, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	"Bitstream FaceLift 2.0 for Windows Troubleshooting Guide," page 10
	
	Additional query words: 3.00 3.00a 3.10 3.11 bit stream face lift 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
