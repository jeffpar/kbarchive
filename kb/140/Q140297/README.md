---
layout: page
title: "Q140297: DOC: SendUpdates also Applies to Cursors from Local Views"
permalink: /kb/140/Q140297/
---

## Q140297: DOC: SendUpdates also Applies to Cursors from Local Views

	Article: Q140297
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbvfp300 kbvfp600
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Visual FoxPro Language Reference and in the Help file under
	CURSORSETPROP(), the SendUpdates property is described as follows:
	
	SendUpdates   .T. - Specifies that a SQL update query is sent to update
	             remote tables.
	             .F. - Specifies that a SQL update query is not sent to update
	             remote tables.
	
	In the Visual FoxPro Language Reference and in the Help file under
	CURSORGETPROP(), the SendUpdates property is described as follows:
	
	SendUpdates     L      Contains true (.T.) if a SQL update query is sent
	                      to update remote tables; otherwise, contains false
	                      (.F.) (the default).
	                      Read-Write.
	
	Although these imply that this property is only valid for cursors from remote
	views, this property also applies to cursors that are created from local views.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	A cursor created from a view must have its SendUpdates property set to true
	(.T.) if changes to the view are to update the source table. This is the case
	regardless of whether the view is from a native FoxPro table (a local view) or
	from a non-FoxPro table such as a Microsoft Access or SQL Server database (a
	remote view).
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : WINDOWS:3.0,6.0
	
	=============================================================================
	
