---
layout: page
title: "Q162986: WD97: Background Sound Object Embedded in Document Header"
permalink: /kb/162/Q162986/
---

## Q162986: WD97: Background Sound Object Embedded in Document Header

	Article: Q162986
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbole kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save an HTML file that contains a background sound object, the
	background sound object becomes an embedded sound file in the document header.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	Method 1 - Delete the Header
	----------------------------
	
	NOTE: These steps remove all text and graphics from the header.
	
	1. Open the document in Word.
	
	2. On the View menu, click Header and Footer.
	
	3. On the Edit menu, click Select All.
	
	4. Press Delete.
	
	Method 2 - Deleting the Embedded Sound  Object
	----------------------------------------------
	
	1. Open the document in Word.
	
	2. On the View menu, click Header and Footer.
	
	3. Press ALT+F9 to turn on Field Codes view.
	
	  You should see a field code similar to the following:
	
	        {HTMLCONTROL HTMLInlineSoundCtrl.1 \* MERGEFORMAT \s}
	
	4. Select the field code.
	
	5. Press Delete.
	
	6. Press ALT+F9 to turn off Field Codes view.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word version 97.
	
	MORE INFORMATION
	================
	
	When the background sound object is embedded in the header, the background sound
	object plays when you open the document. To stop or play the sound object,
	right-click sound icon, and click Stop or Play.
	
	Additional query words: 97 internet web iaword
	
	======================================================================
	Keywords          : kbole kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
