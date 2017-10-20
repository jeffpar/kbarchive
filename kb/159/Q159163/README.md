---
layout: page
title: "Q159163: XCLN: Exchange Client PST Limitations"
permalink: /kb/159/Q159163/
---

## Q159163: XCLN: Exchange Client PST Limitations

{% raw %}

	Article: Q159163
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to add any items (posted messages or files) to an existing
	personal folder (PST file) in the Microsoft Exchange Client. When you attempt to
	do so, one of the following error messages may be displayed:
	
	  An item could not be copied. The action could not be completed.
	
	  An item could not be moved. The action could not be completed.
	
	  Changes to the item could not be saved. The action could not be completed.
	
	  General Microsoft Exchange failure. Make sure Microsoft Exchange is installed
	  correctly then try again.
	
	In Microsoft Outlook 8.0x, you may receive one of the following error messages
	when you attempt to copy or move an item to a folder in a .PST file that
	contains more than 16,383 items:
	
	  Could not make another copy of the item. The original was either moved or
	  deleted, or access was denied.
	
	  The item could not be moved. It was either moved or deleted, or access was
	  denied.
	
	
	CAUSE
	=====
	
	PST files are limited to items of 16,384 in a table. This means PST files can
	accept 16,384 folders of up to 16,384 items in a folder. The maximum size a PST
	can be is 2 gigabytes (GB) total file size.
	
	RESOLUTION
	==========
	
	To store more information, create additional personal folders (PST files) or
	delete some information from the existing PST file.
	
	Additional query words: 4.00 exceed ol97 ol98 8.0 8.01 8.02 8.03
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	
	=============================================================================
	

{% endraw %}
