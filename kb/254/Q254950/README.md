---
layout: page
title: "Q254950: Shortcuts and .lnk Files Do Not Work in Windows NT Workstation"
permalink: /kb/254/Q254950/
---

## Q254950: Shortcuts and .lnk Files Do Not Work in Windows NT Workstation

{% raw %}

	Article: Q254950
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	There are several locations in the registry that are responsible for causing
	shortcuts to work correctly. If any of these keys becomes corrupted or is
	missing, shortcuts may not work or may work erratically.
	
	CAUSE
	=====
	
	These problems can be caused by shutting down Windows improperly, or by a
	third-party program that modifies the registry.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Create a text file with the following contents. Save the text file with a .reg
	extension (not the default .txt extension for text files). Double-clicking this
	file will restore the default registry key settings for .lnk files. When you
	double-click the file, you are prompted to verify that you want to make the
	changes to the registry. Click Yes.
	
	Contents of the .reg File
	-------------------------
	
	REGEDIT4
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00021401-0000-0000-C000-000000000046}]
	@="Shortcut"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00021401-0000-0000-C000-000000000046}\InProcServer32]
	@="shell32.dll"
	"ThreadingModel"="Apartment"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00021401-0000-0000-C000-000000000046}\ProgID]
	@="lnkfile"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00021401-0000-0000-C000-000000000046}\shellex]
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00021401-0000-0000-C000-000000000046}\shellex\MayChangeDefaultMenu]
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Approved]
	
	"{500202A0-731E-11D0-B829-00C04FD706EC}"="LNK file thumbnail interface delegator"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Shell.ThumbnailExtract.Lnk.1]
	@="LNK file thumbnail interface delegator"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Shell.ThumbnailExtract.Lnk.1\CLSID]
	@="{500202A0-731E-11D0-B829-00C04FD706EC}"
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}]
	@="LNK file thumbnail interface delegator"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}\InprocServer32]
	@="C:\\WINNT\\System32\\thumbvw.dll"
	"ThreadingModel"="Apartment"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}\ProgID]
	@="Shell.ThumbnailExtract.Lnk.1"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}\VersionIndependentProgID]
	@="Shell.ThumbnailExtract.Lnk.1"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\lnkfile]
	@="Shortcut"
	"EditFlags"=hex:01,00,00,00
	"IsShortcut"=""
	"NeverShowExt"=""
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\lnkfile\CLSID]
	@="{00021401-0000-0000-C000-000000000046}"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\lnkfile\shellex]
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\lnkfile\shellex\ContextMenuHandlers]
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\lnkfile\shellex\ContextMenuHandlers\{00021401-0000-0000-C000-000000000046}]
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\lnkfile\shellex\DropHandler]
	@="{00021401-0000-0000-C000-000000000046}"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\lnkfile\shellex\IconHandler]
	@="{00021401-0000-0000-C000-000000000046}"
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.lnk]
	@="lnkfile"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.lnk\ShellEx]
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.lnk\ShellEx\{BB2E617C-0920-11d1-9A0B-00C04FC2D6C1}]
	@="{500202A0-731E-11d0-B829-00C04FD706EC}"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.lnk\ShellNew]
	"Command"="RunDLL32 AppWiz.Cpl,NewLinkHere %1"
	
	[HKEY_CLASSES_ROOT\Shell.ThumbnailExtract.Lnk.1]
	@="LNK file thumbnail interface delegator"
	
	[HKEY_CLASSES_ROOT\Shell.ThumbnailExtract.Lnk.1\CLSID]
	@="{500202A0-731E-11D0-B829-00C04FD706EC}"
	
	[HKEY_CLASSES_ROOT\lnkfile]
	@="Shortcut"
	"EditFlags"=hex:01,00,00,00
	"IsShortcut"=""
	"NeverShowExt"=""
	
	[HKEY_CLASSES_ROOT\lnkfile\CLSID]
	@="{00021401-0000-0000-C000-000000000046}"
	
	[HKEY_CLASSES_ROOT\lnkfile\shellex]
	
	[HKEY_CLASSES_ROOT\lnkfile\shellex\ContextMenuHandlers]
	
	[HKEY_CLASSES_ROOT\lnkfile\shellex\ContextMenuHandlers\{00021401-0000-0000-C000-000000000046}]
	
	[HKEY_CLASSES_ROOT\lnkfile\shellex\DropHandler]
	@="{00021401-0000-0000-C000-000000000046}"
	
	[HKEY_CLASSES_ROOT\lnkfile\shellex\IconHandler]
	@="{00021401-0000-0000-C000-000000000046}"
	
	[HKEY_CLASSES_ROOT\CLSID\{00021401-0000-0000-C000-000000000046}]
	@="Shortcut"
	
	[HKEY_CLASSES_ROOT\CLSID\{00021401-0000-0000-C000-000000000046}\InProcServer32]
	@="shell32.dll"
	"ThreadingModel"="Apartment"
	
	[HKEY_CLASSES_ROOT\CLSID\{00021401-0000-0000-C000-000000000046}\ProgID]
	@="lnkfile"
	
	[HKEY_CLASSES_ROOT\CLSID\{00021401-0000-0000-C000-000000000046}\shellex]
	
	[HKEY_CLASSES_ROOT\CLSID\{00021401-0000-0000-C000-000000000046}\shellex\MayChangeDefaultMenu]
	
	[HKEY_CLASSES_ROOT\.lnk]
	@="lnkfile"
	
	[HKEY_CLASSES_ROOT\.lnk\ShellEx]
	
	[HKEY_CLASSES_ROOT\.lnk\ShellEx\{BB2E617C-0920-11d1-9A0B-00C04FC2D6C1}]
	@="{500202A0-731E-11d0-B829-00C04FD706EC}"
	
	[HKEY_CLASSES_ROOT\.lnk\ShellNew]
	"Command"="RunDLL32 AppWiz.Cpl,NewLinkHere %1"
	
	[HKEY_CLASSES_ROOT\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}]
	@="LNK file thumbnail interface delegator"
	
	[HKEY_CLASSES_ROOT\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}\InprocServer32]
	@="C:\\WINNT\\System32\\thumbvw.dll"
	"ThreadingModel"="Apartment"
	
	[HKEY_CLASSES_ROOT\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}\ProgID]
	@="Shell.ThumbnailExtract.Lnk.1"
	
	[HKEY_CLASSES_ROOT\CLSID\{500202A0-731E-11D0-B829-00C04FD706EC}\VersionIndependentProgID]
	@="Shell.ThumbnailExtract.Lnk.1"
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
