---
layout: page
title: "Q85327: Paste Link Option Not Available When File to Link Is Not Saved"
permalink: kb/085/Q85327/
---

## Q85327: Paste Link Option Not Available When File to Link Is Not Saved

	Article: Q85327
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you link two objects in Windows, the Paste Link option under the Edit menu
	is unavailable (dimmed) when the file that contains the information to be linked
	has not been saved.
	
	MORE INFORMATION
	================
	
	In this case, the application used to create the file containing the information
	to be linked represents the "server application." The application you are
	pasting the file into represents the "client application."
	
	For an object to be linked, the client application must know the name of the
	server application and the file that contains linked information. When this
	information is not available, the Paste Link option will be unavailable.
	
	Sample Solution Using Write and Paintbrush
	------------------------------------------
	
	In the following example, Write is acting as the client application and
	Paintbrush is the server application.
	
	1. Start Write.
	
	2. Start Paintbrush.
	
	3. Create a drawing in Paintbrush, and save the drawing.
	
	4. Select the drawing using the Pick or Scissors tools.
	
	5. From the Edit menu, choose Copy.
	
	6. Switch to Write.
	
	7. From the Edit menu, choose Paste Link which is available (that is, it is no
	  longer dimmed).
	
	A presentation of the Paintbrush-linked drawing appears in the Write document.
	
	For more information, see page 300 of the "Microsoft Windows User's Guide" and/or
	query on the following words in the Microsoft Knowledge Base:
	
	  windows and 3.1 and link and OLE
	
	Additional query words: 3.10 3.1 3.11 OLE Grey greyed grayed out server can't link cannot
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
