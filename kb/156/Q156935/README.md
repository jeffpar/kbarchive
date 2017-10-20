---
layout: page
title: "Q156935: Writer 2: Email Packages Contain Creative Writer 2 Viewer"
permalink: /kb/156/Q156935/
---

## Q156935: Writer 2: Email Packages Contain Creative Writer 2 Viewer

{% raw %}

	Article: Q156935
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	2.00
	WINDOWS
	kbusage kbhowto kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create an email package in Creative Writer 2, the program packages your
	Creative Writer 2 document with a Creative Writer 2 Viewer (Mscwview.exe) so
	that recipients without Creative Writer 2 can access the document.
	
	MORE INFORMATION
	================
	
	The Creative Writer 2 email package ends up as a self-extracting .exe file. When
	the file is extracted, it installs the following files into the \Program
	Files\Microsoft Kids\Creative Writer folder:
	
	- mscwview.exe
	
	- qd96.dll
	
	- qrt96.dll
	
	The Creative Writer Viewer is 100K in size. After you receive and double- click
	the package in an email client that accepts attachments, you are alerted that
	the Creative Writer Viewer will be installed with an option to deny. Once the
	Viewer is installed, you can view Creative Writer 2 documents on a machine that
	does not have Creative Writer 2 installed.
	
	NOTE: Many email clients will not process an attachment that is in excess of 1
	MB. Because the Creative Writer 2 Viewer is 100KB, documents larger than 924 KB
	could possibly be returned.
	
	Additional query words: 2.00 kids mskids artist maggie max writer cw2 cw2.0
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
