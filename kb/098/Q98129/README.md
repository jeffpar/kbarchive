---
layout: page
title: "Q98129: Allow Continual User Access with Password Restrictions"
permalink: /kb/098/Q98129/
---

## Q98129: Allow Continual User Access with Password Restrictions

{% raw %}

	Article: Q98129
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article presents a method to allow selected users to have ongoing access
	persisting through password change intervals. This is useful for users that are
	actually functions such as script and UAS replication.
	
	MORE INFORMATION
	================
	
	With a minimum password length and password expiration set using the "Minimum
	password length" and "Maximum password age" options of the <Security
	settings> dialog box of the <Accounts> menu in NET ADMIN, the following
	procedure will allow a user to log on without a password over an unlimited
	period of time.
	
	Use "net user username /passwordreq:no to change the password requirement for
	username. This will not remove the password from an existing user or remove the
	requirement for a password to be supplied at logon. It will allow you to go into
	the user's account in NET ADMIN and delete the existing password. To do this,
	select Accounts, then select Users in NET ADMIN. Next, select the specific user
	and then select Zoom. In the dialog box, move to the Password field and press
	and hold the DELETE key long enough to remove the longest possible password (a
	few seconds should be sufficient). Choose OK to apply the change.
	
	Because passwords still expire, even this user will be prompted for a password
	when the expiration time arrives. Fortunately, pressing the ENTER key will allow
	access. For procedures that need to be automated, this can be done in two ways:
	
	- Redirect input for the "net logon" command from a file as follows:
	
	  net logon username < filename
	
	- Create the file with two or more ENTER key strokes (more than one just to be
	  safe).
	
	If you are using the Replicator service, then simply supply any password in
	LANMAN.INI for "password" under the [replicator] section.
	
	Taking these steps will allow continuing access for the users set up in this
	manner.
	
	Additional query words: 2.10|2.1a|2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
