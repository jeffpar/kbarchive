---
layout: page
title: "Q197216: WD97: Error with Blank ASK or FILLIN Field on Merge"
permalink: /kb/197/Q197216/
---

## Q197216: WD97: Error with Blank ASK or FILLIN Field on Merge

	Article: Q197216
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the result of an ASK or FILLIN field is blank, the following error message
	may appear when you use a REF field to recall the ASK or FILLIN field:
	
	  Error! reference source not found
	
	If you refer to the blank ASK or FILLIN field with a bookmark name, the following
	error message appears:
	
	  Error! bookmark not defined
	
	Additionally, if the result of the field is blank during a mail merge operation,
	the following message appears as each record with blank results is merged:
	
	  A field calculation error occurred in record X
	
	There is no context-sensitive Help for this error message.
	
	WORKAROUND
	==========
	
	To work around these errors, force the field to evaluate to a space by either
	typing a space in the dialog box when prompted or by setting the field default
	as follows
	
	  {Ask Answer "Question" \d " "}
	
	where the \d switch sets the default result for a field.
	
	An alternative workaround is to select the field and reapply the bookmark to the
	field. The \d switch isn't necessary.
	
	The bookmark that Word applies to the ASK field is placed at the end of the field
	and looks like "][" when the bookmarks are visible. For example, the formula
	
	  {ASK bookmark "question"}
	
	would look like:
	
	  {ASK bookmark "question" ][}
	
	To correct this, select the field and reapply the bookmark. When you are
	finished, the bookmark looks like:
	
	  [{ASK bookmark "question" }]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
