---
layout: page
title: "Q244536: WD97: Word Stops Responding When Sending MS Mail on Windows NT"
permalink: kb/244/Q244536/
---

## Q244536: WD97: Word Stops Responding When Sending MS Mail on Windows NT

	Article: Q244536
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message from Microsoft Word 97 using Microsoft Mail on
	Windows NT 4.0 by pointing to Send To on the File menu and clicking Mail
	Recipient, Word 97 appears to stop responding (hang).
	
	CAUSE
	=====
	
	When Microsoft Word starts Microsoft Mail to send an e-mail message, Word
	initiates a background thread.
	
	WORKAROUND
	==========
	
	To prevent Microsoft Word from using a background thread with Microsoft Mail,
	edit your Win.ini file. To do this, follow these steps:
	
	1. On the Windows Start menu, click Run.
	
	2. Type "win.ini" (without the quotation marks) and click OK.
	
	3. In the [Mail] section, comment out the line MAPIX=1 by placing a semicolon
	  (;) at the start of the line.
	
	4. Add the following line below the line you commented in step 3:
	
	  MAPIDLL32=mapi32.dll
	
	NOTE: The [Mail] section of your Win.ini file should look similar to the
	following:
	
	  [Mail]
	  MAPI=1
	  ;MAPIX=1
	  MAPIDLL32=mapi32.dll
	
	5. On the File menu, click Save.
	
	6. On the File menu, click Close to close the Win.ini file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
