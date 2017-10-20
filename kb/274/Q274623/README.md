---
layout: page
title: "Q274623: PRB: W2K Help System Update Breaks Install of MSDN Library"
permalink: /kb/274/Q274623/
---

## Q274623: PRB: W2K Help System Update Breaks Install of MSDN Library

{% raw %}

	Article: Q274623
	Product(s): Microsoft Developer Network
	Version(s): July 2000
	Operating System(s): 
	Keyword(s): kbMSDN kbGrpDSVB kbDSupport
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) July 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The update of the HTML Help System during the installation of the Microsoft
	Developers Network (MSDN) Library breaks the Microsoft Windows 2000 Help
	system.
	
	During the installation of the MSDN Library (usually, but not limited to the
	April 2000 or July 2000 editions), the MSDN Library installation program
	attempts to update the HTML Help System. The update fails due to not having the
	required permissions. (The installation is denied rights to do so due to the
	Windows file system protection feature.) Although the installation attempt fails
	and the update has not been completed, the HTML Help system is not able to
	display the MSDN Library correctly when started.
	
	The following MSDN Library (any edition) error messages appear:
	
	  "unable to find the collection \..\msdn***.col"
	
	  -or-
	
	  "Can not open the MSDN010.COL"
	
	The exact error depends on the version of the MSDN Library being started.
	
	CAUSE
	=====
	
	The MSDN Library updates some of the underlying files, but is not able to
	complete the HTML Help system update.
	
	RESOLUTION
	==========
	
	Install Microsoft Windows 2000 Service Pack 1 from the following Microsoft Web
	site at
	
	  http://www.microsoft.com/windows2000/downloads/servicepacks/sp1/default.asp
	
	and then perform the steps that you find in the following Microsoft Knowledge
	Base article:
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	REFERENCES
	==========
	
	This issue is due to the situation explained in the following Microsoft
	Knowledge Base article:
	
	  Q269966 BUG: MSDN Library - July 2000 DVD Edition Has a Corrupt MSDN020
	
	Additional query words: msdnsetup install vssetup
	
	======================================================================
	Keywords          : kbMSDN kbGrpDSVB kbDSupport 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : :July 2000
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
