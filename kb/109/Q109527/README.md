---
layout: page
title: "Q109527: 32-Bit File Access ErrMsg: Exit Windows and Run the MS-DOS..."
permalink: /kb/109/Q109527/
---

## Q109527: 32-Bit File Access ErrMsg: Exit Windows and Run the MS-DOS...

{% raw %}

	Article: Q109527
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application (such as Microsoft Undelete) under Windows for
	Workgroups version 3.11, you may receive the following error message:
	
	  Exit Windows and run the MS-DOS version of this utility.
	  Interrupt 26 (Direct sector write) blocked to preserve volume integrity.
	
	NOTE: If you run Microsoft Undelete and choose Find to search for deleted files,
	Undelete may display the following error message:
	
	  System Error
	  Divide by zero or Overflow error
	
	CAUSE
	=====
	
	This problem occurs when you run any application or utility that calls interrupt
	26 (such as Microsoft Undelete) when 32-bit file access is enabled.
	
	WORKAROUND
	==========
	
	To work around this problem either:
	
	- Disable 32-bit file access.
	
	  -or-
	
	- Run the MS-DOS-based version of the application that is calling interrupt 26.
	
	NOTE: Microsoft recommends that you do not run MS-DOS-based disk utilities from
	the Windows for Workgroups MS-DOS Prompt. These utilities should be run before
	or after your Windows for Workgroups session.
	
	KBCategory: kbtool kbdisplay kbenv kberrmsg
	KBSubcategory: wfw wfwg
	
	Additional query words: 311 vfat remove MWUNDEL.EXE mwundelete
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
