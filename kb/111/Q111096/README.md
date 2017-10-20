---
layout: page
title: "Q111096: BUG: Size of Owner-Draw Drop-Down Combo Box in Dialog Is Wrong"
permalink: /kb/111/Q111096/
---

## Q111096: BUG: Size of Owner-Draw Drop-Down Combo Box in Dialog Is Wrong

{% raw %}

	Article: Q111096
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbComboBox kbCtrl kbGrpDSUser kbOSWin310bug
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating an owner-draw drop-down combo box in a dialog box, the size of the
	static portion is not the same as a non-owner-draw combo box in the same dialog
	box. WM_MEASUREITEM is not being processed, and therefore the size of the
	owner-draw combo box and non-owner-draw combo box should be the same.
	
	CAUSE
	=====
	
	When creating a dialog box, the Dialog Manager determines how big the owner-
	draw combo box should be based on the system font. If you specify a font in your
	dialog box resource, this font should be used rather than the system font in
	determining the size of the controls. Unfortunately, the Dialog Manager uses the
	system font when determining the size of the static portion of an owner-draw
	combo box, regardless of whether a different font has been specified in the
	dialog box resource.
	
	RESOLUTION
	==========
	
	To circumvent this problem, process the WM_MEASUREITEM message, specifying the
	height of the items in your combo box. Windows correctly sizes the static
	portion when you handle the WM_MEASUREITEM message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words: combobox ownerdraw dropdown
	
	======================================================================
	Keywords          : kb16bitonly kbComboBox kbCtrl kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
