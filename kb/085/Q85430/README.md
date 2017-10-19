---
layout: page
title: "Q85430: DOC: Private Data Formats Freed by the Clipboard"
permalink: /kb/085/Q85430/
---

## Q85430: DOC: Private Data Formats Freed by the Clipboard

	Article: Q85430
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbClipboard kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the SetClipboardData function on pages 826-828 of the
	"Microsoft Windows Software Development Kit: Programmer's Reference, Volume 2:
	Functions" manual states that data placed on the clipboard in a private data
	format is not automatically freed when removed from the clipboard. The
	identifiers for private data formats are in the range CF_PRIVATEFIRST through
	CF_PRIVATELAST. The statement in the manual is incorrect. Data that is placed on
	the clipboard in a private format is automatically freed when the data is
	removed from the clipboard.
	
	MORE INFORMATION
	================
	
	Clipboard data in a private data format is automatically freed when the data is
	removed from the clipboard. Windows sends the WM_DESTROYCLIPBOARD message to the
	application that put the data on the clipboard before the data is freed. An
	application can free any corresponding internal data when it receives the
	WM_DESTROYCLIPBOARD message.
	
	Private data in the CF_OWNERDISPLAY format is not automatically freed when the
	data is removed from the clipboard. An application must free data of this format
	when the application receives a WM_DESTROYCLIPBOARD message.
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbClipboard kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
