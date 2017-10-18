---
layout: page
title: "Q156071: PRB: Launching .Exe File Returns &quot;Document Is Locked&quot; Error"
permalink: kb/156/Q156071/
---

## Q156071: PRB: Launching .Exe File Returns &quot;Document Is Locked&quot; Error

	Article: Q156071
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When launching an executable by double-clicking the file, the following error
	message appears:
	
	  The document <document name> is locked, so you will not be able to save
	  any changes. Do you want to open it anyway?
	
	  <Cancel> <OK>
	
	After the error message appears, you can click OK to start the executable.
	
	CAUSE
	=====
	
	The file is locked, usually at the Finder level.
	
	WORKAROUND
	==========
	
	1. Select the document at the Finder level.
	
	2. From the File menu, choose Get Info, or press Command+I.
	
	3. Deselect the Locked option (in the lower left corner), and close the Get Info
	  dialog box.
	
	NOTE: If a Word for Macintosh document locks in a similar manner and you
	double-click the document, the same error message returns.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro for Macintosh 3.0b the executable file is a Microsoft FoxPro
	document instead of an application program as it is in FoxPro for Macintosh 2.6.
	Therefore, it depends on the Visual FoxPro Support Library as its application.
	
	For multi-user applications, the Visual FoxPro for Macintosh Support Library
	should be locked instead of the executable file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual FoxPro for Macintosh 3.0 executable file.
	
	2. Go to the Finder, and select the executable file.
	
	3. From the File menu, choose Get Info and check the Locked box. Close the Get
	  Info dialog box.
	
	4. Double-click the executable file.
	
	Additional query words: kbdsd VFoxMac
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
