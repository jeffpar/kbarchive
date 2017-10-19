---
layout: page
title: "Q313364: OpenGL-Based Program Causes Access Violation in Windows NT"
permalink: /kb/313/Q313364/
---

## Q313364: OpenGL-Based Program Causes Access Violation in Windows NT

	Article: Q313364
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running an OpenGL-based program that is rendering an OpenGL scene
	that contains extremely long lines to a bitmap on your Windows NT-based
	computer, you may receive an access violation error message.
	
	CAUSE
	=====
	
	This problem can occur because the algorithm that is used to calculate the
	coordinates for the line is inaccurate for very long lines.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size     File name     
	  --------------------------------------------------------
	  02-Dec-2001  00:20  4.0.1381.7113  700,176  Opengl32.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about this problem and Microsoft Windows XP and
	Microsoft Windows 2000, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q312505 OpenGL-Based Program Causes Access Violation in Windows XP
	
	  Q313377 OpenGL-Based Program Causes Access Violation in Windows 2000
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
