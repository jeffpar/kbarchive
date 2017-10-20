---
layout: page
title: "Q279228: FIX: OLE Automation Created w/VSS 5.0 Does Not Work on VSS 6.0"
permalink: /kb/279/Q279228/
---

## Q279228: FIX: OLE Automation Created w/VSS 5.0 Does Not Work on VSS 6.0

{% raw %}

	Article: Q279228
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe600bug kbSSafe600fix kbDSupport kbGrpDSSSafe kbVS600sp5fix
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Visual SourceSafe (VSS) OLE Automation code is created on a computer that has
	VSS 5.0 installed and is then run on a computer that has VSS 6.0 installed, the
	code does not work.
	
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
	
	1. Create a Microsoft Visual C++ OLE Automation program, such as the one located
	  on the following Microsoft Web site at:
	
	  http://msdn.microsoft.com/ssafe/downloads/vsstree.zip
	
	2. Compile this program on a computer that has version 5.0 of SourceSafe
	  (ssapi.dll) installed.
	
	3. Run the executable file on another computer that has VSS 6.0 installed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe600bug kbSSafe600fix kbDSupport kbGrpDSSSafe kbVS600sp5fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
