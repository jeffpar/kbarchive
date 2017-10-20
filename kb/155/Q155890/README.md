---
layout: page
title: "Q155890: PRB: FoxPro for Mac's Setup Wizard Can't Copy Source Files"
permalink: /kb/155/Q155890/
---

## Q155890: PRB: FoxPro for Mac's Setup Wizard Can't Copy Source Files

{% raw %}

	Article: Q155890
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you click the Finish button in the Visual FoxPro for Macintosh Setup
	Wizard, a WAIT WINDOW appears with the message "Copying the source code
	files..." followed by the following error message:
	
	  The Setup Wizard was unable to make a copy of your source files. Setup
	  terminated.
	
	A copy of the source files is not made.
	
	CAUSE
	=====
	
	This error may occur because the Finder Scripting Extension is not loaded or the
	Power PC Modern Memory Manager is not ON.
	
	RESOLUTION
	==========
	
	Load the Finder Scripting Extension. If you are using System 7.5, it might be
	disabled in the Extensions Manager Control Panel. If you are using System 7.1.2,
	obtain a copy of the Finder Scripting Extension from a System 7.5 install or
	download it from Apple's Web site.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Setup Wizard uses AppleScript to tell the Finder to make a copy of the
	source code files. If the Finder Scripting Extension is not loaded, the Setup
	Wizard cannot communicate this to the Finder.
	
	The Finder Scripting Extension is installed with the System 7.5 versions of the
	Macintosh System Software. It is not supplied or installed with System 7.1.2.
	Therefore, the Visual FoxPro Setup Wizard does not run under System 7.1.2 unless
	you place the Finder Scripting Extension in the System:Extensions folder.
	
	For Visual FoxPro users who are still running System 7.1.2, you can download the
	Finder Scripting Extension from the Apple Web site. You should use version 1.2
	of the Finder Scripting Extension. Apple included version 1.1 of the Finder
	Scripting Extension with AppleScript 1.1.
	
	You can find the (http://support.microsoft.com/download/support/mslfiles/the)
	Finder Scripting Extension in the following location on the Apple Web site. This
	information is subject to change, however. Apple recommends you not bookmark the
	page.
	
	Connect to http://www.apple.com. Choose Customer Support, then Apple Software
	Updates Archive from the next page. From the Apple Software Updates page choose
	US, then Macintosh, then System, and then Other System.
	
	NOTE: This error may also be caused by running a product called "Mac User's Hide
	Always." "Hide Always" can hide the finder. You can either disable "Hide Always"
	or prevent it from hiding the finder.
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
