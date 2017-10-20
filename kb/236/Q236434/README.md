---
layout: page
title: "Q236434: XCLN: You Do Not Have a Valid Microsoft Exchange Offline Store"
permalink: /kb/236/Q236434/
---

## Q236434: XCLN: You Do Not Have a Valid Microsoft Exchange Offline Store

{% raw %}

	Article: Q236434
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Outlook 98, you may not be able to configure offline folders. If you
	click Services on the Tools menu, click Exchange Server Service, click Advanced,
	and then click the Offline Folders tab to configure the offline folders, the
	following error message is displayed:
	
	  You do not have a valid Microsoft Exchange Offline store provider.
	
	CAUSE
	=====
	
	This problem can be caused by an incorrect version of the Exchange Server
	service files, specifically, the Mspst32.dll file.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following steps:
	
	- Rename the Mspst32.dll file, and then reinstall Outlook 98.
	
	- Rename the Mspst32.dll file, and then copy the file from a working computer
	  that has the same operating system as the computer that is experiencing this
	  problem. There is a version of this file for Microsoft Windows NT clients and
	  a version for Microsoft Windows 95 and Microsoft Windows 98 clients.
	
	- Apply the Outlook 98 Archive Patch, which contains a version of the
	  Mspst32.dll file. The updated file is not necessary to resolve this problem,
	  but the patch contains the affected file and may be more convenient to
	  install. The patch is available for download at the following Web address:
	
	  http://office.microsoft.com/downloads/9798/arch98en.aspx
	
	Additional query words: outlook;offline folders OL98
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
