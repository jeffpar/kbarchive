---
layout: page
title: "Q167112: WD97: Cannot Save Changes to Normal.dot in Second Word Session"
permalink: kb/167/Q167112/
---

## Q167112: WD97: Cannot Save Changes to Normal.dot in Second Word Session

	Article: Q167112
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you quit Word after making changes to the Normal template, you may receive
	the following messages:
	
	  Normal.dot (Normal) was being edited by another Word session. If you save
	  this document with the original name, you will overwrite any changes made in
	  the other session.
	
	  Do you want to save the document using the original name anyway?
	
	When you click Yes, the following message is displayed:
	
	  This file is read-only.
	  (C:\PROGRAM FILES\...\NORMAL.DOT)
	
	NOTE: The path to your Normal template may be different from the one listed here.
	
	CAUSE
	=====
	
	You have two Word sessions open at the same time. The second session of Word was
	attached to a read-only copy of your Normal.dot template. Any changes that
	affect the Normal.dot template, made in the second session of Word, cannot be
	saved to a read-only copy of Normal.dot.
	
	WORKAROUND
	==========
	
	Save the file using a name other than Normal.dot (for example: NewFile.dot). If
	you want to use this file as your new Normal.dot, you will have to rename your
	existing Normal.dot first, and then rename NewFile.dot to Normal.dot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Normal.dot template remains read-only even after you exit the first session
	of Word. This way of handling Normal.dot is different from the way Normal.dot is
	handled in Word for Windows, version 6.0.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q134896 Cannot Rename Normal.dot If Word Mail Is Running
	
	  Q153789 No Prompt to Save Normal Template If WordMail Is Running
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
