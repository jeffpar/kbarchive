---
layout: page
title: "Q135368: Cannot Retrieve E-mail on The Microsoft Network"
permalink: kb/135/Q135368/
---

## Q135368: Cannot Retrieve E-mail on The Microsoft Network

	Article: Q135368
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,95
	Operating System(s): 
	Keyword(s): kbenv kbtlc kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to retrieve your e-mail on The Microsoft Network, you may
	experience one of the following symptoms:
	
	- The Microsoft Network may not appear under the Remote Mail or Deliver Now
	  Using command.
	
	- The Remote Mail and Deliver Now Using commands may be unavailable.
	
	CAUSE
	=====
	
	These issues may occur if your Windows 95 user name contains an invalid
	character such as a backslash, comma, or period. Your Windows 95 user name is
	used to create your Remote Mail headers file (in the form "MOS<Windows 95
	user name>.rhc"). If your Windows 95 user name is not a valid file name, you
	may experience the issues described above.
	
	If you are not using an invalid character, the .rhc file may be damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, change your Windows 95 user name so that all the
	characters are valid for file names.
	
	If your user name is valid, delete the "MOS<Windows 95 user name>.rhc" file
	from the Windows folder.
	
	Additional query words: msn email download grayed greyed
	
	======================================================================
	Keywords          : kbenv kbtlc kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,95
	Issue type        : kbprb
	
	=============================================================================
	
