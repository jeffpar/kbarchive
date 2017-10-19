---
layout: page
title: "Q75959: Mac Hyp: Updating from 2.0 to 3.0"
permalink: /kb/075/Q75959/
---

## Q75959: Mac Hyp: Updating from 2.0 to 3.0

	Article: Q75959
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,2.0a,2.0b,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 2.0a, 2.0b, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HyperCard Software Developers Kit's external function (XFCN) resource for
	Microsoft Mail version 2.0 does not work with Mail version 3.0. All HyperCard
	stacks created with version 2.0 of the Mail Interface Document stack must be
	updated with the 3.0 version of this document stack, which is included on the
	Extras Disk that ships with Mail 3.0.
	
	MORE INFORMATION
	================
	
	To update an existing stack:
	
	1. Open the Mail Interface Document stack in the Extras Disk.
	
	2. Select Installing from the list of topics.
	
	3. Click the Install Interface button.
	
	4. Select the stack to be updated and click the Open button.
	
	5. A warning message will appear: "Some resources which you are attempting to
	  add already exist in the destination file. Would you like to replace them?"
	  Click OK. This installs the new XFCN resource over the old one.
	
	NOTE: The version 3.0 HyperCard Software Developers Kit's XFCN resource has many
	new and expanded features. Three functions were updated in a way that might not
	be completely compatible with the old version. Check scripts for GetEnclosure,
	GetField, and RemoveField commands. The Mail Interface Document stack has more
	information on how these functions changed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,2.0a,2.0b,3.0,3.0a
	
	=============================================================================
	
