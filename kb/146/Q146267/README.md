---
layout: page
title: "Q146267: XCLN: Selecting Sort for Case Sensitivity Inconsistent"
permalink: kb/146/Q146267/
---

## Q146267: XCLN: Selecting Sort for Case Sensitivity Inconsistent

	Article: Q146267
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Electronic Forms Designer, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Electronic Forms Designer 4.0 for Microsoft Exchange, inconsistant
	behavior can be displayed when similar words with different cases are used.
	
	For example, if the words
	
	  APPLE
	  Apple
	  apple
	  APPLE
	
	are added to the listbox in the Initial Value page for the listbox properties,
	selecting Sort might produce the following:
	
	  apple
	  APPLE
	  Apple
	  APPLE
	
	However, selecting Sort again might produce
	
	  Apple
	  APPLE
	  APPLE
	  apple
	
	and so on with each subsequent Sort.
	
	Typically, Microsoft Visual Basic List and Combo boxes ignore case sensitivity
	when the sorted property is used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with version 4.0 of Microsoft
	Exchange Forms Designer. We are researching the problem and will post new
	information here in the Knowledge Base as it becomes available.
	
	
	Additional query words: forms
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbZNotKeyword kbExchangeEForms kbExchangeEForms400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
