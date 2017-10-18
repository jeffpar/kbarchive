---
layout: page
title: "Q162933: ACC97: User Without Permissions Can Check Out an Object in VSS"
permalink: kb/162/Q162933/
---

## Q162933: ACC97: User Without Permissions Can Check Out an Object in VSS

	Article: Q162933
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	When you try to check out a module for which you have no Microsoft Access
	permissions, you may receive the following error message:
	
	  You don't have permissions to modify '<object name>.' To modify this
	  object you must have Modify Design permission for it. If the object is a
	  table, you must also have Delete Data and Update Data permissions for it. For
	  more information on permissions and who can set them, click Help.
	
	You will then receive a Visual SourceSafe error that states that the object was
	not imported.
	
	Although the module is not replaced and the permissions are enforced as expected,
	the module appears as "checked out." You are then not allowed to either check in
	or undo the checkout. The Admin user must check it in.
	
	CAUSE
	=====
	
	Adding a secure database to Visual SourceSafe will not remove security on the
	local version of that database. Visual SourceSafe and Microsoft Access will
	function normally, as long as the users have permissions to modify objects in
	the local database. If they log in as someone who doesn't, then they will be
	able to check out an object but not be able to make changes to it.
	
	RESOLUTION
	==========
	
	If you delete the local version of the database and create a new one from Visual
	SourceSafe, then the resulting database will not have any of the security
	permissions in it.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database and name it vssTest.mdb.
	
	2. Create a new module and name it modVssTest. Save the module.
	
	3. On the Tools menu, click Security, and select "User and Group Accounts."
	
	4. Click the Change Password Tab and give Admin a new password of "admin"
	  (without the quotation marks).
	
	5. Click the Users tab, and click New.
	
	6. Create a new user with a name of "test" (without the quotation marks) and a
	  Personal ID of "1234" (without the quotation marks).
	
	7. Click OK.
	
	8. On the Tools menu, click Security, and select "User and Group Permissions."
	
	9. Click to select Groups.
	
	10. Select Users in the Users/Group Name box and revoke all permissions for
	  Users on modVssTest by clicking to clear the Read Design check box.
	
	11. Click OK.
	
	12. On the Tools menu, click SourceSafe, and select "Add Database to
	  SourceSafe."
	
	13. Close Microsoft Access.
	
	14. Restart Microsoft Access and log in as "test" (without the quotation marks).
	
	15. Open vssTest.mdb.
	
	16. Using the right mouse button, click modVssTest, and click Check Out.
	
	17. Note that you receive the first of error messages mentioned in the
	  "Symptoms" sections. Click OK, and then OK on the next error message. Note
	  that the Object shows in the database container as checked out.
	
	18. Using the right mouse button, click modVssTest and click Check In. Note that
	  you receive an error message that "You don't have permission to read
	  '<object name>'". Click OK. Note that you receive an error message
	  from SourceSafe that it failed to export the object.
	
	19. Close Microsoft Access.
	
	20. Open Microsoft Access and log in as Admin with password "admin" (without the
	  quotation marks).
	
	21. Open vssTest.mdb.
	
	22. Using the right mouse button, click modVssTest and select Check In. The
	  admin user is able to check the object back into SourceSafe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
