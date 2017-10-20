---
layout: page
title: "Q197213: WD97: Word Fields Include Spaces at Beginning and End"
permalink: /kb/197/Q197213/
---

## Q197213: WD97: Word Fields Include Spaces at Beginning and End

{% raw %}

	Article: Q197213
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, any fields inserted from menus or by pressing CTRL+F9 include
	a space at the beginning and a space at the end. Earlier versions of Word do not
	include these extra spaces.
	
	This may be a problem if a macro written for an earlier version of Word searches
	for a field code using ^19fieldname.
	
	RESOLUTION
	==========
	
	To find fields, the search must be modified to include a space between ^19 and
	the field name.
	
	MORE INFORMATION
	================
	
	The extra spaces are provided for ease of reading the contents of the field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
