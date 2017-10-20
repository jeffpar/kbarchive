---
layout: page
title: "Q275926: FIX: Analyze -F Overwrites Analyze.Log File if Folder Not Empty"
permalink: /kb/275/Q275926/
---

## Q275926: FIX: Analyze -F Overwrites Analyze.Log File if Folder Not Empty

{% raw %}

	Article: Q275926
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSafe600fix kbAnalyze kbDSupport kbGrpDSSSafe kbVS600sp5fix kbSSafeAnalyze
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Analyze -F, the Analyze.log file is replaced in the \data\backup
	folder and the following warning message appears:
	
	  The backup folder \data\backup, is not empty.
	  Before an autofix rebuild is run the backup folder needs to be emptied.
	
	However, the analyze.log is replaced.
	
	CAUSE
	=====
	
	The backup directory needs to be empty before running Analyze -F.
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Analyze -F ../data, and note that a backup directory containing
	  Analyze.log is created.
	
	2. Run Analyze -F ../data again without renaming the backup directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbSSafe600fix kbAnalyze kbDSupport kbGrpDSSSafe kbVS600sp5fix kbSSafeAnalyze 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
