---
layout: page
title: "Q199676: PC Adm: Invalid Characters in Mailbox Name for Microsoft Mail"
permalink: /kb/199/Q199676/
---

## Q199676: PC Adm: Invalid Characters in Mailbox Name for Microsoft Mail

	Article: Q199676
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to modify or delete mailbox names.
	
	CAUSE
	=====
	
	This issue can occur because the Administrator program allows you to enter
	invalid characters in the Mailbox Name field. However, you cannot modify or
	delete mailboxes with names that contain invalid characters.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore the heart files (or core files) from a backup
	that was made before the users were created. The heart files are the following:
	
	- Master.glb
	
	- Access.glb
	
	- Access2.glb
	
	- Access3.glb
	
	- Admin.nme
	
	- Adminshd.nme
	
	- Adminshd.grp
	
	- Admin.grp
	
	
	MORE INFORMATION
	================
	
	The following characters are invalid for use in mailbox names:
	
	  ASCII 1-47; 58-64; 91-96; 123-127; 145-148
	
	The following are some common invalid characters:
	
	- ~ (tilde)
	
	- ! (exclamation point)
	
	- @ (at sign)
	
	- # (number sign)
	
	- $ (dollar sign)
	
	- % (percent)
	
	- ^ (caret)
	
	- & (ampersand)
	
	- * (asterisk)
	
	- () (parentheses)
	
	- _ (underscore)
	
	- + (plus)
	
	- - (en dash)
	
	- = (equal sign)
	
	- ` (accent grave)
	
	- {} (braces)
	
	- [] (brackets)
	
	- | (vertical bar)
	
	- \ (backslash)
	
	- : (colon)
	
	- "" (quotation marks)
	
	- ; (semicolon)
	
	- '' (single straight quotation marks)
	
	- <> (angle brackets)
	
	- ? (question mark)
	
	- , (comma)
	
	- . (period)
	
	- / (slash mark)
	
	A space in a mailbox name is also invalid.
	
	Additional query words: Error 56 when modifying or deleting mailbox
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	
