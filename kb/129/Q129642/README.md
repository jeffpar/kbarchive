---
layout: page
title: "Q129642: Buffering Must Be Handled Manually in DBC Rules/Triggers"
permalink: /kb/129/Q129642/
---

## Q129642: Buffering Must Be Handled Manually in DBC Rules/Triggers

{% raw %}

	Article: Q129642
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you choose to use update, delete, or insert triggers within a Visual FoxPro
	database container (DBC), buffering will not be enabled automatically. You must
	use the =CURSORSETPROP() function to manually enable the type of buffering
	desired.
	
	MORE INFORMATION
	================
	
	This behavior is by design. Because automatic implementation of buffering could
	cause adverse consequences in some situations, buffering will be set to 1 (no
	buffering).
	
	Normally, you would choose to implement row buffering on the parent table, and
	table buffering on the child table involved in the relationship.
	
	REFERENCES
	==========
	
	For more information on database design and buffering, refer to the Microsoft
	Visual FoxPro "Developer's Guide" or to the Microsoft Visual FoxPro
	"Professional Features Guide."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
