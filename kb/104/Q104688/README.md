---
layout: page
title: "Q104688: PC Win: File Associations for WordPerfect Attachments"
permalink: /kb/104/Q104688/
---

## Q104688: PC Win: File Associations for WordPerfect Attachments

{% raw %}

	Article: Q104688
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up WordPerfect version 5.1 or 5.2 for Windows, WordPerfect does not
	correctly add a file association under Microsoft Windows. As a result, versions
	3.0, 3.0b, and 3.2 of Microsoft Mail for Windows does not receive or send
	attachments correctly.
	
	By default, WordPerfect for Windows does not establish extensions for its files.
	The result of this is that you are not able to attach files, nor can you see the
	WordPerfect icon. Instead, you will see a document icon with a folded
	upper-right corner and the document name below it.
	
	When you try to open the file, the following error message is displayed in a
	dialog box labeled Microsoft Mail:
	
	  Stop. The application for the attached file <filename> (or one of its
	  components) could not be found.
	
	CAUSE
	=====
	
	The error is not from Mail for Windows, but is the result of the WordPerfect for
	Windows file not having any association within Windows.
	
	RESOLUTION
	==========
	
	The following are two methods to establish an association for WordPerfect for
	Windows files:
	
	Method 1
	--------
	
	1. Using any ASCII editor, open the WIN.INI file.
	
	2. Find the [Extensions] section.
	
	3. Using one of the default entries as a template, add the new WordPerfect
	  extension.
	
	4. Close Windows and restart to force a reread of the WIN.INI.
	
	Method 2
	--------
	
	1. From File Manager, select the file with the desired extension.
	
	2. From the File menu, choose Associate.
	
	3. Either choose the program from the list box or use the Browse feature to find
	  WPWIN.EXE.
	
	NOTE: Method 2 automatically makes the WIN.INI entry and the registration
	database modifications without the need to close and restart Windows.
	
	You need to complete one of the above methods at every workstation where you want
	this feature. When you have finished establishing an association for WordPerfect
	for Windows files, users attaching or receiving WordPerfect documents with the
	appropriate extensions will see the WordPerfect for Windows icon.
	
	MORE INFORMATION
	================
	
	To successfully use the Object Linking and Embedding (OLE) feature of Mail for
	Windows, Windows must have a file association to work with. It is important to
	understand that Windows cannot associate a file whose filename does not have a
	three-letter extension.
	
	Administrators can choose any number of file associations, within the limits of
	the WIN.INI file size, according to your needs. Once these associations are
	chosen, you need to add them to the Windows WIN.INI file.
	
	WordPerfect for Windows is manufactured by WordPerfect Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
