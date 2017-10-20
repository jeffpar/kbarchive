---
layout: page
title: "Q304539: BUG: Deploying Web Project by Label Returns &quot;Version Not Found&quot;"
permalink: /kb/304/Q304539/
---

## Q304539: BUG: Deploying Web Project by Label Returns &quot;Version Not Found&quot;

{% raw %}

	Article: Q304539
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe
	Last Modified: 11-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to deploy a labeled version of a SourceSafe web project,
	use of ss deploy returns "Version not found" and does not deploy the files.
	
	RESOLUTION
	==========
	
	Use the ss get command with the -gl (to specify the deployment path) and -vl (to
	specify the labeled version) switches to deploy to a drive or UNC path. For
	example:
	
	  ss get $/"<project name>" -vl"<test label>" -gl"<deployment
	  path>"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project named "Projecta" (without the quotation marks) in Visual
	  SourceSafe.
	
	2. Add files to the project.
	
	3. Use the Admin utility to designate Projecta as a Web project (go to the Tools
	  menu, click Options, and then click the Web Projects tab) and set the
	  deployment path to "C:\test" (without the quotation marks).
	
	4. Add a label "testlabel" to Projecta.
	
	5. From the Vss/Win32 folder run the command line:
	
	  ss deploy $/Projecta -vltestlabel
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q169260 HOWTO: No Command Line Equivalent for Some Web Features
	
	  Q240052 HOWTO: Specifying a VSS Database Using the Command Line
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
