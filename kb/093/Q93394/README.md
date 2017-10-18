---
layout: page
title: "Q93394: DOCERR: CITATION .HPJ Statement Incorrectly Documented"
permalink: kb/093/Q93394/
---

## Q93394: DOCERR: CITATION .HPJ Statement Incorrectly Documented

	Article: Q93394
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CITATION Help project file (HPJ) option is missing from the Windows version
	3.1 SDK "Programming Tools" manual and is incorrectly documented in the online
	help file, WIN31WH.HLP. The following description, from the Help Authoring Guide
	on the MSDN CD, is correct:
	
	  CITATION Option
	
	  Syntax
	
	  CITATION=copyright-notice
	
	  The CITATION option appends a custom copyright notice to the end of any
	  information that is copied from the Help file using the Copy command. You can
	  use this option if a publisher owns some material in your Help file and
	  requires that you attach a copyright notice to that material.
	
	  Parameter
	
	  copyright-notice
	
	  Specifies the copyright information you want to append to copied material. The
	  notice appears at the end of text displayed in the Copy dialog box (the
	  notice is appended whenever the user copies text from the original Help
	  file).
	
	  Comments
	
	  The CITATION option differs from the COPYRIGHT option in two ways: a citation
	  does not appear in the About dialog box, and a citation can be much larger
	  than the standard copyright notice. The maximum size of the citation
	  copyright notice is about 2K (compared to 50 characters for COPYRIGHT).
	
	  Example
	
	  The following shows a sample citation:
	
	  CITATION=Information in this document is subject to change without notice and
	  does not represent a commitment on the part of Microsoft Corporation. The
	  software, which includes information contained in any databases, described in
	  this document is furnished under a license agreement or nondisclosure
	  agreement and may be used or copied only in accordance with the terms of that
	  agreement. It is against the law to copy the software except as specifically
	  allowed in the license or nondisclosure agreement. No part of this document
	  may be reproduced in any form or by any means, electronic or mechanical, for
	  any purpose without the express written permission of Microsoft Corporation.
	
	MORE INFORMATION
	================
	
	To put a notice in the About box, use the COPYRIGHT option rather than the
	CITATION option.
	
	Additional query words: 3.10 HC31 HC30 HCP HLPGLOSS docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
