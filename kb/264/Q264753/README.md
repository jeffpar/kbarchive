---
layout: page
title: "Q264753: FP98: Error Messages When You Try to Install Extensions"
permalink: /kb/264/Q264753/
---

## Q264753: FP98: Error Messages When You Try to Install Extensions

{% raw %}

	Article: Q264753
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 10-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install FrontPage Server Extensions, you may receive an
	error message similar to the following:
	
	  Error 2 getting size for registry value authorization
	
	-or-
	
	  Error 2 getting size for registry value "major version"
	
	-or-
	
	  Setup has detected you are not an Administrator on this machine. Setup will
	  not be able to install FrontPage Server Extensions on Microsoft Internet
	  Information Server. You must be logged in as an Administrator to install the
	  Extensions on Microsoft Internet Information Server. Do you wish to continue
	  the installation?
	
	CAUSE
	=====
	
	The first two error messages may appear if you are attempting to install
	FrontPage Server Extensions and you do not have Administrator privileges.
	
	The third error message may appear on some platforms when you are installing
	FrontPage 98.
	
	NOTE: The Server Extensions will be installed automatically on virtual servers if
	previous versions of the Server Extensions are already installed. If any virtual
	servers do not already have a previous version of the FrontPage Server
	Extensions installed, the FrontPage 98 Server Extensions are not installed
	automatically.
	
	RESOLUTION
	==========
	
	To resolve the first two errors, a user with Administrator privileges must be
	logged on to install the FrontPage Server Extensions.
	
	To resolve the third error, install the FrontPage Server Extensions using the
	utility program fpsvadm.exe, which is normally located at C:\Program
	Files\Microsoft FrontPage\version3.0\bin.
	
	MORE INFORMATION
	================
	
	For complete instructions about installing the FrontPage Server Extensions, open
	the install.htm file, located at DRIVE:\SERK\enu, where DRIVE is the drive where
	your FrontPage 98 CD is located.
	
	Additional query words: ocsso front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
