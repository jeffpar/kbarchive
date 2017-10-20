---
layout: page
title: "Q89011: PageMaker Err Msg: Waiting for the Spooler to..."
permalink: /kb/089/Q89011/
---

## Q89011: PageMaker Err Msg: Waiting for the Spooler to...

{% raw %}

	Article: Q89011
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from Aldus PageMaker 4.0 desktop publishing software
	with Microsoft Windows version 3.1, you may receive the following error
	message:
	
	  status: Waiting for the spooler to empty its print buffer.
	
	CAUSE
	=====
	
	This error occurs only if you use a Windows Print Manager (or a third-party
	print spooler) when there is not sufficient space on the hard drive to store
	this temporary file(s). If this message appears, the file does not print and the
	print job must be terminated.
	
	This error may also occur if the SET TEMP statement in the AUTOEXEC.BAT file
	specifies an invalid directory.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Remove unnecessary files from the hard drive and/or reduce the size of the
	  permanent swapfile (if it exists).
	
	2. Make sure that the SET TEMP statement in the AUTOEXEC.BAT file refers to a
	  valid directory. For example, if the following line is in your AUTOEXEC.BAT
	  file
	
	       SET TEMP=C:\WINDOWS\TEMP
	
	  be sure there is a directory on drive C called WINDOWS\TEMP.
	
	3. Turn off Print Manager. This does not solve the problem, but it allows you to
	  print until you can create more space on the hard drive.
	
	MORE INFORMATION
	================
	
	For more information about PageMaker, contact Aldus.
	
	The Aldus products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 err msg page maker 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
