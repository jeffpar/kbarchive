---
layout: page
title: "Q146033: XCLN: Horizontal Scroll bar in EFD May Cover Text Box"
permalink: kb/146/Q146033/
---

## Q146033: XCLN: Horizontal Scroll bar in EFD May Cover Text Box

	Article: Q146033
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a RichEntry Text box in a form created using Microsoft Exchange
	EForms Designer, the horizontal scroll bar may cover up the text box if the text
	is longer than the length of the text box.
	
	MORE INFORMATION
	================
	
	This problem will only show up when the RichEntry Text box in the EForm is not
	multi-line and its width has not been increased from the default width when the
	EForm was created. This can be fixed by modifying the width of the Rich Text box
	to accommodate the scroll bar's extra width in the Microsoft Exchange EForms
	Designer and then re-compiling and re-installing the EForm.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	The RichEntry field in the EForm can be broadened to accommodate the extra width
	added by the horizontal scroll bar. The designer of the EForm will have to make
	this change and then regenerate and re-install the Eform for the users. The
	users cannot make any changes in this case.
	
	Additional query words: invisible hide
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
