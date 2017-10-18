---
layout: page
title: "Q221472: Unexpected Permissions After Moving Files w/ New ACL Editor"
permalink: kb/221/Q221472/
---

## Q221472: Unexpected Permissions After Moving Files w/ New ACL Editor

	Article: Q221472
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Service Pack 4 for Windows NT 4.0 introduced the Security Configuration Manager
	(SCM) utility.
	
	NOTE: This utility is not installed by default with SP4 but must be installed
	seperately.
	
	SCM installs a new Access Control List (ACL) Editor, the tool used to set
	permissions on files. When moving files within the same partition on an NTFS
	volume, the resulting permissions of the files moved are not what would be
	previously expected.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Prior to the new ACL Editor, permissions were retained for files that were moved
	within the same partition. When files are moved within the same partition, the
	entries in the Master File Table are simply modified; therefore, the ACL does
	not have to be re-created.
	
	With the new ACL Editor, you need to take into account the inheritance bit.
	
	When files are moved within the same partition and the inherited permissions of
	the new parent do not conflict with the old parent, there is no problem. The
	problem occurs when there is a conflict between the permissions being inherited
	from the new parent and the old parent.
	
	For example:
	
	  C:
	    \Dir1
	    \Dir2
	         \SubDir
	
	Permissions are as follows:
	
	  Dir1 : Admins=FC; Users=Change; Power Users=Change
	  Dir2 : Admins=FC; Users=Read
	  SubDir : Inherit=On; (Admins=FC; Users=Read) inherited from parent
	  ('Inherit=On' means that the inheritance check box is selected.)
	
	If SubDir is moved to Dir1, the permissions are as follows in ACL Editor for
	SubDir:
	
	  Inherit=Off; Administrators=Full; Users=Read
	
	Both Users and Administrators are unavailable, as if they are set to still
	inherit permissions, the permissions are also not editable. If you reset the
	permissions (make a change) on the parent, the child's permissions will be
	available and can be edited.
	
	Expected behavior should be:
	
	- Move will not change the security; that is, SubDir will continue to have the
	  inherited information from Dir2.
	
	- Making change to Dir1 permissions should make SubDir protected (inherit=off)
	  and all the permissions should become explicit but remain the same as they
	  were before the move.
	
	For additional information about the new ACL Editor, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q195509 Installing SCM from SP4 Changes Windows NT 4.0 ACL Editor
	
	For additional information about how to get Security Configuration Manager,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q195227 SP4 Security Configuration Manager Available for Download
	
	Additional query words: SCE SECEDIT
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	
	=============================================================================
	
