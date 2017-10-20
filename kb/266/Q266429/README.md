---
layout: page
title: "Q266429: BUG: &quot;Invalid DOS Path&quot; Error with VSS Command Line GET"
permalink: /kb/266/Q266429/
---

## Q266429: BUG: &quot;Invalid DOS Path&quot; Error with VSS Command Line GET

{% raw %}

	Article: Q266429
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe500bug kbSSafe600 kbSSafe600bug _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute a Visual SourceSafe command line GET with the -gf switch on a
	file, if the working folder does not exist, you may receive the following error
	message:
	
	  Invalid DOS Path
	
	CAUSE
	=====
	
	The GET command assumes that the working folder has already been created.
	
	RESOLUTION
	==========
	
	To work around this problem, execute the following commands:
	
	  " ss get $/project1 -gf -g-
	  ss get $/project1/test.txt -gf " (without the quotation marks)
	
	The first command creates the directory structure, and the second command does a
	GET on the Test.txt file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project named project1, and place a file named Test.txt in the
	  project.
	
	2. Set the working folder for project1 to C:\project1.
	
	3. When you receive the message "C:\project1 does not exist, do you want to
	  create it?", click OK.
	
	4. Delete C:\project1.
	
	5. From a command line, type the following (execute this command from the
	  Vss\Win32 folder):
	
	  " ss get $/project1/test.txt -gf " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe500bug kbSSafe600 kbSSafe600bug _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
