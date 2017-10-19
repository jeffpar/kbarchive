---
layout: page
title: "Q87512: Intellifont Problems with QEMM, Adobe Type Manager, EOF Marker"
permalink: /kb/087/Q87512/
---

## Q87512: Intellifont Problems with QEMM, Adobe Type Manager, EOF Marker

	Article: Q87512
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses Hewlett-Packard (HP) Intellifont for Windows version 3.0
	and the following problems:
	
	- QEMM 5.11 may conflict with Intellifont.
	
	- Adobe Type Manager and Intellifont produce UAE when both are active.
	
	- End-of-file marker causes Intellifont UAE.
	
	MORE INFORMATION
	================
	
	QEMM 5.11 May Conflict with Intellifont
	---------------------------------------
	
	According to HP technical support, HP Intellifont for Windows 3.0 and QEMM386
	5.11 may produce unpredictable results if they are used together with Windows.
	
	A possible workaround suggested by HP is to delete the phrase "I=f100-f7ff" from
	the Device= line containing the QEMM386 manager in the CONFIG.SYS file.
	
	Replacing the QEMM386 manager with the HIMEM.SYS driver supplied with Windows 3.0
	will also eliminate the problem until a different solution can be provided by
	the product vendors.
	
	Adobe Type Manager and Intellifont Cause UAE when Both Are Active
	-----------------------------------------------------------------
	
	According to HP technical support, HP Intellifont for Windows 3.0 and ATM should
	work together as long as the cache amount set in ATM is not greatly increased
	over the recommended 96K default. The more the cache is increased, the greater
	the chance of a UAE occurring in Windows 3.0.
	
	End-of-File Marker Causes Intellifont UAE
	-----------------------------------------
	
	When you edit plain text files in Word for Windows or other applications that
	display control characters, and use Hewlett-Packard (HP) Intellifont for
	Windows, an end-of-file (EOF) marker in the file may cause garbage characters or
	an Unrecoverable Application Error (UAE). This is a limitation of Intellifont.
	For more information, please contact HP technical support.
	
	To work around this problem, disable Intellifont for Windows to edit plain text
	files that contain an EOF marker, or use a plain text editor (such as Notepad)
	that does not display control characters.
	
	The Intellifont product included here is manufactured by HP, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	
	Additional query words: 3rdparty ifw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
