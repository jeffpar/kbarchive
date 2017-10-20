---
layout: page
title: "Q196599: FIX: Visual SourceSafe Hangs With Recursive Get on &#36;/ With Label"
permalink: /kb/196/Q196599/
---

## Q196599: FIX: Visual SourceSafe Hangs With Recursive Get on &#36;/ With Label

{% raw %}

	Article: Q196599
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack _IK kbSSafe600bug kbSSExplorer kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual SourceSafe (VSS) hangs when performing a recursive GET of a labeled
	version of the root project ($/).
	
	RESOLUTION
	==========
	
	To work around this problem, select Options from the Tools menu in the Visual
	SourceSafe (VSS) Explorer, and click the General tab. Select the "Act on
	Projects Recursively" option (note that after changing this setting you must
	exit the VSS Explorer for it to work on the command line). On the command line,
	do not use the -r switch. Use wildcards in the command. For example, if the
	command that is failing is as follows:
	
	  ss get $/ -r -vlbeta1
	
	use this:
	
	  ss get $/*.* -vlbeta1
	
	There is no workaround in the Visual SourceSafe Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This problem happens only when using a Visual SourceSafe 6.0 client accessing a
	Visual SourceSafe 6.0-formatted database. If the database is in Visual
	SourceSafe 5.0 format, the command line returns the error "version not found."
	The same workaround can be applied.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add a file to the root project.
	
	2. Label the root project (for example, Label1).
	
	3. At the command line, issue the following command:
	
	  ss get $/ -r -vlLabel1
	
	4. In the Visual SourceSafe Explorer, select the root project.
	
	5. From the Tools menu, click Show History, and select the Include Labels check
	  box in the Project History Options dialog box.
	
	6. Select the label (for example, Label1) from the History.
	
	7. Click Get.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack _IK kbSSafe600bug kbSSExplorer kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
