---
layout: page
title: "Q251001: Default Settings May Not Propagate to Computers/Users"
permalink: kb/251/Q251001/
---

## Q251001: Default Settings May Not Propagate to Computers/Users

	Article: Q251001
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change a Default Computer or Default User setting in System Policy
	Editor (Poledit.exe), the changes may not propagate to some computers or users.
	
	In the main program window, computers and users are visually sorted according to
	the sorting rules for the current language settings.
	
	Computers and users that are listed before Default Computer or Default User do
	not receive the changes. Changes are applied to the computers and users that are
	listed after Default Computer and Default User.
	
	For example, if the computers that are named Alpha and Foxtrot currently have
	have the Logon policy "Don't show last user at logon" setting unavailable and
	you click to select the Default Computer setting for this policy, Foxtrot's
	policy is selected but Alpha's is not after you save and reopen the policy file.
	Alpha's policy should also be selected.
	
	CAUSE
	=====
	
	This problem can occur if you add a computer or user to a new policy file that
	has not been saved to disk at least once. The problem also occurs if you delete
	Default Computer or Default User, save the file to disk, and then add Default
	Computer or Default User at a later time.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring when you are creating a new policy file,
	make sure that a policy file of the same name does not already exist, save the
	new policy file, and then add computers and users.
	
	1. On the File menu, click New Policy.
	
	2. Click Save As, and then type a file name that does not already exist.
	
	3. Add computers and users normally.
	
	If this problem exists with an existing policy file that already has computers
	and users listed before Default User or Default Computer, follow these steps:
	
	1. Start two instances of System Policy Editor, and then load the same policy
	  file from the local disk location.
	
	2. In the first instance, delete all computers and users that are listed before
	  Default Computer or Default User.
	
	3. In the first instance, click Save on the File menu, and then click Exit on
	  the File menu.
	
	4. In the second instance, click Save on the File menu, and then click Exit on
	  the File menu.
	
	5. Restart System Policy Editor, and then load your policy file. The Default
	  Computer and Default Users settings propagate properly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
