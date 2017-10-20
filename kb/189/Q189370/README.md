---
layout: page
title: "Q189370: PPT7: Files Installed by the PowerPoint 97 to 95 Translator"
permalink: /kb/189/Q189370/
---

## Q189370: PPT7: Files Installed by the PowerPoint 97 to 95 Translator

{% raw %}

	Article: Q189370
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbdiskdir kbdir
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the files, folders, and registry entries that are created
	when you install the Microsoft PowerPoint 97 Converter for PowerPoint 95 version
	4.97.10.1600 (Pp8to7.exe). The Pp8to7.exe file is a self-extracting,
	self-installing program. It is available in the Microsoft Download Center. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q143504 PPT7: Translator for Opening PowerPoint 97 Files
	
	MORE INFORMATION
	================
	
	The PowerPoint 97 Converter for PowerPoint 95 installs the following folders and
	files:
	
	Folders
	-------
	
	  C:\MSOffice\Powerpnt\PP95
	  C:\MSOffice\Powerpnt\PP95\Xlators
	
	Files
	-----
	
	  Path and File Name                                 Size (KB)   Date
	
	  C:\MSOffice\Powerpnt\PP95\Xlators\Pp8trans32.dll   212         10-13-97
	  C:\MSOffice\Powerpnt\PP95\Xlators\README.txt         2         10-13-97
	  C:\WIN95\INF\PP8to7.inf                              7         10-16-97
	  C:\WIN95\MSAPPS\GRPHFLT\Jpegimp32.flt (updated)     16         10-13-97
	  C:\WIN95\MSAPPS\GRPHFLT\Pictim32.flt                80         10-13-97
	  C:\WIN95\MSAPPS\GRPHFLT\Png32.flt                  218         10-13-97
	  C:\WIN95\SYSTEM\cfgmgr32.dll                        27         10-14-97
	  C:\WIN95\SYSTEM\setupapi.dll                        32         10-14-97
	
	Registry Entries
	----------------
	
	The PowerPoint 97 Converter for PowerPoint 95 adds the following registry keys:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\PowerPoint\7.0
	  \Translators\Import\pp8trans32
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Graphics Filters
	  \Import\PNG
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Graphics Filters
	  \Import\PNG\Filter API
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Graphics Filters
	  \Import\PNG\Image API
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Graphics Filters
	  \Import\PNG\Options
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall
	  \PP8to7
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q143504 PPT7: Translator for Opening PowerPoint 97 Files
	
	  Q158285 PPT: How to Open PowerPoint 97 Files in Earlier Versions
	
	Additional query words: pp8to7 exe translator power point installed ppt95 ppt97
	
	======================================================================
	Keywords          : kbdiskdir kbdir 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
