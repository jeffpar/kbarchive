---
layout: page
title: "Q168542: Postscript Preprocessor Fails to Find Any Embedded Fonts"
permalink: kb/168/Q168542/
---

## Q168542: Postscript Preprocessor Fails to Find Any Embedded Fonts

	Article: Q168542
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprintkbbuglist kbfixlist
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print to a file from Windows NT using a postscript printer driver and
	then attempt to preprocess the data with a postscript preprocessor, the
	preprocessor fails to find any embedded fonts.
	
	
	CAUSE
	=====
	
	The Windows NT postscript driver was not correctly delimiting font information
	in the postscript output. The effect is that preprocessors do not find the font
	resources in the job, and, therefore, can not do any replacement or editing.
	
	This problem has no effect on printing. It only affects preprocessors that try to
	edit the postscript output to replace resources.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest U.S. Service Pack for Windows NT and Windows
	NT Server version 4.0. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: pscript prodnt
	
	======================================================================
	Keywords          : kbprint kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	
