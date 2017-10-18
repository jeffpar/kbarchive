---
layout: page
title: "Q163704: ACC97: Some Access Commands Don't Prompt to Check Out VSS Module"
permalink: kb/163/Q163704/
---

## Q163704: ACC97: Some Access Commands Don't Prompt to Check Out VSS Module

	Article: Q163704
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you open a module from the Debug window, from the Object Browser, or with
	the Find or Replace commands on the Edit menu, Microsoft Access does not prompt
	you to check out the module, and you cannot save your changes.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or the Help topics
	available from the Visual SourceSafe Help menu.
	
	RESOLUTION
	==========
	
	Check out any object in your database before you make changes to it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 97. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database and add it to Microsoft Visual SourceSafe.
	
	2. Create a module and type the following procedure:
	
	        Function NoCheckOut()
	           Msgbox "Hello"
	        End Function
	
	3. Save the module as VSSTest and add it to SourceSafe.
	
	4. Press CTRL+G to open the Debug window.
	
	5. In the Debug window, type NoCheckOut, and then press SHIFT+F2. The VSSTest
	  module opens in Design view, but Microsoft Access does not prompt you to
	  check it out.
	
	6. Type the following comment in the module: ' This is a test.
	
	7. Note that the Save icon on the toolbar and the Save command on the File menu
	  are both dimmed. Close the module and note that you are not prompted to save
	  it.
	
	8. Open VSSTest in Design view. Whether you check it out or not when prompted,
	  your changes are not there.
	
	The same behavior is exhibited if you open a module from the Object Browser, or
	if you use the Find or Replace commands on the Edit menu.
	
	REFERENCES
	==========
	
	For more information about the Object Browser, search the Help Index for "Object
	Browser."
	
	Additional query words: ACCSCC VSS SCC source safe
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
