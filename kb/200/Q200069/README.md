---
layout: page
title: "Q200069: INFO: Russian and Portuguese MFC Resource Files Not Available"
permalink: kb/200/Q200069/
---

## Q200069: INFO: Russian and Portuguese MFC Resource Files Not Available

	Article: Q200069
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0,6.0 SP1, SP2,97,97sp1,97sp2,97sp3
	Operating System(s): 
	Keyword(s): kbIntl kbResource kbVC500 kbVC600 kbIntlDev
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio versions 6.0, 6.0 SP1, SP2, 97, 97sp1, 97sp2, 97sp3 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Localized MFC resources are available for most major international languages;
	however, MFC Wizards are not available for certain countries. Furthermore, the
	corresponding localization resource-only DLLs are not redistributable. It is
	possible, however, to target other national languages.
	
	MORE INFORMATION
	================
	
	For example, the Portuguese and Russian versions of MFC42 are not available in
	Visual Studio. Only the following languages are supported for MFC42 DLLs at the
	present time:
	
	- Chinese (Simplified)
	
	- Chinese (Traditional)
	
	- English
	
	- French
	
	- German
	
	- Italian
	
	- Japanese
	
	- Korean
	
	- Spanish
	
	The development team is currently considering supporting other languages; if that
	is the case, this article will be updated. Microsoft recommends that developers
	use the English version for languages that are not included in the above list.
	Other national languages can still be targeted, because the MFC42loc.dlls for
	those languages have been installed with updated localized target systems (that
	is, after installing the latest service packs under Microsoft Windows NT or the
	latest update to Microsoft Internet Explorer or Microsoft Office, under Windows
	95, or Windows 98). After being created, those resources should be marked with
	the appropriate language (and the strings translated as needed). Some manual
	editing of the resource compiler *.RC file might be needed in some cases.
	
	Additional query words: kbDSupport, mfc, russian, portuguese
	
	======================================================================
	Keywords          : kbIntl kbResource kbVC500 kbVC600 kbIntlDev 
	Technology        : kbVCsearch kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVS97 kbVS97SP1 kbVS97SP2 kbVS97SP3 kbVS600 kbVS97Search kbVS600Search kbVC500Search
	Version           : :5.0,6.0,6.0 SP1, SP2,97,97sp1,97sp2,97sp3
	Issue type        : kbinfo
	
	=============================================================================
	
