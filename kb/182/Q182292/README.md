---
layout: page
title: "Q182292: WD97: Document Margins Not Retained When Inserted as File"
permalink: /kb/182/Q182292/
---

## Q182292: WD97: Document Margins Not Retained When Inserted as File

	Article: Q182292
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert one document (source) into another document (destination) that
	contains different formatting, the formatting of the source document takes on
	the formatting of the destination document. Document layout formatting (such as
	margin settings, headers and footers, and page orientation) take on the
	formatting of the destination document, even when you insert a section break
	before you insert the source document.
	
	WORKAROUND
	==========
	
	Insert your source document as a subdocument in a master document using either
	of the following methods.
	
	Method 1: If the Source Document Does Not Contain Headers or Footers
	--------------------------------------------------------------------
	
	1. In the document that you want to insert a file (destination document), click
	  Master Document on the View menu.
	
	2. Place the insertion point where you want to insert your file and then on the
	  Master Document toolbar, click the Insert Subdocument button.
	
	3. Select your file to be inserted (source document), and then click Open.
	
	  NOTE: When you insert the subdocument (source document) into the master
	  document, Word adds a continuous section break above and below the
	  subdocument. Also, if the master document contains headers and footers, then
	  the inserted document will obtain the master documents headers and footers.
	
	The source document now retains its formatting when you insert it into the
	destination document.
	
	Method 2: If the Source Document Contains Headers or Footers
	------------------------------------------------------------
	
	1. On the Insert menu, click Break.
	
	2. Under Section Breaks, click Next Page and then click OK.
	
	  NOTE: This will place a Section Break (Next Page) in your master (destination)
	  document.
	
	3. Again, under Section Breaks, click Next Page and then click OK.
	
	  NOTE: This will place a second Section Break (Next Page) in your master
	  (destination) document.
	
	4. Move your insertion point back to the second Section Break (Next Page) and
	  then on the View menu, click Header And Footer.
	
	5. On the Header And Footer toolbar, click the Same As Previous button to turn
	  off "Same as Previous" in the header. Switch to the footer and turn off "Same
	  as Previous" in the footer.
	
	6. Click Close to close the header and footer.
	
	7. With the insertion point on the second Section Break (Next Page), click the
	  Insert Subdocument button on the Master Document toolbar.
	
	  NOTE: Do not select the second Section Break (Next Page) before inserting your
	  source document as the section break will be deleted when you insert your
	  subdocument.
	
	The source document now retains its formatting when you insert it into the
	destination document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
