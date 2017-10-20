---
layout: page
title: "Q134981: PRB: Directories &amp; Registry Entries Left After Deinstall"
permalink: /kb/134/Q134981/
---

## Q134981: PRB: Directories &amp; Registry Entries Left After Deinstall

{% raw %}

	Article: Q134981
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT, Windows version 3.1, and Windows for Workgroups, removing all
	Visual FoxPro files by using the Visual FoxPro Setup program does not remove the
	main Visual FoxPro directories and related subdirectories. Also, in Windows NT
	and Windows 95, registry information is not removed.
	
	CAUSE
	=====
	
	This is by design. The Visual FoxPro directory tree is not removed for safety
	reasons. Removing the directory tree could also delete user files and adding in
	the algorithm to check for user files versus FoxPro files would have added an
	additional level of complexity to the removal option.
	
	RESOLUTION
	==========
	
	After the removal process has completed, you can delete the directory where
	Visual FoxPro was installed by using File Manager.
	
	To remove the Registry entries in Windows 95 and Windows NT, you need to delete
	the Visual FoxPro key and all its subkeys by using the Registry Editor.
	Microsoft does not support the use of the Registry Editor, so you are urged to
	exercise extreme caution when working with the registry files. The Visual FoxPro
	registry entries are found in HKEY_CURRENT_USER on Local Machine in the
	Microsoft folder.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The README help file distributed with Visual FoxPro provides the following
	information. Note that the last sentence of the first paragraph is incorrect:
	
	  To remove Visual FoxPro from a hard disk in Windows for Workgroups or Windows
	  NT, double-click the Setup icon in the Visual FoxPro program group. Then
	  choose Remove All from the Visual FoxPro Setup dialog box. This process does
	  not remove user files.
	
	  CAUTION: Though the removal procedure offers several opportunities to keep
	  files or shared components, it offers no final warning before it starts to
	  delete all Visual FoxPro files. Press ESC to stop the removal process.
	
	Any user-created files stored in the Visual FoxPro installation directory are
	removed. To preserve these files, you must move them to a different directory
	location before running Setup.
	
	In Windows 95, this behavior is somewhat different in that the removal process
	does prompt for the deletion of the directory tree. This is done as part of the
	requirements for Windows 95 certification.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the Visual FoxPro Setup program contained in the Visual FoxPro program group,
	and choose Remove all. When the software has been removed, start the File
	Manager and verify that the directory where Visual FoxPro was installed is still
	present.
	
	Additional query words: 3.00 VFoxWin install deinstall
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
