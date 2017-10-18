---
layout: page
title: "Q243650: BUG: MSDN Library Favorites Are Lost"
permalink: kb/243/Q243650/
---

## Q243650: BUG: MSDN Library Favorites Are Lost

	Article: Q243650
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MSDN Library favorites are lost.
	
	CAUSE
	=====
	
	There are three known causes of this problem:
	
	- Installing a new version of the MSDN Library does not transfer existing
	  favorites from the previous version.
	
	- Launching the MSDN Library from a Visual Studio product can result in lost
	  favorites. If the MSDN Library is still open when the Visual Studio product
	  is closed, any favorites created during that session are lost. Closing the
	  Visual Studio product forces the MSDN Library to close without providing an
	  opportunity for it to save the new favorites.
	
	- Deleting or corrupting the Hh.dat file erases favorites.
	
	RESOLUTION
	==========
	
	The MSDN Library Favorites Utility can transfer favorites from one library
	installation to another. This utility is on the Start menu for the latest
	quarterly releases of the MSDN Library. You can also download this utility from
	the following Microsoft Web site:
	
	  http://msdn.microsoft.com/subscriptions/resources/msdnfav.asp
	  (http://msdn.microsoft.com/subscriptions/resources/msdnfav.asp)
	
	When using the MSDN Library launched from a Visual Studio product, always close
	the MSDN Library first before closing the Visual Studio product. This allows the
	MSDN Library to save the new favorites information normally.
	
	If the Hh.dat file is deleted or corrupted, there is no way to recover the
	favorites. When the Hh.dat file is deleted, the MSDN Library creates a new one
	with no favorites information in it. When the Hh.dat file is corrupted,
	favorites may be lost or behave incorrectly, forcing you to delete the Hh.dat
	file, so it can be re-created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall Problems
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
