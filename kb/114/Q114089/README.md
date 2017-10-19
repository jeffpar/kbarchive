---
layout: page
title: "Q114089: Using the Windows NT NetDDE Share Manager"
permalink: /kb/114/Q114089/
---

## Q114089: Using the Windows NT NetDDE Share Manager

	Article: Q114089
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before applications can share data, they must establish a communication channel
	called a trusted share. APIs exist for creating Network DDE shares under Windows
	for Workgroups 3.1x, but applications you write using these APIs cannot
	communicate when run on Windows NT systems because they can't create trusted
	shares.
	
	The Windows NT DDE Share Manager allows you to create and manage Network DDE
	shares. This article discusses how to use Share Manager to create a DDE share
	for an application that runs on Windows NT, rather than rewriting the
	application.
	
	MORE INFORMATION
	================
	
	There are two types of DDE applications: source and destination. The DDE source
	application defines the DDE Share on the system on which it runs and provides
	data to the DDE destination application.
	
	To run the DDE Share Manager, execute DDESHARE.EXE, located in the WINNT\System32
	sub-directory. Two shared-folder icons are shown. The first lists all shares on
	the system and the second (checked) lists the shares trusted by the currently
	logged on user.
	
	To view a share's properties:
	
	1. Select the Shares menu.
	
	2. Select DDE Shares or double-click on the unchecked shared-folder icon.
	
	3. Select the share name then select Properties.
	
	A default installation of Windows NT will have three existing shares: Chat$,
	CLPBK$, and Hearts$.
	
	Step One: Creating a Share
	--------------------------
	
	When adding a new share, you are required to provide three properties:
	
	- Share Name: This is used by the destination program when it requests data. By
	  convention, system DDE share names end with a dollar sign ($).
	
	- Application Name: This is for the Service name used by the DDE source
	  application. Generally, each application provides only one DDE service, the
	  name of which usually matches the application name. Do not include extension
	  or path information.
	
	- Topic Name: This is a general name for a set of data. One service can have
	  multiple topics. The source application defines the topic name, and the
	  destination application uses it to request specific data.
	
	Since there are now two types of Network DDE, Share Manager offers three
	text-boxes for application and topic name, allowing you the option of including
	application and topic names in "old style," "new style," or in the "static"
	field. If you are creating a share used to communicate with an existing Windows
	for Workgroups application, enter the application name and topic name in the
	"static" field. Old style DDE is message-based; new style DDE uses a DDE
	Management Library--a layer that sits on top of the DDE protocol. An application
	written specifically for Windows NT can take advantage of the new style DDE.
	Having these entries allows for different naming conventions while still
	providing old and new style DDE programs access to the shared data through the
	same share name.
	
	The option "Start Application on Connect" lets the destination application
	initiate a conversation with a source application that isn't running at the
	moment, although it must be in the system path. If you select the "In Service"
	option the program must be registered to the Windows NT system as a service, for
	example Chat. The "Item Security" options control access to the data items
	within a topic. For some applications, you may need to restrict access to
	specific items. Under "Item Security" select "Grant access only to these items"
	and enter the item names. If no restrictions are required, select "Grant access
	to all items."
	
	You can specify permissions for any user known to the NT security system, set up
	specific permissions for each user who will be accessing the share, and limit a
	user to specific DDE actions. The default allows everyone read and link
	permissions.
	
	When you select OK, the share is created and the share information is written to
	the registry in the following location:
	
	  \HKEY_LOCAL_MACHINE\Software\Microsoft\NetDDE\DDE Shares\sharename\...
	
	Step Two: Trusting the Share
	----------------------------
	
	On the Windows NT system, the Network DDE DSDM service maintains a database of
	shared conversations. When a Network DDE share is accessed, the shared
	conversation is referenced and security checks determine if the requester can be
	granted access. Applications on a computer run in the "security context" of the
	user who is interactively logged on to the computer, so when a remote request is
	serviced by a running application on a computer sharing a Network DDE
	conversation, the application handling the request runs in the security context
	of the user logged onto the sharing computer, not in the security context of the
	remote user.
	
	This design complicates security issues. If, for instance, a remote user who
	establishes a Network DDE share and remotely connects to it while someone else
	is logged on, has the same access privileges to the sharing computer as the
	logged on user. To avoid this violation, users logged onto the source machine
	cannot access its applications unless they have this share in their trusted
	shares list.
	
	To add the share to the list of trusted shares, highlight the share name and
	select "trust share." Select the options that apply in the context of the
	currently logged on user. The trusted share information is written to the
	registry in the path:
	
	  \HKEY_CURRENT_USER\Software\Microsoft\NetDDE\DDE Trusted Shares
	
	Additional query words: wfw wfwg prodnt NddeShareAdd NDdeShare
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
