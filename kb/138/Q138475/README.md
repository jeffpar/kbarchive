---
layout: page
title: "Q138475: HOWTO: Set Up Multiple Check Outs on a Project Basis"
permalink: /kb/138/Q138475/
---

## Q138475: HOWTO: Set Up Multiple Check Outs on a Project Basis

{% raw %}

	Article: Q138475
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some circumstances, you may want to allow several SourceSafe users to
	check out a file simultaneously. This can be accomplished on a global basis
	through use of the Visual SourceSafe Admin Utility. However, you may want to
	allow only a certain set of files to be checked out by multiple users. This
	article describes how to do it.
	
	MORE INFORMATION
	================
	
	Use the following procedure to allow multiple checkouts on a global basis:
	
	1. Open or switch to the Visual SourceSafe Admin Utility.
	
	2. On the Tools menu, click Options to open the Options dialog box.
	
	3. Select the Allow Multiple Checkouts check box (located on the General Page).
	
	4. Click OK. Note that this change will not take effect until users restart
	  SourceSafe.
	
	Use the following procedure to allow multiple checkouts at the project level:
	
	1. Place the files that you want to have the capability for multiple checkouts
	  in a certain project or projects.
	
	2. Open the Srcsafe.ini file (usually located in the root of your SourceSafe
	  server installation) in any ASCII text editor.
	
	3. Add an entry at the end of the Srcsafe.ini file for each project for which
	  you want to set multiple checkouts to true. This entry should have the
	  following syntax:
	
	     [$/<project path>/<project name>]
	     Multiple_Checkouts = Yes
	
	  For example, if you only want to allow multiple checkouts for the project
	  $/Mydir/Myproject, the entry would look like:
	
	     [$/Mydir/Myproject]
	     Multiple_Checkouts = Yes
	
	4. Save the changes to the Srcsafe.ini file. Note that these changes will not
	  take effect until users restart SourceSafe. Note that when you set multiple
	  checkouts at the project level, the Allow Multiple Checkouts check box in the
	  Visual SourceSafe Admin Utility never be selected; that is, it is always
	  unchecked.
	
	NOTE: SourceSafe will not allow multiple checkouts on a binary file. This is by
	design.
	
	REFERENCES
	==========
	
	Visual SourseSafe version 5.0 provides added flexibility for enabling and
	disabling Multiple Checkouts at the file or project level. For more information,
	please refer to the User's Guide, chapter 4 "Project and File Basics."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
