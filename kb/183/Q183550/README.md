---
layout: page
title: "Q183550: BUG: Administrative Snap-in Allows Duplicate Names of HCD Files"
permalink: kb/183/Q183550/
---

## Q183550: BUG: Administrative Snap-in Allows Duplicate Names of HCD Files

	Article: Q183550
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the administrative tool snap-in in the Microsoft Management Console (MMC),
	you can create two identically named Data Description Files (host column
	definition files, HCD files). (One physical file, so-named and having an .hcd
	extension, appears in the ..\sna\system subdirectory.)
	
	It is possible, using the administrative tool, to make changes to both files
	listed in the MMC snap-in tree. However, when you do an MMC refresh, only one of
	the previously listed files remains. The changes are combined in it.
	
	The combined changes indicated in the snap-in also appear in the single physical
	file in the ..\sna\system subdirectory.
	
	There is an additional side-effect: A new file named New File.hcd appears in the
	..\sna\system subdirectory and appears in the MMC snap-in tree list. It contains
	only a [Stats] section with a date-time stamp.
	
	WORKAROUND
	==========
	
	To work around the problem before it occurs, avoid defining Data Description
	Files with duplicate names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.00, included with SNA Server version 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
