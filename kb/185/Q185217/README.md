---
layout: page
title: "Q185217: Desktop Icons Appear As the Default Windows Icon"
permalink: kb/185/Q185217/
---

## Q185217: Desktop Icons Appear As the Default Windows Icon

	Article: Q185217
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you start your computer, you may notice that the following desktop icons
	now appear as the default Windows icon:
	
	- My Computer
	
	- Network Neighborhood
	
	- Recycle Bin
	
	- Inbox
	
	- Microsoft Outlook
	
	- Internet
	
	CAUSE
	=====
	
	This behavior can occur if you install, and then uninstall a program that has
	the capability of changing these desktop icons. If you uninstall this type of
	program, the icon files that are associated with these icons may no longer be
	present on your computer, and the desktop icons may revert to the default
	Windows icon.
	
	RESOLUTION
	==========
	
	To restore an altered desktop icon to the original desktop icon, use the
	appropriate method, and then restart your computer:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	My Computer Icon
	----------------
	
	Use Registry Editor to locate the following key in the registry, and then edit
	the default item's value data so that it is "explorer.exe,0" (without the
	quotation marks):
	
	  HKEY_CLASSES_ROOT\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\ 
	     DefaultIcon\ 
	
	  ab(default)  value=   explorer.exe,0
	
	Network Neighborhood Icon
	-------------------------
	
	Use Registry Editor to locate the following key in the registry, and then edit
	the default item's value data so that it is "shell32.dll,17" (without the
	quotation marks):
	
	  HKEY_CLASSES_ROOT\CLSID\{208D2C60-3AEA-1069-A2D7-08002B30309D}\ 
	     DefaultIcon\ 
	
	  ab(default)  value=   shell32.dll,17
	
	Recycle Bin Icon
	----------------
	
	Use Registry Editor to locate the following key in the registry, and then edit
	the default item's value data so that it is "shell32.dll,32" (without the
	quotation marks) . Also, edit the Empty item's value so that it is
	"shell32.dll,31" (without the quotation marks), and the Full item's value so
	that it is "shell32.dll,32" (without the quotation marks):
	
	  HKEY_CLASSES_ROOT\CLSID\{645FF040-5081-101B-9F08-00AA002F954E}\ 
	     DefaultIcon\ 
	
	  ab(default)  value=   shell32.dll,32
	  ab Empty     value=   shell32.dll,31
	  ab Full      value=   shell32.dll,32
	
	Inbox or Outlook Icon
	---------------------
	
	Use Registry Editor to locate the following key in the registry, and then edit
	the default item's value data so that it is "c:\exchange\exchang32.exe" (without
	the quotation marks):
	
	  HKEY_CLASSES_ROOT\CLSID\{00020D75-0000-0000-C000-000000000046}\ 
	     DefaultIcon\ 
	
	  ab(default)  value=   c:\exchange\exchng32.exe
	
	  NOTE: This is making the assumption that the Exchange folder contains
	  the Exchnge32.exe file. If this is not the case, make the appropriate
	  change to the path.
	
	The Internet Icon for Internet Explorer Version 4.0 or 4.01
	-----------------------------------------------------------
	
	Use Registry Editor to locate the following key in the registry, and then edit
	the default item's value data so that it is "c:\program files\internet Explorer\
	iexplore.exe,-32528" (without the quotation marks):
	
	  HKEY_CLASSES_ROOT\CLSID\{FBF23B42-E3F0-101B-8488-00AA003E56F8}\ 
	     DefaultIcon\ 
	
	 ab(default) value=C:\Program Files\Internet Explorer\iexplore.exe,-32528
	
	  NOTE: This is making the assumption that the Program Files\Internet
	  Explorer folder contains the Iexplore.exe file. If this is not the
	  case, make the appropriate change to the path.
	
	The Internet Icon for Internet Explorer Version 3.x
	---------------------------------------------------
	
	Use Registry Editor to locate the following key in the registry, and then edit
	the default item's value data so that it is "c:\Program Files\Internet Explorer\
	iexplore.exe,0" (without the quotation marks):
	
	  HKEY_CLASSES_ROOT\CLSID\{FBF23B42-E3F0-101B-8488-00AA003E56F8}\ 
	     DefaultIcon\ 
	
	  ab(default)  value= C:\Program Files\Internet Explorer\iexplore.exe,0"
	
	  NOTE: This is making the assumption that the Program Files\Internet
	  Explorer folder contains the Iexplore.exe file. If this is not the
	  case, make the appropriate change to the path.
	
	
	Additional query words: flag
	
	======================================================================
	Keywords          : kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
