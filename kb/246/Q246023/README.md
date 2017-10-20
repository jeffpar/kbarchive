---
layout: page
title: "Q246023: Cannot Remove Folder Without Being Prompted"
permalink: /kb/246/Q246023/
---

## Q246023: Cannot Remove Folder Without Being Prompted

{% raw %}

	Article: Q246023
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive the following error message when you attempt to remove a folder
	that is owned by a deleted user, especially if the deleted user was the only
	user with Full Control permissions on the folder:
	
	  Cannot remove folder <Path>:
	  Access Denied. Make sure the disk is not full or write protected and that the
	  file is not currently in use.
	
	When you attempt to take ownership of the entire folder structure, you may
	receive an "Access denied" prompt for each subfolder. It could take a long time
	to process a large folder structure.
	
	MORE INFORMATION
	================
	
	You can use the Subinacl.exe and Xcacls.exe tools from the Microsoft Windows NT
	Service Resource Kit to make this process easier. For example, to remove a
	folder named U3 and its subfolders, use the following commands:
	
	  g:\users\testing> subinacl /subdirectories u3 /setowner=Administrator
	
	  g:\users\testing> xcacls u3 /T /G Administrator:F
	
	Subinacl sets the owner to Administrator and Xcacls gives the Administrator
	account Full Control (F) permissions.
	
	The /subdirectories switch for Subinacl.exe specifies that the tool also process
	subfolders. The /setowner switch specifies the account name that should be made
	the owner.
	
	The /T switch for Xcacls.exe specifies that the tool also process subfolders. The
	/G switch means "Grant."
	
	NOTE: There may be cases in which Subinacl does not act on a subfolder. In this
	case, use the /file switch in place of the /subdirectories switch, and change
	the owner of the one file or folder. For example:
	
	  subinacl /file u3 /setowner=Administrator
	
	For additional information about these tools, type the following commands after
	you install the tools from the Resource Kit:
	
	  subinacl /help
	
	  xcacls /help
	
	Additional query words: code 5 net helpmsg
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
