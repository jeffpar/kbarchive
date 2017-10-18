---
layout: page
title: "Q103055: Network DDE Fails with Floating Profile from Other Computer"
permalink: kb/103/Q103055/
---

## Q103055: Network DDE Fails with Floating Profile from Other Computer

	Article: Q103055
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	WARNING: Using Registry Editor incorrectly can cause
	   serious, system-wide problems that may require you to
	   reinstall Windows NT to correct them. Microsoft cannot
	   guarantee that any problems resulting from the use of
	   Registry Editor can be solved. Use this tool at your own
	   risk.
	
	
	SYMPTOMS
	========
	
	Users who have floating or mandatory user profiles cannot receive Chat
	conversations on computers other than the one on which their original profile
	was created. Similarly, they will not be able to successfully create Clipbook
	Viewer pages or play Hearts. If a profile is created on the computer they will
	use, these applications will function on their own computer, but not on other
	computers. If their initial profile is created on an administrator's computer,
	these applications will not work on any computer.
	
	CAUSE
	=====
	
	When Network DDE validates a conversation, it first checks to see if the DDE
	share is listed as a trusted share for the user logged on to the computer
	sharing the conversation. It does this by opening the following Registry subkey
	
	  HKEY_CURRENT_USER\Software\Microsoft\NetDDE \DDE Trusted
	  Shares\DDEDBi<xxxxxxx>
	
	where <xxxxxxx> is a serial number found in the SharesDBInstance value of
	the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NetDDE\DDE Shares
	
	This serial number is statistically unique on each computer and serves to tie the
	Trusted Shares list to the computer on which the shares are trusted. These keys
	are created during setup. For floating and mandatory profiles, the
	DDEDBi<xxxxxxx> subkey will contain only the entry for the computer on
	which the profile was created. When Network DDE attempts to open the
	DDEDBi<xxxxxxx> subkey on other computers, the attempt fails since other
	computers do not have the same serial numbers. This behavior disallows Network
	DDE conversations from being established.
	
	NOTE: You must be a member of the Users, Power Users, Server Operators, or
	Administrators group in order to create Clipbook pages.
	
	
	WORKAROUND
	==========
	
	To work around this problem, create floating profiles on the workstation that
	the user is likely to work on. You can also enable Network DDE applications to
	work on a particular computer by manipulating values in the Registry. You need
	to copy the DDE trusted shares information from the target computer's default
	profile into the user's online profile. You must have administrative privileges
	on the target computer in order to perform these actions:
	
	1. Start Registry Editor (REGEDT32.EXE) on the remote workstation or the target
	  computer.
	
	2. If you logged on to the remote workstation, choose Select Computer from the
	  Registry menu to look at the Registry database on the target computer.
	
	3. In the target computer's Registry database, move to the following subkey and
	  make a note of the subkey name that is in the form of
	  DDEDBi<xxxxxxxx>:
	
	  HKEY_USERS\.DEFAULT\Software\Microsoft\NetDDE \DDE Trusted Shares
	
	4. Select the DDEDBi<xxxxxxxx> subkey and choose Save Key from the
	  Registry menu, saving the file to a UNC path with the following format:
	
	  \\<computer name>\<share name>\<path>
	
	5. Select HKEY_USERS on Local Machine and choose Load Hive from the Registry
	  menu. Load the floating or mandatory profile from the shared directory
	  indicated in the user's account under Profile Information (this is the
	  location that the profile is downloaded from when the user logs on). Use any
	  name for the key when prompted (TEST for example).
	
	6. Under the loaded user profile (TEST), select the following subkey:
	
	  Software\Microsoft\NetDDE\DDE Trusted Shares
	
	7. From the Edit menu, choose Add Key and enter the name you noted in step 3.
	
	8. Select the new DDEDBi<xxxxxxx> subkey and choose Restore from the
	  Registry menu. When prompted, enter the same path to the saved key that you
	  used in step 4.
	
	9. Use the Security Permissions command to change the new DDEDBi<xxxxxxxx>
	  subkey to have the same permission as the other DDEDBi<xxxxxxxx> subkey
	  that is next to it. Be sure to change all subkeys by choosing Replace
	  Permission On Existing Subkeys in the Permissions dialog box.
	
	10. Select the root key of this hive (TEST) and choose Unload Hive from the
	  Registry menu.
	
	BACKGROUND
	----------
	
	Clipbook, Chat, and Hearts rely upon Network DDE to operate. Network DDE is a
	protocol for sending DDE messages across a network. Similar to the way in which
	directories may be shared across the network, a DDE conversation can be "shared"
	on the network. The Network DDE DSDM service maintains a database of shared
	conversations on each computer. When you share a page in Clipbook, a Network DDE
	share is created in this database. Similarly, in order for Chat to operate,
	Setup creates a Network DDE share for Chat.
	
	When a Network DDE share is accessed over a network, the shared conversation is
	referenced, and appropriate security checks are made to make sure the requester
	can be granted access. For some shared conversations, an application must be
	running on the computer sharing the conversation--for example, any time a linked
	item needs to be updated, or when a Chat conversation is started with someone.
	In either case, the application that placed the information in Clipbook
	(Microsoft Excel for example) or Chat must be running in order to service the
	request. All applications on a computer are running in the "security context" of
	the user who is interactively logged on to the computer. Therefore, when a
	remote request is serviced by a running application on a computer sharing a
	Network DDE conversation, the application handling the request is running in the
	security context of the person logged on to the sharing computer, not in the
	remote user's security context.
	
	With this design, there is the potential for security violations. Conceivably, a
	user could share a Network DDE conversation and remotely connect to it while
	someone else was logged on, thus enabling the user to access the sharing
	computer as if he or she were the other logged on user. To avoid this situation,
	in order for a shared conversation to be used, the logged on user at the time of
	use must have this shared conversation in its list of trusted shares.
	
	When Windows NT is installed, the following Registry value
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NetDDE \DDE Shares\SharesDBInstance
	
	is set to a random number in order to uniquely identify the computer. The Chat$,
	CLPBK$, and Hearts$ keys are also created under the following subkey:
	
	  HKEY_USERS\Default\Software\Microsoft\NetDDE \DDE Trusted
	  Shares\DDEDBi<xxxxxxxx>
	
	The <xxxxxxxx> value in this key name is obtained from the random number
	entered in the SharesDBInstance value, as mentioned above. When a new user logs
	on or a floating or mandatory profile is created on a computer, these keys and
	values are copied into the user's profile. This means that the user's profile
	has all the Network DDE keys the user will need for the computer that he or she
	first logs on to or that the profile is created on. However, the user does not
	have similar entries for other computers that the user may log on to. When
	Network DDE is asked to add a trusted share for a user, a new
	DDEDBi<xxxxxxxx> key should be created. Instead, Network DDE attempts to
	open this key and the attempt fails because the key does not exist.
	
	The Trusted Shares list and the list of Network DDE shares are kept in the
	Registry and in general should not be directly modified. However, to work around
	this problem, it is easiest to manually patch the Registry as described in the
	"Workaround" section above.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
