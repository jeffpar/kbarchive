---
layout: page
title: "Q230702: FIX: Errors When Renaming or Deleting a Project in VSS"
permalink: /kb/230/Q230702/
---

## Q230702: FIX: Errors When Renaming or Deleting a Project in VSS

{% raw %}

	Article: Q230702
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCommandLine kbSSafe600bug kbSSExplorer kbDSupport kbGrpDSSSafe kbSSafe600qfe kbVS600s
	Last Modified: 27-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When permanently deleting or renaming a project in the Microsoft Visual
	SourceSafe (VSS) Explorer, you may receive a series of errors:
	
	  File or project not found
	
	followed by:
	
	  1E String load failure, string #%d
	
	RESOLUTION
	==========
	
	This feature is available in the latest service pack for Visual Studio 6.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	WORKAROUND
	----------
	
	These operations can be performed at the command line. For example, the following
	operation is for the delete permanently operation:
	
	  ss destroy $/myproj
	
	The following is for the rename operation:
	
	  ss rename $/myproj $/yourproj
	
	Note that this produces multiple "File or project not found" errors, but it will
	complete.
	
	An alternative workaround exists in the case of permanently deleting files. The
	error messages do not occur when deleting without destroying and then purging
	from the Visual SourceSafe Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
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
	
	This problem is intermittent and has not been consistently reproduced by
	Microsoft. This happens only on projects immediately below the root ($/) project
	in databases that have been updated to the new Visual SourceSafe 6.0 database
	format.
	
	Additional query words: sp4 destroy string load failure
	
	======================================================================
	Keywords          : kbCommandLine kbSSafe600bug kbSSExplorer kbDSupport kbGrpDSSSafe kbSSafe600qfe kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
