---
layout: page
title: "Q156565: XCLN: Public Folders and Linked/Embedded Documents"
permalink: /kb/156/Q156565/
---

## Q156565: XCLN: Public Folders and Linked/Embedded Documents

	Article: Q156565
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you open an OLE object located in a Microsoft Exchange Public Folder (PF),
	copy part of the object to the clipboard, and paste a link to that object into
	another OLE aware application, any subsequent modifications to the original OLE
	object will modify a local copy of the OLE object, not the one located in the
	PF. This behavior is not specific to any one application, it will occur with any
	application that is OLE aware.
	
	This behavior is by design. The file stored in the PF is an OLE object and as
	such, has no actual file system path. Therefore, the OLE client links to a local
	temporary file while it is open.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior, follow these steps:
	
	1. Start a Microsoft Exchange client.
	
	2. Post an Excel file (Test.xls) in a PF.
	
	3. Open the Excel file in the PF.
	
	4. Highlight a few cells and copy them to the clipboard by opening the Edit menu
	  and selecting Copy.
	
	5. Start Microsoft Word and create a new Word document.
	
	6. Open the Edit menu, click the Paste Special command, click the Paste Link
	  radio button, select Microsoft Excel Worksheet Object in the As listbox, and
	  click OK.
	
	  NOTE: At this point, the link is pointing to Test.xls in your Temp directory,
	  usually C:\Temp\Test.xls.
	
	7. Close Excel. This will delete the temporary Test.xls file.
	
	8. In the Word document, open the Edit menu, click Links, and click Update Now.
	
	At this point, the Update column will display N/A because the link is pointing to
	a file in the temp directory that no longer exists.
	
	Additional query words: word excel freedoc ole paste link copy
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
