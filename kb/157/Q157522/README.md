---
layout: page
title: "Q157522: HOWTO: Install Visual FoxPro 5.x or 6.0 on a Network"
permalink: /kb/157/Q157522/
---

## Q157522: HOWTO: Install Visual FoxPro 5.x or 6.0 on a Network

	Article: Q157522
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbnokeyword kbvfp500 kbvfp600
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 5.x and 6.0 for Windows setup no longer supports the
	administrative setup option (Setup /a). In previous versions of FoxPro, this
	option allows FoxPro to run from a network file server. Although Visual FoxPro
	5.x and 6.0 for Windows cannot be run from a file server, it may be useful to
	have a network share from which users can install Visual FoxPro on to their
	local computers.
	
	MORE INFORMATION
	================
	
	There are two ways of creating a common install point on the network for Visual
	FoxPro:
	
	- A simple way is to share a networked CD-ROM. Everyone would be able to
	  connect to the Visual FoxPro CD-ROM and run setup.
	
	  -or-
	
	- Create a shared directory on the network and copy the contents of the CD-ROM
	  to the directory. Make sure to mark all files read-only in the directory. The
	  installation would be faster, but would take more hard drive space than
	  option number 1.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	NOTE: If available disk space is a consideration, perform the minimal product
	installation and use the example files and online documentation through the
	shared network directory or shared CD-ROM.
	
	Additional query words: workstation
	
	======================================================================
	Keywords          : kbsetup kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
