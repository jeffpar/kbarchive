---
layout: page
title: "Q271865: PRB: Error Message &quot;0x8009000F = Object Already Exists&quot;"
permalink: kb/271/Q271865/
---

## Q271865: PRB: Error Message &quot;0x8009000F = Object Already Exists&quot;

	Article: Q271865
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to reinstall Internet Information Services (IIS) 5.0 the
	following error message occurs:
	
	  Error writing Encryption data to Web Services Configuration database
	  (metabase). 0x8009000F=Object Already Exists.
	
	CAUSE
	=====
	
	This problem has been seen after the installation of PCAnywhere.
	
	RESOLUTION
	==========
	
	To resolve the problem, use these steps:
	
	1. Remove IIS (by using Add/Remove Programs in Control Panel).
	
	2. Using Windows Explorer, change to the following directory:
	
	   - If the Windows installation is an upgrade navigate to:
	
	  %windir%\Profiles\All Users\Application Data\Microsoft\Crypto\RSA\MachineKeys
	
	   - If the Windows installation is a new installation navigate to:
	
	  %system root%\Documents and Settings\All Users\Application
	  Data\Microsoft\Crypto\RSA\MachineKeys
	
	NOTE: Files in this directory are hidden. To view this folder and files, select
	the Show hidden files and folders option button in Folder Options.
	
	3. Copy all the files in the MachineKeys directory to another location (to back
	  them up).
	
	4. Delete all the files from the MachineKeys directory except the newest one
	  (and not the backups!).
	
	NOTE: If you are unable to delete any of these files, try taking ownership of
	this directory. To do this, follow these steps:
	
	  a. Right-click the MachineKeys folder.
	
	  b. Click Properties.
	
	  c. Click the Security tab.
	
	  d. Click Advanced.
	
	  e. Click the Owner tab.
	
	  f. Highlight the Administrators group to change the owner.
	
	  g. Select Replace owner on subcontainers and objects.
	
	  h. Click OK.
	
	5. Look for the following folder:
	
	  %systemroot%\system32\Microsoft\Crypto\RSA\MachineKeys
	
	If this folder exists, repeat steps 3 and 4 on this folder.
	
	6. Restart the computer.
	
	7. Install IIS (by using Add/Remove Programs in Control Panel).
	
	REFERENCES
	==========
	
	For additional information about setting the correct NTFS rights on the
	MachineKeys directory, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q246459 Error Message: Unable to Enumerate Web Sites because the Following
	  Error Occurred: Object Already Exists
	
	For more information, see the following Knowledge Base article:
	
	  Q282775 'Error Writing Encrypted Data' Error During IIS 5.0 Installation
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
