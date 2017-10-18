---
layout: page
title: "Q195332: WD97: Address Position Not Retained on Mail Merge Envelopes"
permalink: kb/195/Q195332/
---

## Q195332: WD97: Address Position Not Retained on Mail Merge Envelopes

	Article: Q195332
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97 kbmerge
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you specify an exact position for the return address or delivery address while
	creating a mail merge envelope, this formatting is not retained in the main
	document.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1
	--------
	
	Edit the main document, which contains the envelope formats, and modify the frame
	surrounding the addresses. To do this, follow these steps:
	
	1. Click the address text to see the frame.
	
	2. On the Format menu, click Frame.
	
	3. Modify the horizontal and vertical positions of the frame to the position you
	  want.
	
	4. Click OK to return to the main document.
	
	Method 2
	--------
	
	Edit the main document, remove the frame, and reformat the text. To do this,
	follow these steps:
	
	1. Click the address text to see the frame.
	
	2. On the Format menu, click Frame.
	
	3. Click Remove Frame.
	
	4. Select the address text, and directly apply paragraph formatting to indent or
	  position the text correctly.
	
	Method 3
	--------
	
	Create the main document in the following manner:
	
	1. On the Tools menu, click Envelopes And Labels.
	
	2. Select the Envelopes tab.
	
	3. Click Options.
	
	4. Modify the From Left and From Top settings for the delivery and return
	  address.
	
	5. Click OK.
	
	6. Click Add to Document.
	
	7. On the Tools menu, click Mail Merge.
	
	8. In the Mail Merge Helper dialog box, click Create (under Main Document).
	
	9. Select Form Letters.
	
	10. Under Data Source, click Get Data, attach your data file, and then click
	  Active Window.
	
	11. Click Edit Main Document.
	
	12. Position your insertion point in the frame, and click the Insert Merge Field
	  button on the Mail Merge toolbar to select the appropriate mergefields you
	  want to insert.
	
	13. After your main document is set up, merge to a new document or to the
	  printer.
	
	NOTE: You can save this document as a template and use it for subsequent merges.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: mailmerge print merge envelopes incorrect wrong change document
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
