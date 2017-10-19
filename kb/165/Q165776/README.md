---
layout: page
title: "Q165776: FIX: Admin Cannot See Files with Project Security Enabled"
permalink: /kb/165/Q165776/
---

## Q165776: FIX: Admin Cannot See Files with Project Security Enabled

	Article: Q165776
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbVS97sp1fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	1. The SourceSafe Admin does not see any files in a project in the SourceSafe
	  explorer.
	
	2. The error message: "this command only works on projects" appears when doing
	  various SourceSafe operations.
	
	3. When assigning rights by project to a parent project, not all subprojects
	  inherit the rights.
	
	4. When assigning rights by project, or rights assignments to users, you receive
	  the following error: Error writing to file.
	
	
	CAUSE
	=====
	
	The Rights.dat file is corrupted when you assign more than 16 users the rights
	(by project) to an individual project.
	
	RESOLUTION
	==========
	
	To prevent this from happening, do one of the following:
	
	- Turn off project security. This provides all users global-full or read-only
	  access rights. With project security turned off, you can set read-only access
	  by selecting the Read Only check box on the Users menu under Edit User in the
	  Admin module.
	
	- Limit user-right settings to 16 or less users per project.
	
	Once the problem occurs, the Rights.dat file has become corrupted and the entire
	user management and rights system must be rebuilt. Use the following steps to do
	this:
	
	1. Make sure that the Visual SourceSafe server and all client installations are
	  upgraded to Visual SourceSafe 5.0 Service Pack 1 or later, or to a later
	  version of Visual SourceSafe.
	
	2. Rename the Rights.dat file in the VSS\data directory.
	
	3. Run analyze -f on the data directory.
	
	This will rebuild the Rights.dat file, but there will be no project security
	information. You will need to run the Visual SourceSafe Admin module and
	re-create rights by user or by project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This bug was corrected in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual SourceSafe database.
	
	2. Add at least 1 project and at least 1 file to that project.
	
	3. In the Admin program, add 16 users.
	
	4. Setup the users with any combination of rights (R,RC,RCA,RCAD) to the new
	  project.
	
	5. At this point, Admin should still have access to the project.
	
	6. Add the 17th user and give him/her rights as well.
	
	7. Run SSEXP, login as Admin and try to view the file(s) in the project.
	
	Additional query words: password missing administrator
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp1fix 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbSSafe500 kbVS97 kbVS97Search
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
