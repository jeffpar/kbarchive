---
layout: page
title: "Q190902: HOWTO: Locate Files Cited By Help Topic AddLabel"
permalink: /kb/190/Q190902/
---

## Q190902: HOWTO: Locate Files Cited By Help Topic AddLabel

{% raw %}

	Article: Q190902
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help topic AddLabel in Visual FoxPro for Windows version 6.00 refers to
	various application source files that you can use to customize the AddLabel
	feature. If you search your hard drive after installing Visual FoxPro, you will
	not find these files because they are contained in a file named XSource.zip.
	
	MORE INFORMATION
	================
	
	XSource.zip is located in the \VFP98\Tools\XSource folder.
	
	1. Unzip the files in the XSource.zip using the UNZIP -d parameter to preserve
	  subdirectory names. You may select the folder where the XSource.zip file
	  resides.
	
	2. A subdirectory named \VFPSource is created.
	
	3. Several subfolders are created. One is named \Addlabel, which contains the
	  following files:
	
	     Directory of \Program Files\Microsoft Visual
	     Studio\Vfp98\Tools\XSource\vfpsource\Addlabel
	
	     Addlabel.pjm           159  05-01-98  1:35p
	     Addlabel.pjt         5,824  05-01-98  1:35p
	     Addlabel.pjx         2,102  05-01-98  1:35p
	     Addlabel.sct        11,062  05-01-98  1:35p
	     Addlabel.scx         2,450  05-01-98  1:35p
	     Foxuser.dbf          6,622  05-01-98  1:35p
	     Foxuser.fpt          9,042  05-01-98  1:35p
	     Label2.bmp          48,598  05-01-98  1:35p
	     Label2.msk          12,182  05-01-98  1:35p
	     Labels.dbf           6,622  05-01-98  1:35p
	     Labels.fpt          11,520  05-01-98  1:35p
	     Labels.reg           8,643  05-01-98  1:35p
	     Newlabel.sca        19,552  05-01-98  1:35p
	     Newlabel.sct        27,327  05-01-98  1:35p
	     Newlabel.scx         3,649  05-01-98  1:35p
	     15 file(s)         175,354 bytes
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: vfp6xsource
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
