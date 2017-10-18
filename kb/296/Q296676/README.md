---
layout: page
title: "Q296676: FIX: Unreadable Characters Displayed in Reindexing Information"
permalink: kb/296/Q296676/
---

## Q296676: FIX: Unreadable Characters Displayed in Reindexing Information

	Article: Q296676
	Product(s): Microsoft FoxPro
	Version(s): 3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp KbDBFDBC kbGrpDSFox kbDSupport kbvfp700fix kbvfp700
	Last Modified: 28-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The STATUS BAR is off and SET TALK is on. You issue a REINDEX command against a
	large table with seven or more index tags. The REINDEX command echoes
	information to the desktop. This information may contain unreadable characters.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0.
	
	MORE INFORMATION
	================
	
	The unreadable characters do not always appear in the reindexing information.
	This behavior depends on numerous variables. For example, depending on the
	record size, the table may need more than 175,000 records. The index must
	contain at least seven or more index tags. The amount of RAM on the computer and
	the speed of the processor also affect whether the unreadable characters appear
	or not.
	
	1. In the Command window, issue the following commands:
	
	  SET STATUS BAR OFF 
	  SET TALK ON
	
	2. Open a large table that has seven or more index tags.
	
	3. In the Command window, issue the following command:
	
	  REINDEX
	
	Note that the information that appears on the FoxPro desktop may contain various
	unreadable characters.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp KbDBFDBC kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : :3.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
