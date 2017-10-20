---
layout: page
title: "Q279191: FIX: Analyze.exe Fails to Repair/Remove Orphaned Files in VSS"
permalink: /kb/279/Q279191/
---

## Q279191: FIX: Analyze.exe Fails to Repair/Remove Orphaned Files in VSS

{% raw %}

	Article: Q279191
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
	
	The Analyze.exe utility that is included in Visual SourceSafe (VSS) does not
	remove orphaned files from the database. When you run Analyze.exe, one of the
	following error messages may appear:
	
	  The project Web-templates contains a child that does not recognize this
	  project as a parent. The child will be added to the project.
	
	  -or-
	
	  Project log 'physical file' has a create record for item [file name], but
	  that item wasn't found in the project.
	
	  -or-
	
	  The project name references a child whose physical file [file name] is
	  missing or corrupted.
	
	CAUSE
	=====
	
	The abnormal ending of the VSS process can cause orphaned files. This
	abnormality can stem from many different situations, including power loss during
	file transfer, network traffic, drive runs out of space, and so forth.
	
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
	
	1. Delete and purge a large project from a VSS database by checking the Destroy
	  Permanently checkbox.
	
	2. While the destroy process runs, stop the process in Task Manager
	  (CTRL+ALT+DELETE), or turn the computer off (to simulate a power failure).
	
	3. Run Analyze.exe, and note that the error messages in the "Symptoms" section
	  that refer to lost parent or child links occur.
	
	REFERENCES
	==========
	
	source safe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbSSafe600fix kbAnalyze kbDSupport kbGrpDSSSafe kbVS600sp5fix kbSSafeAnalyze 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
