---
layout: page
title: "Q281737: Error Message When Opening Rascfg.dll During DUN Installation"
permalink: kb/281/Q281737/
---

## Q281737: Error Message When Opening Rascfg.dll During DUN Installation

	Article: Q281737
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup dun kbDialUp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Install after starting Dial-Up Networking for the first time, you
	may receive the following error message:
	
	  Noncritical error:
	
	  An error has occurred
	
	  Unable to open the file RASCFG.DLL
	
	  A noncritical error has occurred. You may retry the operation, ignore it or
	  exit the entire setup operation.
	
	If you click Ignore, the error is repeated for all subsequent Microsoft Remote
	Access Service (RAS) files. If you click Retry, you are still unable to install
	Dial-Up Networking.
	
	CAUSE
	=====
	
	The contents of the Oemnsvra.inf file, which is located in the
	%SystemRoot%\system32 folder, have been modified.
	
	RESOLUTION
	==========
	
	Use the expand command to expand the original Oemnsvra.inf file from the
	Microsoft Windows NT source CD-ROM into the %SystemRoot%\System32 folder. For
	example, go to the appropriate directory on the CD (i386 for Intel computers),
	and type the following command:
	
	  <Drive>:\I386>expand Oemnsvra.In_ %SystemRoot%\System32\Oemnsvra.Inf
	
	where <Drive> is the letter of your CD-ROM drive.
	
	MORE INFORMATION
	================
	
	After you have restored the Oemnsvra.inf file, you are able to complete the
	installation of Dial-Up Networking.
	
	Note: Be sure to reapply your current Windows NT 4.0 service pack prior to
	restarting your computer after you complete the Dial-Up Networking installation.
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q169298 Canceling Routing and RAS Install Does Not Restore Oemnsvra.inf
	
	  Q168489 How to Remove Routing and Remote Access and Install Standard RAS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup dun kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
