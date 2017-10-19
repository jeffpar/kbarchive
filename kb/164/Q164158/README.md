---
layout: page
title: "Q164158: OpenGL Diffuse Settings Revert to Default"
permalink: /kb/164/Q164158/
---

## Q164158: OpenGL Diffuse Settings Revert to Default

	Article: Q164158
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using OpenGL with Windows NT, the diffuse parameter changes back to the
	default when the color material changes from AMBIENT_AND_DIFFUSE to AMBIENT.
	
	CAUSE
	=====
	
	There is a problem in Windows NT with the above OpenGL command sequence where
	the diffuse material parameter is incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: glEnable glMaterial glColor3f GL_AMBIENT COLOR MATERIAL Emissive Specular
	
	======================================================================
	Keywords          : kbdisplay kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
