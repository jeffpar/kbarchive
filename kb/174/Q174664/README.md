---
layout: page
title: "Q174664: Microsoft Exchange Does Not Start"
permalink: /kb/174/Q174664/
---

## Q174664: Microsoft Exchange Does Not Start

{% raw %}

	Article: Q174664
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Exchange, the mouse pointer may change to
	the Working In Background or Busy pointer and then back to the normal pointer,
	but Microsoft Exchange may not start and no error message may be displayed.
	
	In Windows NT, you may receive the following error message:
	
	  Windows Messaging: exchng32.exe - Ordinal Not Found
	
	  The ordinal 30 could not be located in the dynamic link library MAPI32.dll
	
	When this behavior occurs, Microsoft Fax functionality is also disabled.
	
	CAUSE
	=====
	
	This behavior can occur if Outlook Express is installed on your computer and the
	"Make Outlook Express my default Simple MAPI client" check box is selected.
	
	RESOLUTION
	==========
	
	To resolve this issue, clear the "Make Outlook Express my default Simple MAPI
	client" check box. To do so, follow these steps:
	
	1. In Outlook Express, click Options on the Tools menu.
	
	2. On the General tab, click the "Make Outlook Express my default Simple MAPI
	  client" check box to clear it.
	
	3. Click OK, and then click OK.
	
	MORE INFORMATION
	================
	
	The following message is displayed when you click the "Make Outlook Express my
	default Simple MAPI client" check box to select it:
	
	  Enabling Outlook Express as your Simple MAPI provider will allow you
	  to send documents from other programs using the Send command on the
	  File menu. You should do this if Outlook Express is the only mail
	  program you use.
	
	  Other MAPI-enabled applications such as Microsoft Exchange, Microsoft
	  Outlook and Windows Messaging will be disabled if you make Outlook
	  Express your Simple MAPI client, but they will work again when you
	  deselect this option.
	
	  Are you sure you want to set Outlook Express as your Simple MAPI
	  client?
	
	If you click Yes, you cannot start Microsoft Exchange.
	
	
	Additional query words: cannot unable open
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	
	=============================================================================
	

{% endraw %}
