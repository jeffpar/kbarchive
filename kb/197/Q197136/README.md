---
layout: page
title: "Q197136: WD97: Style Deleted from Style Dialog Box Remains in Template"
permalink: /kb/197/Q197136/
---

## Q197136: WD97: Style Deleted from Style Dialog Box Remains in Template

{% raw %}

	Article: Q197136
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbtemplate
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you delete a style from the Style dialog box, Microsoft Word does not
	remove it from the template that your document is based upon (for example,
	Normal.dot and User.dot). Word only removes the style from the current document.
	
	WORKAROUND
	==========
	
	To remove a style permanently from both the document and the template, follow
	these steps:
	
	1. If the style is saved in the Normal template or a document based on the
	  Normal template, skip to step 2.
	
	  If the style is saved in a template other than Normal, or in a document based
	  on a template other than Normal, you must open the template file to delete
	  the style from that template. To open the template file, follow these steps:
	
	  a. On the File menu, click Open.
	
	  b. Under Files Of Type, click Document Templates.
	
	  c. Move to the folder containing your template files, select the template,
	     and then click Open.
	
	2. On the Format menu, click Style.
	
	3. In the Style dialog box, click Organizer, and then click the Styles tab.
	
	  The Organizer dialog box contains two lists of styles.
	
	  NOTE: Under Styles Available In, note whether it indicates a document or a
	  template. If it indicates a template, note which template, for example,
	  Normal (Template) or User (Template).
	
	4. To delete the style from the template, follow these steps:
	
	  a. Under Styles Available In, click the template name that contains the style
	     you want to delete.
	
	  b. In the In <Template name>.dot box above the template name, click the
	     name of the style that you want to delete.
	
	  c. Click Delete, and then click Yes when asked "Do you wish to delete the
	     style <style name>?"
	
	To delete the style from the document, follow these steps:
	
	     a. Under Styles Available In, click the document name that contains the
	        style you want to delete.
	
	        NOTE: If your document name does not appear, follow these steps:
	
	        1. Click one of the Close File buttons. The name of the button changes
	           to Open File.
	
	        2. Click Open File and select the file that contains the style you want
	           to delete.
	
	        3. Click Open.
	
	     b. In the In <File name> box above the document name, click the name
	        of the style that you want to delete.
	
	     c. Click Delete, and then click Yes when asked "Do you wish to delete the
	        style <style name>?"
	
	  d. Click Close.
	
	NOTE: If you receive the following message when you quit Word, click Yes:
	
	  Changes have been made that affect the global template, <Normal.dot>.
	
	  Do you want to save those changes?
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	You can save styles into documents and templates. A style that is only saved in
	a document and not a template is only available to you in that document. A style
	that is saved in a template is available to any document based on that
	template.
	
	If you create a document based on a template, any style you use from the template
	becomes part of the document. If you delete that style only from the document,
	it is still available in the template from which you created the document. If
	you delete that style only from the template, it is still available in the
	document created from that template. If you delete that style from both the
	document and template, the style is no longer available.
	
	For more information about working with styles, click the Office Assistant, type
	"style," click Search, and then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbtemplate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
