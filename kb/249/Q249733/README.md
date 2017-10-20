---
layout: page
title: "Q249733: XCLN: .xnk Shortcuts Not Working in Outlook 2000 Folder"
permalink: /kb/249/Q249733/
---

## Q249733: XCLN: .xnk Shortcuts Not Working in Outlook 2000 Folder

{% raw %}

	Article: Q249733
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Under Microsoft Windows 2000, Outlook 2000 may not correctly run Outlook Folder
	Shortcut files (*.xnk) that have been dragged into an Outlook Folder in the left
	side tree-view control.
	
	In this situation, when you double-click on the .xnk shortcut, you receive two
	error messages:
	
	  Cannot start Microsoft Outlook. A dialog box is open. Close it and try again.
	
	  -and-
	
	  Outlook could not track the program used to open this document. Any changes
	  you make to the document may not be saved to the original document.
	
	CAUSE
	=====
	
	Each error message comes from a separate instance of Outlook. Simply put, the
	calling process can't track the spawned process, goes modal to report the error,
	and in the process of doing so, blocks the other process that was actually
	successfully created.
	
	This error is caused by the way that Outlook attempts to track the process, and
	also by the manner in which Windows 2000 handles a ShellExecute call on these
	shortcuts. Because of the implementation used, Windows 2000 does not fill in the
	hProcess member of the SHELLEXECUTEINFO structure returning from ShellExecuteEx.
	This is normal behavior for Windows 2000, because the call transfers internally
	through Dynamic Data Exchange (DDE). Outlook expects the hProcess member to be
	filled in, and when it is not, Outlook reports that it was unable to track the
	process. When the modal error report dialog box opens, Outlook enters a modal
	state, and the newly spawned Outlook instance is unable to continue because it
	must communicate with the parent instance upon startup.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	You must create a new registry value of the REG_EXPAND_SZ type underneath the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\9.0\Outlook
	
	Name the registry value NonTrackableFileTypes, and change the value to
	".lnk;.exe;.url;.xnk;".
	Outlook uses a default value that is similar to this value, but which does not
	include the .xnk file type. This new registry key prevents Outlook from trying
	to track the created process of .xnk shortcut files.
	
	
	Additional query words: OL2K
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
