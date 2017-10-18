---
layout: page
title: "Q221564: HOWTO: Uninstall Visual SourceSafe 6.0"
permalink: kb/221/Q221564/
---

## Q221564: HOWTO: Uninstall Visual SourceSafe 6.0

	Article: Q221564
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to completely remove Microsoft Visual SourceSafe
	version 6.0 from your computer.
	
	MORE INFORMATION
	================
	
	The best way to remove a stand-alone installation of Visual SourceSafe 6.0 is to
	use the Add/Remove Programs tool in Control Panel. This will remove most of the
	Visual SourceSafe components from your computer as well as all the registry
	entries created during installation.
	
	Also use the Add/Remove Programs tool in Control Panel to remove Visual
	SourceSafe from a Visual Studio 6.0 Enterprise installation. However, you begin
	this removal process by choosing Visual Studio 6.0 Enterprise Edition in the
	Add/Remove Programs dialog window.
	
	NOTE: Simply deleting the Visual SourceSafe folder from your computer will not
	remove related registry entries. Allowing these to remain can cause problems
	with other applications, especially those that were integrated with Visual
	SourceSafe.
	
	To completely remove Visual SourceSafe 6.0 from your computer:
	
	1. Remove the application using the Add/Remove Programs tool in Control Panel.
	  If Visual SourceSafe was installed through the Visual Studio 6.0 component
	  selection dialog box, you must clear the Visual SourceSafe checkbox first,
	  and then continue with the installation process. It will register that you
	  have made a change to the Visual Studio 6.0 installation and will continue
	  with the uninstall of Visual SourceSafe.
	
	2. NOTE: This step will delete your old database, so make a backup copy of any
	  data you want to keep before you proceed.
	
	  Delete the remaining SourceSafe items from your computer by deleting the
	  Visual SourceSafe folder and its contents.
	
	3. Empty the Recycle Bin.
	
	  You must empty the Recycle Bin if you plan to reinstall Visual SourceSafe
	  after you've removed it from your system. If you delete the Visual SourceSafe
	  folder from your machine but forget to empty the Recycle Bin, the
	  installation program will locate the deleted Visual SourceSafe folder in the
	  Recycle Bin and treat it as an installed version of Visual SourceSafe.
	
	IMPORTANT: If you are removing, then reinstalling Visual SourceSafe to fix a
	problem with the way the application is operating, be sure to back up the
	database prior to performing this procedure to minimize the possibility of
	losing critical data.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q221175 INFO: Visual SourceSafe 6 Installation Creates Registry Entries
	
	Additional query words: Setup Install Visual Studio ssafe
	
	======================================================================
	Keywords          : kbsetup kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
