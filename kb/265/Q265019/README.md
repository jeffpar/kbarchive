---
layout: page
title: "Q265019: WD97: Modified Date Changes After Closing Doc from Outlook"
permalink: /kb/265/Q265019/
---

## Q265019: WD97: Modified Date Changes After Closing Doc from Outlook

{% raw %}

	Article: Q265019
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbOffice97preSR3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Japanese version(s) of Word 97.
	
	SYMPTOMS
	========
	
	After you open and close a Microsoft Word 97 document from Microsoft Outlook,
	the modified date for the document is updated, although you did not modify the
	document before you closed it.
	
	CAUSE
	=====
	
	The document is in a MAPI (Messaging Application Programming Interface) folder,
	and Word AutoSave is turned on (enabled). When Word automatically saves the
	document, Word also sends a message to Outlook. Outlook interprets the message
	to mean that the file has been modified.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The Japanese version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version        Size       File name      Platform
	  ---------------------------------------------------------------------
	  08/16/2000  12:21p  0.0.0.0000         4,022  Readme.txt     x86
	  08/22/2000  02:00p  5.0.2919.6307  3,361,600  Wdqfe2067.exe  x86
	
	After the hotfix is installed, the following files will have the listed
	attributes or later:
	
	  Date        Time    Version        Size       File name      Platform
	  ---------------------------------------------------------------------
	  08/10/2000  03:33p  8.0.0.8010     5,628,176  WinWord.exe    x86
	  08/10/2000  03:42p  8.0.0.8010     2,149,136  Wwintl32.dll   x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: word97 wd97 modifieddate outlook
	
	======================================================================
	Keywords          : kbOffice97preSR3fix 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
