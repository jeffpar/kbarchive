---
layout: page
title: "Q190207: INFO: Satellite DLL Directory Search Patterns"
permalink: /kb/190/Q190207/
---

## Q190207: INFO: Satellite DLL Directory Search Patterns

{% raw %}

	Article: Q190207
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Add-Ins for Microsoft Visual Basic may use satellite DLLs that contain resources
	such as localization information. This article describes the search patterns
	used by an Add-In to locate the satellite DLL.
	
	MORE INFORMATION
	================
	
	When loading an Add-In, Microsoft Visual Basic attempts to look for a Satellite
	DLL in the following order:
	
	1. <Path To Add-In>\Resources\<LocaleID>
	
	  The LocaleID identifies the locale language that the current Operating System
	  is running under. Visual Basic will look for a satellite DLL first in the
	  LocaleID directory.
	
	2. <Path To Add-In>\Resources\1033
	
	  Visual Basic will search for an English directory (1033 is the LocaleID for
	  Standard English).
	
	3. <Path To Add-In>\
	
	  The directory where the Add-In is installed will be searched last.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190193 HOWTO: Use a Satellite DLL to Localize an Add-In
	
	For more information about LocaleID, refer to "Language Identifiers and Locales"
	in the MSDN.
	
	Additional query words: kbDSupport KBDSS kbVBp kbVBp600 kbAddIn
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
