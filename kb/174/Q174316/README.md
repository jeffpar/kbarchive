---
layout: page
title: "Q174316: WV: Word Viewer /p Command Parameter Doesn't Print Document"
permalink: /kb/174/Q174316/
---

## Q174316: WV: Word Viewer /p Command Parameter Doesn't Print Document

{% raw %}

	Article: Q174316
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtool kbdta winword word97
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the /p switch on the command line to start Word Viewer 97-2000, the
	document is not automatically printed as in earlier versions of Word Viewer.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Print from Word Viewer 97-2000
	----------------------------------------
	
	In Microsoft Word Viewer 97-2000, click Print on the File menu.
	
	Method 2: Print from Word Viewer 7.1
	------------------------------------
	
	1. Remove Word Viewer 97-2000:
	  a. Quit all Windows applications.
	
	  b. Click the Start button, point to Settings, and then click Control Panel.
	
	  c. Double-click the Add/Remove Programs icon.
	
	  d. On the Install/Uninstall tab, click to select "Microsoft Word Viewer 97,"
	     and then click Add/Remove. In the Microsoft Word Viewer 97 Setup dialog
	     box, click Remove All.
	
	2. Install Microsoft Word Viewer 7.1:
	  a. On the Microsoft Office 97 (Microsoft Word 97) CD-ROM, open the Valupack
	     folder.
	
	  b. Open the Wordview folder.
	
	  c. Double-click Wd95vw71.exe.
	
	3. In Word, save your document as "Word document 6.0/95 (*.doc)", and then close
	  your document.
	
	4. Click the Start menu, and then click Run.
	
	5. In the Open box, type the path to Wordview.exe, followed by the /p parameter,
	  and then the path and name of the document you want Word Viewer 7.1 to
	  print.
	
	  For example, type: " "C:\Program Files\WordView\Wordview.exe" /p
	  "c:\filename.doc"" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	  Q166636 WV: Frequently Asked Questions About Word Viewer 97-2000
	
	  Q169549 OFF97: Information About the Microsoft Office ValuPack
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbtool kbdta winword word97 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
