---
layout: page
title: "Q168540: XCLN: Cannot Save Changes to a Public Folder Item"
permalink: /kb/168/Q168540/
---

## Q168540: XCLN: Cannot Save Changes to a Public Folder Item

{% raw %}

	Article: Q168540
	Product(s): Microsoft Exchange
	Version(s): 8.01; MS-DOS:4.0,5.0; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.01 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are unable to save changes to an item in a public folder, even though you
	have owner permissions to the public folder and can perform all other tasks with
	the item, including deleting it.
	
	If you are using the Microsoft Outlook 8.01 client, the following error message
	will appear:
	
	  Microsoft Outlook
	  Your changes could not be saved because you don't have permission to
	  modify some or all of the items in this folder. Do you want to save a
	  copy of this item to the default folder for the item?
	
	If you are using the Microsoft Exchange Client version 5.0, the following error
	message will appear:
	
	  Microsoft Exchange
	  Changes to the item could not be saved. You do not have the permission
	  to send the message on behalf of the specified user.
	
	CAUSE
	=====
	
	The public folder in question is set up so that all messages placed in the
	folder are to be forwarded to it. Because the user trying to modify the message
	does not have the correct permission to send mail on behalf of the original
	sender, the message cannot be saved.
	
	RESOLUTION
	==========
	
	To be able to save changes back to the public folder, do one of the following:
	
	- Edit the Administration Properties of the folder and change the option
	
	  Drag/Drop posting is a: Forward
	
	  to
	
	  Drag/Drop posting is a: Move/Copy
	
	  -OR-
	
	- Ensure the user making the changes can send mail on behalf of the original
	  sender of the public folder item.
	
	
	Additional query words: 8.01 97 ol97
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbExchange400DOS kbExchange500DOS kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :8.01; MS-DOS:4.0,5.0; WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
