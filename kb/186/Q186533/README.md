---
layout: page
title: "Q186533: Allowing Users to Select an E-Mail Editor For Outlook 97"
permalink: /kb/186/Q186533/
---

## Q186533: Allowing Users to Select an E-Mail Editor For Outlook 97

{% raw %}

	Article: Q186533
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Terminal Server Clients cannot select an alternate e-mail editor for use with
	Microsoft Outlook 97.
	
	CAUSE
	=====
	
	When Microsoft Office 97 is installed in install mode, the following registry
	key is created if Micorosoft Word is selected as the e-mail editor:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Citrix\Install\Software\Microsoft
	  \Office\8.0\Word\Options\OutlookEditor
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	When the system is returned to execute mode, this key is replicated to each new
	Outlook 97 user's profile under the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word
	  \Options\OutlookEditor
	
	Normally, the OutlookEditor key exists only in HKEY_CURRENT_USER when the option
	"Use Microsoft Word as the e-mail editor" is selected. When this option is not
	selected, the OutlookEditor key is removed by Outlook 97 from the user's profile
	(HKEY_CURRENT_USER). In Terminal Server, because the key also exists in
	HKEY_LOCAL_MACHINE, it will continually replicate to each user's
	HKEY_CURRENT_USER key, erasing the user's editor choice.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this problem, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Citrix\Install\Software\Microsoft
	     \Office\8.0\Word\Options\OutlookEditor
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Select the OutlookEditor key, and from the Edit menu, click Delete.
	
	Deleting this key allows each Terminal Server Client user to determine a
	preferred editor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
