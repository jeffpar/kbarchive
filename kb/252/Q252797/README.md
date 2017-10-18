---
layout: page
title: "Q252797: XCLN: Extend Right-click Shortcut Menu for an Embedded Document"
permalink: kb/252/Q252797/
---

## Q252797: XCLN: Extend Right-click Shortcut Menu for an Embedded Document

	Article: Q252797
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In file folders, if you right-click a file, the shortcut menu that appears
	includes an available action to start the appropriate program (for example,
	Microsoft Excel, Microsoft Word, or Microsoft PowerPoint) to open that file. In
	Microsoft Exchange Client, however, you cannot modify the shortcut menus to
	include an allowable action that opens those programs. To start any program, you
	must first save the attachment, start the program, and then open the saved
	attachment, which requires more steps than using shortcut menus.
	
	CAUSE
	=====
	
	This feature was not available in Exchange Client.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Capone
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Wmsui32.dll | 5.0:1462.3 | 
	+--------------------------+
	
	NOTE: You need to perform the following steps to enable this feature:
	
	1. Add the following key to the registry, so that "Office Viewer" appears on the
	  shortcut menu when you right-click a file attachment:
	
	  [HKEY_CLASSES_ROOT\CLSID\{00020D05-0000-0000-C000-000000000046}\Verb\5]
	  @="O&ffice Viewer, 0, 2"
	
	2. To enable this command, add the following registry key:
	
	  [HKEY_CURRENT_USER\Software\Microsoft\Exchange\Client\Options]
	  "AllowCustomViewers"=dword:00000001
	
	When you right-click a file attachment that has an .xls, .doc, or .ppt extension,
	the Office Viewer shortcut menu appears. When you right-click any other file
	attachments, this shortcut menu does not appear.
	
	When you select an Office Viewer shortcut menu item, the corresponding program in
	the following registry keys starts. For example, you can use the applications
	themselves as follows:
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Excel\Viewer]
	  "Path"="C:\\Program Files\\Microsoft Office\\Office\\Excel.EXE"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\PowerPoint\Viewer]
	  "Path"="C:\\Program Files\\Microsoft Office\\Office\\Powerpnt.EXE"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Word\Viewer]
	  "Path"="C:\\Program Files\\Microsoft Office\\Office\\WinWord.EXE"
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
