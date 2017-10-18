---
layout: page
title: "Q186469: PRB: Rights from Parent Project not Inherited"
permalink: kb/186/Q186469/
---

## Q186469: PRB: Rights from Parent Project not Inherited

	Article: Q186469
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Subprojects, that have user's rights set explicitly, no longer inherit rights
	from their parent projects as expected.
	
	If a user's rights are not explicitly set for a project, the project inherits
	rights from the parent project. This allows you to control the rights of an
	entire subtree by setting the user's rights to the root project. However, once
	explicitly setting a user's rights for a subproject, reverting to inheriting
	rights from the parent project can be difficult and less intuitive.
	
	RESOLUTION
	==========
	
	To change the user's rights back to inherited rights, in the SourceSafe Admin
	utility, from the Tools menu, choose Rights Assignments for the user. Next,
	select the project to which you want to restore inherited rights and then click
	Delete Assignment. This should restore the inherited rights. However, this
	resolution limits you to making changes to one user at a time.
	
	To change the rights for multiple users, from the Tools menu, choose "Rights by
	Project". This allows you to select multiple users and give them explicit rights
	relatively quickly. If you have just given explicit rights to 20 users,
	reassigning inherited rights can be tedious.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add a new user named TestUser with Read, Check Out/Check In, and
	  Add/Rename/Delete (RCA) rights at the root ($/).
	
	2. Create two projects, $/test1 and $/test2/samp.
	
	3. Using the SourceSafe Admin from the Tools menu, choose "Rights by Project".
	  Select the project named $/test1. TestUser should have RCA rights for
	  $/test1. Note that $/test2/samp inherits those rights.
	
	4. Change TestUser's rights for $/test1 to RC. Note this user's rights to
	  $/test2/samp will also be RC.
	
	5. Change TestUser's rights for $/test1 back to RCA. The rights for /$test2/samp
	  are also now RCA.
	
	6. For TestUser, assign Read, Check Out/Check In, Add/Rename/Delete and Destroy
	  (RCAD) rights for $/. TestUser's rights for $/test1 are still RCA.
	
	
	Additional query words: kbDSupport propagate kbdse kbnokeyword
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0
	Issue type        : kbprb
	
	=============================================================================
	
