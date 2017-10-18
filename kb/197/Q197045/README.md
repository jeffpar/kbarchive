---
layout: page
title: "Q197045: CMAK Incorrectly Configures a Customized Sign-in Bitmap"
permalink: kb/197/Q197045/
---

## Q197045: CMAK Incorrectly Configures a Customized Sign-in Bitmap

	Article: Q197045
	Product(s): Internet Information Server
	Version(s): winnt:4.0 (Spanish version)
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 (Spanish version) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Spanish version of the Connection Manager Administration Kit
	(CMAK) wizard and fill in the bitmap path for the sign-in picture, the
	Connection Manager does not display the picture.
	
	CAUSE
	=====
	
	The CMAK and the Connection Manager share a string table of the flag names. The
	CMAK writes the strings into the .cms file, and the Connection Manager reads
	them. The strings are localized inconsistently between the two programs: the
	CMAK writes some flags in Spanish while the Connection Manager reads them in
	their English forms, and therefore, is not able to obtain the correct strings.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT version 4.0 Service
	Pack 5.
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbiisSearch kbiis400 kbHLangSpanish
	Version           : winnt:4.0 (Spanish version)
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
