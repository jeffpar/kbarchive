---
layout: page
title: "Q224496: Error Message Using Roaming Profiles Stored on Macintosh Volume"
permalink: kb/224/Q224496/
---

## Q224496: Error Message Using Roaming Profiles Stored on Macintosh Volume

	Article: Q224496
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user with roaming profiles stored on a computer running Windows NT Server 4.0
	Service Pack 4 and Services for Macintosh may receive the following error
	message when he or she logs on:
	
	  Your locally stored profile is newer than your roaming profile. Would you
	  like to use the locally stored profile?
	
	CAUSE
	=====
	
	This behavior can occur if the user's server-based profile path is located on a
	Macintosh volume.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, do not store roaming profiles on a
	Macintosh volume.
	
	MORE INFORMATION
	================
	
	A simple example of this behavior is:
	
	- A Macintosh volume located on D:\Profiles.
	
	- Roaming profiles stored in \\Server\Profiles\<Username>.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
