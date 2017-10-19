---
layout: page
title: "Q158876: Msbatch.inf Parameters: Remove the Welcome To Windows Box"
permalink: /kb/158/Q158876/
---

## Q158876: Msbatch.inf Parameters: Remove the Welcome To Windows Box

	Article: Q158876
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove the Welcome To Windows dialog box using the
	Msbatch.inf file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  addreg=remove.welcome
	
	Also, add the following section and key:
	
	  [remove.welcome]
	  HKU,.default\software\microsoft\windows\currentversion\explorer\ 
	  tips,show,1,00
	
	Note that the Welcome to Windows dialog box is displayed the first time Windows
	starts.
	
	Additional query words: automate
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
