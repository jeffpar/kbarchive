---
layout: page
title: "Q86333: Odvhlb.exe Demos Owner-Draw Variable-Height List Box"
permalink: /kb/086/Q86333/
---

## Q86333: Odvhlb.exe Demos Owner-Draw Variable-Height List Box

	Article: Q86333
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Odvhlb.exe is a smaple in the Microsoft Download Center that demonstrates how to
	use an owner-draw variable-height list box in an application for the Microsoft
	Windows environment.
	
	In the ODVHLB application, the user can add a short string (one line of text),
	long string (two lines of text), or an icon to a list box. Because the list box
	has the LBS_MULTIPLESEL style, the user can select multiple items in the list
	box simultaneously.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Odvhlb.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To implement an owner-draw variable-height list box, an application must process
	the WM_MEASUREITEM and WM_DRAWITEM messages in the window procedure for the list
	box's parent window. When the list box has the LBS_OWNERDRAWVARIABLE style, the
	parent window receives a WM_MEASUREITEM and a WM_DRAWITEM message each time the
	application updates an item in the list box.
	
	When the parent of the list box receives a WM_MEASUREITEM message, lParam points
	to a MEASUREITEMSTRUCT data structure. The application must specify values for
	the itemHeight and itemWidth members of this structure to indicate how much
	space in the list box Windows must allocate for the item. Through the
	WM_MEASUREITEM message, the application can individually specify the height of
	each item in the list box.
	
	The parent of the list box receives a WM_DRAWITEM message when an item in the
	list box needs to be drawn. The lParam parameter points to a DRAWITEMSTRUCT data
	structure. The itemAction member indicates the required drawing action and
	itemState member indicates the visual state of the item. For example, when the
	itemAction member is ODA_SELECT and the itemState member has the ODS_SELECTED
	flag set, the selection state has changed and the item is gaining selection.
	Conversely, if the itemState member has the ODS_SELECTED flag clear, the item is
	losing selection.
	
	The itemData member of the DRAWITEMSTRUCT data structure identifies the item in
	the list box, either through a pointer to a string or a 32-bit identifier. An
	application specifies an appropriate identifier when it uses the LB_ADDSTRING or
	LB_INSERTSTRING message to add an item to the list box.
	
	Additional query words: listbox
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : :
	
	=============================================================================
	
