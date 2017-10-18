---
layout: page
title: "Q186567: Terminal Server Domain Structure Considerations"
permalink: kb/186/Q186567/
---

## Q186567: Terminal Server Domain Structure Considerations

	Article: Q186567
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses ways in which Terminal Server will be integrated into
	existing Windows NT domains. Terminal Server can act as a member server or a
	domain controller in a Windows NT domain and can be related to Windows NT
	domains through trust relationships. In these ways, Terminal Server is no
	different from Windows NT Server.
	
	MORE INFORMATION
	================
	
	The user accounts database (SAM) is also no different from Windows NT Server,
	although there are many new Terminal Server user configuration options. The user
	configuration options in Terminal Server's User Manager (and those in Citrix
	Winframe 1.7) are stored in original equipment manufacturer (OEM) fields built
	into Windows NT's security account manager (SAM) file. In Windows NT Server, the
	fields contain null values. Account replication should not be an issue between
	Terminal Server and Windows NT 3.51 or Windows NT 4.0.
	
	Although compatibility is not an issue, administrators may want to consider the
	following:
	
	- Assigning Terminal Server-specific user configuration options to users will
	  increase the size of the SAM from 1 to 8 KB per modified user.
	- Modifying user configurations must be done through Terminal Server's User
	  Manager.
	- Any modification to user accounts must be made in the user's logon domain.
	
	One obvious concern for administrators is the size of the SAM. Terminal Server
	user accounts can be significantly larger than normal user accounts. Consider
	the configurable options and additional path information that can be added to an
	account. A fully configured Terminal Server account is about 8 KB, compared to 1
	KB for a normal Windows NT user. This means that every field is filled in, which
	is seldom the case. In fact, if a user is created and defaults are used, the
	accounts are no bigger than the default size for Windows NT users. So, depending
	on what information and options are stored in the accounts, a Terminal Server
	account will be from 1 to 8 KB, with an average of 4 KB.
	
	Domain structures are also potentially more complex with Terminal Server. For
	Beta 1, Microsoft recommended a member server role for Terminal Server. This
	creates some immediate problems. There are no domain issues related to initially
	connecting to a Terminal Server computer, other than that the Terminal Server
	needs to be related in some way (be a member or domain controller in the
	accounts, or a resource domain) to the domain(s) the users want to log on to.
	But logging on is more complicated.
	
	If users are created with default configurations, there is no difficulty.
	Terminal Server client user accounts do not have to be modified for the user to
	log on. However, if the administrator wants users to have Terminal Server
	Profiles rather than User Profiles (see the section on User Manager for more
	detail), then the logon domain's user account database must be modified using
	Terminal Server's User Manager. For example, if the administrator created a
	resource domain specifically for Terminal Server computers, to avoid having all
	that additional user information in the accounts domain SAM, then she or he
	would also not be able to use any of Terminal Server's user modifications. These
	modifications have to exist in the accounts domain's SAM.
	
	To work around this issue, an administrator could create a master domain of
	Terminal Server computers and create a two-way trust with any other master
	domains. This could lead to a proliferation of trusts.
	
	Administrators need to think carefully about how Terminal Server will be
	integrated into existing domains. If administrators want to use the Terminal
	Server-specific user account modifications, those changes need to be made in the
	user's logon domain using Terminal Server's User Manager. This will increase the
	size of the domain SAM, perhaps considerably. For users to log on to the domain
	after connecting to the Terminal Server computer, the Terminal Server computer
	needs to be related to the logon domain in some way, either by being a domain
	controller or a member server in the domain or through a trust relationship.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
