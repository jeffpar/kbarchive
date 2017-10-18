---
layout: page
title: "Q140333: HOWTO: Add an Object to the New Object List"
permalink: kb/140/Q140333/
---

## Q140333: HOWTO: Add an Object to the New Object List

	Article: Q140333
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	This article describes how to add an object to the list of objects that appears
	when you click the File menu in Windows Explorer and then point to New, or when
	you point to New on a context menu.
	
	MORE INFORMATION
	================
	
	A context menu is displayed when you use the right mouse button to click an
	object in Windows 95. For example, if you use the right mouse button to click
	the desktop, a menu is displayed that contains several commands. You can choose
	one of these commands by clicking the command on the context menu.
	
	One of the commands on the context menu that appears when you use the right mouse
	button to click the desktop is the New command. This command appears on many
	other context menus, and also on the File menu in Windows Explorer. If you point
	to the New command on one of these menus, a list of objects appears. You can
	create a new object by clicking one of the objects on this list.
	
	To add an object to the list of objects, follow these steps:
	
	1. Start the program that is used to create the type of object you want to add
	  to the object list, and then save a blank or empty object in the
	  Windows\Shellnew folder. For example, if you want to add Microsoft Word for
	  Windows documents to the object list, start Word for Windows, and then save
	  an empty Word for Windows document in the Windows\Shellnew folder.
	
	  NOTE: The Windows\Shellnew folder already contains some objects that are
	  created by commonly used programs. For example, the Winword.doc file found in
	  the Windows\Shellnew folder is a blank Word for Windows document. If the type
	  of object that you want to add to the object list is already in the
	  Windows\Shellnew folder, you can skip step 1 and proceed to step 2.
	
	2. NOTE: For information about how to edit the registry, view the Changing Keys
	  And Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	  Create a new registry key called "Shellnew" (without the quotation marks)
	  under the following registry key
	
	  Hkey_Classes_Root\<.ext>
	
	  where <.ext> is the default file extension used for the type of object
	  you want to add to the object list. For example, if you want to add Word for
	  Windows documents to the object list, add a new registry key called
	  "Shellnew" under the following registry key:
	
	  Hkey_Classes_Root\.doc
	
	3. Create a new string value called "Filename" (without the quotation marks)
	  under the registry key that you created in step 3.
	
	4. Modify the Filename registry value that you created in step 4 so that it is
	  assigned the following value
	
	  c:\<windows>\shellnew\<object>
	
	  where <windows> is the Windows folder, and <object> is the blank
	  or empty object that you saved to the Windows\Shellnew folder in step 1.
	
	NOTE: You do not need to restart your computer for the new object to appear in
	the object list.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
