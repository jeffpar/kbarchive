---
layout: page
title: "Q122065: WFWG Mail Causes Unexpected Hard Disk Activity"
permalink: /kb/122/Q122065/
---

## Q122065: WFWG Mail Causes Unexpected Hard Disk Activity

{% raw %}

	Article: Q122065
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows for Workgroups Mail, hard disk drive access begins with no
	apparent cause or result.
	
	CAUSE
	=====
	
	By default, Mail compresses the mail message file (.MMF) during periods of
	inactivity.
	
	RESOLUTION
	==========
	
	To disable this feature, you can either increase the Secs_till_Fast_Compress
	entry, or disable the automatic compression feature.
	
	Increasing the Secs_till_Fast_Compress Entry
	--------------------------------------------
	
	To change the period of time Mail waits before automatically compressing the .MMF
	file, edit the MSMAIL.INI file as follows:
	
	1. Open the MSMAIL.INI file in a text editor such as Windows Notepad.
	
	2. Add the following entry to the [mmf] section:
	
	        Secs_till_Fast_Compress=<number of seconds desired>
	
	  NOTE: The [mmf] section may not exist. If does not, simply add it.
	
	The Secs_till_Fast_Compress default is 600 seconds. Use a higher value if you
	want Mail to compress the Mail file less frequently. For example, if you want
	Mail to wait for 30 minutes before compressing the .MMF file, changing the
	Secs_till_Fast_Compress entry to 1800.
	
	Disabling Automatic MMF Compression
	-----------------------------------
	
	Although you can disable automatic compression of .MMF files, Microsoft does not
	recommend doing so because it can lead to abnormally large message files.
	
	To disable the automatic compression of an MMF file:
	
	1. Open the MSMAIL.INI file in a text editor such as Windows Notepad.
	
	2. Add the following entry to the [mmf] section:
	
	        No_Compress=1
	
	  NOTE: The [mmf] section may not exist. If does not, simply add it.
	
	More information about message file compression can be found in the "Windows for
	Workgroups Resource Kit for operating system version 3.1" manual, sections 6-92
	and 6-93.
	
	Additional query words: 3.11 excessive disk system inactivity
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
