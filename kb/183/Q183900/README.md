---
layout: page
title: "Q183900: WD97: Err Msg: &quot;Word Cannot Edit the Microsoft Drawing&quot;"
permalink: /kb/183/Q183900/
---

## Q183900: WD97: Err Msg: &quot;Word Cannot Edit the Microsoft Drawing&quot;

	Article: Q183900
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to edit an object created in Microsoft Draw, you receive the
	following error message:
	
	  Word cannot edit the Microsoft Drawing.
	
	CAUSE
	=====
	
	Microsoft Draw is not installed on your system. In addition, Word does not
	automatically convert the Microsoft Draw object to a Word picture.
	
	NOTE: Microsoft Draw is installed by Microsoft Word for Windows 2.0.
	
	RESOLUTION
	==========
	
	If you are a registered Office user, you can download and install Microsoft Draw
	98. Microsoft Draw 98 makes the OfficeArt drawing tools available in any
	OLE-compliant program. After you install Microsoft Draw 98, you can double-click
	the MSDraw object and edit it as a Microsoft Draw 98 Drawing.
	
	If you are unable to download Microsoft Draw 98, use any of the following methods
	to work around this problem.
	
	Method 1: Convert the Object to Word Picture
	--------------------------------------------
	
	Convert the object to a Word picture. To do this, follow these steps:
	
	1. Select the object.
	
	2. On the Edit menu, click Microsoft Drawing Object, and then click Convert.
	
	3. Select Convert To and select Microsoft Word Picture in the Object Type list.
	
	4. Click OK.
	
	NOTE: When you toggle field codes on (ALT+F9), the object will be replaced by an
	{EMBED Word.Document.8} field.
	
	Method 2: Unlink the Embed Field, and Edit Using the Picture Editor in Word
	---------------------------------------------------------------------------
	
	The Microsoft Draw object is an embed field. Unlink the field, and then edit the
	object using the Picture Editor. To do this, follow these steps:
	
	1. Select the object.
	
	2. Press CTRL+SHIFT+F9 to unlink the field.
	
	3. Double-click the object.
	
	The object will open in Picture Editor in Word.
	
	Method 3: Install Microsoft Draw from the Word 2.x Disks
	--------------------------------------------------------
	
	If you have the Microsoft Word version 2.x disks, you can choose to install only
	Microsoft Draw. To install Microsoft Draw, follow these steps:
	
	1. Insert Disk 1 of the Word 2.x disks, and run Setup.
	
	2. In the "Welcome to Microsoft Word for Windows Setup" dialog box, enter the
	  installation directory.
	
	3. Click Continue.
	
	4. In the "Choose the type of installation" dialog box, click Custom
	  Installation.
	
	5. In the Word Setup Options dialog box, clear all the check boxes except the
	  "Draw, Graph, Equation Editor, WordArt" check box.
	
	6. Click Tools.
	
	7. On the Options dialog box, clear all the check boxes except the Draw check
	  box.
	
	8. Click OK.
	
	9. Click Setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: msdraw drawing picture
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
