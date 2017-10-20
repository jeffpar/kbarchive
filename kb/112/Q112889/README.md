---
layout: page
title: "Q112889: PC DOS: Err Msg: Error Mailing to Mailbox..."
permalink: /kb/112/Q112889/
---

## Q112889: PC DOS: Err Msg: Error Mailing to Mailbox...

{% raw %}

	Article: Q112889
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send mail messages from versions 2.1x, 3.0, 3.0a, and 3.2 of Microsoft
	Mail for PC Networks, MS-DOS workstation, the following error message appears:
	
	  Error Mailing to Mailbox xxxxxxxx
	
	where xxxxxxxx is a hexadecimal number. This message appears right after you send
	the message. It only appears when you send a message to another user on your own
	postoffice.
	
	CAUSE
	=====
	
	If the user you are trying to mail does not have sufficient network rights, this
	error may appear. If so, others will not be able to mail the user either.
	
	This error can also occur when the user's .MBG or .KEY file has become corrupt or
	is missing.
	
	RESOLUTION
	==========
	
	To determine where the problem exists, check for the following:
	
	- Whether this user can mail to any other users on the postoffice. (If not,
	  that user probably has insufficient network rights.)
	
	- Whether other users can mail to this user. (If not, either all users have
	  insufficient network rights, or the receiver's mail system is corrupt.)
	
	Therefore, to resolve this problem, you must do either of the following:
	
	- Provide the sender with sufficient network rights.
	
	-or-
	
	- Restore or re-create the missing or damaged files on the receiver's mail
	  system. If the user's .MBG or .KEY file is corrupt or missing, you can
	  restore it from a backup copy or re-create it.
	
	To restore missing or damaged .MBG and .KEY files
	-------------------------------------------------
	
	1. Restore a backup of the postoffice to the local drive or to a new area on the
	  server.
	
	2. Sign into the backup as the user and move all mail in the mailbox to a
	  folder. Archive the folder.
	
	3. Delete the backup of the postoffice.
	
	4. Delete the user's .KEY and .MBG files on the postoffice.
	
	5. Copy the user's valid .KEY file to DUMMY.KEY.
	
	6. Modify the DUMMY.KEY file by using the Debug program, and typing the
	  following commands at the Debug prompts:
	
	  " -f100,32f,0
	  -w
	  -q" (without the quotation marks)
	
	7. Rename DUMMY.KEY to the correct .KEY filename for the user.
	
	8. Create a zero-byte .MBG file for the user by typing the following at the
	  MS-DOS command prompt:
	
	  " type nul > dummy.mbg" (without the quotation marks)
	
	9. Rename DUMMY.MBG to the correct MBG file for the corrupt user.
	
	10. Sign in as the user and dearchive the folder.
	
	NOTE: When you copy a new .MBG file, use the XCOPY command. The COPY command will
	not copy a zero-length file.
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
