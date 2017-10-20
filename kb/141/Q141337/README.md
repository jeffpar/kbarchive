---
layout: page
title: "Q141337: XCLN: Error Message: The Item Could Not Be Displayed"
permalink: /kb/141/Q141337/
---

## Q141337: XCLN: Error Message: The Item Could Not Be Displayed

{% raw %}

	Article: Q141337
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Clients, the following error message may be displayed when
	you try to open a typical message (IPM.Note):
	
	  The item could not be displayed. The form could not be loaded. Launching
	  default form instead.
	
	CAUSE
	=====
	
	This error message can occur if the Frmcache.dat and Frmcache.bak files are
	missing from the Windir\Forms folder. Windir is the Windows subfolder, and
	Frmcache.dat is the Microsoft Exchange Electronic Forms Designer cache that is
	used to pass information to Microsoft Exchange Server regarding message item
	types. Frmcache.bak is a backup file to Frmcache.dat that is updated and always
	contains electronic forms cache information prior to the last update.
	
	RESOLUTION
	==========
	
	Replace Frmcache.dat by restoring the file to the Windir\Forms folder.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
