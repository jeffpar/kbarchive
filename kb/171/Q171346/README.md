---
layout: page
title: "Q171346: PRB: Filter String Exceeds the Maximum Length of 511"
permalink: /kb/171/Q171346/
---

## Q171346: PRB: Filter String Exceeds the Maximum Length of 511

	Article: Q171346
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select Add Files on the toolbar or from the File menu, you might
	receive the following message:
	
	  Filter string exceeds the maximum length of 511
	
	CAUSE
	=====
	
	The "filter string" corresponds to the values of the File_Types and the
	Relevent_Masks initialization variables located in either or both the
	SRCSAFE.INI and the users SS.INI. Together, these values exceed the maximum
	length of 511 characters allowed.
	
	RESOLUTION
	==========
	
	Reduce the number of unnecessary relevant masks or file groups that are
	displayed in the "List files of type" list in the Add Files dialog box. To
	accomplish this:
	
	1. In Visual SourceSafe Explorer, go to the Tools menu, click Options, and click
	  the "File Types" tab.
	
	2. Delete or reduce the "File Groups" or the "File types included in file group"
	  sections.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This error message is documented in Help. You can find it by typing "filter" in
	field 1 in the "Find" tab, and then selecting "filter" in field
	
	1. The error message appears in field 3. Double-click it to display the topic.
	
	For more detailed information about these INI variables, search the Online Help
	Topics for "File_Types" (without the quotation marks). Also, from this topic,
	click the "See Also" link, and then click the "File Types Options Tab" link.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
