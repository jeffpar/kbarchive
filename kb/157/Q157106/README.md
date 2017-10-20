---
layout: page
title: "Q157106: WD97: ErrMsg: Word Could Not Open &lt;File Name.doc&gt; as a Data ..."
permalink: /kb/157/Q157106/
---

## Q157106: WD97: ErrMsg: Word Could Not Open &lt;File Name.doc&gt; as a Data ...

{% raw %}

	Article: Q157106
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up a mail merge in Word, you may receive the following error
	message:
	
	  Word could not open <file name.doc> as a data or header source because
	  it is the active mail merge main document.
	
	CAUSE
	=====
	
	The file that you are attempting to attach as a data (header) source has been
	previously set as a main document in Word.
	
	WORKAROUND
	==========
	
	To reset the condition of the data source, follow these steps:
	
	1. Close all documents currently open in Word.
	
	2. Open the data file you want to use in the merge.
	
	3. On the Tools menu, click Mail Merge.
	
	4. In the Mail Merge Helper, click the Create button.
	
	5. From the Create list, click "Restore to Normal Word Document."
	
	  The following message appears:
	
	  By restoring <file name.doc> to a normal Word document, the text of the
	  document will not change. However, <file name.doc> will no longer be a
	  mail merge main document. Do you want to continue?
	
	  Click Yes.
	
	6. From the Mail Merge Helper, click the Close button.
	
	7. Save and close from the data source.
	
	8. Perform the mail merge process again.
	
	Additional query words: printmerge mailmerge datasource datafile
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
