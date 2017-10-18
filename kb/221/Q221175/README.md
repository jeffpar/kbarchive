---
layout: page
title: "Q221175: INFO: Visual SourceSafe 6 Installation Creates Registry Entries"
permalink: kb/221/Q221175/
---

## Q221175: INFO: Visual SourceSafe 6 Installation Creates Registry Entries

	Article: Q221175
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a list of the registry entries created by the installation
	of Microsoft Visual SourceSafe 6.0.
	
	When Visual SourceSafe 6.0 is removed using the Add/Remove tool in Control Panel,
	all of these registry settings are removed. To verify that they have been
	removed:
	
	1. On the Start menu, click Run.
	
	2. Type regedit in the Open: text box.
	
	3. Click OK.
	
	Microsoft does not recommend that you modify the registry. Using Registry Editor
	incorrectly can cause serious problems that may require you to reinstall your
	operating system. Microsoft cannot guarantee that problems resulting from the
	incorrect use of Registry Editor can be solved. Use Registry Editor at your own
	risk.
	
	MORE INFORMATION
	================
	
	The following registry entries are created by Visual SourceSafe 6.0
	installation:
	
	[HKEY_CLASSES_ROOT\CLSID\{2F998FDA-3487-11CE-BCB6-00AA00688899}]
	@="Source Code Control Add-In"
	
	[HKEY_CLASSES_ROOT\CLSID\{2F998FDA-3487-11CE-BCB6-00AA00688899}\InProcServer32]
	@="<Product Path>\win32\ssvb.dll"
	
	[HKEY_CLASSES_ROOT\CLSID\{2F998FDA-3487-11CE-BCB6-00AA00688899}\ProgID]
	@="SccAddIn.SourceCodeControlAddIn.1"
	
	[HKEY_CLASSES_ROOT\CLSID\{2F998FDA-3487-11CE-BCB6-00AA00688899}\VersionIndependentProgID]
	@="SccAddIn.SourceCodeControlAddIn"
	
	[HKEY_CLASSES_ROOT\Scc.Status.File]
	@="Microsoft SourceSafe Status" DefaultIcon="<path>\win32\ssexp.exe, 0"
	
	[HKEY_CLASSES_ROOT\SccAddIn.SourceCodeControlAddIn]
	@="Source Code Control Add-In"
	
	[HKEY_CLASSES_ROOT\SccAddIn.SourceCodeControlAddIn\CLSID]
	@="{2F998FDA-3487-11CE-BCB6-00AA00688899}"
	
	[HKEY_CLASSES_ROOT\SccAddIn.SourceCodeControlAddIn.1]
	@="Source Code Control Add-In"
	
	[HKEY_CLASSES_ROOT\SccAddIn.SourceCodeControlAddIn.1\CLSID]
	@="{2F998FDA-3487-11CE-BCB6-00AA00688899}"
	
	[HKEY_CLASSES_ROOT\SourceSafe]
	@="Microsoft Visual SourceSafe Automation"
	
	[HKEY_CLASSES_ROOT\SourceSafe\CLSID]
	@="783CD4E4-9D54-11CF-B8EE-00608CC9A71F"
	
	[HKEY_CLASSES_ROOT\SourceSafe\CurVer]
	@="SourceSafe.0"
	
	[HKEY_CLASSES_ROOT\SourceSafe.0]
	@="Microsoft Visual SourceSafe Automation"
	
	[HKEY_CLASSES_ROOT\SourceSafe.0\CLSID]
	@="783CD4E4-9D54-11CF-B8EE-00608CC9A71F"
	
	[HKEY_CLASSES_ROOT\VisualSourceSafe\DefaultIcon]
	@="<Product Path>\\win32\\ssexp.exe.dll,0"
	
	[HKEY_CURRENT_USER\Software\Microsoft\Developer\Source Control]
	"AllowStatusUpdates"="REG_DWORD:0"
	
	[HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0\Source Control]
	"AllowStatusUpdates"="REG_DWORD:0"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MS Setup (ACME)\Table Files]
	Microsoft Visual SourceSafe@v6.0.0.0.0522 (1033) = <Product
	Path>\setup\win32\1033\setup.stf
	
	[HKEY_LOCAL_MACHINE\Software\Microsoft\SourceSafe]
	APICurrentDatabase=<Product Path>
	PromptForConnect=REG_DWORD:1
	SCCServerName = Microsoft Visual SourceSafe
	SCCServerPath = <Product Path>\win32\ssscc.dll
	
	[HKEY_LOCAL_MACHINE\Software\SourceCodeControlProvider]
	ProviderRegKey = Software\Microsoft\SourceSafe
	
	[HKEY_LOCAL_MACHINE\Software\SourceCodeControlProvider\InstalledSCCProviders]
	Microsoft Visual SourceSafe = Software\Microsoft\SourceSafe
	
	Additional query words: Install RegEdit
	
	======================================================================
	Keywords          : kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
