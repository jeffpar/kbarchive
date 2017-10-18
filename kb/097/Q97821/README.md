---
layout: page
title: "Q97821: How Encrypted Passwords Are Validated from Workstations"
permalink: kb/097/Q97821/
---

## Q97821: How Encrypted Passwords Are Validated from Workstations

	Article: Q97821
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article explains how passwords are validated during logon from a
	workstation using an encryption service. Security is preserved because the
	password never goes out onto the net: all encryption/decryption services are
	performed on the workstation.
	
	MORE INFORMATION
	================
	
	Here is the process for password validation for a user on a workstation with an
	encryption service:
	
	1. When a user logs on, workstation software encrypts the plain text password
	  that the user enters with a standard text key. The key is known to both the
	  workstation and the server. The encryption scheme is a Microsoft standard.
	  The standard text used as a key is the same text that was used as a key at
	  the time the user's account was created on that server. If someone knows the
	  standard text and finds the encryption scheme in memory, it still is (for all
	  practical purposes) mathematically impossible to reverse the encryption
	  scheme.
	
	  So far in the logon process, nothing has been sent to the network.
	
	2. When the workstation tries to establish a session with the server, the server
	  creates a challenge by using the same encryption standard, the same standard
	  text, but server time as the key. That challenge is sent to the workstation.
	  No passwords cross the network.
	
	3. When the workstation receives the challenge, it uses the same encryption
	  scheme to encrypt the challenge, and uses the encrypted workstation
	  pseudo-password created in step 1 as the key. It sends this encrypted
	  challenge response back to the server. Again no passwords.
	
	4. The server receives the challenge response. The server expects to get an
	  encrypted version of its original challenge using the server stored encrypted
	  password as the key and of course using the same encryption scheme. If these
	  match, the user must have typed the right plain text password.
	
	No passwords ever cross the network. The most important thing going across the
	network is the challenge that is created at random using server time as the key.
	The key to the response is the same if the user types the right text password
	because the standard text and encryption scheme are the same today as they were
	when the account was set up. No passwords need to cross the network.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
