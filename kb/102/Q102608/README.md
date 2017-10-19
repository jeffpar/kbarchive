---
layout: page
title: "Q102608: Differences in Security: Windows NT and LAN Manager"
permalink: /kb/102/Q102608/
---

## Q102608: Differences in Security: Windows NT and LAN Manager

	Article: Q102608
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Some of the major differences in security schemes between Windows NT
	Advanced Server and Microsoft LAN Manager are:
	
	- Under Windows NT Advanced Server, user and group permissions are cumulative.
	  Deny access takes precedence over grant access. Under LAN Manager, individual
	  user permissions take precedence over group permissions.
	
	  NOTE: When Windows NT Advanced Server checks permissions, it does so in one
	  pass, not discriminating between users and groups. As soon as a "deny access"
	  permission is reached, the search is terminated and access to the resource is
	  denied. However, LAN Manager makes two passes when it checks resource
	  permissions: a user pass and a group pass. Because of this, LAN Manager could
	  deny a user access, but then grant that user access if the user belongs to a
	  group that has access to a resource.
	
	- A Windows NT Advanced Server domain contains only domain controllers and
	  servers. All servers are considered backup domain controllers. A LAN Manager
	  domain includes a primary domain controller, backup controllers, and
	  stand-alone servers.
	
	  NOTE: LAN Manager servers in a Windows NT Advanced Server domains cannot act
	  as domain controllers, nor can they validate logon attempts by Windows NT or
	  Windows NT Advanced Server computers. LAN Manager servers can validate LAN
	  Manager server and client logons in a mixed domain of LAN Manager and Windows
	  NT computers.
	
	- Under Windows NT Advanced Server, you must logon to any local computer with
	  an account and password. Local computer security is optional under LAN
	  Manager, only on computers configured to be servers.
	
	  NOTE: Users from outside a domain with both Windows NT Advanced Server and LAN
	  Manager computers cannot access LAN Manager domain resources unless a local
	  account is created in Windows NT Advanced Server. This is because LAN Manager
	  servers do not recognize global groups or trust relationships.
	
	- Windows NT Advanced Server supports trust relationships between domains and a
	  single network for all trusted domains. LAN Manager does not support trust
	  relationships and requires that users log onto each domain separately.
	
	- Any user account can own a file under Windows NT Advanced Server. Owners can
	  grant and deny access to the files they own. This concept is not supported
	  under LAN Manager.
	
	- Windows NT Advanced Server allows you to deny access to resources not owned
	  by administrative accounts. Ownership may be taken later, but an auditing
	  trail is created. LAN Manager allows all administrative accounts to access
	  all resources.
	
	- Windows NT Advanced Server protects setting system functions (such as setting
	  the system time and formatting the hard disk.) System functions are not
	  protected under LAN Manager.
	
	- Local and global groups are recognized by Windows NT Advanced Server. LAN
	  Manager does not recognize local groups.
	
	- Windows NT Advanced Server allows only Windows NT computers to administrate
	  other Windows NT computers. LAN Manager computers can be administrated from
	  any MS-DOS, UNIX, or OS/2 computer running LAN Manager, or from a Windows NT
	  computer.
	
	- File and directory permissions apply to local and network users under Windows
	  NT Advanced Server. Permissions apply only to network users, unless local
	  security is enabled on LAN Manager servers.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	
