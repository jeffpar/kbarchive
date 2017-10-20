---
layout: page
title: "Q179930: XCLN: Exchange Help Starts Outlook Help File"
permalink: /kb/179/Q179930/
---

## Q179930: XCLN: Exchange Help Starts Outlook Help File

{% raw %}

	Article: Q179930
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; MACINTOSH:8.0; WINDOWS:4.0,5.0,8.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange client, starting Help starts the Microsoft
	Outlook Help file rather than the Exchange Help file. This occurs on a system
	that has the Exchange client installed and then is upgraded to Outlook.
	
	CAUSE
	=====
	
	During the installation of the Outlook client, the Exchng.cnt file is
	overwritten with the information contained that specifies the Outlook Help file
	(Outlhlp.hlp) as the default. The Exchng.hlp file is not deleted.
	
	WORKAROUND
	==========
	
	To work around this problem, before you install the Outlook client, back up the
	Exchng.cnt file and then restore it to its original location if you want to use
	Exchange Help rather than Outlook Help.
	
	-or-
	
	Copy the Exchng.cnt file from a workstation that has not been upgraded. Copy the
	Exchng.cnt file back to the \exchange directory.
	
	
	Additional query words: CNT GID
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlookMacSearch
	Version           : :8.0,8.01,8.02,8.03; MACINTOSH:8.0; WINDOWS:4.0,5.0,8.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
