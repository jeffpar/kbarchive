---
layout: page
title: "Q237525: Reference Suite 2000: Some Features Unavailable on Dual Boot"
permalink: /kb/237/Q237525/
---

## Q237525: Reference Suite 2000: Some Features Unavailable on Dual Boot

{% raw %}

	Article: Q237525
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Encarta Reference Suite 2000, essential features such
	as the Pinpointer may be unavailable.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- Your computer is configured to dual-boot.
	
	- You installed Encarta 2000 on each operating system.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, follow these steps:
	
	1. Install Encarta Reference Suite 2000 on either operating system.
	
	2. Restart your computer and choose the the operating system where Encarta is
	  not installed.
	
	3. Rename the common files for Encarta Reference Suite 2000. To do this, use the
	  appropriate method:
	
	Microsoft Windows 98 or Microsoft Windows 95
	--------------------------------------------
	
	  a. Click Start, point to Programs, and then click Windows Explorer.
	
	  b. Double-click <drive> where <drive> is the drive letter of the
	     hard disk on which the first version of Windows is installed.
	
	  c. In the right-pane, double-click Program Files.
	
	  d. Double-click Common Files.
	
	  e. Double-click Microsoft Shared.
	
	  f. Right-click Reference Titles.
	
	  g. Click Rename, and then type "Reference Titles 1" (without the quotation
	     marks) in the folder name box.
	
	  h. Quit Windows Explorer.
	
	Microsoft Windows NT 4.0
	------------------------
	
	  a. Click Start, point to Programs, and then click NT Explorer.
	
	  b. Double-click <drive> where <drive> is the drive letter of the
	     hard disk on which the first version of Windows is installed.
	
	  c. In the right-pane, double-click Program Files.
	
	  d. Double-click Common Files.
	
	  e. Double-click Microsoft Shared.
	
	  f. Right-click Reference Titles.
	
	  g. Click Rename, and then type "Reference Titles 1" (without the quotation
	     marks) in the folder name box.
	
	  h. Quit NT Explorer.
	
	4. Install the second version of Encarta Reference Suite 2000.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Reference Suite
	2000.
	
	Additional query words: multi multi-media media mm ers2k
	
	======================================================================
	Keywords          : kbenv kbinterop kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference2000
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
