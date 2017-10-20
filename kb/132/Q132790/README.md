---
layout: page
title: "Q132790: Unable to Restore cc:Mail After Opening .wri File"
permalink: /kb/132/Q132790/
---

## Q132790: Unable to Restore cc:Mail After Opening .wri File

{% raw %}

	Article: Q132790
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a file with a .wri extension from cc:Mail version 2.1, WordPad
	starts automatically, and the cc:Mail window is minimized, but you are unable to
	restore the cc:Mail window after closing WordPad.
	
	CAUSE
	=====
	
	When you run a .wri file from cc:Mail, cc:Mail attempts to run the program that
	the .wri extension is associated with, and the cc:Mail window is minimized. Even
	after you upgrade to Windows 95, the following line, found in the [extensions]
	section of the Win.ini file, causes .wri files to be associated with Write.exe:
	
	     wri=write.exe ^.wri
	
	However, in Windows 95, Write.exe has been replaced with a program stub that
	starts WordPad (Wordpad.exe). Therefore, when you open a .wri file from cc:Mail
	in Windows 95, Write.exe starts, which in turn starts WordPad. When you then
	quit WordPad, the Write.exe stub remains in memory. Because the original program
	run from cc:Mail, Write.exe, has not been closed, the cc:Mail window is not
	automatically restored. In fact, the cc:Mail window cannot be restored until the
	Write.exe program is closed.
	
	RESOLUTION
	==========
	
	Modify the [extensions] section of the Win.ini file so that the line that reads
	
	     wri=write.exe ^.wri
	
	reads:
	
	     wri=c:\progra~1\access~1\wordpad.exe ^.wri
	
	NOTE: Changing the program that .wri files are associated with in Windows
	Explorer does not correct this problem.
	
	MORE INFORMATION
	================
	
	cc:Mail is manufactured by cc:Mail, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
