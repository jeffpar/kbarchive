---
layout: page
title: "Q263670: WD97: Index Entries Appear in Reverse Order"
permalink: /kb/263/Q263670/
---

## Q263670: WD97: Index Entries Appear in Reverse Order

{% raw %}

	Article: Q263670
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you build an index based on Index Entry (XE) fields, entries that contain
	the \t switch are listed in the reverse order in which they appear in the text
	of your Word document.
	
	For example, if you have the following three Index Entry fields listed in the
	following order in your Word document
	
	  {XE test \t "See abc"}
	  {XE test \t "See klm"}
	  {XE test \t "See xyz"}
	
	the result in the updated index looks like this:
	
	  test. See xyz. See klm. See abc.
	
	CAUSE
	=====
	
	This behavior occurs if you use the \t switch on the Index Entry field. The \t
	switch inserts text in place of a page number.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To correct this problem, add a string value (WW2CrossReference = 1) to the
	following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Index
	
	To do this, follow these steps:
	
	1. On the Windows Start menu, click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks) and click OK.
	
	3. Expand the following registry key (folder):
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\
	
	4. If there is an Index key (folder), go to step 5. If there is not an Index
	  key, follow these steps:
	
	  a. Select the Word key. On the Edit menu, point to New and then click Key.
	
	  b. Type Index and press ENTER.
	
	5. Select the Index key. On the Edit menu, point to New and then click String
	  Value.
	
	6. Type "WW2CrossReference" (without the quotation marks) and press ENTER.
	
	7. In the right pane, double-click WW2CrossReference.
	
	8. In the "Value data" box, type "1" (without the quotation marks) and click OK.
	
	9. On the Registry menu, click Exit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
