---
layout: page
title: "Q164830: WD97: Invalid Page Fault Clearing &quot;Float Over Text&quot; Check Box"
permalink: /kb/164/Q164830/
---

## Q164830: WD97: Invalid Page Fault Clearing &quot;Float Over Text&quot; Check Box

{% raw %}

	Article: Q164830
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove the "Float over text" option from a picture, the following error
	messages may occur.
	
	Windows 95
	----------
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	Clicking the Details button shows:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:30386b4a.
	
	Windows NT 3.51 and 4.0
	-----------------------
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Winword.exe
	
	  Exception: access violation (0xc0000005), Address: 0x30386b4a
	
	CAUSE
	=====
	
	This problem occurs when the Show Field Codes option is enabled and you do
	either of the following:
	
	- You insert a picture "From File" and have the "Link to File" and "Float over
	  text" options selected.
	
	  -or-
	
	- You insert a "Clip Art" picture. (This automatically inserts the picture with
	  the "Float over text" option selected. You cannot change the "Float over
	  text" option when you use this method to insert a picture.)
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, use any of the following workarounds.
	
	Method 1: Turn Field Codes Off
	------------------------------
	
	1. On the Tools menu, click Options.
	
	2. Click the View tab.
	
	3. Under Show, clear the "Field Codes" check box, and click OK.
	
	4. Right-click the picture, and click "Format Picture" from the shortcut menu.
	
	5. Click the Position tab, clear the "Float over text" check box, and then click
	  OK.
	
	Method 2: Clip Art Picture Only
	-------------------------------
	
	1. Right-click the picture.
	
	2. Point to Clip Object on the shortcut menu, and then click Convert.
	
	3. In the Convert dialog box, clear the "Float over text" option, and then click
	  OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	When you have a picture with the "Float over text" option selected, field codes
	will not be visible for that object when field codes are enabled.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q157465 Word 97: Can't See Field Codes for Some Objects
	
	Additional query words: SR1 release1 8.0 8.00 toggle ipf floating
	
	======================================================================
	Keywords          : kbgraphic kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
