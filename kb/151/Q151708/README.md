---
layout: page
title: "Q151708: XCLN: Page Fault in Mpr.exe when Starting Client"
permalink: /kb/151/Q151708/
---

## Q151708: XCLN: Page Fault in Mpr.exe when Starting Client

{% raw %}

	Article: Q151708
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be displayed when you start the Microsoft
	Exchange client for Windows 95 or Microsoft Outlook 97:
	
	  MPREXE caused an invalid page fault in module Kernel32.dll
	
	In certain cases, the option to remember passwords, "Save this password in your
	password list", may be dimmed or unavailable.
	
	CAUSE
	=====
	
	This is because a password list (PWL) file is corrupt. Your PWL file may become
	corrupt after you upgrade the Windows 95 operating system to Service Pack 1.
	
	WORKAROUND
	==========
	
	Locate and delete or rename your PWL file. The file is named
	<username>.pwl, where <username> is the name you use to log on to
	the computer. It is located in the Windows folder. After you delete or rename
	the file, restart Windows 95.
	
	NOTE: If you are using a personal certificate, you should export it before you
	rename or delete your .pwl file. If you do not do so, the personal certificate
	may be unavailable when you send e-mail. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificates in Outlook Express
	
	MORE INFORMATION
	================
	
	REFERENCES:
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q178084 Error Message: MPREXE Not Responding
	
	  Q154092 Err Msg: MPREXE Caused an Invalid Page Fault in Kernel32.dll
	
	  Q182106 OL98: Windows 95 Service Pack 1 and Password Issues
	
	  Q180991 MPREXE Causes Invalid Page Fault When Checking for Mail
	
	
	
	
	Additional query words: greyed www web gpf application invalid
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
