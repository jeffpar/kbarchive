---
layout: page
title: "Q129873: Why Property Pages Might Be Missing on OLE Controls"
permalink: /kb/129/Q129873/
---

## Q129873: Why Property Pages Might Be Missing on OLE Controls

	Article: Q129873
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes what property pages are and suggests diagnostics for
	situations where a property page for a particular OLE control (.OCX file) might
	not appear.
	
	MORE INFORMATION
	================
	
	Property pages are the interface through which a control's properties may be
	viewed and/or edited at design time. Each related set of properties appears in
	its own property page. To see them, right-click the OCX at design time, and
	choose Properties from the Context menu.
	
	There are two kinds of property pages, Custom and Stock. Custom property pages
	are those that need to be defined by you, the developer. Stock property pages
	(like Colors, Pictures, and Fonts) are already supplied by the control
	development kit (CDK).
	
	Property pages are objects too. Each type of property page defines a new OLE
	class and has a CLSID (class identifier) assigned to it. Thus, property pages
	for OLE controls rely on the system registry. If a system registry entry for a
	property page is missing for some reason, that property page is no longer
	accessible. While this will not cause any errors, the property page will always
	be invisible.
	
	For custom property pages, this problem can be fixed by re-registering the OCX.
	This can be done by choosing Custom Controls from the Tools menu, browsing to
	find the control, and then selecting the appropriate .OCX file.
	
	Standard property pages are provided by OC30.DLL for the 32-bit Visual Basic and
	OC25.DLL for 16-bit Visual Basic. If the registry entries for these DLLs are
	missing, then these property pages will be missing for all controls that use
	them. To re-register these DLLs, reinstall Visual Basic version 4.0.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
