---
layout: page
title: "Q168247: BUG: Keywords Cause New Version When &quot;Undo Check Out&quot; Set"
permalink: kb/168/Q168247/
---

## Q168247: BUG: Keywords Cause New Version When &quot;Undo Check Out&quot; Set

	Article: Q168247
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check in unchanged files through the Visual SourceSafe Explorer, if you
	are using Keyword Expansion and have the setting:
	
	  Check in unchanged files set to "Undo Check out"
	
	the file is still modified to reflect a new version and date/time. This did not
	happen in Version 4.0a build 1309.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the SourceSafe Admin tool and set the Expand keywords in files of type
	  to *.TXT.
	
	2. Close the Admin utility and create a text file that contains the following
	  text:
	
	  $Archive: $ Visual SourceSafe archive file location
	  $Author: $ User who last changed the file
	  $Date: $ Date and time of last check in
	  $Header: $ Logfile, Revision, Date, Author
	  $History: $ File history, Visual SourceSafe format
	  $Log: $ File history, RCS format
	  $Logfile: $ Same as Archive
	  $Modtime: $ Date and time of last modification
	  $Revision: $ Visual SourceSafe version number
	  $Workfile: $ Filename
	  $NoKeywords: $ No keyword expansion for all keywords that follow.
	
	3. Add the text file to SourceSafe. In the SourceSafe Explorer, open the Options
	  dialog box from the Tools menu and set the "Check in Unchanged Files" to
	  "Undo Check out."
	
	4. Check out the text file and check it back in again.
	
	5. Show History of the file. Note that the file is modified and a new version is
	  created even though the option is set to "Undo" the checkout.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	
	=============================================================================
	
