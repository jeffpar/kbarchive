---
layout: page
title: "Q131244: How the Component Manager for The Microsoft Network Works"
permalink: /kb/131/Q131244/
---

## Q131244: How the Component Manager for The Microsoft Network Works

	Article: Q131244
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Component Manager handles the upgrade process for The
	Microsoft Network.
	
	MORE INFORMATION
	================
	
	When you sign in to The Microsoft Network, Component Manager determines whether
	it needs to upgrade your computer's copy of The Microsoft Network software.
	
	After The Microsoft Network verifies your password, your computer sends two
	pieces of information to Component Manager: the version of your copy of The
	Microsoft Network software, and the language version of your copy of Windows 95
	(for example, English, Spanish, and so on).
	
	Component Manager uses the language version to find the appropriate language tree
	and search it for all the files that have a Component Manager version number
	higher than your computer's version of The Microsoft Network. If there are no
	such files, you do not need an upgrade and sign in is completed.
	
	If you do need an upgrade, you are prompted to do so. You can accept or reject
	the upgrade. If you reject it, you cannot sign on to The Microsoft Network. You
	must upgrade if you want to use The Microsoft Network.
	
	If you accept, the necessary files are downloaded to your computer, with a
	progress dialog box advising you of the download status. When the download is
	complete, another dialog box advises you that you must restart your computer to
	complete the upgrade. You cannot connect to The Microsoft Network until after
	you restart your computer.
	
	The time estimate given for the upgrade reflects only the time needed to download
	files, and does not include time needed to restart your computer (which varies
	greatly depending on your computer's configuration).
	
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3
	Issue type        : kbinfo
	
	=============================================================================
	
