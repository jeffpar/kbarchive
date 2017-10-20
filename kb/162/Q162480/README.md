---
layout: page
title: "Q162480: WD97: How Word Converts Execute-Only Macros"
permalink: /kb/162/Q162480/
---

## Q162480: WD97: How Word Converts Execute-Only Macros

{% raw %}

	Article: Q162480
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In earlier versions of Word, WordBasic macro code could be hidden with the
	MacroCopy command. This command makes a macro "execute-only." In this state, the
	macro code cannot be viewed, but the macro can be run.
	
	This technique is useful if you are distributing macro solutions to customers or
	to coworkers, and you do not want the customers or coworkers to be able to
	modify the macros. This design means that some macros in the template can be
	"execute-only" while others remain viewable.
	
	In the versions of Word listed at the beginning of this article, you can protect
	only an entire project (that is, all of the code within a template or document
	must be either locked or unlocked). When a project is locked, any Visual Basic
	for Applications code within the template cannot be viewed.
	
	The "More Information" section of this article discusses how templates containing
	"execute-only" macros that were created in earlier versions of Word are
	converted.
	
	MORE INFORMATION
	================
	
	Templates containing execute-only macros are converted differently depending on
	whether these execute-only macros are in the Normal template (Normal.dot) or a
	custom template.
	
	Execute-Only Macros in Normal.dot
	---------------------------------
	
	Word will convert the Normal template (typically the first time Word is started
	after you upgrade to versions of Word 97 or later) and will not convert any of
	the execute-only macros. A backup copy of the original Normal.dot will be saved
	with a default file name of "Backup of Normal.wbk" in the same directory or
	folder where Normal.dot is located. This allows Word 97 and later versions of
	the Normal template to be unprotected; you can record new macros and have all
	the typical programming functionality that Word allows.
	
	NOTE: The "Backup of Normal.wbk" file is only created the very first time Word is
	run. If, after starting Word, you replace the Normal.dot file with an earlier
	version of the Word Normal.dot file, the backup file will not be created.
	
	Execute-Only Macros in a Custom Template
	----------------------------------------
	
	When any template other than Normal.dot is converted, all execute-only macros
	remain in the template, and the entire template or project is locked (you cannot
	edit code in it). This design means that custom solutions will still work and
	the code will still be protected. A disadvantage is that formerly accessible
	macros may no longer be accessible.
	
	When you attempt to do any of the following:
	
	- Edit a converted execute-only macro.
	
	-or-
	
	- View the project contents in the Visual Basic Editor Project Explorer.
	
	-or-
	
	- View the project properties in the Visual Basic Editor Project Explorer.
	
	the following alert is displayed:
	
	  Project is unviewable
	
	To gain access to these macros, use either of the following methods:
	
	- Access the original template in the earlier version of Word.
	
	-or-
	
	- In the earlier version of Word, remove all of the execute-only macros so Word
	  will not protect the project during the conversion process.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q159748 WD97: How to Protect VB Code from Unauthorized Access
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
