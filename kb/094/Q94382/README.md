---
layout: page
title: "Q94382: Can't Print from MS-DOS-Based WordPerfect with FaceLift"
permalink: /kb/094/Q94382/
---

## Q94382: Can't Print from MS-DOS-Based WordPerfect with FaceLift

{% raw %}

	Article: Q94382
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using Bitstream FaceLift with MS-DOS-based WordPerfect under Windows
	for Workgroups 3.1, you may not be able to print.
	
	CAUSE
	=====
	
	This problem is caused by FaceLift and Windows for Workgroups both actively
	monitoring the parallel port (LPT1).
	
	WORKAROUND
	==========
	
	To correct this problem, you can configure FaceLift to monitor LPT2 and redirect
	its output to LPT1.
	
	MORE INFORMATION
	================
	
	FaceLift and WordPerfect are manufactured by Bitstream and WordPerfect,
	respectively, vendors independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	
	Additional query words: wfw wfwg 3.10 word perfect face lift 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
