---
layout: page
title: "Q122422: Example of Remote Logon with Windows NT Server"
permalink: /kb/122/Q122422/
---

## Q122422: Example of Remote Logon with Windows NT Server

	Article: Q122422
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an example and explanation of the processes involved with
	a remote logon.
	
	MORE INFORMATION
	================
	
	This example uses the following scenario:
	
	A network has three workstations, all on the same domain:
	
	- Workstation A is the primary domain controller (PDC) of a domain called "Oz."
	
	- Workstation B is a Windows NT Server backup domain controller (BDC).
	
	- Workstation C is a Windows NT Workstation.
	
	A User on Workstation C Does an Interactive Logon to the Oz Domain
	------------------------------------------------------------------
	
	1. When the user logs on interactively, Winlogon on Workstation C passes the
	  user credentials entered in the Winlogon dialog box (Name, Password, and in
	  this case, the domain name "Oz") to the Local Security Authority (LSA) on
	  Workstation C and asks for an access token in return.
	
	2. LSA forwards the credentials to the MSV1_0 authentication package on
	  Workstation C and asks for the user's account security ID (SID) and global
	  SIDs in return.
	
	  NOTE: When Winlogon called LSA, it specified the MSV1_0 authentication package
	  (MSV1_0.DLL) as the authentication package to use to authenticate the user
	  and obtain SIDs for the user's access token. This is because MSV1_0
	  understands and can process the type of user credentials passed by Winlogon.
	  Some other logon application might accept some other form of user credentials
	  (data read by a pass-card reader, retina-scan image, and so on) and might
	  therefore specify an authentication package other than MSV1_0 that
	  understands and knows how to process that form of credentials. For additional
	  information on the MSV1_0 authentication package, please see the following
	  article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q102716
	  TITLE : User Authentication with Windows NT
	
	3. If the From box in the Winlogon dialog box had indicated the local user
	  account database (for example, if the user had selected the workstation's
	  computer name in the From box), MSV1_0 would proceed to call the Security
	  Account Manager (SAM) on the local station (Workstation C) to retrieve the
	  account SID and global group SIDs.
	
	  Because this example indicates that the user selected the domain name ("Oz")
	  in the From box on a Windows NT Workstation, this indicates to MSV1_0 that
	  the user accounts database from which to obtain the account and global group
	  SIDs is not located on the local station. Consequently, MSV1_0 calls (and
	  passes the credentials to) the Netlogon service on Workstation C.
	
	4. The Netlogon service on Workstation C considers the domain name "Oz" and
	  already knows (from earlier discovery) the computer name of a domain
	  controller on the "Oz" domain. With this computer name, Netlogon uses Remote
	  Procedure Call (RPC) to forward the credentials to the Netlogon service on a
	  domain controller, Workstation B in this example.
	
	5. The Netlogon service on Workstation B calls MSV1_0 on Workstation B, passing
	  the credentials and asking for account and global group SIDs.
	
	6. MSV1_0 on Workstation B calls (and passes the credentials to) the SAM on
	  Workstation B, asking it to use the local (Workstation B) user accounts
	  database (data contained in a secured Registry key) to:
	
	   - Look up the specified user account name, and retrieve the associated
	     account SID.
	
	   - Compare the specified password with that stored in the database.
	
	   - Retrieve the SIDs of all global groups of which this user is a member.
	
	  SAM returns the account SID and global group SIDs to MSV1_0.
	
	7. MSV1_0 on Workstation B returns the account and global group SIDs to the
	  Netlogon service on Workstation B, which returns these SIDs, via RPC return,
	  to Netlogon service on Workstation C, which returns them to MSV1_0 on
	  Workstation C. Note that no token is created on Workstation B at this time.
	
	8. MSV1_0 on Workstation C returns the account and global group SIDs to the LSA
	  on Workstation C.
	
	9. LSA on Workstation C uses the local (Workstation C) LSA policy database and
	  data contained in a secured Registry key to retrieve local group SIDs and
	  User Rights:
	
	   - LSA searches the local LSA policy database for all local groups that
	     contain the account SID and/or one or more of the global group SIDs (these
	     are the account and global group SIDs obtained from the user account
	     database on the "Oz" domain controller).
	
	   - LSA has now collected the account SID, all global group SIDs, and all
	     local group SIDs that apply to the specified user name. With all of these
	     SIDs, LSA now searches the local LSA policy database for all User Rights
	     that have one ore more of these SIDs associated (remember that when you
	     use User Manager to assign rights to accounts or groups, you first select
	     the User Right, and then associate user accounts or groups with this User
	     Right).
	
	10. LSA (on Workstation C) places all that it has collected thus far--the user
	  account SID, all associated Global and local group SIDs, and a mask of
	  applicable User Rights (along with a few other things), into the structure
	  that we call the "token" or "access token." LSA returns the token to
	  Winlogon.
	
	11. Winlogon creates a new process in which it runs Program Manager (unless
	  another shell has been specified in the Registry) and attaches the token to
	  that process. Any process that is created by Program Manager (that is, any
	  program that the user runs from Program Manager) inherits the same token.
	
	12. Whenever the user opens a resource (such as a file, directory, or a network
	  resource connection), the file system that manages that resource will be
	  given the token attached to the process that initiated the request to open
	  the resource. A local file system, such as NTFS, can compare the SIDs in the
	  token to the SIDs in the access control list (ACL) of the specified file to
	  determine if the user has the right to open the file in the manner indicated
	  (such as opening for Read privileges, or for Write privileges, or for
	  Read/Write privileges).
	
	  NOTE: When an open resource connection request (such as "net use" or "File
	  Manager Connect") comes down to the network redirector file system, it does
	  not use the token to check ACLs. The redirector (with help from components
	  such as the Security Reference Monitor and LSA) resolves the token back to
	  the user credentials that were originally passed to Winlogon when the local
	  user logged on (when this token was generated).
	
	13. The redirector uses a Server Message Block (SMB) request (SessionSetup...)
	  to pass these credentials (name, password, and domain name "Oz") to the
	  user-specified server; in this example, Workstation A.
	
	14. The server service on Workstation A does just what Winlogon did on
	  Workstation C when the user originally logged on. It calls the LSA (of
	  Workstation A), passes the credentials, and requests a token.
	
	15. The LSA (of Workstation A) builds the token as already described. Because
	  Workstation A is a domain controller on the specified domain ("Oz"), the
	  account SID, global group SIDs, local group SIDs, and User Rights all come
	  from the local user account database and the LSA policy database of the
	  server. Note that the user account and LSA policy databases are the "domain"
	  user account and LSA policy databases that are dynamically replicated--by
	  the Netlogon service, among all domain controllers.
	
	16. LSA returns the token to the server service.
	
	17. The server service saves the token in its internal "user session" list, and
	  passes an index into that list--a "User ID" or "UID" in the [SessionSetup]
	  SMB response back to the Workstation C redirector.
	
	18. The Workstation C redirector saves the UID in its internal list, with
	  reference to the drive letter (or UNC share name) that was just redirected.
	
	19. When the user on Workstation C opens a file on the redirected drive, the
	  file system that gets the request is, again, the redirector. The redirector
	  forwards the Open request(through an "Open" SMB request) and the drive
	  letter-associated UID to the Workstation A server.
	
	20. The Workstation A server service uses the Open SMB-indicated UID to find the
	  associated "user session" list entry so that it can retrieve the appropriate
	  token. When the server opens the file locally (on Workstation A), this token
	  passes to the local file system that manages the file being opened (such as
	  NTFS) and the file system can compare the token SIDs to the SIDs contained
	  in the ACL of the specified file to determine if the (remote workstation)
	  user has the right to open the file in the manner specified.
	
	Workstation C User Does a NET USE to Workstation B
	--------------------------------------------------
	
	If the workstation user does a NET USE command to Workstation B, steps 13 through
	18 above happen again, and Workstation B creates a new token.
	
	Workstation C Does Another NET USE to Another Resource on Workstation B
	-----------------------------------------------------------------------
	
	If the Workstation C user does another NET USE command to another resource on the
	Workstation B server, when the resource connection request and the token reach
	the local (Workstation C) redirector, the redirector notes that there is already
	a secured user session (with a UID) established to the specified server on
	behalf of the token-indicated user, and therefore uses the already-obtained UID
	in subsequent SMBs used to create the resource connection and open/access files
	on that (redirected drive letter) resource.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
