---
layout: page
title: "Q168402: WD97: Opening Version After Updating Linked Picture Hangs Word"
permalink: kb/168/Q168402/
---

## Q168402: WD97: Opening Version After Updating Linked Picture Hangs Word

	Article: Q168402
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a version of a document that contains a picture, Word may stop
	responding.
	
	CAUSE
	=====
	
	This problem occurs when you do the following to your document:
	
	1. Insert a picture into a header or footer, and in the Insert Picture dialog
	  box, click to select the Link To File, Save With Document, and Float Over
	  Text check boxes.
	
	2. Cut the picture to the Clipboard and paste it into the main body of the
	  document.
	
	3. Edit and save the picture in its native editor.
	
	4. Update the picture in Word.
	
	5. Save the document as another version.
	
	Word may stop responding if you close the document and then reopen any version of
	the document other than the first version.
	
	
	WORKAROUND
	==========
	
	To work around this problem, either delete the version that is causing Word to
	stop responding or do not open that version.
	
	To delete the problem version, follow these steps:
	
	1. On the File menu, click Versions.
	
	2. In the Existing versions list, select the version that is causing Word to
	  stop responding, and click Delete.
	
	3. Click Yes on the Confirm Version Delete message, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbgraphic 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
