---
layout: page
title: "Q184945: WD97: File &quot;Edited by Another Word Session&quot; Err Msg Truncated"
permalink: /kb/184/Q184945/
---

## Q184945: WD97: File &quot;Edited by Another Word Session&quot; Err Msg Truncated

	Article: Q184945
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message
	
	  <File name> was being edited by another Word session. If you save this
	  document with the original name, you will overwrite any changes made in
	  the other session.
	
	  Do you want to save the document using the original name anyway?
	
	may appear truncated (shortened).
	
	CAUSE
	=====
	
	Error messages are limited to 255 characters.
	
	If <file name> is long, the error message is truncated by the total number
	of characters over 37 in the file name.
	
	NOTE: Some characters in the message, such as carriage returns are not visible.
	
	WORKAROUND
	==========
	
	The truncated error message causes no data loss. In most cases, the correct
	response is to click No, and save the file using a different file name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
