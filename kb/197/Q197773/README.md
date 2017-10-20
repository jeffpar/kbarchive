---
layout: page
title: "Q197773: WD97: Cannot Replace All Occurrences of Invalid MERGEFIELD Field"
permalink: /kb/197/Q197773/
---

## Q197773: WD97: Cannot Replace All Occurrences of Invalid MERGEFIELD Field

{% raw %}

	Article: Q197773
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click the Check For Errors button on the Print Merge toolbar, Word may
	prompt you repeatedly for the same invalid MERGEFIELD field.
	
	CAUSE
	=====
	
	Word prompts you to correct each instance of invalid MERGEFIELD fields in your
	mail merge main document, but there is no way to replace or remove all
	occurrences of a single incorrect field. You can only replace or remove one
	occurrence of a field at a time.
	
	
	WORKAROUND
	==========
	
	If your main document contains multiple instances of an invalid field, you can
	use the Replace command on the Edit menu to replace or remove all instances of
	the field at once.
	
	To replace one MERGEFIELD field with another, follow these steps:
	
	1. In your main document, insert one instance of the correct MERGEFIELD fields.
	
	2. Select one of the invalid MERGEFIELD fields.
	
	3. On the Edit menu, click Copy.
	
	4. On the Edit menu, click Replace.
	
	5. Position the insertion point in the Find What box, and then press CTRL+V to
	  paste the MERGEFIELD field.
	
	6. Leave the Edit Replace dialog box open and click in your document window to
	  activate it (the Edit Replace dialog box is modeless).
	
	7. Select the correct MERGEFIELD field. On the Edit menu, click Copy.
	
	8. Click in the Edit Replace dialog box to activate it.
	
	9. Position the insertion point in the Replace With box, and then press CTRL+V
	  to paste the MERGEFIELD field.
	
	10. Click Replace All.
	
	Additional query words: repeats repeatedly several multiple times many
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
