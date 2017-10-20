---
layout: page
title: "Q186397: SMS: National Language Support Message Maker - Nlsmsg.exe"
permalink: /kb/186/Q186397/
---

## Q186397: SMS: National Language Support Message Maker - Nlsmsg.exe

{% raw %}

	Article: Q186397
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Nlsmsg.exe, available in the Microsoft BackOffice Resource Kit, displays
	National Language Support (NLS) messages from logon scripts at run-time. This
	approach allows a single Systems Management Server logon server to support
	clients that use multiple languages. NLSMSG was created to replace echo and
	choice with something that can be localized and is language- independent.
	
	MORE INFORMATION
	================
	
	NLSMSG runs on x86 hardware.
	
	NLSMSG Syntax
	-------------
	
	     nlsmsg message_ID [/f file_name] [/m default_message] [/c choices
	     [/t c,nn] [/n NT_lang_ID] [/w Win_lang_ID] [/d DOS_country_code]
	     [/p path] [/v]
	
	NOTE: In most cases, only message_ID, and the /m, /c, and /t options are used.
	However, in this case, NLSMSG looks for the Nlsres.ini file in the directory
	that contains Nlsmsg*.exe. Nlsres.ini specifies which resource dynamic-link
	library (DLL) to use for the current language. The current language DLL is
	opened, and the string corresponding to message_ID is retrieved and displayed on
	the monitor.
	
	The /n, /w, and /d options override the default language. Because NLSMSG attempts
	to determine the current language setting automatically, these options are
	usually not needed.
	
	message_ID
	----------
	
	Identifies the message ID of an NLS string and refers to the string table ID in a
	resource-only DLL. By default, NLSMSG uses Nls_ls.dll from the appropriate
	language subdirectory. For example, X86.bin\00000409\Nls_ls.dll.
	
	/f file_name
	------------
	
	Specifies a DLL file to search for the message specified by message_ID. This
	option enables you to use a different DLL to be used instead of the default:
	NLS_LS.DLL -- an approach that can be useful if you want to create your own
	language-independent scripts.
	
	/m default_message
	------------------
	
	Specifies a message that appears if there is an error finding the message
	specified by message_ID.
	
	/c choices
	----------
	
	Specifies allowable user-response keys, such as Y or N. (This option behaves
	identically to /c for the choice command.)
	
	/t c,nn
	-------
	
	Specifies a default choice, c, after nn seconds with no user response. (This
	option behaves identically to /t for the choice command.)
	
	/n NT_lang_ID
	-------------
	
	Specifies a Windows[ASCII 160]NT language ID to use; for example, U.S. English is
	0x0409.
	
	/w Win_lang_ID
	--------------
	
	Specifies a Windows language ID to use; for example, U.S. English is ENU.
	
	/d DOS_country_code
	-------------------
	
	Specifies an MS-DOS country code to use; for example, United States is 1.
	
	/p path
	-------
	
	Specifies a path to NLS files that overrides the default location, which is the
	same directory as the one containing Nlsmsg.exe.
	
	/v
	--
	
	Verbose mode. More output is displayed on the screen.
	
	/?
	--
	
	Provides a usage statement.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
