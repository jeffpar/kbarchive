---
layout: page
title: "Q136996: Advantages of Manual vs. Automatic DataEnvironment Behavior"
permalink: kb/136/Q136996/
---

## Q136996: Advantages of Manual vs. Automatic DataEnvironment Behavior

	Article: Q136996
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The tables in the DataEnvironment can be opened and closed manually or
	automatically. Both manual and automatic opening and closing have certain
	advantages.
	
	MORE INFORMATION
	================
	
	If the DataEnvironment's AutoOpenTables and AutoCloseTables properties use their
	default setting of True (.T.), you don't need to write any code to take care of
	opening and closing the tables and views in the DataEnvironment.
	
	Setting the DataEnvironment's AutoOpenTables property to False (.F.) gives the
	developer a bit more control. Tables are automatically opened before the form's
	Load event occurs but after the DataEnvironment's BeforeOpenTables event. This
	means that if code in the form's Load event determines an error condition (such
	as user opening a form that he or she does not have permission to use) and
	returns False (.F.) to keep the form from opening, a performance penalty results
	because the tables were opened but never used. In this case, manually calling
	the DataEnvironment's OpenTables method after checking the user's security
	clearance would speed up the application. Actually opening the tables with the
	OpenTables method is not significantly faster or slower than letting the
	DataEnvironment automatically open them, but time can be saved by not opening
	the tables at all if they are not be needed.
	
	If many or all of the tables in a DataEnvironment are used by the next form,
	formset, or report's DataEnvironment, setting the DataEnvironment's
	AutoCloseTables property to False (.F.) speeds up the loading of the next
	DataEnvironment, because the tables are already open.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
