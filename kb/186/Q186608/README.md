---
layout: page
title: "Q186608: Single-Application Sharing with Terminal Server"
permalink: kb/186/Q186608/
---

## Q186608: Single-Application Sharing with Terminal Server

	Article: Q186608
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up a Terminal Server and Terminal Server
	Client for single-application sharing. With single-application sharing, the user
	clicks a shortcut icon (or the shortcut executes in a logon script, startup
	group, and so on) that launches the Terminal Server Client; automatically logs
	the user, and launches a single application, with no accompanying desktop. When
	the user exits the application, the Terminal Server Client session terminates.
	
	MORE INFORMATION
	================
	
	Administrators may want to create an environment for single-application users
	using Terminal Server and the Terminal Server Client. It is possible to create a
	startup environment in which every user connecting to a particular Terminal
	Server logs on automatically and/or runs a common, single application. It is
	also possible to define multiple connections on a Terminal Server so that one
	connection supplies one application, and another connection supplies another
	application. User Manager may also be used to specify a single application for a
	specific user.
	
	There are two general areas on which the administrator must focus to be able to
	set up a Terminal Server and Terminal Server Client for single- application
	sharing. First, determine the environment.
	
	1. Determine whether you want users to:
	
	  a. Specify a unique username and password at logon.
	
	  b. Log on with a predefined username, and required to specify a password.
	
	  c. Log on with both a predefined username and password.
	
	  d. All use the same account and password (as might be true for anonymous
	     access).
	
	2. Determine whether you want users to:
	
	  a. Run a single application.
	
	  b. Some users to run a single application and others to get a normal desktop.
	
	  c. Some users to run one application, others to run a separate application,
	     and others to get a normal desktop.
	
	  d. Most users to get a normal desktop but individual users to run single
	     applications.
	
	The second area of focus is that the administrator needs to be familiar with the
	tools and their options.
	
	1. Connection Configuration One connection is defined by default - rdp-tcp. This
	  is the RDP protocol being encapsulated within TCP. If you add a second
	  network adapter, you can define a second connection (also using the rdp-tcp
	  protocol/transport). Only one connection can be defined per network adapter.
	
	  If you examine the advanced properties of the connection, you will see that
	  you can specify the following for that connection:
	
	  1. A username to automatically use.
	
	  2. A password to automatically use.
	
	  3. A domain to automatically log on to.
	
	  4. An initial program to run.
	
	  These options can be used separately or together. They will affect every user
	  who connects using this defined connection. Specifying all these options
	  would create an environment in which all users would automatically log on
	  with this username and password into this domain and would run this single
	  application. When the user exits the application, the client session
	  terminates.
	
	2. User Manager Terminal Server's User Manager allows specific user
	  configurations. Open a user account and then press the CONFIG button. The
	  options here will look very similar to those in Connection Configuration, and
	  they work the same way. With configuration options, you can specify an
	  automatic logon and a single application that the user will run.
	
	  If you create both Connection Configuration options and User Manager options
	  for autologon and/or an initial program, the Connection Configuration
	  settings always override those set in User Manager. This means that if you
	  want to specify options in Connection Configuration and also create
	  configurations for specific users in User Manager, you will need to install
	  at least two network adapters; define a configuration for each adapter in
	  Connection Configuration; use one defined connection for general connections
	  and modified User Manager accounts; and use the other defined connections and
	  its options for autologon/single-application launching.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
