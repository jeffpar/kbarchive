---
layout: page
title: "Q199162: Issues with Global Groups, Local Groups, and Trusts"
permalink: /kb/199/Q199162/
---

## Q199162: Issues with Global Groups, Local Groups, and Trusts

{% raw %}

	Article: Q199162
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following symptoms may occur:
	
	1. When attempting to administer resources (such as user accounts through User
	  Manager for Domains) in a trusting domain, the administrator receives an
	  access denied message.
	
	2. On a member server in a trusting domain, an administrator gives permissions
	  to a local group of users, but members of that group receive access denied
	  messages when trying to access the resource.
	
	CAUSE
	=====
	
	It is possible that the group memberships have not been configured in a correct
	manner:
	
	Symptom 1 often occurs when the domain administrators global group from the
	trusted domain has not been added to the local administrators group in the
	trusting domain.
	
	Symptom 2 can occur because of insufficient share or NTFS permissions, as well as
	incorrectly configuring the membership of a local group in the resource domain.
	
	RESOLUTION
	==========
	
	To Resolve Symptom 1
	--------------------
	
	After establishing a trust, the domain administrators for a trusted domain are
	not automatically added to the administrators group of a trusting domain. If the
	ability to administer the trusting domain by members of the the trusted domain
	is desired, these members must be manually added.
	
	To Resolve Symptom 2
	--------------------
	
	NTFS permissions and share permissions are separate entities. Users must have
	sufficient permissions at both levels to access a resource, because a process
	will be granted the most restrictive of the two permissions. Another possibility
	for this problem is because member servers and workstations in a domain have
	separate accounts databases from the domain controllers; for example, creating a
	local group on a domain controller does not create the same local group in the
	accounts databases of workstations and servers in the domain. That local group
	would only exist in the SAM for the domain controllers. Likewise, creating a
	local group on a workstation or member server only creates that local group in
	that one computer's SAM.
	
	Furthermore, local groups on a member server cannot include local groups from a
	domain controller. Interestingly enough, a common mistake is to try to add a
	local group from a domain controller to the access control list (ACL) on a
	workstation or member server. This can be done by clicking Search in the Add
	Users and Groups dialog box. Unfortunately, the result is essentially
	meaningless because a member of the local group on a domain controller will
	still not be able to access a shared resource through that type of group
	association.
	
	For a user in a trusted domain to access resources in a trusting domain, perform
	the following steps:
	
	1. Create a global group in the trusted domain.
	
	2. Create a local group on the member server in the trusting domain.
	
	3. Add the global group from the trusted domain to the local group in the
	  trusting domain.
	
	4. Assign permissions at the share and NTFS level to the local group on the
	  member server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
