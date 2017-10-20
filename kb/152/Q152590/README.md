---
layout: page
title: "Q152590: XCLN: Err Msg: Lz32.dll Cannot Start, Check the File..."
permalink: /kb/152/Q152590/
---

## Q152590: XCLN: Err Msg: Lz32.dll Cannot Start, Check the File...

{% raw %}

	Article: Q152590
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:4.0,4.01,5.0,8.02
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, version 8.02, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Setup for the Windows 95 Exchange or Outlook client or
	Internet Explorer, you may receive the following error message:
	
	  LZ32.dll cannot start, check the file to determine the problem
	
	Exchange, Outlook, or Internet Explorer Setup does not initialize.
	
	RESOLUTION
	==========
	
	Ensure the file Olecli.dll exists in the Windows\system directory. This file
	should be dated 7/11/95 with a file size of 82944.
	
	If necessary, extract the file from the Windows 95 Setup compact discs or floppy
	disks. For information about using the Extract tool, type "extract" at a command
	prompt, or see the following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,4.01,5.0,8.02
	
	=============================================================================
	

{% endraw %}
