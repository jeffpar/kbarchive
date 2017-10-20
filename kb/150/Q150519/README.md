---
layout: page
title: "Q150519: Running Shared Word 6.0 Help File Causes an Error"
permalink: /kb/150/Q150519/
---

## Q150519: Running Shared Word 6.0 Help File Causes an Error

{% raw %}

	Article: Q150519
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you start the Microsoft Word for Windows 6.0 Help file from the SMS shared
	application program group on a Windows NT client, you receive the following
	error message:
	
	  Executing winhelp.exe rather than winhlp32.exe because this help file uses a
	  16 bit DLL (178)
	
	The message occurs when Winhlp32 is asked to open any 16-bit Help file.
	
	CAUSE
	=====
	
	Program Group Control (PGC) is designed to use file associations. A command line
	such as "Wdreadme.hlp" causes PGC to run the program associated with the .hlp
	extension and to look for the target file in the package directory. Under
	Windows NT, .hlp files are associated with Winhlp32.exe. Winhlp32 recognizes
	16-bit Help files and warns the user that it is going to run Winhelp.exe.
	
	Additional query words: prodsms PCM help office pdf msoffice winnt appctl32
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
