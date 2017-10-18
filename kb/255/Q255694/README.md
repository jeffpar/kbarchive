---
layout: page
title: "Q255694: PRB: MSDN Library Setup Reports &quot;Not Enough Disk Space&quot;"
permalink: kb/255/Q255694/
---

## Q255694: PRB: MSDN Library Setup Reports &quot;Not Enough Disk Space&quot;

	Article: Q255694
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:January 00
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) January 00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MSDN Library January 2000 Setup fails during a full installation, displaying the
	following error message:
	
	  Drive out of space: There is not enough disk space to complete installation.
	  You can change your installation options or exit Setup.
	
	However, the available disk space that Setup reports is greater than the required
	disk space. The only option available is click OK to exit setup.
	
	CAUSE
	=====
	
	Even though there is enough disk space available for the full installation,
	Setup incorrectly calculates the disk space and cannot continue.
	
	RESOLUTION
	==========
	
	It is important to verify that you are having this problem with the January 2000
	MSDN Library. If you are getting a similar out-of-space error with a previous or
	later version of the MSDN Library, the resolution is to click the Install Now
	button. The January 2000 Library does not have the Install Now button available,
	so you must take the following steps:
	
	1. During MSDN Library January 2000 Setup, choose a custom installation.
	
	2. From the list of available topics, select what you want to install but do not
	  select Full Text Search.
	
	3. Once the MSDN Library has successfully installed, manually launch Setup.exe
	  on CD-ROM 1 of the MSDN Library.
	
	4. Select Add/Remove Components, and then add the Full Text Search option.
	
	This two-part process is equivalent to the Full Install option.
	
	MORE INFORMATION
	================
	
	For most computers, the January 2000 MSDN Library Setup correctly calculates the
	disk space for a full installation. This problem has only been seen on computers
	running Windows NT 4.0 computers with 4-GB NTFS primary partition.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2 kbMSDNJan00
	Version           : WINDOWS:January 00
	Issue type        : kbprb
	
	=============================================================================
	
