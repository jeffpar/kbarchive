---
layout: page
title: "Q185233: WD97: Error Setting Transparent Color in Header/Footer Picture"
permalink: /kb/185/Q185233/
---

## Q185233: WD97: Error Setting Transparent Color in Header/Footer Picture

{% raw %}

	Article: Q185233
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
	
	When you attempt to set the color transparency of a selected picture in the
	document's header or footer (click Set Transparent Color on the Picture
	toolbar), positioning your mouse pointer over the picture causes Word to stop
	responding, and the following error message appears:
	
	In Windows 95 and Windows 98
	----------------------------
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, Word displays the following message:
	
	  WINWORD caused an invalid page fault in module MSO97.DLL at <address>.
	
	In Windows NT 4.0
	-----------------
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Winword.exe
	
	  Exception: access violation (0xc0000005), Address: <address>
	
	  -or-
	
	  The instruction at "<address>" referenced memory at "0x00000000".
	
	  The memory could not be "read".
	
	CAUSE
	=====
	
	This error message appears if you inserted the picture with the "Float over
	text" option selected.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Clear the "Float over Text" Check Box
	-----------------------------------------------
	
	Before setting the transparent color for the picture, clear the "Float over text"
	check box. To do this, follow these steps:
	
	1. Click to select the inserted picture.
	
	2. On the Format menu, click Picture.
	
	3. On the Position tab, click to clear the "Float over text" check box and click
	  OK.
	
	Method 2: Set Color Transparency Prior to Inserting Picture
	-----------------------------------------------------------
	
	Set the transparent color prior to inserting the picture into the header or
	footer. To do this, follow these steps:
	
	1. Insert your picture into the main body of your document.
	
	2. Click to select your picture.
	
	3. If the Picture toolbar is not visible, on the View menu, point to Toolbars,
	  and then click Picture.
	
	4. On the Picture toolbar, click Set Transparent Color.
	
	5. On your picture, click the color that you want to make transparent.
	
	6. While the picture is selected, click Cut on the Edit menu.
	
	7. On the View menu, click Header And Footer.
	
	8. Place the insertion point where you want the picture in the header or footer,
	  and then click Paste on the Edit menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	
	Additional query words: bombs crash crashes crashing crashed quit quitting quits fail fails failing failed break hang hangs hanging hung SR1 release1 graphic image gif jpg jpeg
	
	======================================================================
	Keywords          : kberrmsg kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
