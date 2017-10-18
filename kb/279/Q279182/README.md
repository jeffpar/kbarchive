---
layout: page
title: "Q279182: FIX: Replace Write Ignored When Make Writable Is Enabled"
permalink: kb/279/Q279182/
---

## Q279182: FIX: Replace Write Ignored When Make Writable Is Enabled

	Article: Q279182
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSafe600bug kbSSafe600fix kbSSExplorer kbDSupport kbGrpDSSSafe kbVS600sp5fix
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a Get operation on a file in the Visual SourceSafe Explorer and
	set it to either Skip or Ask to replace writable files, both of those options
	are ignored and the file is overwritten.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior 
	---------------------------
	
	1. Perform a Get operation in VSS, check Make writable, and then edit the file.
	
	2. Select the file in VSS and bring up the Get dialog box.
	
	3. Click Advanced, ensure that Replace writable is set to either Ask or Skip to
	  avoid having the file overwritten, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600bug kbSSafe600fix kbSSExplorer kbDSupport kbGrpDSSSafe kbVS600sp5fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
